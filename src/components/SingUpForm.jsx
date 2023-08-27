'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
// formik
import { useFormik } from 'formik'
import * as Yup from 'yup'
// components
import BaseInput from './common/BaseInput';
import BaseRadio from './common/BaseRadio';
import BaseSelect from './common/BaseSelect';
import BaseCheckBox from './common/BaseCheckBox';


const SingUpForm = () => {

    const [formValues, setFormValues] = useState(null)

    const checkboxOptions = [
        { label: 'react', value: 'react.js' },
        { label: 'Vue', value: 'Vue.js' },
    ]

    const radioOptions = [
        { label: 'Male', value: '0' },
        { label: 'Female', value: '1' }
    ]

    const selectOptions = [
        { label: 'Select Nationality', value: '' },
        { label: "Iran", value: 'IR' },
        { label: "Germany", value: 'Gr' },
        { label: "Italy", value: 'IT' },
    ]

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: '',
        gender: '',
        nationality: '',
        interest: [],
        terms: false
    }

    const onSubmit = (values) => {
        axios.post('http://localhost:4000/users', values).then(res => console.log(res.data)).catch(err => console.log(err))
    }

    const validationSchema = Yup.object({
        // schema for name
        name: Yup.string()
            .required('این فیلد الزامیست')
            .min(6, 'باید طولانی تر از 6 حرف باشد')
            .max(20, 'نباید بیش از 20 کاراکتر وارد کنید'),
        // schema for email
        email: Yup.string().email('ایمیل صحیح وارد نشده').required('این فیلد الزامیست'),
        // schema for phonenumber
        phoneNumber: Yup.string().required('این فیلد الزامیست')
            .matches(/^[0-9]{11}$/, 'شماره تلفن نامعتبر است'),
        // schema for pw
        password: Yup.string().required('این فیلد الزامیست'),
        passwordConfirm: Yup.string().required('این فیلد الزامی است').oneOf(
            [Yup.ref('password'), null], "پسورد مطابقت ندارد"
        ),
        gender: Yup.string().required('این فیلد الزامیست'),
        nationality: Yup.string().required('این فیلد الزامیست'),
        interest: Yup.array().min(1, 'حداقل یک گزینه را انتخاب کنید').required('این فیلد الزامیست'),
        terms: Yup.boolean().required('این فیلد باید پر شود').oneOf([true], 'باید قوانین را بپذیرید')
    })


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })


    useEffect(() => {
        axios.get('http://localhost:4000/users/1').then(res => setFormValues(res.data))
            .catch(err => console.log(err))

        return () => {
        }
    }, [])


    console.log(formik.values);



    return (
        <div>
            <form className="bg-gray-100 p-8 rounded-xl" onSubmit={formik.handleSubmit}>

                <BaseInput
                    formik={formik}
                    name="name"
                    label="Name" />

                <BaseInput
                    formik={formik}
                    name="email"
                    label="Email" />

                <BaseInput
                    formik={formik}
                    name="phoneNumber"
                    label="Phone Number" />

                <BaseInput
                    formik={formik}
                    name="password"
                    label="Password"
                    type="password" />

                <BaseInput
                    formik={formik}
                    name="passwordConfirm"
                    label="Confirm Password"
                    type="password" />

                <p className="font-extrabold mb-5">Gender</p>

                <div className="form-control grid grid-cols-2 gap-x-4">
                    <BaseRadio
                        radioOptions={radioOptions}
                        name="gender"
                        formik={formik}
                    />
                </div>

                <BaseSelect
                    selectOptions={selectOptions}
                    name="nationality"
                    formik={formik}
                />

                <BaseCheckBox
                    checkboxOptions={checkboxOptions}
                    name="interest"
                    formik={formik}
                />

                {/* terms */}
                <div className="form-control">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id='terms'
                            name='terms'
                            value={true}
                            onChange={formik.handleChange}
                            checked={formik.values.terms}
                            className="w-auto"
                        />
                        <label htmlFor='terms' className="ml-3">Terms</label>
                    </div>
                    {
                        formik.errors.terms && formik.touched.terms &&
                        <div className="text-red-500">
                            {formik.errors.terms}
                        </div>
                    }
                </div>

                <button
                    className="bg-violet-500 rounded-md text-white"
                    type='submit'
                    disabled={!formik.isValid}
                >Submit
                    </button>
            </form>
        </div >
    )
}

export default SingUpForm

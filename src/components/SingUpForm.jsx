'use client';
import axios from 'axios';
import { useFormik } from 'formik'
import BaseInput from './common/BaseInput';
import { useEffect, useState } from 'react';
import * as Yup from 'yup'
import BaseRadio from './common/BaseRadio';


const SingUpForm = () => {

    const [formValues, setFormValues] = useState(null)

    const radioOptions = [
        { label: 'Male', value: '0' },
        { label: "Female", value: '1' },
    ]

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: '',
        gender: ''
    }

    const onSubmit = (values) => console.log(values)

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
        gender: Yup.string().required('این فیلد الزامیست')
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



    return (
        <div>
            <form className="bg-gray-100 p-8 rounded-xl" onSubmit={formik.handleSubmit}>
                {/* name field */}
                <BaseInput formik={formik} name="name" label="Name" />
                {/* email field */}
                <BaseInput formik={formik} name="email" label="Email" />
                {/* phone number field */}
                <BaseInput formik={formik} name="phoneNumber" label="Phone Number" />
                {/* password field */}
                <BaseInput formik={formik} name="password" label="Password" type="password" />
                {/* password Confirm */}
                <BaseInput formik={formik} name="passwordConfirm" label="Confirm Password" type="password" />
                <p className="font-extrabold mb-5">Gender</p>
                <div className="form-control grid grid-cols-2 gap-x-4">
                    <BaseRadio radioOptions={radioOptions} formik={formik} name="gender" />
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

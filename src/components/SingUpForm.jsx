'use client';
import { useFormik } from 'formik'
import { useState } from 'react';
import * as Yup from 'yup'


const SingUpForm = () => {

    const [formValues, setFormValues] = useState(null)

    const savedData = {
        name: 'maziyar',
        email: 'ma@gmail.com',
        phoneNumber: '09161230000',
        password: '12345678',
        passwordConfirm: '12345678',
        gender: '0'
    }

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



    return (
        <div>
            <form className="bg-gray-100 p-8 rounded-xl" onSubmit={formik.handleSubmit}>
                {/* name field */}
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        {...formik.getFieldProps('name')}
                    />
                    {
                        formik.errors.name && formik.touched.name &&
                        <div className="text-red-500">
                            {formik.errors.name}
                        </div>
                    }
                </div>
                {/* email field */}
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id='email'
                        name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {
                        formik.errors.email && formik.touched.email &&
                        <div className="text-red-500">
                            {formik.errors.email}
                        </div>
                    }
                </div>
                {/* phone number field */}
                <div className="form-control">
                    <label htmlFor="phoneNumber">phone Number</label>
                    <input
                        type="text"
                        id='phoneNumber'
                        name="phoneNumber"
                        {...formik.getFieldProps('phoneNumber')}
                    />
                    {
                        formik.errors.phoneNumber && formik.touched.phoneNumber &&
                        <div className="text-red-500">
                            {formik.errors.phoneNumber}
                        </div>
                    }
                </div>
                {/* password field */}
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        id='password'
                        name="password"
                        {...formik.getFieldProps('password')}
                    />
                    {
                        formik.errors.password && formik.touched.password &&
                        <div className="text-red-500">
                            {formik.errors.password}
                        </div>
                    }
                </div>
                {/* password Confirm */}
                <div className="form-control">
                    <label htmlFor="password">password Confirm</label>
                    <input
                        type="text"
                        id='passwordConfirm'
                        name="passwordConfirm"
                        {...formik.getFieldProps('passwordConfirm')}
                    />
                    {
                        formik.errors.passwordConfirm && formik.touched.passwordConfirm &&
                        <div className="text-red-500">
                            {formik.errors.passwordConfirm}
                        </div>
                    }
                </div>
                <p className="font-extrabold mb-5">gender</p>
                <div className="form-control grid grid-cols-2 gap-x-4">
                    <div className=" flex items-center">
                        <input
                            type="radio"
                            id="0"
                            name="gender"
                            value="0"
                            onChange={formik.handleChange}
                            checked={formik.values.gender === '0'}
                        />
                        <label htmlFor="0" className="ml-3">Female</label>
                    </div>
                    <div className=" flex items-center" >
                        <input
                            type="radio"
                            id="1"
                            name="gender"
                            value="1"
                            onChange={formik.handleChange}
                            checked={formik.values.gender === '1'}
                        />
                        <label htmlFor="1" className="ml-3">Male</label>
                    </div>
                    {
                        formik.errors.gender &&
                        <div className="text-red-500">{formik.errors.gender}</div>
                    }
                </div>
                <button
                    className="bg-violet-500 rounded-md text-white"
                    type='submit'
                    disabled={!formik.isValid}
                >Submit
                    </button>
                <button
                    className="bg-violet-200 rounded-md text-white"
                    onClick={() => setFormValues(savedData)}
                >load
                    </button>
            </form>
        </div >
    )
}

export default SingUpForm

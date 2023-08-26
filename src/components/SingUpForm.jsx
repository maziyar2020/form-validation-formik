'use client';
import { useFormik } from 'formik'
import * as Yup from 'yup'


const SingUpForm = () => {

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: ''
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
        )
    })


    const formik = useFormik({
        initialValues,
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

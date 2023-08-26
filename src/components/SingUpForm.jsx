'use client';
import { useFormik } from 'formik'


const SingUpForm = () => {

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const onSubmit = (values) => console.log(values)

    const validate = (values) => {
        let errors = {}

        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.email) {
            errors.email = "email is Required"
        }
        if (!values.password) {
            errors.password = "password is required"
        }
        return errors
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })



    return (
        <div>
            <form className="bg-gray-100 p-8 rounded-xl" onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.name && formik.touched.name &&
                        <div className="text-red-500">
                            {formik.errors.name}
                        </div>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id='email'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.email && formik.touched.email &&
                        <div className="text-red-500">
                            {formik.errors.email}
                        </div>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        id='password'
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.errors.password && formik.touched.password &&
                        <div div className="text-red-500">
                            {formik.errors.password}
                        </div>
                    }
                </div>
                <button
                    className="bg-violet-500 rounded-md text-white"
                    type='submit'>Submit
                    </button>
            </form>
        </div >
    )
}

export default SingUpForm

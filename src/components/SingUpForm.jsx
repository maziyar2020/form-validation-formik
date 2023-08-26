'use client';
import { useFormik } from 'formik'


const SingUpForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        }
    })
    console.log(formik.values);
    const submitHandler = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <form className="bg-gray-100 p-8 rounded-xl" onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id='email'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        id='password'
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <button
                    className="bg-violet-500 rounded-md text-white"
                    type='submit'>Submit
                    </button>
            </form>
        </div>
    )
}

export default SingUpForm

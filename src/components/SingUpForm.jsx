'use client';
import { useState } from 'react'
import { useFormik } from 'formik'


const SingUpForm = () => {

    const [userData, SetUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const changeHandler = ({ target }) => {
        SetUserData({ ...userData, [target.name]: target.value })
    }

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
                        value={userData.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        id='email'
                        name="email"
                        value={userData.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        id='password'
                        name="password"
                        value={userData.password}
                        onChange={changeHandler}
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

import React from 'react'

const BaseInput = ({ label, name, formik, type = "text" }) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                {...formik.getFieldProps(name)}
            />
            {
                formik.errors[name] && formik.touched[name] &&
                <div className="text-red-500">
                    {formik.errors[name]}
                </div>
            }
        </div>
    )
}

export default BaseInput

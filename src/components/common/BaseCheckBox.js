import React from 'react'

const BaseCheckBox = ({ name, formik, checkboxOptions }) => {
    return (
        <div className="form-control grid grid-cols-2">
            {checkboxOptions.map(item => {
                return <div key={item.value}>
                    <div className="flex items-center" key={item.value}>
                        <input
                            type="checkbox"
                            id={item.value}
                            name={name}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values[name].includes(item.value)}
                            className="w-auto"
                        />
                        <label htmlFor={item.value} className="ml-3">{item.label}</label>
                    </div>
                    {
                        formik.errors[name] && formik.touched[name] &&
                        <div className="text-red-500">
                            {formik.errors[name]}
                        </div>
                    }
                </div>
            })}
        </div>
    )
}

export default BaseCheckBox

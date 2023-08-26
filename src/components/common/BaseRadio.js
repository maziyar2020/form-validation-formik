import React from 'react'

const BaseRadio = ({ label, name, formik, radioOptions }) => {
    return (
        <>
            {radioOptions.map(item => {
                return <div key={item.value}>
                    <div className="flex items-center" key={item.value}>
                        <input
                            type="radio"
                            id={item.value}
                            name={name}
                            value={item.value}
                            onChange={formik.handleChange}
                            checked={formik.values.gender === item.value}
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
        </>
    )
}

export default BaseRadio

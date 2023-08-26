import React from 'react'

const BaseSelect = ({ selectOptions, name, formik }) => {
    return (
        <div className="form-control">
            <select {...formik.getFieldProps(name)} name={name} >
                {selectOptions.map(item => {
                    return <option value={item.value} key={item.value}>{item.label}</option>
                })}
            </select>
            {
                formik.errors[name] && formik.touched[name] &&
                <div className="text-red-500">
                    {formik.errors[name]}
                </div>
            }
        </div>
    )
}

export default BaseSelect

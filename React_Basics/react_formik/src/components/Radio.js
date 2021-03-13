import React from 'react'
import { Field , ErrorMessage } from 'formik'
import TextError from './TextError'

function Radio(props) {
    
    const { label, name, options, ...rest } = props
    console.log('Inside Radio')
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} >
                {
                    ({field}) => {
                        return options.map(Option => {
                            return (
                                <React.Fragment key={Option.key}>
                                    <input 
                                        type='radio' 
                                        id={Option.value} 
                                        {...field} 
                                        value={Option.value} 
                                        checked={field.value === Option.value}
                                    />
                                    <label htmlFor={Option.value}>{Option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Radio

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: 'Christon Cardoza',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

const savedValues = {
    name: 'Christon Cardoza',
    email: 'c@example.com',
    channel: 'TheDeadMan',
    comments: 'Welcome to Hell',
    address: 'Hell Infinity, Lucifer Street',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values , onSubmitProps) => {
    console.log('Form data', values)
    console.log('onSubmitProps', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format!')
        .required('Required!'),
    channel: Yup.string().required('Required!')
})

const validateComment = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}

function YoutubeForm() {

    const [formValues, setFormValues] = useState(null)

    return (
        <Formik
            // initialValues={initialValues}
            initialValues={ formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            // validateOnMount= {true}
            enableReinitialize = {true}
        >
            {
                formik => {
                    console.log('Formik Props', formik)
                    return (
                        <Form>
                            <div className='form-control'>
                                <label htmlFor='name'>Name</label>
                                <Field
                                    type='text'
                                    id='name'
                                    name='name'
                                />
                                <ErrorMessage name='name' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='email'>E-mail</label>
                                <Field
                                    type='text'
                                    id='email'
                                    name='email'
                                />
                                <ErrorMessage name='email'>
                                    {
                                        errorMsg => <div className='error'>{errorMsg}</div>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className='form-control'>
                                <label htmlFor='channel'>Channel</label>
                                <Field
                                    type='text'
                                    id='channel'
                                    name='channel'
                                />
                                <ErrorMessage name='channel' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='comments'>Comments</label>
                                <Field
                                    as='textarea'
                                    id='comments'
                                    name='comments'
                                    validate={validateComment}
                                />
                                <ErrorMessage name='channel' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='address'>Address</label>
                                <FastField
                                    name='address'
                                >
                                    {
                                        props => {
                                            const { field, form, meta } = props
                                            {/* console.log('Render props', props) */ }
                                            return (
                                                <div>
                                                    <input type='text' id='address' {...field} />
                                                    {
                                                        meta.touched && meta.error ?
                                                            <div>{meta.error}</div> :
                                                            null
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                            </div>

                            <div className='form-control'>
                                <label htmlFor='facebook'>Facebook</label>
                                <Field
                                    type='text'
                                    id='facebook'
                                    name='social.facebook'
                                />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='twitter'>Twitter</label>
                                <Field
                                    type='text'
                                    id='twitter'
                                    name='social.twitter'
                                />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='primaryPh'>Primary Ph No</label>
                                <Field
                                    type='text'
                                    id='primaryPh'
                                    name='phoneNumbers[0]'
                                />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='secondaryPh'>Secondary Ph No</label>
                                <Field
                                    type='text'
                                    id='secondaryPh'
                                    name='phoneNumbers[1]'
                                />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='secondaryPh'>List of phone numbers</label>
                                <FieldArray name='phNumbers'>
                                    {
                                        (fieldArrayProps) => {
                                            {/* console.log('fieldArrayProps', fieldArrayProps) */ }
                                            const { push, remove, form } = fieldArrayProps
                                            const { values } = form
                                            const { phNumbers } = values
                                            console.log('form error', form.errors)
                                            return (
                                                <div>
                                                    {
                                                        phNumbers.map((phNumber, index) => (
                                                            <div key={index}>
                                                                <Field name={`phNumbers[${index}]`} />
                                                                {
                                                                    index > 0 && (
                                                                        <button type='button' onClick={() => remove(index)}> - </button>
                                                                    )
                                                                }

                                                                <button type='button' onClick={() => push('')}> + </button>
                                                            </div>
                                                        ))
                                                    }
                                                </div>)
                                        }
                                    }
                                </FieldArray>
                            </div>

                            <button type='button' onClick={() => formik.validateField('comments')}>Validate Comments</button>
                            <button type='button' onClick={() => formik.validateForm()}>validate All</button>
                            <button type='button' onClick={() => formik.setFieldTouched('comments')}>Visit Comments</button>
                            <button type='button' 
                                onClick={
                                    () => formik.setTouched({
                                        name: true,
                                        email: true,
                                        channel: true,
                                        comments: true
                                    })}
                            >
                                Visit Fields
                            </button>
                            {/* <button type='submit' disabled={!formik.isValid}>Submit</button> */}
                            {/* <button type='submit' disabled={!(formik.dirty && formik.isValid)}>Submit</button> */}
                            <button type='button' onClick= { () => setFormValues(savedValues)}>Load Saved Data</button>
                            <button type='reset'>Reset</button>
                            <button type='submit' disabled={ !formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default YoutubeForm

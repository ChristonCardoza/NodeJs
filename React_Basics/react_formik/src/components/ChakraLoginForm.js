import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function ChakraLoginForm() {
    
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('required')
    })

    const onSubmit = values => {
        console.log('Form Data', values)
    }
    return (
        <Formik
            initialValues = { initialValues }
            validationSchema = { validationSchema }
            onSubmit = {onSubmit} 
        >
            {
                formik => {
                    return (
                        <Form>

                            <FormikControl  
                                control='chakrainput'
                                type='email'
                                label='Email'
                                name='email'
                            />

                            <FormikControl  
                                control='chakrainput'
                                type='password'
                                label='Password'
                                name='password'
                            />

                            <button type='submit' disabled={!formik.isValid}>Submit</button>

                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default ChakraLoginForm

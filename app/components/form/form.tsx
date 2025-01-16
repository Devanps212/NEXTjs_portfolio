'use client'
import React from 'react';
import emailjs from 'emailjs-com'
import { Rings } from 'react-loader-spinner';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '@/app/types';
import { toast } from 'react-toastify';

const Form = ({ inputs }: { inputs: string[] }) => {

  const validationSchema: Yup.Schema<FormValues> = Yup.object({
    email: Yup.string().email('Please provide a valid email').required('Email is required'),
    message: Yup.string().required('Please provide a message to send'),
  });

  const initialValues = inputs.reduce((acc, curr) => {
    acc[curr.toLowerCase()] = ""
    return acc
  }, {} as Record<string, string>)

  const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_API_SERVICE!
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!
  const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_KEY!

  const handleSubmit = (
    values: Record<string, string>, 
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void;resetForm: () => void }
  ) => {
  
    const message: Record<string, string> = {
      from_name: values.email.includes('@') ? values.email.slice(0, values.email.indexOf('@')) : "",
      email: values.email,
      message: values.message
    }
  
    emailjs.send(serviceId, templateId, message, publicKey)
      .then((response: { status:number, text: string }) => {
        setSubmitting(false)
        if(response.status === 200)toast.success("Email submitted sucessfully")
        resetForm()
      })
      .catch((error: Error) => {
        toast.error(error.message)
        setSubmitting(false)
        alert("Submission failed. Please try again.")
      })
  }
  

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <FormikForm className="space-y-6">
          {inputs.map((field, index) => (
            field === 'Message' ? (
              <div className="flex flex-col space-y-2" key={index}>
                <label htmlFor={field.toLowerCase()} className="font-medium text-gray-700">
                  {field}
                </label>
                <Field
                  as="textarea"
                  id={field.toLowerCase()}
                  name={field.toLowerCase()}
                  rows={5}
                  placeholder={`Enter your ${field.toLowerCase()}`}
                  className="px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name={field.toLowerCase()}>
                  {(msg) => <div className="text-red-600 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
            ) : (
              <div className="flex flex-col space-y-2" key={index}>
                <label htmlFor={field.toLowerCase()} className="font-medium text-gray-700">
                  {field}
                </label>
                <Field
                  type="text"
                  id={field.toLowerCase()}
                  name={field.toLowerCase()}
                  placeholder={`Enter your ${field.toLowerCase()}`}
                  className="px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name={field.toLowerCase()}>
                  {(msg) => <div className="text-red-600 text-sm">{msg}</div>}
                </ErrorMessage>
              </div>
            )
          ))}
          <div className="flex justify-center relative">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-1"
            >
              Submit
              {
                isSubmitting &&
                (
                  <div className='absolute flex justify-center rounded-xl'>
                    <Rings
                      visible={true}
                      height={70}
                      width={70}
                      color="#4caf50"
                      ariaLabel="rings-loading"
                      wrapperStyle={{}}
                      wrapperClass=""/>
                  </div>  
                )
              }
            </button>
          </div>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form

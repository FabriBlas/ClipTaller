import React from 'react';
/* CSS */
import "./Home.css";
/*import Formik component*/ 
import { Formik } from 'formik';

/* Subscribe View */
export default function Natural() {
    return (
// parent container
<div className="container subscribe">
{/* title container */}
<div className="row">
    <div className="title-subscribe">
   <h1>Subscribe to get the latest news</h1>
   </div>
   {/* form container using formik component */}
   <div className="form-subscribe">
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = '';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = '';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          
        }) => (
          <form onSubmit={handleSubmit}>
            <input
            className="input-subscribe"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <button  className="button-subscribe" type="submit" disabled={isSubmitting}>
              Subscribe Now
            </button>
          </form>
        )}
      </Formik>
      </div>
      </div>
    </div>
  );
  
}
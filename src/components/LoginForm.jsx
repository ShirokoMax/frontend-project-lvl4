import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

const usernameSchema = yup.string().required();
const passwordSchema = yup.string().required();

const LoginForm = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
        ) {
          errors.username = 'Invalid username address';
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              placeholder="Ваш ник"
            />
            <label htmlFor="username">Ваш ник</label>
          </div>

          {/* {errors.username && touched.username && errors.username} */}

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Пароль"
          />

          {errors.password && touched.password && errors.password}

          <button type="submit" disabled={isSubmitting}>
            Войти
          </button>
        </form>
      )}
    </Formik>
    <nav>
    <Link to="/">GO HOME!!!</Link>
    </nav>
  </div>
);

export default LoginForm;

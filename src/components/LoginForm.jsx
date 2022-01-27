import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

const LoginForm = () => (
  <div className="col-12 col-md-8 col-xxl-6">
    <div className="card shadow-sm">
      <div className="card-body row p-5">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img src="https://via.placeholder.com/200x200" className="rounded-circle" alt="Войти"></img>
        </div>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // code this logic later
            console.log(values);
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
            <form onSubmit={handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
              <h1 className="text-center mb-4">Войти</h1>

              <div className="form-floating mb-3 form-group">
                <input
                  id="username"
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Ваш ник"
                />
                <label htmlFor="username" className="form-label">Ваш ник</label>
              </div>

              {errors.username && touched.username ? ( // переписать обработку ошибок
                <div>{errors.username}</div>
              ) : null}

              <div className="form-floating mb-4 form-group">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Пароль"
                />
                <label htmlFor="password" className="form-label">Пароль</label>
              </div>

              {errors.password && touched.password ? ( // переписать обработку ошибок
                <div>{errors.password}</div>
              ) : null}

              <button type="submit" className="w-100 mb-3 btn btn-outline-primary" disabled={isSubmitting}>
                Войти
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

export default LoginForm;

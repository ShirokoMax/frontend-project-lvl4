import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

const LoginForm = () => {
  const navigate = useNavigate();

  return (
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
              axios.post('/api/v1/login', {
                username: values.username,
                password: values.password,
              })
                .then((response) => {
                  console.log(response);
                  localStorage.setItem('user', JSON.stringify(response.data));
                  navigate('/');
                })
                .catch((error) => {
                  // Прикрутить обработку Ошибки 401 и других кодов
                  console.log(error);
                  setSubmitting(false);
                });

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
};

export default LoginForm;

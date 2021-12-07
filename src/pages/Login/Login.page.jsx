import './Login.page.scss'
import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router';

export default function Login(props) {
    
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const validaciones = Yup.object().shape({
        usuario: Yup.string()
            .required('Por favor, escribe tu usuario.')
            .min(3, 'Mínimos 3 carácteres.'),
        password: Yup.string()
            .required('Por favor, escribe una contraseña')
            .min(5, 'Mínimos 5 carácteres.'),

    });
    let initialValues = { usuario: '', password: '' };

    let createUser = () => {
        return <Redirect to="/signIn" />;
    }

    let login = (event) => {
        let usuario = this.state.loginParams.usuario;
        let password = this.state.loginParams.password;
        if (usuario === "admin" && password === "123") {
          localStorage.setItem("token", "T");
          this.setState({
            isLogged: true
          });
        }
        event.preventDefault();
    }

    return (
        <Formik
            validationSchema={validaciones}
            initialValues={initialValues}
            onSubmit={login}>
            {({ values, touched, errors }) => (
                <Form className="formulario-logIn">
                    <strong className="titleForm">Iniciar Sesión</strong>

                    <div className={[touched.usuario && errors.usuario && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu usuario..." name="usuario" value={values.usuario} />
                        {touched.usuario && errors.usuario && <div className="errorText">{errors.usuario}</div>}
                    </div>
                    <div className={[touched.password && errors.password && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu password..." name="password" value={values.password} />
                        {touched.password && errors.password && <div className="errorText">{errors.password}</div>}
                    </div>
                    <button className="nuevo">Iniciar Sesión</button>
                    <button className="iniciarSesion" onClick={createUser}>¿Ya estás registrado? Iniciar sesión</button>
                </Form>
            )}
        </Formik>
    );
}
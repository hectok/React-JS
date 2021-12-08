import './Signin.page.scss'
import React from 'react';
import { useDispatch } from 'react-redux';
import { iniciarSesion } from '../../redux/actions/sesion.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router';
import  { useHistory  } from 'react-router-dom';

export default function Login(props) {

    const validaciones = Yup.object().shape({
        usuario: Yup.string()
            .required('Por favor, escribe tu usuario.')
            .min(3, 'Mínimos 3 carácteres.'),
        password: Yup.string()
            .required('Por favor, escribe una contraseña')
            .min(5, 'Mínimos 5 carácteres.'),

    });
    const dispatch = useDispatch();
    const history = useHistory();
    let initialValues = { usuario: '', password: '' };

    let createUser = () => {
        return <Redirect to="/login" />;
    }

    let signIn = (event) => {
        let retrievedObject = JSON.parse(localStorage.getItem('usuario_'+event.usuario));

        if (retrievedObject) {
            if(event.usuario === retrievedObject.usuario && event.password === retrievedObject.password){
                dispatch(iniciarSesion({}));
                let path = `store`; 
                history.push(path);
            }
        }
        event.preventDefault();
    }

    return (
        <Formik
            validationSchema={validaciones}
            initialValues={initialValues}
            onSubmit={signIn}>
            {({ values, touched, errors }) => (
                <Form className="formulario-logIn">
                    <strong className="titleForm">Iniciar sesión</strong>

                    <div className={[touched.usuario && errors.usuario && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu usuario..." name="usuario" value={values.usuario} />
                        {touched.usuario && errors.usuario && <div className="errorText">{errors.usuario}</div>}
                    </div>
                    <div className={[touched.password && errors.password && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu password..." name="password" value={values.password} />
                        {touched.password && errors.password && <div className="errorText">{errors.password}</div>}
                    </div>
                    <button className="nuevo">Iniciar Sesión</button>
                    <button className="iniciarSesion" onClick={createUser}>¿Aún no estás registrado? Crea tu usuario</button>
                </Form>
            )}
        </Formik>
    );
}
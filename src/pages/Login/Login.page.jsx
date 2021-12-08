import './Login.page.scss'
import React from 'react';
import { useDispatch } from 'react-redux';
import { iniciarSesion } from '../../redux/actions/sesion.js';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
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
    let userAlreadyExist = false;
    let initialValues = { usuario: '', password: '' };

    let createUser = () => {
        let path = `singin`; 
        history.push(path);
    }

    let login = (event) => {
        let retrievedObject = localStorage.getItem('usuario_'+event.usuario);
        if(retrievedObject){
            userAlreadyExist = true;
        }else{
            if (event.usuario && event.password) {
                let localStorageUser = { usuario: event.usuario, password: event.password }
                localStorage.setItem("usuario_"+event.usuario, JSON.stringify(localStorageUser));
                dispatch(iniciarSesion({}));
                let path = `store`; 
                history.push(path);
            }
        }
    }

    return (
        <>
        <Formik
            validationSchema={validaciones}
            initialValues={initialValues}
            onSubmit={login}>
            {({ values, touched, errors }) => (
                <Form className="formulario-logIn">
                    <strong className="titleForm">Crea tu usuario</strong>

                    <div className={[touched.usuario && errors.usuario && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu usuario..." name="usuario" value={values.usuario} />
                        {touched.usuario && errors.usuario && <div className="errorText">{errors.usuario}</div>}
                    </div>
                    <div className={[touched.password && errors.password && "errorInput", "inputContainer"].join(' ')}>
                        <Field className="elemento" placeholder="Introduce tu password..." name="password" value={values.password} />
                        {touched.password && errors.password && <div className="errorText">{errors.password}</div>}
                    </div>
                    <button className="nuevo">Crear un usuario</button>
                    <button type="button" className="iniciarSesion" onClick={createUser}>¿Ya estás registrado? Iniciar sesión</button>
                </Form>
            )}
        </Formik>
        {userAlreadyExist && <div>Lo sentimos, ese usuario ya está cogido</div>}
        </>
    );
}
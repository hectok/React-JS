import './Login.page.scss'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import SessionContext from '../../redux/reducers/sesion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Login(props) {

    const validaciones = Yup.object().shape({
        usuario: Yup.string()
            .required('Por favor, escribe tu usuario.')
            .email('El email es incorrecto')
            .min(3, 'Mínimos 3 carácteres.'),
        password: Yup.string()
            .required('Por favor, escribe una contraseña')
            .min(5, 'Mínimos 5 carácteres.'),

    });
    const { setSession } = useContext(SessionContext);
    const history = useHistory();
    let initialValues = { usuario: '', password: '' };
    let createUser = () => {
        let path = `singin`;
        history.push(path);
    }

    let login = (event) => {
        let retrievedObject = localStorage.getItem('usuario_' + event.usuario);
        if (!retrievedObject) {
            if (event.usuario && event.password) {
                let localStorageUser = { usuario: event.usuario, password: event.password }
                localStorage.setItem("usuario_" + event.usuario, JSON.stringify(localStorageUser));
                setSession(true);
                let path = `store`;
                history.push(path);
            }
        }
    }

    return (
        <>
            <div className="form-bg">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <h3 className="title">Crea tu usuario</h3>
                                <Formik
                                    validationSchema={validaciones}
                                    initialValues={initialValues}
                                    onSubmit={login}>
                                    {({ values, touched, errors }) => (
                                        <Form className="form-horizontal">
                                            <div className="form-icon">
                                                <FontAwesomeIcon icon={faUserCircle} />
                                            </div>
                                            <div className={[touched.usuario && errors.usuario && "errorInput", "form-group"].join(' ')}>
                                            <FontAwesomeIcon icon={faUser} />
                                                <Field className="form-control" placeholder="Introduce tu email..." name="usuario" value={values.usuario} />
                                            </div>
                                            <div className={[touched.password && errors.password && "errorInput", "form-group"].join(' ')}>

                                                <Field className="form-control" placeholder="Introduce tu password..." name="password" value={values.password} />
                                                <span className="forgot" onClick={createUser}>Iniciar sesión</span>

                                            </div>
                                            <button type="submit" className="btn signin">Crear usuario</button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
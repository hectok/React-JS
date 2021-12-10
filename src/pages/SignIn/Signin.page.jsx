import './Signin.page.scss'
import React from 'react';
import { useContext } from 'react';
import SessionContext from '../../redux/reducers/sesion';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
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
        let path = `login`;
        history.push(path);
    }

    let signIn = (event) => {
        let retrievedObject = JSON.parse(localStorage.getItem('usuario_' + event.usuario));

        if (retrievedObject) {
            if (event.usuario === retrievedObject.usuario && event.password === retrievedObject.password) {
                setSession(true);
                let path = `store`;
                history.push(path);
            }
        }
        event.preventDefault();
    }

    return (
        <>
            <div className="form-bg">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div className="form-container">
                                <h3 className="title">Iniciar Sesión</h3>
                                <Formik
                                    validationSchema={validaciones}
                                    initialValues={initialValues}
                                    onSubmit={signIn}>
                                    {({ values, touched, errors }) => (
                                        <Form className="form-horizontal">
                                            <div className="form-icon">
                                                <FontAwesomeIcon icon={faUserCircle} />
                                            </div>

                                            <div className={[touched.usuario && errors.usuario && "errorInput", "form-group"].join(' ')}>
                                                <Field className="form-control" placeholder="Introduce tu email..." name="usuario" value={values.usuario} />
                                            </div>
                                            <div className={[touched.password && errors.password && "errorInput", "form-group"].join(' ')}>
                                                <Field className="form-control" placeholder="Introduce tu password..." name="password" value={values.password} />
                                                <span type="button" className="forgot" onClick={createUser}>Crea tu usuario</span>
                                            </div>
                                            <button type="submit" className="btn signin">Iniciar Sesión</button>
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
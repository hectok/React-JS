import './MensajesHeader.scss'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function MensajesHeader(props) {
  const validaciones = Yup.object().shape({
    nombre: Yup.string()
      .required('Por favor, escribe tu nombre.')
      .min(3, 'Mínimos 3 carácteres.'),
    email: Yup.string()
      .required('Por favor, escribe un correo correcto')
      .email('El email es incorrecto'),
    descripcion: Yup.string()
      .required('Por favor, escribe un mensaje.')
      .min(10, 'Mínimos 10 carácteres.')
      .max(255, 'Máximos 255 carácteres.'),

  });
  let initialValues = { nombre: '', email: '', descripcion: ''};
  let clickNuevo = (values, { setSubmitting }) => {
    return props.clickNuevo({nombre:values.nombre,email:values.email, descripcion:values.descripcion });
  }
  return (
    <Formik 
      validationSchema={validaciones} 
      initialValues={initialValues} 
      onSubmit={clickNuevo}>
      {({ values, touched , errors }) => (
        <Form className="Formulario">
          <strong>Mi formulario</strong>

          <div className={[touched.nombre && errors.nombre && "errorInput","inputContainer"].join(' ')}>
            <Field className="elemento" placeholder="Introduce tu nombre..." name="nombre"  value={values.nombre}/>
            {touched.nombre && errors.nombre && <div className="errorText">{errors.nombre}</div>}
          </div>
          <div className={[touched.email && errors.email && "errorInput","inputContainer"].join(' ')}>
            <Field className="elemento" placeholder="Introduce tu email..." name="email" value={values.email} />
            {touched.email && errors.email && <div className="errorText">{errors.email}</div>}
          </div>
          <div className={[touched.descripcion && errors.descripcion && "errorInput","inputContainer"].join(' ')}>
            <Field className="elemento" placeholder="Introduce tu descripción..." name="descripcion" value={values.descripcion} />
            {touched.descripcion && errors.descripcion && <div className="errorText">{errors.descripcion}</div>}
          </div>
          <button className="nuevo" type="submit">Nuevo</button>
          <button className="vaciar" type="reset">Vaciar</button>
        </Form>
      )}
    </Formik>
  );
}
import React from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    name:Yup.string().required('El nombre es obligatorio'),
    email:Yup.string().email('Email invalido').required('Email obligatorio'),
    password:Yup.string().min(6,'La contraseña debe tener minimo 6').required('La contraseña es obligatoria')
});


const Formulario = () => {

    const handleSubmit = (values,{setSubmitting})=>{
        console.log(values);
        setSubmitting(false);
    };

    return (
        <Formik
        initialValues={{name:'',email:'',password:''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor='name'>Nombre:</label>
                    <Field type='text' id='name' name='name'/>
                    <ErrorMessage name='name' component='div' className='error' />
                </div>
                <div>
                    <label htmlFor='email'>Correo Electronico:</label>
                    <Field type='text' id='email' name='email'/>
                    <ErrorMessage name='email' component='div' className='error' />
                </div>
                <div>
                    <label htmlFor='password'>Contraseña:</label>
                    <Field type='password' id='password' name='password'/>
                    <ErrorMessage name='password' component='div' className='error' />
                </div>

                <button type='submit'>Enviar</button>
            </Form>
        </Formik>
    );
}

export default Formik;

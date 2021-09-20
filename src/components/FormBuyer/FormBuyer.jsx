import React from 'react'
// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
// Firebase
import { db } from '../../firebase'
import { addDoc, setDoc, serverTimestamp, collection } from "firebase/firestore";
// CartContext
import { useCartContext } from '../../context/CartContext';
// Styles
import './FormBuyer.css'


const FormBuyer = () => {

    const { cart, totalPrice } = useCartContext()

    const newBuyer = async (name, phone, mail) => {
        await addDoc(collection(db, 'buyers'), {
            buyer: {
                name: name,
                phone: phone,
                mail: mail
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice()
        })
    }

    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    mail: ''
                }}

                validate={(values) => {
                    let err = {}

                    // Validacion nombre
                    if(!values.name){
                        err.name = 'Por favor ingresa un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                        err.name = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion Telefono
                    if(!values.phone){
                        err.phone ='Por favor ingresa un telefono'
                    } else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
                    .test(values.phone)){
						err.phone = 'El formato de telefono ingresado es incorrecto.'
					}

                    // Validacion correo
                    if(!values.mail){
                        err.mail = 'Por favor ingresa un correo electronico'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
						err.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    return err
                }}

                onSubmit={(values, {resetForm}) => {
                    console.log(values)
                    newBuyer(values.name, values.phone, values.mail)
                    resetForm()
                }}
            >
                {( {values, handleChange, handleBlur, errors, touched} ) => (
                    <Form className="formulario">
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field 
                                type="text" 
                                id='name' 
                                name='name' 
                                placeholder='Ingrese su nombre completo..' 
                            />
                            <ErrorMessage name='name'  component={() => (
                                <div className='error'> {errors.name} </div>
                            )} />
                        </div>
                        <div>
                            <label htmlFor="phone">Telefono</label>
                            <Field 
                                type="tel" 
                                id='phone' 
                                name='phone' 
                                placeholder='+54 9 11 4478 7002' 
                            />
                            <ErrorMessage name='phone'  component={() => (
                                <div className='error'> {errors.phone} </div>
                            )} />
                        </div>
                        <div>
                            <label htmlFor="mail">Correo</label>
                            <Field 
                                type="email" 
                                id='mail' 
                                name='mail' 
                                placeholder='mail@mail.com' 
                            />
                            <ErrorMessage name='mail'  component={() => (
                                <div className='error'> {errors.mail} </div>
                            )} />
                        </div>
                    <button type='submit'>Realizar Compra</button>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormBuyer

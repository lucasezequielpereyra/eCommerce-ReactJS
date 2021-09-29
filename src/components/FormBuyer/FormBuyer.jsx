import React from 'react'
// React Router
import { Link } from 'react-router-dom'
// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
// CartContext
import { useCartContext } from "../../context/CartContext"
// AUTH0
import { useAuth0 } from "@auth0/auth0-react"
// Styles
import './FormBuyer.css'

const FormBuyer = () => {

    const { newOrder, lastOrder, cart, updateItemStock, cleanCart } = useCartContext()
    const { isAuthenticated, user } = useAuth0()

    const isLogin = () =>{
        return <button type='submit'>Realizar Compra</button>
    }

    const isLogOut = () =>{
        return (
            <Link to='login'>
                <button>INGRESAR PARA CONTINUAR</button>
            </Link>
        )
    }

    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    mail: '',
                    mailVerif: ''
                }}

                validate={(values) => {
                    let err = {}

                    // Validacion nombre
                    if (!values.name) {
                        err.name = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        err.name = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion Telefono
                    if (!values.phone) {
                        err.phone = 'Por favor ingresa un telefono'
                    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
                        .test(values.phone)) {
                        err.phone = 'El formato de telefono ingresado es incorrecto.'
                    }

                    // Validacion correo
                    if (!values.mail) {
                        err.mail = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)) {
                        err.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    // Validacion verifcorreo
                    if (!values.mailVerif) {
                        err.mailVerif = 'Por favor repite el correo electronico'
                    } else if (values.mailVerif !== values.mail) {
                        err.mailVerif = 'Los correo electronicos deben coincidir'
                    }

                    return err
                }}

                onSubmit={(values, { resetForm }) => {
                    newOrder(values.name, values.phone, values.mail, user.sub)
                    cart.map((prd) => {
                        return updateItemStock(prd.id, prd.stock - prd.quantity)
                    })
                    lastOrder()

                    cleanCart()
                }}
            >
                {({ errors }) => (
                    <Form className="formulario">
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Ingrese su nombre completo..'
                            />
                            <ErrorMessage name='name' component={() => (
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
                            <ErrorMessage name='phone' component={() => (
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
                            <ErrorMessage name='mail' component={() => (
                                <div className='error'> {errors.mail} </div>
                            )} />
                        </div>
                        <div>
                            <label htmlFor="mailVerif">Repetir Correo</label>
                            <Field
                                type="email"
                                id='mailVerif'
                                name='mailVerif'
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='mailVerif' component={() => (
                                <div className='error'> {errors.mailVerif} </div>
                            )} />
                        </div>.
                        {
                            isAuthenticated ?  isLogin() : isLogOut()
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormBuyer

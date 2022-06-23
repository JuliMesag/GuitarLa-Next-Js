import { useState, useEffect } from 'react'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])
    // console.log(carrito)
    // const [productos, setProductos] = useState([])

    return (
        <Layout pagina={'Carrito de Compras'}>
            <h1 className='heading'>Carrito</h1>
            <main className={`${styles.contenido} 'contenedor'`}>
                <div className={styles.carrito}>
                    <h2>Artículos:</h2>
                    {carrito.length === 0 ? 'Carrito Vacio...' : (
                        carrito.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image layout='responsive' width={300} height={600} src={producto.imagen} alt={producto.nombre} />
                                </div>

                                <div>
                                    <p className={styles.nombre} >{producto.nombre}</p>

                                    <div className={styles.cantidad} >
                                        <p>Cantidad:</p>
                                        <select value={producto.cantidad} className={styles.select} onChange={(e) => actualizarCantidad({
                                            cantidad: e.target.value,
                                            id: producto.id
                                            })}>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                        </select>
                                    </div>

                                    <p className={styles.precio} >$<span>{producto.precio}</span></p>
                                    <p className={styles.subtotal} >Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                                </div>

                                <button className={styles.eliminar} type='button ' onClick={() => eliminarProducto(producto.id)}>
                                    x
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    <h3>Resumen del Pedido</h3>

                    {total > 0 ? (
                        <>
                            <p>Resumen del Pedido</p>
                            <p>{`Total a pagar : $ ${total}`}</p>
                        </>
                    ): (<p>No hay productos en el carrito</p>)}
                </div>
            </main>
        </Layout>
    )
}

export default Carrito

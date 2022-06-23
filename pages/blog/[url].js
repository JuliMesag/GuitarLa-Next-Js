import React from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers/index'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({ entrada }) => {
    const { contenido, imagen, published_at, titulo } = entrada

    return (
        <Layout pagina={titulo}>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>


                <div className={styles.contenido}>
                    <article className={styles.entrada}>
                        <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />
                    </article>

                    <p className={styles.fecha}> {formatearFecha(published_at)}</p>

                    <p className={styles.texto}>{contenido}</p>
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.map(entrada => ({
        params: { url: entrada.url }
    }))

    return {
        paths,
        fallback: false //poner true cuando el proyecto es grande y tiene más entradas
    }
}

export async function getStaticProps({ params: { url } }) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    return {
        props: {
            entrada: entrada[0]
        }
    }
}

// export async function getServerSideProps({ query: { id } }) {
//     const url = `${process.env.API_URL}/blogs/${id}`
//     console.log('url')

//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()

//     console.log(entrada)

//     return {
//         props: {
//             entrada
//         }
//     }

// }

export default EntradaBlog

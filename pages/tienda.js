import React from 'react'
import Layout from '../components/Layout'
import Listado from '../components/Listado'

const tienda = ({guitarras}) => {

  return (
    <Layout pagina='Tienda Virtual'>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado 
          guitarras={guitarras}
        />

      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc` // ?_sort=created_at:desc (sirve para filtrar el contenido de manera descendente)
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

export default tienda
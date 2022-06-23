import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
      <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>

          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen sobre nosotros' />

            <div>
              <p>Duis eleifend sed urna ut ultricies. 
                Integer orci sapien, vulputate eget arcu nec, 
                mollis tristique dui. Donec tristique consequat 
                aliquet. Acilisis justo quis turpis 
                elementum euismod. Donec ac efficitur nunc. Nulla 
                pharetra arcu non ex ultrices, nec imperdiet diam 
                porttitor. Mauris euismod risus id nulla condimentum 
                semper. Mauris justo diam, tincidunt eget lorem non, 
                placerat sodales velit. Nullam eu porttitor turpis, in 
                consequat sem. Pellentesque scelerisque ipsum nec lectus 
                dapibus pulvinar. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.</p>
            </div>
          </div>
      </main>
    </Layout>
  )
}

export default nosotros
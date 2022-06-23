import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {


  return (
    <Layout pagina='Inicio' guitarra={guitarras[0]}>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <Listado 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso}
      />

      <section className='contenedor'> 
        <ListadoBlog 
          entradas={entradas}
        />
      </section>
      

    </Layout>

  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlEntradas = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resEntradas ] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlEntradas)
  ])
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resEntradas.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}

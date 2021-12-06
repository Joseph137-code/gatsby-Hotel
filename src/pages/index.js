import React from "react"
import Layout from "../components/layout";
import ImagenHotel from "../components/imagenHotel";
import ContenidoInicio from "../components/contenidoInicio";
import useHabitacion from "../hooks/use-Habitacion";
import HabitacionPreview from "../components/HabitacionPreview";
import {css} from '@emotion/react'




const IndexPage = () => {
  const habitaciones = useHabitacion();
  console.log(habitaciones)

  return (

    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        ` }

      >Nuestras Habitaciones</h2>

      <ul
        css={css`
        max-width: 1200px;
        width: 95%;
        margin: 4rem auto 0 auto;
        @media (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 3rem
        }
        ` }

      >
        {habitaciones.map(habitacion => (
          <HabitacionPreview
            key={habitacion.id}
            habitacion={habitacion}
          />
        ))}
      </ul>
    </Layout>

  )
}

export default IndexPage

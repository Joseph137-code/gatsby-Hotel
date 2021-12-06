import React from 'react';
import {graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import {css} from '@emotion/react'

const ContenidoNosotros = () => {
    const resultados = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
              nodes {
              titulo
              contenido
              imagen {
                fluid {
                   ...GatsbyDatoCmsFluid
                }
              }
            }
        }
      }
    `);
    const { titulo, contenido, imagen } = resultados.allDatoCmsPagina.nodes[0];
    return ( 
        <>
        <h2
            css={css`
            margin-top: 3rem;
            text-align: center;
            font-size: 3rem;
      ` }
        
        >{titulo}</h2>
        <div
            css={css`
            padding-top: 4rem;
            max-width: 1200px;
            width: 95%;
            margin: 0 auto;
            @media (min-width: 768px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap: 3rem;
            }
            p {
                line-height: 2;
                margin-top: 2rem;
            }
        ` }
        
        >
            <p>{contenido}</p>
            <Image fluid={imagen.fluid} />
        </div>
        </>
     );
}
 
export default ContenidoNosotros;
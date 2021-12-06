import React from 'react';
import {graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import {  css} from '@emotion/react'


const ContenidoInicio = () => {
    const informacion = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
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

    //console.log(informacion.allDatoCmsPagina.nodes[0]);
    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];
    return (
        <>
            <h2 css={{
                    paddingTop: '4rem',
                    maxWidth: '1200px',
                    width: '95%',
                    margin: '0 auto',
                }}
                
            >{titulo}</h2>
            <div 
                css={css`
                    padding-top: 4rem;
                    max-width: 1200px;
                    width: 95%;
                    margin: 0 auto;
                
                    @media (min-width: 768px) {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr) ;
                        column-gap: 3rem;
                    }
              ` }
            >
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </div>
        </>
    );
}
 
export default ContenidoInicio;

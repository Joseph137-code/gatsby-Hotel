import React from 'react';
import {graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { css } from '@emotion/react'




const ImagenHotel = () => {

    const {image} = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq:"1.jpg"} ){
          sharp: childImageSharp {
            fluid {
              srcSetWebp
            }
          }
        }
      }
    `)
    return ( 
        <BackgroundImage css={{height: '700px'}} tag="section"  >
        <div
          css={css`
            background-image: linear-gradient( to top, rgba(34,49,63,.8),rgba(34,49,63,.8)  );
            color: #FFF;
            height: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;
            justify-content: center;
           
         `}
        >
            <h1>Bienvenido al Hotel</h1>
            <p>El Mejor hotel para tus Vacaciones</p>
          </div>
        </BackgroundImage>
       
     );
}
 
export default ImagenHotel;


import React from 'react';
import {css} from '@emotion/react'
import Image from "gatsby-image";
import {Link} from "gatsby";

const HabitacionPreview = ({habitacion}) => {
    const { contenido, imagen, titulo, slug } = habitacion;
    return (
        <div
            css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
        ` }
        >
            <Image fluid={imagen.fluid} />
            <div
                css={css`
                    padding: 2rem;
        `       }
            >
                <h3
                    css={css`
                        text-align: center;
                        font-size: 2rem;
            `       }
                >{titulo}</h3>
                <p>{contenido}</p>
                <Link to={slug}><button type="button" className="btn btn-info btn-sm">Ver Habitación</button></Link>
                
            </div>
        </div>
    );
}
 
export default HabitacionPreview;

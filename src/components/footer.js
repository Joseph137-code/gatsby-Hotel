import React from "react"
import { Link } from "gatsby";
import { css } from '@emotion/react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark"
                css={css`
                    align-items:center;
                    margin-top: 4rem;
                `}
            >
                <Link to={"/"}><a className="navbar-text" href="/" >Hotel Gatsby</a></Link>
            </div>
            <p
                css={css`
                    text-align: center;
                    color: #fff;
                    background-color: rgb(33,44,55);
                    margin: 0;
                    padding: 1rem;
                `}
            >
                Todos los derechos Reservados {year} &copy;
            </p>
          
        </>
    );
}

export default Footer;
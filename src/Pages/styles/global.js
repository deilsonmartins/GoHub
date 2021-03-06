/* Arquivo com estilização global */

import {createGlobalStyle} from 'styled-components'; /*Biblioteca para gerenciar estilos */

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }

    html, body, #root {
        min-height: 100%
    }

    body {
        background: #1E90FF;
        -webkit-font-smmothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif
    }

    button {
        cursor: pointer;
    }



`;
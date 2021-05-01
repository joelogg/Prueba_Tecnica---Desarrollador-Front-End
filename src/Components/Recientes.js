import React, { Component } from 'react';
import InfoCancionSelect from './partes/InfoCancionSelect';
import '../asserts/css/listaCanciones.css'
import Cancion from './partes/Cancion';
import Reproductor from './partes/Reproductor';
import BarraBuscar from "./partes/BarraBuscar";

import axios from 'axios';
import { urlServidor } from './extras/variables';


export default class Recientes extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            lista_canciones: [
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
                { titulo: "21", artista: "Adele", img: "https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" },
                { titulo: "Who You Are", artista: "Jessie J", img: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/7/a/c/8/23011.jpg" },
            ],
        };
    }

    buscarCanciones = () => {
        console.log("Entro");
        /*axios.get(urlServidor + 'search?q=eminem').then((response) => {

            console.log(response);
        })
        .catch((error) => {
            console.log("Error al buscar cancione");
        });*/
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://api.deezer.com/search?q=eminem',
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    render() {
        return (
            <div>
                <BarraBuscar buscarCanciones={this.buscarCanciones} />
                {/*this.state.lista_canciones.length > 0 &&*/
                    <InfoCancionSelect />

                }
                <div className="tit_ListaCanciones">Resultados</div>
                <div className="listaCanciones">
                    {
                        this.state.lista_canciones.map((cancion, index) => {
                            return (
                                <Cancion
                                    key={index}
                                    cancion={cancion}
                                />
                            )
                        })
                    }
                </div>
                <Reproductor />
            </div>
        )
    }
}

import React, { Component } from 'react';
import '../../asserts/css/divInfoCancionSelect.css';
import { FaPlay, FaEllipsisH } from 'react-icons/fa';

export default class InfoCancionSelect extends Component {
    render() {
        return (
            <div id="divInfoCancionSelect" className="">
                <div
                    className="div_img_1"
                    style={{
                        background: 'url("https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg") no-repeat center center'
                    }}
                >
                    <FaPlay />
                </div>
                <div style={{height: "250px"}}>
                    
                    <div className="div_InfoCancionFondo"
                        style={{
                            background: 'linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url("https://hotbook.com.mx/wp-content/uploads/2020/05/portada-los-mejores-music-videos-de-adele.jpg")'
                        }}>
                    </div>
                    <div className="div_InfoCancion_Texto">
                        <div>
                            <div className="info_titCancion">Adele 21</div>
                            <div className="info_text1">Lo mejor de Adele <span>321, 123 seguidores</span></div>
                            <div className="info_text2">Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​ </div>
                        </div>
                        <div>
                            <button className="info_btnReproducir">Reproducir</button>
                            <button className="info_btnSeguir">Seguir</button>
                            <span><FaEllipsisH /></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

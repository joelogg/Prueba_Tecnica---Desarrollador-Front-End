import React from 'react';
import { FaPlay, FaEllipsisV } from 'react-icons/fa';

export default function Cancion(props) {
    const { cancion } = props;
    return (
        <div className="div_cancion">
            <div
                className="div_img_cancion"
                style={{
                    background: 'url("' + cancion.img + '") no-repeat center center'
                }}
            >
                
                <div className="icno3PuntosCancion"><FaEllipsisV /></div>
                <div className="iconoPlayCancion"><FaPlay /></div>
            </div>
            <div className="cancion_text1">{cancion.titulo}</div>
            <div className="cancion_text2">{cancion.artista}</div>
        </div>
    )
}

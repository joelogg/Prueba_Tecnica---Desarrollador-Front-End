import React from 'react';
import '../../asserts/css/reproductor.css';
import { FaPlay, FaVolumeOff } from 'react-icons/fa';
import { AiOutlineStepBackward, AiFillStepForward } from 'react-icons/ai';

export default function Reproductor() {
    return (
        <div id="div_reproductor" className="d-flex justify-content-between">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61lMwNQGYbL._SY450_.jpg" />
            <div className="d-flex justify-content-between w-100">
                <div className="repro_textos">
                    <div className="repro_titulo">Canción</div>
                    <div className="repro_album">Artista</div>
                </div>
                <div className="d-flex justify-content-between repro_botones">
                    <button><AiOutlineStepBackward /></button>
                    <div className="h-100">
                        <button className="btnPlay"><FaPlay /></button>
                        <div className="divPlay"></div>
                    </div>
                    <button><AiFillStepForward /></button>
                </div>
                <div className="d-flex justify-content-between repro_volumen">
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" value={""} onChange={()=>{}}/>
                    </div>
                    <FaVolumeOff />
                </div>
            </div>
        </div>
    )
}

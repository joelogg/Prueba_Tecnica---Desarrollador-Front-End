import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import '../../asserts/css/barraBuscar.css';

export default function BarraBuscar(props) {

    const { buscarCanciones } = props;

    return (
        <div className="div_barraBuscar d-flex justify-content-between">
            <div className="div_inputBuscar">
                <input type="text" className="inputBuscar" placeholder="Buscar"/>
                <span className="span_iconBuscar" onClick={()=>buscarCanciones()}><FaSearch /></span>
            </div>
            <div className="div_user_nombre">
                <span className="span_iconUser"><FaUser /></span>
                <span>Francisco M.</span>
            </div>
        </div>
    )
}

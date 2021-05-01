import React from 'react';
import { Link } from "react-router-dom";
import '../../asserts/css/sidebar.css'

export default function SideBar(props) {
    const { path, tituloPagina } = props;
    return (
        <React.Fragment>
            <Link to='/'><div id="logo"></div></Link>
            

            <div className="titulos_sideBars">Mi Librería</div>
            <nav>
                <div className={'btn_sidebar ' + (path === '/recientes' ? 'urlActivo' : '')}>
                    <Link to='/recientes'>Recientes</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/artistas' ? 'urlActivo' : '')}>
                    <Link to='/artistas'>Artistas</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/albums' ? 'urlActivo' : '')}>
                    <Link to='/albums'>Álbums</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/canciones' ? 'urlActivo' : '')}>
                    <Link to='/canciones'>Canciones</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/estaciones' ? 'urlActivo' : '')}>
                    <Link to='/estaciones'>Estaciones</Link>
                </div>
            </nav>

            <div className="titulos_sideBars">Playlist</div>
            <nav>
                <div className={'btn_sidebar ' + (path === '/metal' ? 'urlActivo' : '')}>
                    <Link to='/metal'>Metal</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/paraBailar' ? 'urlActivo' : '')}>
                    <Link to='/paraBailar'>Para bailar</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/rock90s' ? 'urlActivo' : '')}>
                    <Link to='/rock90s'>Rock 90s</Link>
                </div>
                <div className={'btn_sidebar ' + (path === '/baladas' ? 'urlActivo' : '')}>
                    <Link to='/baladas'>Baladas</Link>
                </div>
            </nav>
        </React.Fragment>
    )
}
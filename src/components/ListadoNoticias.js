import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) =>  ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia />
            ))}
        </div>
);
 
export default ListadoNoticias;
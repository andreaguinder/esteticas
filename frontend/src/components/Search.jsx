'use client';

import { useState } from 'react';
import CardServicio from '@/components/CardServicio';

export default function Search({ servicios = [] }) {
  const [busqueda, setBusqueda] = useState('');

  const termino = busqueda.trim().toLowerCase();
  const hayBusqueda = termino.length > 0;

  // Separamos los servicios en dos grupos
  const coincidencias = servicios.filter((servicio) =>
    servicio.nombre.toLowerCase().includes(termino)
  );

  const otros = servicios.filter(
    (servicio) => !servicio.nombre.toLowerCase().includes(termino)
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button className="search-button">Buscar</button>
      </div>

      {/* 1. Resultados de la búsqueda */}
      <div className="container-servicios">
        {coincidencias.length > 0 ? (
          coincidencias.map((servicio) => (
            <CardServicio
              key={servicio.id}
              nombre={servicio.nombre}
              descripcion={servicio.descripcion}
              duracion={servicio.duracion}
              imagen={servicio.imagen}
            />
          ))
        ) : (
          <p className="no-results">No se encontraron coincidencias exactas.</p>
        )}
      </div>

      {/* 2. Divisor y resto de servicios (solo si el usuario escribió algo y hay otros servicios) */}
      {hayBusqueda && otros.length > 0 && (
        <>
          <hr className="separador-busqueda" />
          <h3 className="subtitulo-otros">Otros servicios disponibles</h3>
          
          <div className="container-servicios">
            {otros.map((servicio) => (
              <CardServicio
                key={servicio.id}
                nombre={servicio.nombre}
                descripcion={servicio.descripcion}
                duracion={servicio.duracion}
                imagen={servicio.imagen}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
const CardServicio = ({ servicio }) => {
  return (
    <div className="card-servicio">
        <img src={servicio.imagen} alt={servicio.nombre} className="card-servicio-img" />
        <div className="card-servicio-content">
            <h3 className="card-servicio-title">{servicio.nombre}</h3>
            <p className="card-servicio-description">{servicio.descripcion}</p>
            <p>Duración del servicio: {servicio.duracion}</p>
        </div>
    </div>
);

}

export default CardServicio;
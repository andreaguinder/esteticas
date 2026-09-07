const CardServicio = (props) => {

    const { nombre, descripcion, duracion, imagen } = props;

  return (
    <div className="card-servicio">
        <img src={imagen} alt={nombre} className="card-servicio-img" />
        <div className="card-servicio-content">
            <h3 className="card-servicio-title">{nombre}</h3>
            <p className="card-servicio-description">{descripcion}</p>
            <p>Duración del servicio: {duracion}</p>
        </div>
    </div>
);

}

export default CardServicio;
import './MensajesTable.scss';

export default function MensajesTable(props) {
    return (
        <table className="mensajesTable">
            <thead className="header">
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Mensaje</th>
                    <th>Acciones rápidas</th>
                </tr>
            </thead>
            <tbody>
                {props.mensajes.map(((mensaje, index) =>
                (<tr key={index} className={(mensaje.leido ? 'elementoLeido' : 'elementoNOLeido')}>
                    <td>{mensaje.nombre}</td>
                    <td>{mensaje.email}</td>
                    <td>{mensaje.descripcion}</td>
                    <td>
                        <button className="leido" title="Marcar como leído"
                            onClick={() => { props.clickMarcarLeido(index) }}>
                            {(mensaje.leido ? '📖' : '📕')}
                        </button>
                        <button className="borrar" title="Borrar mensaje"
                            onClick={() => { props.clickEliminarUno(index) }}>🗑</button>
                    </td>
                </tr>)
                ))}
            </tbody>
        </table>
    );
}

import './Nav.component.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cerrarSesion } from '../../redux/actions/sesion';
import  { useHistory  } from 'react-router-dom';

export default function Nav() {
  const sesion = useSelector(state => state).sesion;
  const dispatch = useDispatch();
  const history = useHistory();
  let cerrar = () => {
    dispatch(cerrarSesion());
    let path = `login`; 
    history.push(path);
  }
  return (
    <div className="Nav">
        <Link className="Nav-link" to='/store'>Store</Link>
        <Link className="Nav-link" to='/about'>About</Link>
        {sesion && <button onClick={cerrar}>Cerrar sesión</button>}
    </div>
  );
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { cambiarStyle } from '../../redux/actions/styleMode.js';
import './Bootstrap.component.scss';

export default function Bootstrap() {
    const styleMode = useSelector(state => state).styleMode;
    const dispatch = useDispatch();
    let setDia = () => {
        dispatch(cambiarStyle(!styleMode));
    }

    let texto = styleMode ?
        (<div><FontAwesomeIcon icon={faSun} className='lightMode'/></div>):
        (<div><FontAwesomeIcon icon={faMoon} className='darkMode' /></div>) ;

    return (
        <button className={["btn btn-sm",styleMode ? 'darkMode' : 'lightMode'].join(' ')} onClick={() => setDia(!styleMode)}>{texto}</button>
    );
}
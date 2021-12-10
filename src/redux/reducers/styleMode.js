import { ACTIONS_STYLE } from '../actions/styleMode';

const initialState = {
    style:false
};

export const styleMode = (state = initialState.style, action) => {
    switch (action.type) {
        case ACTIONS_STYLE.CREAR_STYLE:
            state = action.payload;
            return state;
        case ACTIONS_STYLE.LEER_STYLE:
            return state;
        default:
            return state;
    }
}

export default styleMode;
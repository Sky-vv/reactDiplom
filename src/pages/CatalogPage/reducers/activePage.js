import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
    page: 1,
}

const activePage = handleActions({
    [actions.HANDLE_CHANCHE_PAGE]: (state, { payload }) => ({
        ...state,
        page: payload
    })
}, initialState);

export default activePage;




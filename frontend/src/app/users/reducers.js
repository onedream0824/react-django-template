import collectionReducer from "app/reducers/collection";

import {Collection} from "./model";

const initialState = new Collection();


function reducer(state = initialState, action) {
    return collectionReducer(state, action, state.constants);
}

export default reducer;

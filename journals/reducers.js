import collectionReducer from "app/reducers/collection";

import {Collection} from "./records";

const initialState = new Collection();

console.log("sup");

export default function reducer(state=initialState, action) {
    return collectionReducer(state, action, state.constants);
}

import {Map} from "immutable";
import _ from "lodash";


function reducer(state, action, constants) {
    switch (action.type) {
    case constants.COLLECTION_IS_LOADING:
        return state.set("isLoading", true);

    case constants.RECEIVED_COLLECTION:
        return state.withMutations((collection) => {
            const Record = collection.get("Record");
            const records = _.map(action.records, (data) => new Record(data));

            collection.set("records", Map(_.indexBy(records, "id")));
            collection.set("isLoading", false);
            collection.set("pagination",  action.pagination);
        });

    case constants.RECEIVED_RECORD:
        const Record = state.get("Record");
        const record = new Record(action.record);
        const records = state.get("records");
        // The above call to _.indexBy creates keys that are strings. If we don't
        // call .toString() here our key is an integer and a duplicate record
        // gets added to the Map.
        return state.set("records", records.set(record.id.toString(), record));

    case constants.REMOVED_RECORD:
        return state.withMutations((collection) => {
            const records = collection.get("records");
            const pagination = collection.get("pagination");
            const key = action.record.id.toString();

            pagination.total_entries--;
            collection.set("records", records.delete(key));
        });

    case constants.UPDATE_COLLECTION_QUERY:
        return state.set("query", action.query);

    default:
        return state;
    }
}

export default reducer;

import http from "app/utils/http";
import {addHttpStatusCodeAlert} from "app/actions/alerts";


function collectionIsLoading(collection) {
    const constants = collection.get("constants");
    return {
        type: constants.COLLECTION_IS_LOADING
    };
}

function receivedCollection(collection, data) {
    const constants = collection.get("constants");
    return {
        records: data.records,
        pagination: data.pagination,
        type: constants.RECEIVED_COLLECTION
    };
}

function receivedRecord(record, data) {
    const constants = record.get("constants");
    return {
        record: data,
        type: constants.RECEIVED_RECORD
    };
}

export function fetchRecord(record) {
    return (dispatch) => {
        const successCb = (data) => dispatch(receivedRecord(record, data));
        const errorCb = (statusCode) => dispatch(addHttpStatusCodeAlert(statusCode));

        return http.get(record.apiUrl, {}, successCb, errorCb);
    };
}

export function fetchCollectionIfEmpty({collection, query}) {
    return (dispatch) => {
        const records = collection.get("records");
        if (records.size === 0) {
            return dispatch(fetchCollection({collection, query}));
        }
    };
}

export function fetchCollection({collection, query}) {
    return (dispatch) => {
        const currentQuery = collection.get("query");

        if ( ! currentQuery.equals(query)) {
            dispatch(updateCollectionQuery({collection, query}));
        }

        dispatch(collectionIsLoading(collection));

        const successCb = (data) => dispatch(receivedCollection(collection, data));
        const errorCb = (statusCode) => dispatch(addHttpStatusCodeAlert(statusCode));

        return http.get(collection.get("apiUrl"), query.toJS(), successCb, errorCb);
    };
}

export function updateCollectionQuery({collection, query}) {
    const constants = collection.get("constants");
    return {
        query,
        type: constants.UPDATE_COLLECTION_QUERY
    };
}

export default {
    fetchCollection,
    fetchCollectionIfEmpty,
    fetchRecord,
    updateCollectionQuery
};

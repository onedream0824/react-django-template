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
        models: data.models,
        pagination: data.pagination,
        type: constants.RECEIVED_COLLECTION
    };
}

function receivedModel(model, data) {
    const constants = model.get("constants");
    return {
        model: data,
        type: constants.RECEIVED_MODEL
    };
}

function removedModel(model) {
    const constants = model.get("constants");
    return {
        type: constants.REMOVED_MODEL,
        model
    };
}

export function editModel({model, fields}) {
    return (dispatch) => {
        const successCb = (data) => dispatch(receivedModel(model, data));
        const errorCb = (statusCode) => dispatch(addHttpStatusCodeAlert(statusCode));

        return http.put(model.apiUrl, fields, successCb, errorCb);
    };
}

export function fetchModel(model) {
    return (dispatch) => {
        const successCb = (data) => dispatch(receivedModel(model, data));
        const errorCb = (statusCode) => dispatch(addHttpStatusCodeAlert(statusCode));

        return http.get(model.apiUrl, {}, successCb, errorCb);
    };
}

export function deleteModel({model}) {
    return (dispatch) => {
        const successCb = (data) => dispatch(removedModel(model));
        const errorCb = (statusCode) => dispatch(addHttpStatusCodeAlert(statusCode));

        return http.del(model.apiUrl, successCb, errorCb);
    };
}

export function fetchCollectionIfEmpty({collection, query}) {
    return (dispatch) => {
        const models = collection.get("models");
        if (models.size === 0) {
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
    deleteModel,
    editModel,
    fetchCollection,
    fetchCollectionIfEmpty,
    fetchModel,
    updateCollectionQuery
};

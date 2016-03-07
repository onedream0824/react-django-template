import nprogress from "nprogress";
import superagent from "superagent";


function del(url, successCb, errorCb) {
    let request = superagent.del(url);
    request.set("Accept", "application/json");
    request.set("X-CSRFToken", window.django.csrf);
    nprogress.start();

    request.end((error, response) => {
        nprogress.done();

        if (error) {
            errorCb(response.statusCode);
        } else {
            successCb(response.body);
        }
    });
}

function get(url, query = {}, successCb, errorCb) {
    let request = superagent.get(url);
    request.set("Accept", "application/json");
    request.query(query);
    nprogress.start();

    request.end((error, response) => {
        nprogress.done();

        if (error) {
            errorCb(response.statusCode);
        } else {
            successCb(response.body);
        }
    });
}

function put(url, data = {}, successCb, errorCb) {
    const request = superagent.put(url);
    request.set("Accept", "application/json");
    request.set("X-CSRFToken", window.django.csrf);
    request.send(data);
    nprogress.start();

    request.end((error, response) => {
        nprogress.done();

        if (error) {
            errorCb(response.statusCode);
        } else {
            successCb(response.body);
        }
    });
}

export default {
    del,
    get,
    put
};

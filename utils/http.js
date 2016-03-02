import nprogress from "nprogress";
import superagent from "superagent";


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

export default {
    get
};

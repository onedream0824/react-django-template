import {Map, Record} from "immutable";

import isFilterActive from "app/utils/isFilterActive";
import constants from "./constants";


class User extends Record({
    id: "0",
    constants,
    date_joined: "",
    email: "",
    first_name: "",
    last_login: "",
    last_name: ""
}) {
    appUrl() {
        return `/admin/users/${this.id}`;
    }

    tabUrl(tab = "model") {
        return `${this.appUrl()}/${tab}`;
    }

    apiUrl() {
        return `${window.django.urls.users}${this.id}/`;
    }

    toString() {
        return `${this.first_name} ${this.last_name}`;
    }
}

class Collection extends Record({
    apiUrl: window.django.urls.users,
    constants,
    isLoading: false,
    Model: User,
    models: Map(),
    pagination: Map({
        end_index: 0,
        page: 0,
        start_index: 0,
        total_pages: 0
    }),
    query: Map({
        page: 1,
        search: ""
    }),
    routeId: "user",
    title: "Users"
}){
    appUrl() {
        return "/admin/users";
    }

    isFilterActive() {
        return isFilterActive(this.query);
    }
}

export {
    Collection,
    User
};

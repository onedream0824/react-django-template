import moment from "moment";
import {Map, Record} from "immutable";

import isFilterActive from "app/utils/isFilterActive";

import constants from "./constants";


export class Journal extends Record({
    id: "",
    constants,
    date: "",
    hospital: Map(),
    is_verified: false,
    notes: "",
    procedure: Map(),
    scrub_role: Map(),
    user: Map(),
    verified_by: Map(),
    verified_date: new Date()
}) {
    appUrl() {
        return `/admin/users/${this.user.id}/journal/${this.id}`;
    }

    get apiUrl() {
        return `${window.django.urls.journals}${this.id}/`;
    }

    get toString() {
        return `${this.procedure.name} @ ${this.hospital.name} on ${moment(this.date).format("MM/DD/YY")}`;
    }
}

export class Collection extends Record({
    apiUrl: window.django.urls.journals,
    constants,
    isLoading: false,
    pagination: Map({
        end_index: 0,
        page: 0,
        start_index: 0,
        total_pages: 0
    }),
    Record: Journal,
    records: Map(),
    routeId: "journal",
    query: Map({
        page: 1,
        search: ""
    }),
    title: "Journal"
}){
    appUrl(params) {
        const {user} = params;
        return `/admin/users/${user}/journal`;
    }

    get isFilterActive() {
        return isFilterActive(this.query);
    }
}

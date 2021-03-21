import {JetView} from "webix-jet";

export default {

    id: "users",
    view: "datatable",
    columns: [
        {id: "id", header: "#"},
        {id: "title", header: "Наименование", fillspace: true},
        {id: "url", header: "URL", fillspace: true},
    ],
    select: true,
    css: "webix_shadow_medium",
    scroll: "y",
    // url: "rest->http://localhost:3000/users",
    url: () => new Promise(res => setTimeout(
        res, 1250, webix.ajax("http://jsonplaceholder.typicode.com/photos")
        )
    ),
    on: {
        onBeforeLoad() {
            webix.extend(this, webix.ProgressBar);
            this.showProgress();
        },
        onAfterLoad() {
            this.hideProgress();
        },
        onAfterSelect(id) {
            const values = $$(this).getItem(id);
            $$("details:form").setValues(values);
        }
    }

};
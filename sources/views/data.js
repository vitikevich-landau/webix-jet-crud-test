import {JetView} from "webix-jet";
import users_table from "jet-views/users/users_table";
import users_details from "jet-views/users/users_details";

export default class DataView extends JetView {
    config() {
        return {
            type: "wide",
            cols: [
                users_table,
                {view: "resizer"},
                users_details
            ],

        };
    }
}
import {JetView} from "webix-jet";
import users_table from "jet-views/users/users_table";
import users_details from "jet-views/users/users_details";

export default class DataView extends JetView {
  config() {
    return {
      rows: [
        {
          view: "toolbar",
          css: "webix_dark",
          paddingY: 1,
          height: 40,
          elements: [
            {view: "button", type: "icon", icon: "wxi-pencil", width: 40},
            {view: "button", type: "icon", icon: "wxi-user", width: 40},
            {view: "button", type: "icon", icon: "wxi-email", width: 40},
            {},
            {view: "icon", icon: "mdi mdi-email"}, {view: "icon", icon: "mdi mdi-account"}, {
              view: "icon",
              icon: "mdi mdi-cogs"
            }
          ]
        },
        {
          type: "wide",
          cols: [
            users_table,
            {view: "resizer"},
            users_details
          ],
          
        }
      ]
    };
  }
}
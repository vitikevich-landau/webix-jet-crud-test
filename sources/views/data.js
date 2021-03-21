import {JetView} from "webix-jet";
import users_table from "jet-views/users/users_table";
import users_details from "jet-views/users/users_details";

export default class DataView extends JetView {
  config() {
    const toolbars = [
      "mdi mdi-pencil",
      "mdi mdi-access-point",
      "wxi-check",
      "wxi-angle-double-right"
    ];
    
    return {
      rows: [
        {
          view: "toolbar",
          css: "webix_dark",
          paddingX: 10,
          height: 40,
          elements: [
            ...toolbars.map(v => ({
              view: "button",
              type: "icon",
              icon: v,
              width: 32,
              css: "webix_transparent",
              click: (id, event) => console.log(id, event),
            })),
            {},
            {view: "icon", icon: "mdi mdi-email", click: (id, e) => {console.log(id, e)}},
            {view: "icon", icon: "mdi mdi-account"},
            {view: "icon", icon: "mdi mdi-cogs"}
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
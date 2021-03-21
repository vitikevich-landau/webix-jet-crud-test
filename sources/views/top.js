import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
  config() {
    var header = {
      type: "header",
      template: this.app.config.name,
      css: "webix_header app_header webix_dark"
    };
    
    var menu = {
      id: "sidebar:menu",
      view: "menu",
      css: "app_menu",
      layout: "y",
      select: true,
      template: "<span class='webix_icon #icon#'></span> #value# ",
      data: [
        {value: "Dashboard", id: "start", icon: "wxi-columns"},
        {value: "Data", id: "data", icon: "wxi-pencil"}
      ]
    };
    
    return {
      type: "wide",
      paddingX: 5,
      paddingY: 10,
      css: "app_layout",
      cols: [
        {
          width: 200,
          minWidth: 120,
          rows: [
            {
              css: "webix_shadow_medium",
              rows: [header, menu]
            }
          ]
        },
        {view: "resizer"},
        {rows: [{$subview: true}]}
      ]
    };
  }
  
  init(_$view, _$) {
    super.init(_$view, _$);
    
    this.use(plugins.Menu, "sidebar:menu");
  }
}
export default {
  id: "details",
  // type: "view",
  width: 350,
  rows: [
    {
      type: "header",
      css: "app_header webix_header",
      template: "Редактирование",
    },
    {
      id: "details:form",
      view: "form",
      elements: [
        // {type: "section", template: "Редактирование"},
        {
          view: "text",
          name: "id",
          label: "ID",
          labelPosition: "top",
          readonly: true
        },
        {
          view: "text",
          name: "albumId",
          label: "ALBUM_ID",
          labelPosition: "top",
          readonly: true
        },
        {
          view: "text",
          name: "title",
          label: "Наименование",
          labelPosition: "top"
        },
        {
          view: "text",
          name: "url",
          labelPosition: "top",
          label: "URL",
          disabled: true
        },
        {
          view: "textarea",
          name: "thumbnailUrl",
          labelPosition: "top",
          label: "THUMBNAIL_URL"
        },
        {
          cols: [
            {
              view: "button",
              value: "Сохранить",
              css: "webix_primary",
              click(id, event) {
                console.log(id, event);
              }
            },
            {
              view: "button",
              value: "Очистить",
              css: "webix_danger"
            }
          ]
        },
        {}
      ],
      
    }
  ],
};
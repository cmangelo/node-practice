const n = require("normalizr");
const util = require("util");
const fs = require("fs");

const configData = [
    {
      "id": 1,
      "mode": 1,
      "view": 1,
      "columns": [
        {
          "app": 2,
          "id": 1,
          "name": "Level",
          "view": 0,
          "mode": 0,
          "order": 1,
          "sortable": true
        },
        {
          "app": 2,
          "id": 2,
          "name": "Name",
          "view": 0,
          "mode": 0,
          "order": 2,
          "sortable": true
        },
        {
          "app": 2,
          "id": 3,
          "name": "Assoc",
          "view": 0,
          "mode": 0,
          "order": 3,
          "sortable": true
        },
        {
          "app": 2,
          "id": 4,
          "name": null,
          "view": 0,
          "mode": 0,
          "order": 4,
          "sortable": true
        },
        {
          "app": 2,
          "id": 5,
          "name": "In",
          "view": 0,
          "mode": 0,
          "order": 5,
          "sortable": true
        },
        {
          "app": 2,
          "id": 6,
          "name": null,
          "view": 0,
          "mode": 0,
          "order": 6,
          "sortable": true
        },
        {
          "app": 2,
          "id": 7,
          "name": "Out",
          "view": 0,
          "mode": 0,
          "order": 7,
          "sortable": true
        },
        {
          "app": 2,
          "id": 8,
          "name": "Regular",
          "view": 0,
          "mode": 0,
          "order": 8,
          "sortable": true
        },
        {
          "app": 2,
          "id": 9,
          "name": "OT",
          "view": 0,
          "mode": 0,
          "order": 9,
          "sortable": true
        },
        {
          "app": 2,
          "id": 10,
          "name": "DT",
          "view": 0,
          "mode": 0,
          "order": 10,
          "sortable": true
        },
        {
          "app": 2,
          "id": 11,
          "name": "Drive",
          "view": 0,
          "mode": 0,
          "order": 11,
          "sortable": true
        },
        {
          "app": 2,
          "id": 12,
          "name": "Vacation",
          "view": 0,
          "mode": 0,
          "order": 12,
          "sortable": true
        },
        {
          "app": 2,
          "id": 13,
          "name": "Sick",
          "view": 0,
          "mode": 0,
          "order": 13,
          "sortable": true
        },
        {
          "app": 2,
          "id": 14,
          "name": "Brvmt",
          "view": 0,
          "mode": 0,
          "order": 14,
          "sortable": true
        },
        {
          "app": 2,
          "id": 15,
          "name": "Jury",
          "view": 0,
          "mode": 0,
          "order": 15,
          "sortable": true
        },
        {
          "app": 2,
          "id": 17,
          "name": "Total",
          "view": 0,
          "mode": 0,
          "order": 17,
          "sortable": true
        }
      ]
    },
    {
      "id": 2,
      "mode": 2,
      "view": 1,
      "columns": [
        {
          "app": 2,
          "id": 1,
          "name": "Level",
          "view": 0,
          "mode": 0,
          "order": 1,
          "sortable": true
        },
        {
          "app": 2,
          "id": 2,
          "name": "Name",
          "view": 0,
          "mode": 0,
          "order": 2,
          "sortable": true
        },
        {
          "app": 2,
          "id": 3,
          "name": "Assoc",
          "view": 0,
          "mode": 0,
          "order": 3,
          "sortable": true
        },
        {
          "app": 2,
          "id": 8,
          "name": "Regular",
          "view": 0,
          "mode": 0,
          "order": 4,
          "sortable": true
        },
        {
          "app": 2,
          "id": 9,
          "name": "OT",
          "view": 0,
          "mode": 0,
          "order": 5,
          "sortable": true
        },
        {
          "app": 2,
          "id": 10,
          "name": "DT",
          "view": 0,
          "mode": 0,
          "order": 6,
          "sortable": true
        },
        {
          "app": 2,
          "id": 11,
          "name": "Drive",
          "view": 0,
          "mode": 0,
          "order": 7,
          "sortable": true
        },
        {
          "app": 2,
          "id": 12,
          "name": "Vacation",
          "view": 0,
          "mode": 0,
          "order": 8,
          "sortable": true
        },
        {
          "app": 2,
          "id": 13,
          "name": "Sick",
          "view": 0,
          "mode": 0,
          "order": 9,
          "sortable": true
        },
        {
          "app": 2,
          "id": 14,
          "name": "Brvmt",
          "view": 0,
          "mode": 0,
          "order": 10,
          "sortable": true
        },
        {
          "app": 2,
          "id": 15,
          "name": "Jury",
          "view": 0,
          "mode": 0,
          "order": 11,
          "sortable": true
        },
        {
          "app": 2,
          "id": 17,
          "name": "Total",
          "view": 0,
          "mode": 0,
          "order": 14,
          "sortable": true
        },
        {
          "app": 2,
          "id": 19,
          "name": "Break Penalty",
          "view": 0,
          "mode": 0,
          "order": 12,
          "sortable": true
        },
        {
          "app": 2,
          "id": 20,
          "name": "Meal Penalty",
          "view": 0,
          "mode": 0,
          "order": 13,
          "sortable": true
        }
      ]
    },
    {
      "id": 3,
      "mode": 3,
      "view": 1,
      "columns": [
        {
          "app": 2,
          "id": 1,
          "name": "Level",
          "view": 0,
          "mode": 0,
          "order": 1,
          "sortable": true
        },
        {
          "app": 2,
          "id": 2,
          "name": "Name",
          "view": 0,
          "mode": 0,
          "order": 2,
          "sortable": true
        },
        {
          "app": 2,
          "id": 3,
          "name": "Assoc",
          "view": 0,
          "mode": 0,
          "order": 3,
          "sortable": true
        },
        {
          "app": 2,
          "id": 5,
          "name": "In",
          "view": 0,
          "mode": 0,
          "order": 5,
          "sortable": false
        },
        {
          "app": 2,
          "id": 6,
          "name": null,
          "view": 0,
          "mode": 0,
          "order": 6,
          "sortable": false
        },
        {
          "app": 2,
          "id": 7,
          "name": "Out",
          "view": 0,
          "mode": 0,
          "order": 7,
          "sortable": false
        },
        {
          "app": 2,
          "id": 8,
          "name": "Regular",
          "view": 0,
          "mode": 0,
          "order": 8,
          "sortable": true
        },
        {
          "app": 2,
          "id": 9,
          "name": "OT",
          "view": 0,
          "mode": 0,
          "order": 9,
          "sortable": true
        },
        {
          "app": 2,
          "id": 10,
          "name": "DT",
          "view": 0,
          "mode": 0,
          "order": 10,
          "sortable": true
        },
        {
          "app": 2,
          "id": 11,
          "name": "Drive",
          "view": 0,
          "mode": 0,
          "order": 11,
          "sortable": true
        },
        {
          "app": 2,
          "id": 12,
          "name": "Vacation",
          "view": 0,
          "mode": 0,
          "order": 12,
          "sortable": true
        },
        {
          "app": 2,
          "id": 13,
          "name": "Sick",
          "view": 0,
          "mode": 0,
          "order": 13,
          "sortable": true
        },
        {
          "app": 2,
          "id": 14,
          "name": "Brvmt",
          "view": 0,
          "mode": 0,
          "order": 14,
          "sortable": true
        },
        {
          "app": 2,
          "id": 15,
          "name": "Jury",
          "view": 0,
          "mode": 0,
          "order": 15,
          "sortable": true
        },
        {
          "app": 2,
          "id": 17,
          "name": "Total",
          "view": 0,
          "mode": 0,
          "order": 16,
          "sortable": true
        },
        {
          "app": 2,
          "id": 18,
          "name": "Date",
          "view": 0,
          "mode": 0,
          "order": 4,
          "sortable": false
        }
      ]
    },
    {
      "id": 4,
      "mode": 1,
      "view": 2,
      "columns": [
        {
          "app": 2,
          "id": 1,
          "name": "Level",
          "view": 0,
          "mode": 0,
          "order": 1,
          "sortable": true
        },
        {
          "app": 2,
          "id": 2,
          "name": "Name",
          "view": 0,
          "mode": 0,
          "order": 2,
          "sortable": true
        },
        {
          "app": 2,
          "id": 3,
          "name": "Assoc",
          "view": 0,
          "mode": 0,
          "order": 7,
          "sortable": true
        },
        {
          "app": 2,
          "id": 4,
          "name": null,
          "view": 0,
          "mode": 0,
          "order": 3,
          "sortable": true
        },
        {
          "app": 2,
          "id": 5,
          "name": "In",
          "view": 0,
          "mode": 0,
          "order": 4,
          "sortable": true
        },
        {
          "app": 2,
          "id": 6,
          "name": null,
          "view": 0,
          "mode": 0,
          "order": 5,
          "sortable": true
        },
        {
          "app": 2,
          "id": 7,
          "name": "Out",
          "view": 0,
          "mode": 0,
          "order": 6,
          "sortable": true
        },
        {
          "app": 2,
          "id": 8,
          "name": "Regular",
          "view": 0,
          "mode": 0,
          "order": 8,
          "sortable": true
        },
        {
          "app": 2,
          "id": 9,
          "name": "OT",
          "view": 0,
          "mode": 0,
          "order": 9,
          "sortable": true
        },
        {
          "app": 2,
          "id": 10,
          "name": "DT",
          "view": 0,
          "mode": 0,
          "order": 10,
          "sortable": true
        },
        {
          "app": 2,
          "id": 11,
          "name": "Drive",
          "view": 0,
          "mode": 0,
          "order": 11,
          "sortable": true
        },
        {
          "app": 2,
          "id": 12,
          "name": "Vacation",
          "view": 0,
          "mode": 0,
          "order": 12,
          "sortable": true
        },
        {
          "app": 2,
          "id": 13,
          "name": "Sick",
          "view": 0,
          "mode": 0,
          "order": 13,
          "sortable": true
        },
        {
          "app": 2,
          "id": 14,
          "name": "Brvmt",
          "view": 0,
          "mode": 0,
          "order": 14,
          "sortable": true
        },
        {
          "app": 2,
          "id": 15,
          "name": "Jury",
          "view": 0,
          "mode": 0,
          "order": 15,
          "sortable": true
        },
        {
          "app": 2,
          "id": 17,
          "name": "Total",
          "view": 0,
          "mode": 0,
          "order": 17,
          "sortable": true
        }
      ]
    },
    {
      "id": 5,
      "mode": 2,
      "view": 2,
      "columns": [
        {
          "app": 2,
          "id": 1,
          "name": "Level",
          "view": 0,
          "mode": 0,
          "order": 1,
          "sortable": true
        },
        {
          "app": 2,
          "id": 2,
          "name": "Name",
          "view": 0,
          "mode": 0,
          "order": 2,
          "sortable": true
        },
        {
          "app": 2,
          "id": 3,
          "name": "Assoc",
          "view": 0,
          "mode": 0,
          "order": 3,
          "sortable": true
        },
        {
          "app": 2,
          "id": 8,
          "name": "Regular",
          "view": 0,
          "mode": 0,
          "order": 4,
          "sortable": true
        },
        {
          "app": 2,
          "id": 9,
          "name": "OT",
          "view": 0,
          "mode": 0,
          "order": 5,
          "sortable": true
        },
        {
          "app": 2,
          "id": 10,
          "name": "DT",
          "view": 0,
          "mode": 0,
          "order": 6,
          "sortable": true
        },
        {
          "app": 2,
          "id": 11,
          "name": "Drive",
          "view": 0,
          "mode": 0,
          "order": 7,
          "sortable": true
        },
        {
          "app": 2,
          "id": 12,
          "name": "Vacation",
          "view": 0,
          "mode": 0,
          "order": 8,
          "sortable": true
        },
        {
          "app": 2,
          "id": 13,
          "name": "Sick",
          "view": 0,
          "mode": 0,
          "order": 9,
          "sortable": true
        },
        {
          "app": 2,
          "id": 14,
          "name": "Brvmt",
          "view": 0,
          "mode": 0,
          "order": 10,
          "sortable": true
        },
        {
          "app": 2,
          "id": 15,
          "name": "Jury",
          "view": 0,
          "mode": 0,
          "order": 11,
          "sortable": true
        },
        {
          "app": 2,
          "id": 17,
          "name": "Total",
          "view": 0,
          "mode": 0,
          "order": 14,
          "sortable": true
        },
        {
          "app": 2,
          "id": 19,
          "name": "Break Penalty",
          "view": 0,
          "mode": 0,
          "order": 12,
          "sortable": true
        },
        {
          "app": 2,
          "id": 20,
          "name": "Meal Penalty",
          "view": 0,
          "mode": 0,
          "order": 13,
          "sortable": true
        }
      ]
    },
    {
      "id": 6,
      "mode": 3,
      "view": 2,
      "columns": [
        {
          "app": 2,
          "id": 1,
          "name": "Level",
          "view": 0,
          "mode": 0,
          "order": 1,
          "sortable": true
        },
        {
          "app": 2,
          "id": 2,
          "name": "Name",
          "view": 0,
          "mode": 0,
          "order": 2,
          "sortable": true
        },
        {
          "app": 2,
          "id": 3,
          "name": "Assoc",
          "view": 0,
          "mode": 0,
          "order": 8,
          "sortable": true
        },
        {
          "app": 2,
          "id": 5,
          "name": "In",
          "view": 0,
          "mode": 0,
          "order": 4,
          "sortable": false
        },
        {
          "app": 2,
          "id": 6,
          "name": null,
          "view": 0,
          "mode": 0,
          "order": 5,
          "sortable": false
        },
        {
          "app": 2,
          "id": 7,
          "name": "Out",
          "view": 0,
          "mode": 0,
          "order": 6,
          "sortable": false
        },
        {
          "app": 2,
          "id": 8,
          "name": "Regular",
          "view": 0,
          "mode": 0,
          "order": 7,
          "sortable": true
        },
        {
          "app": 2,
          "id": 9,
          "name": "OT",
          "view": 0,
          "mode": 0,
          "order": 9,
          "sortable": true
        },
        {
          "app": 2,
          "id": 10,
          "name": "DT",
          "view": 0,
          "mode": 0,
          "order": 10,
          "sortable": true
        },
        {
          "app": 2,
          "id": 11,
          "name": "Drive",
          "view": 0,
          "mode": 0,
          "order": 11,
          "sortable": true
        },
        {
          "app": 2,
          "id": 12,
          "name": "Vacation",
          "view": 0,
          "mode": 0,
          "order": 12,
          "sortable": true
        },
        {
          "app": 2,
          "id": 13,
          "name": "Sick",
          "view": 0,
          "mode": 0,
          "order": 13,
          "sortable": true
        },
        {
          "app": 2,
          "id": 14,
          "name": "Brvmt",
          "view": 0,
          "mode": 0,
          "order": 14,
          "sortable": true
        },
        {
          "app": 2,
          "id": 15,
          "name": "Jury",
          "view": 0,
          "mode": 0,
          "order": 15,
          "sortable": true
        },
        {
          "app": 2,
          "id": 17,
          "name": "Total",
          "view": 0,
          "mode": 0,
          "order": 16,
          "sortable": true
        },
        {
          "app": 2,
          "id": 18,
          "name": "Date",
          "view": 0,
          "mode": 0,
          "order": 3,
          "sortable": false
        }
      ]
    }
  ];
  


  const originalData = [{
    "id": "123",
    "author": {
      "id": "1",
      "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
      {
        "id": "324",
        "commenter": {
          "id": "2",
          "name": "Nicole"
        }
      }
    ]
  },
  {
    "id": "124",
    "author": {
      "id": "3",
      "name": "Bob"
    },
    "title": "My awesome blog post",
    "comments": [
      {
        "id": "324",
        "commenter": {
          "id": "2",
          "name": "Nicole"
        }
      }
    ]
  }];

const user = new n.schema.Entity('users');

// Define your comments schema
const comment = new n.schema.Entity('comments', {
  commenter: user
});

// Define your article
const article = new n.schema.Entity('articles', {
  author: user,
  comments: [comment]
});

const x = new n.schema.Entity('articles', {
    // article: [article],
    
    users: [user]
});
const normalizedData = n.normalize(originalData, [x]);

// console.log(console.log(util.inspect(normalizedData, false, null, true)));
// console.log('y')


const columnSchema = new n.schema.Entity('columns');
const configSchema = new n.schema.Entity('configs', {
    columns: [columnSchema]
});

const normalizedConfigs = n.normalize(configData, [configSchema]);
// console.log(console.log(util.inspect(normalizedConfigs, false, null, true)));


const find = (mode, view) => Object.values(normalizedConfigs.entities.configs).find(x => x.mode === mode && x.view === view).id;

const denormalizedConfigs = n.denormalize(find(2,1), configSchema, normalizedConfigs.entities)
console.log(console.log(util.inspect(denormalizedConfigs, false, null, true)));
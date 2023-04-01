module.exports = function (plop) {
    plop.setGenerator('update-graphql-code', {
      description: 'Update the import statement and headers in generated.ts',
      prompts: [],
      actions: [
        {
          type: 'modify',
          path: 'src/teztok/generated.ts',
          pattern: "import * as Dom from 'graphql-request/dist/types.dom';",
          template: "import * as Dom from 'graphql-request';"
        },
        {
          type: 'modify',
          path: 'src/teztok/generated.ts',
          pattern: /Dom\.RequestInit\["headers"\]/g,
          template: 'Dom.RequestOptions["requestHeaders"]'
        }
      ]
    });
  };
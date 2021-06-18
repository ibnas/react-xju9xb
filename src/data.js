import getDbData from "./db";

let data = {
  name: 'db',

  docs: [
    { type: 'file', data: { name: 'file.f', content: 'content' } },
    { type: 'file', data: { name: 'file.f', content: 'content' } },
    { type: 'file', data: { name: 'file.f', content: 'content' } },
    { type: 'file', data: { name: 'file.f', content: 'content' } },
    { type: 'file', data: { name: 'file.f', content: 'content' } },
    {
      type: 'folder',
      data: {
        name: 'folder',
        content: [
          { type: 'file', data: { name: 'file.f', content: 'content' } }
        ]
      }
    }
  ]
};

data = getDbData();
export default data;

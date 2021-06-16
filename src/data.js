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

export default data;

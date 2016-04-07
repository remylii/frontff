var Langlist = require('../src/js/components/langlist.js');

describe('langlist unit test', function() {
  it('data list length', function() {
    var list = Langlist.getList();

    expect(list.length).toEqual(8);
  });
});

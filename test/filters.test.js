const {filterByTerm} = require('../src/filters');

describe('Filters: ', () => {
  test('should filter by a search term: link', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ];

    const expected = [{ id: 3, url: 'https://www.link3.dev' }];
    const actual = filterByTerm(input, 'link');
    expect(actual).toEqual(expected);
  });

  test('should filter with upper case', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ];

    const expected = [{ id: 3, url: 'https://www.link3.dev' }];
    const actual = filterByTerm(input, 'LINK');
    expect(actual).toEqual(expected);
  });
});

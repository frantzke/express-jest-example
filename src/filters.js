const filterByTerm = function (list, term) {
  const regex = new RegExp(term, 'i');
  const results = list.filter((item) => {
    return item.url.match(regex);
  });
  return results;
};

module.exports = { filterByTerm };

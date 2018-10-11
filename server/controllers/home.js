const root = {root: '../client'}

exports.index = (req, res) => {
  res.sendFile('index.html', root);
};

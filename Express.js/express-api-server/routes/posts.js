
const postsRoutes = (app, fs) => {
  const path = './data/blog_posts.json';

  const readFile = (
    callback,
    returnJson = false,
    filePath = path,
    encoding = 'utf8'
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  }

  const writeFile = (
    fileData,
    callback,
    filePath = path,
    encoding = 'utf8'
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }
      callback();
    });
  };

  app.get('/posts', (req, res) => {
    readFile((data) => {
      res.send(JSON.parse(data));
    });
  });

  app.post('/posts', (req, res) => {
    readFile((data) => {
      data.posts.push(req.body)

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('User added successfully');
      });
    }, true);
  });
};

module.exports = postsRoutes;

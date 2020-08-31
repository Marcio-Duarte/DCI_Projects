const postsRoutes = require('./posts');
const usersRoutes = require('./users')

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('Welcome to my Api server');
  });
  postsRoutes(app, fs);
  usersRoutes(app, fs)
};

module.exports = appRouter;

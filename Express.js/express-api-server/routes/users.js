const usersRoutes = (app, fs) => {
  const path = "./data/users.json";

  app.get("/users", (req, res) => {
    const users = fs.readFileSync(path);
    res.send(JSON.parse(users));
  });

  // Get a user by name and password
  app.get("/users/:username/:password", (req, res) => {
    const { username, password } = req.params;
    const data = JSON.parse(fs.readFileSync(path));

    const user = _.find(data.users, (user) => {
      return user.name === username;
    });

    if (user && user.password === password) {
      res.send({ user, success: true });
    } else {
      res.send({ error: "Wrong login credentials", success: false });
    }
  });
};

module.exports = usersRoutes;

module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const userRoutes = require("../routes/users");
      const groceryRoutes = require("../routes/grocerys");


      app.use(staticRoutes);
      app.use(userRoutes);
      app.use(groceryRoutes);

    }
  }
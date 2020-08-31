const { mongoAtlas } = require('./secret.json');
const mongoAtlasConnection =
    `mongodb+srv://${mongoAtlas.user}:${mongoAtlas.password}@cluster0.gz6h7.mongodb.net/${mongoAtlas.dbname}?retryWrites=true&w=majority`;

module.exports = mongoAtlasConnection;
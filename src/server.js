const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // console.log(`Server berjalan pada ${server.info.uri}`);

  return server;
};

init();

//newman run bookshelf-api-test.postman_collection.json --environment bookshelf-api-test.postman_environment.json
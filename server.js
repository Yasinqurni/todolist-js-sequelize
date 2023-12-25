const dotenv = require('dotenv')
const Hapi = require('@hapi/hapi');
const routes = require('./src/init')

dotenv.config({path: `.env`})

const port = process.env.PORT
const host = process.env.HOST

const init = async () => {
    const server = Hapi.server({
        port: port,
        host: host
    });

    const routeslist = routes.getRoutes()
    server.route(routeslist );

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
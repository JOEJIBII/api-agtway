(async () =>  {
    try {
        await require('./configs/connection_mongodb')();
        await require('./configs/express')(21017)
            .then(app => require('./route/server.route')(app))
    }catch (error) {
        console.error(error);
    }
})();
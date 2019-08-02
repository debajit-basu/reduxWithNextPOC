const routes = require('next-routes');
module.exports =
    routes()
        .add({name: 'dashBoard', pattern: '/', page: 'index'})
        .add({name: 'aboutPage', pattern: '/about', page: 'about'})

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@appdata-sample-tnpnu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose
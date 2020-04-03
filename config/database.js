const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb+srv://admin:admin@mean-ajnho.mongodb.net/admin?retryWrites=true&w=majority',
    secret: crypto,
    db: 'mean'
}

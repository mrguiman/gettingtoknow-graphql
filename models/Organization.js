const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Organization = Schema({
    name: {
        type: String,
        required: true
    },
    logo: String,
    president: String
});

Organization.methods.toPlainObject = function() {
    return {
        id: this.id.toString(),
        name: this.name,
        president: this.president,
        logo: this.logo
    }
}
module.exports = mongoose.model('Organization', Organization);

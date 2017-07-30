const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Project = Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    organizationID: {
        type: String,
        required: true
    }
});

Project.methods.toPlainObject = function() {
    return {
        id: this.id.toString(),
        name: this.name,
        type: this.type
    }
}
module.exports = mongoose.model('Project', Project);

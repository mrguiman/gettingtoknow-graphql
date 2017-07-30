module.exports = {
    Query: {
        organizations: (obj, args, context) => {
            return context.Organization.find()
                .then((orgs) => orgs.map((org) => org.toPlainObject()))
        },
        organization: (obj, args, context) => {
            return context.Organization.findOne({ _id: args.id })
                .then(org => org ? org.toPlainObject() : null)
        }
    },
    Mutation: {
        createOrganization: (obj, args, context) => {
            let organization = new context.Organization(args);
            return organization.save()
                .then((org) => org.toPlainObject());
        }
    },
    Organization: {
        projects: (obj, args, context) => {
            return context.Project.find({ organizationID: obj.id })
                .then(projects => projects.map(project => project.toPlainObject()))
        }
    },
};

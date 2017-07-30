const orgs = [
    { 
        id: '421421412', 
        name: 'Micropple', 
        logo: 'https://myi.mg/12309eqw',
        president: 'John Doe'
    }
]

module.exports = {
    Query: {
        organizations: () => orgs,
        organization: (obj, args, context) => orgs.filter((org) => org.id == args.id)[0]
    },
    Mutation: {
        createOrganization: (obj, args) => {
            const newOrg = Object.assign({ id: Math.floor(Math.random() * 10e8).toString() }, args);
            orgs.push(newOrg);
            return newOrg;
        }
    }
};

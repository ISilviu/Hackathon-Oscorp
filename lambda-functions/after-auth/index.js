const request = require('request');

exports.handler = (event, context, callback) => {
    const userId = event.request.userAttributes.sub;
    const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
    const url = process.env.URL;
    const upsertUserQuery = `
            mutation MyMutation {
                insert_users_user(objects: {id: "${userId}"}) {
                returning {
                    id
                }
            }
        }`;

    const graphqlReq = { "query": upsertUserQuery };

    request.post({
        headers: { 'content-type': 'application/json', 'x-hasura-admin-secret': hasuraAdminSecret },
        url: url,
        body: JSON.stringify(graphqlReq)
    }, function (error, response, body) {
        console.log(body);
        callback(null, context);
    });
}
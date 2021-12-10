const request = require('request');

exports.handler = (event, context, callback) => {
    const userId = event.request.userAttributes.sub;
    const userName = event.request.userAttributes.name;
    const userEmail = event.request.userAttributes.email;
    const userPicture = event.request.userAttributes.picture;
    const updatedAt = event.request.userAttributes.updated_at;

    const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
    const url = process.env.URL;
    const upsertUserQuery = `
            mutation MyMutation {
                insert_users_user(objects: {id: "${userId}", name: "${userName}", email: "${userEmail}", picture: "${userPicture}", updated_at:"${updatedAt}"}) {
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
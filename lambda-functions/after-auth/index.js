const request = require('request');

exports.handler = (event, context, callback) => {
    const userId = event.request.userAttributes.sub;
    const userName = event.request.userAttributes.name;
    const username = event.userName;
    const userEmail = event.request.userAttributes.email;
    const userPicture = event.request.userAttributes.picture;
    const userProfile = event.request.userAttributes.updated_at;

    const userRoleId = userProfile === 'lender' ? 'c7a906bb-3b4a-489b-8eb1-0b745a3f0112' : '124504a4-02ed-4c81-bf13-84da9be08ad8';

    const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET;
    const url = process.env.URL;
    const upsertUserQuery = `
            mutation MyMutation {
                insert_users_user(objects: {id: "${userId}", username: "${username}", name: "${userName}", email: "${userEmail}", picture: "${userPicture}"}) {
                returning {
                    id
                }
                insert_users_user_roles(objects: {role_id: "${userRoleId}", user_id: "${userId}"}) {
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
exports.handler = (event, context, callback) => {
    const userProfile = event.request.userAttributes.profile;
    if(userProfile !== 'lender' && userProfile !== 'renter') {
        const error = new Error('Profile can only be lender or renter');
        callback(error, event);
    }
    callback(null, event);
}
//Load the Cloudant Library
const Cloudant = require('@cloudant/cloudant');
//Load the environment variables
const vcap = require('./../vcap-local.json');


module.exports.db = new Promise((resolve, reject) => {
    Cloudant({  // eslint-disable-line
        url: vcap.services.cloudantNoSQLDB.credentials.url
    }, ((err, cloudant) => {
        if (err) {
            reject(err);
        } else {
            let db = cloudant.db.use('dotcomengineer');
            resolve(db);
        }
    }));
});
/* jshint -W097 */
/* jshint -W030 */
/* jshint strict: false */
/* jslint node: true */
/* jslint esversion: 6 */

const alexaCookie = require('../alexa-cookie');

const config = {
    logger: console.log,
    formerRegistrationData: { ... } // required: provide the result object from subsequent proxy usages here and some generated data will be reused for next proxy call too
};


alexaCookie.refreshAlexaCookie(config, (err, result) => {
    console.log('RESULT: ' + err + ' / ' + JSON.stringify(result));
});

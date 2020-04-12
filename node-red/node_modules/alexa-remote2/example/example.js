let Alexa = require('../alexa-remote');
let alexa = new Alexa();

/***************************************************************/
// see: https://www.gehrig.info/alexa/Alexa.html
// cookie starts with x-amzn-dat and ends with =" csrf=12345780
let cookie = { ... };

alexa.init({
        cookie: cookie,  // cookie if already known, else can be generated using email/password
        email: '...',    // optional, amazon email for login to get new cookie
        password: '...', // optional, amazon password for login to get new cookie
        proxyOnly: true,
        proxyOwnIp: 'localhost',
        proxyPort: 3001,
        proxyLogLevel: 'info',
        bluetooth: true,
        logger: console.log, // optional
        alexaServiceHost: 'layla.amazon.de', // optional, e.g. "pitangui.amazon.com" for amazon.com, default is "layla.amazon.de"
//        userAgent: '...', // optional, override used user-Agent for all Requests and Cookie determination
//        acceptLanguage: '...', // optional, override Accept-Language-Header for cookie determination
//        amazonPage: '...', // optional, override Amazon-Login-Page for cookie determination and referer for requests
        useWsMqtt: true, // optional, true to use the Websocket/MQTT direct push connection
        cookieRefreshInterval: 7*24*60*1000 // optional, cookie refresh intervall, set to 0 to disable refresh
    },
    function (err) {
        if (err) {
            console.log (err);
            return;
        }
        console.log(JSON.stringify(alexa.cookie));
        console.log(JSON.stringify(alexa.csrf));
        console.log(JSON.stringify(alexa.cookieData));
        for (let deviceSerial of Object.keys(alexa.serialNumbers)) {
            console.log (deviceSerial);
        }
    }
);

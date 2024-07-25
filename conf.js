
var conf = {
    hostName: '0.0.0.0',
    web: {
        port: 20001
    },
    apiURL: 'https://api.boodskap.io',
    uuid : '637e0554-7092-11e8-adc0-fa7ae01bbebc',
    domainKey: '',
    apiKey: '',
    googleAnalytics: '',
    elasticEmail : {
        apiKey : '3fbf8ce8-1d5c-417c-8311-9c5651caaa3c',
        username : 'platform@boodskap.io'
    },
    // email : {
    //     faq : 'support@boodskap.io',
    //     contactus : 'support@boodskap.io',
    //     subscribe : 'support@boodskap.io',
    //     demo : 'support@boodskap.io',
    // },
    email: {
        host: "smtp.elasticemail.com",
        port: 2525,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "noreply@dtaservices.com", 
            pass: "13ACF88941BB768C995C70C8C90BB9E5639F",
        },
        fromName: 'Platform',
        fromEmail: 'Platform@boodskap.io',
        toEmail: ['priyadharshinit@boodskap.io']
    },
    captcha : {
        key : "6LcTHzYUAAAAAI9Qqq_q2hqEU99EXLtE0ueaWxGK"
    }
};


module.exports = conf;
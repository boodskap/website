var request = require('request');
var Routes = function (app) {

    this.app = app;
    this.init();


};
module.exports = Routes;



Routes.prototype.init = function () {

    var self = this;

    self.app.get('/', function (req, res) {
        res.render('home.html',{layout:''});
    });

    self.app.get('/platform', function (req, res) {
        res.render('platform.html',{layout:''});
    });

    self.app.get('/iot-starter-kits', function (req, res) {
        res.render('iot-starter-kits.html',{layout:''});
    });

    self.app.get('/products', function (req, res) {
        res.render('products.html',{layout:''});
    });

    self.app.get('/products/:id', function (req, res) {

        var id = req['params']['id']

        if(id === 'taams'){
            res.render('products/taams.html',{layout:''});
        }
        else if(id === 'facility-management'){
            res.render('products/facility-management.html',{layout:''});
        }
        else if(id === 'remote-security-system'){
            res.render('products/remote-security.html',{layout:''});
        }
        else if(id === 'visitor-management-system'){
            res.render('products/visitor-management.html',{layout:''});
        }
        else if(id === 'expense-management-system'){
            res.render('products/expense-management.html',{layout:''});
        }
        else if(id === 'heart-rate-monitoring-system'){
            res.render('products/heart-rate-monitoring.html',{layout:''});
        }
        else if(id === 'fleet-tracking-system'){
            res.render('products/fleet-tracking.html',{layout:''});
        }
        else if(id === 'tank-monitoring-system'){
            res.render('products/tank-monitoring.html',{layout:''});
        }
        else if(id === 'vehicle-license-plate'){
            res.render('products/vehicle-license-plate.html',{layout:''});
        }
        else if(id === 'image-recognition-system'){
            res.render('products/image-recognition.html',{layout:''});
        }
        else if(id === 'face-recognition-system'){
            res.render('products/face-recognition.html',{layout:''});
        }
        else if(id === 'emergency-alert-system'){
            res.render('products/emergency-alert.html',{layout:''});
        }
        else if(id === 'iot-button'){
            res.render('products/iot-button.html',{layout:''});
        }
        else if(id === 'smart-restaurants'){
                res.render('products/smart-restaurants.html',{layout:''});
        }
        else if(id === 'smart-farming-system'){
                res.render('products/smart-farming-system.html',{layout:''});
        }
        else{
            res.redirect("/404");
        }


    });


    /*self.app.get('/solutions/:id', function (req, res) {
        res.render('solutions.html',{layout:''});
    });*/


    self.app.get('/company', function (req, res) {
        res.render('company.html',{layout:''});
    });
    self.app.get('/services', function (req, res) {
        res.render('services.html',{layout:''});
    });
    self.app.get('/about-us', function (req, res) {
        res.render('company.html',{layout:''});
    });
    /*self.app.get('/our-team', function (req, res) {
        res.render('our-team.html',{layout:''});
    });
    self.app.get('/careers', function (req, res) {
        res.render('careers.html',{layout:''});
    });
    self.app.get('/latest-news', function (req, res) {
        res.render('latest-news.html',{layout:''});
    });
    self.app.get('/events', function (req, res) {
        res.render('events.html',{layout:''});
    });*/

    self.app.get('/pricing', function (req, res) {
        res.render('pricing.html',{layout:''});
    });

    self.app.get('/pricing-inr', function (req, res) {
        res.render('pricing-inr.html',{layout:''});
    });

    self.app.get('/contact-us', function (req, res) {
        res.render('contact-us',{layout:''});
    });


    self.app.get('/faq', function (req, res) {
        res.render('faq.html',{layout:''});
    });

    self.app.get('/privacy-policy', function (req, res) {
        res.render('privacy-policy.html',{layout:''});
    });

    self.app.get('/terms-condition', function (req, res) {
        res.render('terms-condition.html',{layout:''});
    });

    self.app.get('/returns-refund-policy', function (req, res) {
        res.render('returns-refund-policy.html',{layout:''});
    });

    self.app.get('/eula', function (req, res) {
        res.render('eula.html',{layout:''});
    });




//Elastic Email
    self.app.post('/sendemail', function (req, res) {

        if(req.body.auth) {

            var r = request.post(
                'https://www.google.com/recaptcha/api/siteverify',
                function (error, response, body) {

                    console.log(new Date() + " | Google Response ",body);

                    if (!error && JSON.parse(body).success) {
                        var from = req.body.from;
                        var fromName = req.body.fromName;
                        var to = req.body.to;
                        var content = req.body.body_text;

                        var msg = {
                            from: from,
                            from_name: fromName,
                            to: self.app.conf.email[to],
                            subject: 'Message From Booodskap.io : ' + to,
                            body_html: content
                        };

                        console.log(new Date() + "| Email Request ", msg)

                        self.app.emailClient.mailer.send(msg, function (err, result) {
                            if (err) {
                                console.log(new Date() + "| error in mail sent =>",err)
                                res.json({status: false, error: err});
                            } else {
                                console.log(new Date() + "| mail sent successfully ")
                                res.json({status: true, result: result});
                            }

                        });
                    }
                    else {
                        console.log(new Date() + ' | Invalid Access!')
                        res.sendStatus(401);
                    }
                });

            var form = r.form();
            form.append('secret', self.app.conf.captcha.key);
            form.append('response', req.body.auth);
        }
        else{
            console.log(new Date() + ' | Invalid Access!')
            res.sendStatus(401);
        }

    });


    self.app.get('/404',function (req, res) {
        res.render('404.html',{layout:'',userRole:req.session.role});
    });

    self.app.get('/:key', function (req, res) {
        res.redirect("/404");
    });



};


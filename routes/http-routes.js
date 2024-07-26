var request = require('request');
const nodemailer = require("nodemailer");

var Routes = function (app) {

    this.app = app;
    this.init();


};
module.exports = Routes;



Routes.prototype.init = function () {

    var self = this;
  

    
    self.app.get('/', function (req, res) {
        res.render('home-v2.html', { layout: '' });
    });

    self.app.get('/platform', function (req, res) {
        res.render('platform.html', { layout: '' });
    });

    self.app.get('/iot-starter-kits', function (req, res) {
        res.render('iot-starter-kits.html', { layout: '' });
    });

    self.app.get('/products', function (req, res) {
        res.render('products.html', { layout: '' });
    });
    self.app.get('/products/:id', function (req, res) {

        var id = req['params']['id']

        if (id === 'taams') {
            res.render('products/taams.html', { layout: '' });
        }
        else if (id === 'facility-management') {
            res.render('products/facility-management.html', { layout: '' });
        }
        else if (id === 'remote-security-system') {
            res.render('products/remote-security.html', { layout: '' });
        }
        else if (id === 'visitor-management-system') {
            res.render('products/visitor-management.html', { layout: '' });
        }
        else if (id === 'expense-management-system') {
            res.render('products/expense-management.html', { layout: '' });
        }
        else if (id === 'heart-rate-monitoring-system') {
            res.render('products/heart-rate-monitoring.html', { layout: '' });
        }
        else if (id === 'fleet-tracking-system') {
            res.render('products/fleet-tracking.html', { layout: '' });
        }
        else if (id === 'tank-monitoring-system') {
            res.render('products/tank-monitoring.html', { layout: '' });
        }
        else if (id === 'vehicle-license-plate') {
            res.render('products/vehicle-license-plate.html', { layout: '' });
        }
        else if (id === 'image-recognition-system') {
            res.render('products/image-recognition.html', { layout: '' });
        }
        else if (id === 'face-recognition-system') {
            res.render('products/face-recognition.html', { layout: '' });
        }
        else if (id === 'emergency-alert-system') {
            res.render('products/emergency-alert.html', { layout: '' });
        }
        else if (id === 'iot-button') {
            res.render('products/iot-button.html', { layout: '' });
        }
        else if (id === 'smart-restaurants') {
            res.render('products/smart-restaurants.html', { layout: '' });
        }
        else if (id === 'smart-farming-system') {
            res.render('products/smart-farming-system.html', { layout: '' });
        }
        else {
            res.redirect("/404");
        }


    });

    self.app.get('/industries', function (req, res) {
        res.render('industries.html', { layout: '' });
    });

    self.app.get('/industries/:id', function (req, res) {
        var id = req['params']['id']


        if (id === 'predictive-maintenance') {
            res.render('industries/predictive.html', { layout: '' });
        }
        else if (id === 'asset-tracking') {
            res.render('industries/ioTAssetTracking.html', { layout: '' });
        }
        else if (id === 'condition-monitoring') {
            res.render('industries/ioTConditionMonitoring.html', { layout: '' });
        }
        else if (id === 'energy-management') {
            res.render('industries/ioTEnergyManagement.html', { layout: '' });
        }
        else if (id === 'supply-chain') {
            res.render('industries/ioTSupplyChain.html', { layout: '' });
        }
        else if (id === 'quality-control') {
            res.render('industries/ioTQualityControl.html', { layout: '' });
        }
        else if (id === 'remote-monitoring') {
            res.render('industries/ioTRemoteMonitoring.html', { layout: '' });
        }
        else if (id === 'worker-safety') {
            res.render('industries/ioTWorkerSafety.html', { layout: '' });
        }
        else if (id === 'smart-manufacturing') {
            res.render('industries/ioTSmartManufacturing.html', { layout: '' });
        }
        else if (id === 'blog-1') {
            res.render('industries/blog1.html', { layout: '' });
        }
        else if (id === 'blog-2') {
            res.render('industries/blog2.html', { layout: '' });
        }
        else if (id === 'blog-3') {
            res.render('industries/blog3.html', { layout: '' });
        }
        else {
            res.redirect("/404");
        }


    });


    /*self.app.get('/solutions/:id', function (req, res) {
        res.render('solutions.html',{layout:''});
    });*/


    self.app.get('/company', function (req, res) {
        res.render('company.html', { layout: '' });
    });
    self.app.get('/services', function (req, res) {
        res.render('services.html', { layout: '' });
    });
    self.app.get('/about-us', function (req, res) {
        res.render('company.html', { layout: '' });
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
        res.render('pricing.html', { layout: '' });
    });

    self.app.get('/pricing-inr', function (req, res) {
        res.render('pricing-inr.html', { layout: '' });
    });

    self.app.get('/pricing-eur', function (req, res) {
        res.render('pricing-eur.html', { layout: '' });
    });

    self.app.get('/pricing-dh-aed', function (req, res) {
        res.render('pricing-aed.html', { layout: '' });
    });

    self.app.get('/pricing-chf', function (req, res) {
        res.render('pricing-chf.html', { layout: '' });
    });



    self.app.get('/contact-us', function (req, res) {
        res.render('contact-us', { layout: '' });
    });


    self.app.get('/faq', function (req, res) {
        res.render('faq.html', { layout: '' });
    });

    self.app.get('/privacy-policy', function (req, res) {
        res.render('privacy-policy.html', { layout: '' });
    });

    self.app.get('/terms-condition', function (req, res) {
        res.render('terms-condition.html', { layout: '' });
    });

    self.app.get('/returns-refund-policy', function (req, res) {
        res.render('returns-refund-policy.html', { layout: '' });
    });

    self.app.get('/eula', function (req, res) {
        res.render('eula.html', { layout: '' });
    });




    //Elastic Email
    self.app.post('/sendemail', function (req, res) {

      
        if (req.body.auth) {
            var fromEmail = req.body.from;
            var fromName = req.body.fromName;
            var to = req.body.to;
            var content = req.body.body_text;
            var subject = req.body.subject;
           
    var userEmailContent = `<head>
    <style>
       body {
       font-family: 'Playfair Display', serif;
       font-family: 'Roboto', sans-serif;
       }
       .container {
       width: 100%;
       background: #E6E6E6;
       }
       .industrySection {
       width: 80%;
       margin: 0 auto;
       background: #fff;
       border: 1px solid #ccc;
       /*padding: 27px 0px 0px 0px;*/
       box-sizing: border-box;
       }
       .contentSection{
       padding:20px 30px 10px 30px;
       }
       .cards {
       margin-top: 10px;
       background-color: #fcefef;
       width: 80%;
       margin: auto;
       }
       .cards img {
       max-width: 65%;
       height: auto;
       margin:3px 0;
       }
       .footer-label {
       color: #cd2122;
       font-size: 15px;
       font-weight: 600;
       width: 100%;
       text-align: right;
       margin-right: 10px;
       margin-top: 13px;
       }
       .text-black{
       color:black;
       }
       @media (max-width: 768px) {
       .cards img {
       max-width: 50%;
       }
       .footer-label {
       font-size: 13px;
       }
       }
       @media (max-width: 468px) {
       .footer-label {
       font-size: 11px;
       margin-top: 8px;
       }
       .title{
       font-weight:bold;  color:black;
       }
       }
    </style>
 </head>
 <body>
    <div class="container">
       <div class="header" style="text-align:center;padding-top:20px !important">
          <img src="https://boodskap.io/images/assets/boodskap-logo.png"  width="200"  />
       </div>
       <div class="industrySection">
          <div class="contentSection">
             <p class="text-black">Dear `+fromName+`,</p>
             <p class="text-black">Thank you for reaching out to us. We appreciate your interest and will get back to you shortly with a response to your inquiry.</p>
             <p class="text-black">Best regards,<br>
                Boodskap Support<br>
                <a href="mailto:info@boodskap.io">info@boodskap.io</a> 
                <a href="https://boodskap.io/" style="display:block">boodskap.io</a>
                </p>
          </div>
       </div>
       <div class="cards">
          <div style="display: flex;">
             <img src="https://boodskap.io/images/powered-by-boodskap.png" />
             <label class="footer-label">
             &copy; <span>`+new Date().getFullYear()+`</span>  All rights reserved
             </label>
          </div>
       </div>
    </div>
 </body>`
            let transporter = nodemailer.createTransport(self.app.conf.email);
            let info = transporter.sendMail({
                // from: '"' + fromName + '" <' + fromEmail + '>', 
                from:self.app.conf.email.fromEmail,
                to: self.app.conf.email.toEmail, 
                subject: fromName +' is trying to contact you',
                html: content, 
            }, function (err, stat) {
                if (err) {
                    self.logger.error(err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    // res.json({ status: true, result: "Email Triggered" })
                    // self.logger.info(subject, ", Email sent to ", to)
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: fromEmail, 
                        subject: "Thank You for Reaching Boodskap – We'll Respond Shortly",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                            self.logger.error(err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            self.logger.info(subject, ", User Email sent to ", to)
                        }
                    });
                }
            });
        } else {
            res.sendStatus(401);
        }
    });


    self.app.post('/sendaccessemail', function (req, res) {
        var content = req.body.body_text;
        var userName = req.body.userName;
        var userEmail = req.body.userEmail;
  
        var userEmailContent = `<head>
        <style>
           body {
           font-family: 'Playfair Display', serif;
           font-family: 'Roboto', sans-serif;
           }
           .container {
           width: 100%;
           background: #E6E6E6;
           }
           .industrySection {
           width: 80%;
           margin: 0 auto;
           background: #fff;
           border: 1px solid #ccc;
           /*padding: 27px 0px 0px 0px;*/
           box-sizing: border-box;
           }
           .contentSection{
           padding:20px 30px 10px 30px;
           }
           .cards {
           margin-top: 10px;
           background-color: #fcefef;
           width: 80%;
           margin: auto;
           }
           .cards img {
           max-width: 65%;
           height: auto;
           margin:3px 0;
           }
           .footer-label {
           color: #cd2122;
           font-size: 15px;
           font-weight: 600;
           width: 100%;
           text-align: right;
           margin-right: 10px;
           margin-top: 13px;
           }
           .text-black{
           color:black;
           }
           @media (max-width: 768px) {
           .cards img {
           max-width: 50%;
           }
           .footer-label {
           font-size: 13px;
           }
           }
           @media (max-width: 468px) {
           .footer-label {
           font-size: 11px;
           margin-top: 8px;
           }
           .title{
           font-weight:bold;  color:black;
           }
           }
        </style>
     </head>
     <body>
        <div class="container">
           <div class="header" style="text-align:center;padding-top:20px !important">
              <img src="https://boodskap.io/images/assets/boodskap-logo.png"  width="200"  />
           </div>
           <div class="industrySection">
              <div class="contentSection">
                 <p class="text-black">Dear `+userName+`,</p>
                 <p class="text-black">Thank you for reaching out to us. We appreciate your interest and will get back to you shortly with a response to your inquiry.</p>
                 <p class="text-black">Best regards,<br>
                    Boodskap Support<br>
                    <a href="mailto:info@boodskap.io">info@boodskap.io</a> 
                    <a href="https://boodskap.io/" style="display:block">boodskap.io</a>
                    </p>
              </div>
           </div>
           <div class="cards">
              <div style="display: flex;">
                 <img src="https://boodskap.io/images/powered-by-boodskap.png" />
                 <label class="footer-label">
                 &copy; <span>`+new Date().getFullYear()+`</span>  All rights reserved
                 </label>
              </div>
           </div>
        </div>
     </body>`
            let transporter = nodemailer.createTransport(self.app.conf.email);
            let info = transporter.sendMail({
                from:self.app.conf.email.fromEmail,
                to: self.app.conf.email.toEmail, 
                subject: userName +' is interested in Industrial IoT',
                html: content, 
            }, function (err, stat) {
                if (err) {
                    self.logger.error(err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    // res.json({ status: true, result: "Email Triggered" })
                    // self.logger.info(subject, ", Email sent to ", to)
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: userEmail, 
                        subject: "Thank You for Reaching Boodskap – We'll Respond Shortly",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                            self.logger.error(err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            self.logger.info(subject, ", User Email sent to ", to)
                        }
                    });
                   
                }
            });
    });


    self.app.post('/sendgetintouchemail', function (req, res) {
        var content = req.body.body_text;
        var userName = req.body.name;
        var userEmail = req.body.email;


    var userEmailContent = `<head>
    <style>
       body {
       font-family: 'Playfair Display', serif;
       font-family: 'Roboto', sans-serif;
       }
       .container {
       width: 100%;
       background: #E6E6E6;
       }
       .industrySection {
       width: 80%;
       margin: 0 auto;
       background: #fff;
       border: 1px solid #ccc;
       /*padding: 27px 0px 0px 0px;*/
       box-sizing: border-box;
       }
       .contentSection{
       padding:20px 30px 10px 30px;
       }
       .cards {
       margin-top: 10px;
       background-color: #fcefef;
       width: 80%;
       margin: auto;
       }
       .cards img {
       max-width: 65%;
       height: auto;
       margin:3px 0;
       }
       .footer-label {
       color: #cd2122;
       font-size: 15px;
       font-weight: 600;
       width: 100%;
       text-align: right;
       margin-right: 10px;
       margin-top: 13px;
       }
       .text-black{
       color:black;
       }
       @media (max-width: 768px) {
       .cards img {
       max-width: 50%;
       }
       .footer-label {
       font-size: 13px;
       }
       }
       @media (max-width: 468px) {
       .footer-label {
       font-size: 11px;
       margin-top: 8px;
       }
       .title{
       font-weight:bold;  color:black;
       }
       }
    </style>
 </head>
 <body>
    <div class="container">
       <div class="header" style="text-align:center;padding-top:20px !important">
          <img src="https://boodskap.io/images/assets/boodskap-logo.png"  width="200"  />
       </div>
       <div class="industrySection">
          <div class="contentSection">
             <p class="text-black">Dear `+userName+`,</p>
             <p class="text-black">Thank you for reaching out to us. We appreciate your interest and will get back to you shortly with a response to your inquiry.</p>
             <p class="text-black">Best regards,<br>
                Boodskap Support<br>
                <a href="mailto:info@boodskap.io">info@boodskap.io</a> 
                <a href="https://boodskap.io/" style="display:block">boodskap.io</a>
                </p>
          </div>
       </div>
       <div class="cards">
          <div style="display: flex;">
             <img src="https://boodskap.io/images/powered-by-boodskap.png" />
             <label class="footer-label">
             &copy; <span>`+new Date().getFullYear()+`</span>  All rights reserved
             </label>
          </div>
       </div>
    </div>
 </body>`
            let transporter = nodemailer.createTransport(self.app.conf.email);
            let info = transporter.sendMail({
                from:self.app.conf.email.fromEmail,
                to: self.app.conf.email.toEmail, 
                subject: userName +' wants to Get in touch with you',
                html: content, 
            }, function (err, stat) {
                if (err) {
                    self.logger.error(err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    // res.json({ status: true, result: "Email Triggered" })
                    // self.logger.info(subject, ", Email sent to ", to)
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: userEmail, 
                        subject: "Thank You for Reaching Boodskap – We'll Respond Shortly",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                            self.logger.error(err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            self.logger.info(subject, ", User Email sent to ", to)
                        }
                    });
                   
                }
            });
    });

    self.app.get('/404', function (req, res) {
        res.render('404.html', { layout: '', userRole: req.session.role });
    });

    self.app.get('/:key', function (req, res) {
        res.redirect("/404");
    });



};




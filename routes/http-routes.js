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
        res.render('industries/industrial/index.html', { layout: '' });
    });

    self.app.get('/industries/:id', function (req, res) {
        var id = req['params']['id']
// Industrial automation
        if (id === 'predictive-maintenance') {
            res.render('industries/industrial/predictive.html', { layout: '' });
        }
        else if (id === 'asset-tracking') {
            res.render('industries/industrial/ioTAssetTracking.html', { layout: '' });
        }
        else if (id === 'condition-monitoring') {
            res.render('industries/industrial/ioTConditionMonitoring.html', { layout: '' });
        }
        else if (id === 'energy-management') {
            res.render('industries/industrial/ioTEnergyManagement.html', { layout: '' });
        }
        else if (id === 'supply-chain') {
            res.render('industries/industrial/ioTSupplyChain.html', { layout: '' });
        }
        else if (id === 'quality-control') {
            res.render('industries/industrial/ioTQualityControl.html', { layout: '' });
        }
        else if (id === 'remote-monitoring') {
            res.render('industries/industrial/ioTRemoteMonitoring.html', { layout: '' });
        }
        else if (id === 'worker-safety') {
            res.render('industries/industrial/ioTWorkerSafety.html', { layout: '' });
        }
        else if (id === 'smart-manufacturing') {
            res.render('industries/industrial/ioTSmartManufacturing.html', { layout: '' });
        }
        else if (id === 'blog-1') {
            res.render('industries/industrial/blog1.html', { layout: '' });
        }
        else if (id === 'blog-2') {
            res.render('industries/industrial/blog2.html', { layout: '' });
        }
        else if (id === 'blog-3') {
            res.render('industries/industrial/blog3.html', { layout: '' });
        }
        else {
            res.redirect("/404");
        }


    });

    self.app.get('/healthcare', function (req, res) {
        res.render('industries/healthcare/index.html', { layout: '' });
    });

    self.app.get('/healthcare/:id', function (req, res) {
        var id = req['params']['id']
        
        // Health Care Monitoring
        
        // if (id === 'healthcare-monitoring') {
        //     res.render('industries/healthcare/healthcaremonitoring.html', { layout: '' });
        // }
        if (id === 'remote-patient-monitoring') {
            res.render('industries/healthcare/remote-patient-monitoring.html', { layout: '' });
        }
        else if (id === 'chronic-design-management') {
            res.render('industries/healthcare/chronic-design-management.html', { layout: '' });
        }
        else if (id === 'telemedicine') {
            res.render('industries/healthcare/telemedicine.html', { layout: '' });
        }
        else if (id === 'fitness-wellness-monitoring') {
            res.render('industries/healthcare/fitness-wellness-monitoring.html', { layout: '' });
        }
        else if (id === 'medication-management') {
            res.render('industries/healthcare/medication-management.html', { layout: '' });
        }
        else if (id === 'elderly-care') {
            res.render('industries/healthcare/elderly-care.html', { layout: '' });
        }
        else if (id === 'hospital-asset-tracking') {
            res.render('industries/healthcare/hospital-asset-tracking.html', { layout: '' });
        }
        else if (id === 'patient-environment-monitoring') {
            res.render('industries/healthcare/patient-environment-monitoring.html', { layout: '' });
        }
        else if (id === 'surgical-assistance') {
            res.render('industries/healthcare/surgical-assistance.html', { layout: '' });
        }
        else if (id === 'emergency-response') {
            res.render('industries/healthcare/emergency-response.html', { layout: '' });
        }
        else if (id === 'blog-1') {
            res.render('industries/healthcare/blog1.html', { layout: '' });
        }
        else if (id === 'blog-2') {
            res.render('industries/healthcare/blog2.html', { layout: '' });
        }
        else if (id === 'blog-3') {
            res.render('industries/healthcare/blog3.html', { layout: '' });
        }
        else {
            res.redirect("/404");
        }
    });
    // Smart Cities

    self.app.get('/smartcities', function (req, res) {
        res.render('industries/smartcities/index.html', { layout: '' });
    });

    self.app.get('/smartcities/:id', function (req, res) {
        var id = req['params']['id']
        
        
        if (id === 'remote-patient-monitoring') {
            res.render('industries/smartcities/remote-patient-monitoring.html', { layout: '' });
        }
        else if (id === 'smart-lighting') {
            res.render('industries/smartcities/smart-lighting.html', { layout: '' });
        }
        else if (id === 'smart-traffic-management') {
            res.render('industries/smartcities/smart-traffic-management.html', { layout: '' });
        }
        else if (id === 'waste-management') {
            res.render('industries/smartcities/waste-management.html', { layout: '' });
        }
        else if (id === 'environmental-monitoring') {
            res.render('industries/smartcities/environmental-monitoring.html', { layout: '' });
        }
        else if (id === 'smart-parking') {
            res.render('industries/smartcities/smart-parking.html', { layout: '' });
        }
        else if (id === 'hospital-asset-tracking') {
            res.render('industries/smartcities/hospital-asset-tracking.html', { layout: '' });
        }
        else if (id === 'patient-environment-monitoring') {
            res.render('industries/smartcities/patient-environment-monitoring.html', { layout: '' });
        }
        else if (id === 'public-safety') {
            res.render('industries/smartcities/public-safety.html', { layout: '' });
        }
        else if (id === 'smart-utilities') {
            res.render('industries/smartcities/smart-utilities.html', { layout: '' });
        }
        else if (id === 'smart-buildings') {
            res.render('industries/smartcities/smart-buildings.html', { layout: '' });
        }
        else if (id === 'public-transport-management') {
            res.render('industries/smartcities/public-transport-management.html', { layout: '' });
        }
        else if (id === 'smart-water-management') {
            res.render('industries/smartcities/smart-water-management.html', { layout: '' });
        }
        else if (id === 'blog-1') {
            res.render('industries/smartcities/blog1.html', { layout: '' });
        }
        else if (id === 'blog-2') {
            res.render('industries/smartcities/blog2.html', { layout: '' });
        }
        else if (id === 'blog-3') {
            res.render('industries/smartcities/blog3.html', { layout: '' });
        }
        else {
            res.redirect("/404");
        }


    });


    



    /*self.app.get('/solutions/:id', function (req, res) {
        res.render('solutions.html',{layout:''});
    });*/

    
    self.app.get('/retail', function (req, res) {
        res.render('industries/retail/index.html', { layout: '' });
    });

    self.app.get('/retail/:id', function (req, res) {
        var id = req['params']['id']
        
       
        if (id === 'smart-shelves') {
            res.render('industries/retail/smart-shelves.html', { layout: '' });
        }
        else if (id === 'automated-checkout') {
            res.render('industries/retail/automated-checkout.html', { layout: '' });
        }
        else if (id === 'inventory-tracking') {
            res.render('industries/retail/inventory-tracking.html', { layout: '' });
        }
        else if (id === 'supply-chain-visibility') {
            res.render('industries/retail/supply-chain-visibility.html', { layout: '' });
        }
        else if (id === 'predictive-maintenance') {
            res.render('industries/retail/predictive-maintenance.html', { layout: '' });
        }
        else if (id === 'security-loss-prevention') {
            res.render('industries/retail/security-loss-prevention.html', { layout: '' });
        }
        else if (id === 'personalized-marketing') {
            res.render('industries/retail/personalized-marketing.html', { layout: '' });
        }
        else if (id === 'environmental-monitoring') {
            res.render('industries/retail/environmental-monitoring.html', { layout: '' });
        }
        else if (id === 'smart-mirrors') {
            res.render('industries/retail/smart-mirrors.html', { layout: '' });
        }
        else if (id === 'blog-1') {
            res.render('industries/retail/blog1.html', { layout: '' });
        }
        else if (id === 'blog-2') {
            res.render('industries/retail/blog2.html', { layout: '' });
        }
        else if (id === 'blog-3') {
            res.render('industries/retail/blog3.html', { layout: '' });
        }
        else {
            res.redirect("/404");
        }
    });

    
self.app.get('/agriculture', function (req, res) {
    res.render('industries/agriculture/index.html', { layout: '' });
});

self.app.get('/agriculture/:id', function (req, res) {
    var id = req['params']['id']
    
   
    if (id === 'precision-agriculture') {
        res.render('industries/agriculture/precision-agriculture.html', { layout: '' });
    }
    else if (id === 'smart-irrigation') {
        res.render('industries/agriculture/smart-irrigation.html', { layout: '' });
    }
    else if (id === 'livestock-monitoring') {
        res.render('industries/agriculture/livestock-monitoring.html', { layout: '' });
    }
    else if (id === 'greenhouse-automation') {
        res.render('industries/agriculture/greenhouse-automation.html', { layout: '' });
    }
    else if (id === 'soil-health-monitoring') {
        res.render('industries/agriculture/soil-health-monitoring.html', { layout: '' });
    }
    else if (id === 'weather-forecasting') {
        res.render('industries/agriculture/weather-forecasting.html', { layout: '' });
    }
    else if (id === 'pest-disease-control') {
        res.render('industries/agriculture/pest-disease-control.html', { layout: '' });
    }
    else if (id === 'farm-equipment-management') {
        res.render('industries/agriculture/farm-equipment-management.html', { layout: '' });
    }
    else if (id === 'yield-monitoring') {
        res.render('industries/agriculture/yield-monitoring.html', { layout: '' });
    }
    else if (id === 'blog-1') {
        res.render('industries/agriculture/blog1.html', { layout: '' });
    }
    else if (id === 'blog-2') {
        res.render('industries/agriculture/blog2.html', { layout: '' });
    }
    else if (id === 'blog-3') {
        res.render('industries/agriculture/blog3.html', { layout: '' });
    }
    else {
        res.redirect("/404");
    }
});



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

    // self.app.get('/pricing-section', function (req, res) {
    //     res.render('pricing-section.html',{layout:''});
    // });
    // self.app.get('/pricing-inr-section', function (req, res) {
    //     res.render('pricing-inr-section.html',{layout:''});
    // });
    // self.app.get('/pricing-eur-section', function (req, res) {
    //     res.render('pricing-eur-section.html',{layout:''});
    // });
    // self.app.get('/pricing-aed-section', function (req, res) {
    //     res.render('pricing-aed-section.html',{layout:''});
    // });
    // self.app.get('/pricing-chf-section', function (req, res) {
    //     res.render('pricing-chf-section.html',{layout:''});
    // });  

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
                    console.log(new Date() + "| error in mail sent =>",err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    // res.json({ status: true, result: "Email Triggered" })
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: fromEmail, 
                        subject: "Thank You for Reaching Boodskap – We'll Respond Shortly",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                            console.log(new Date() + "| error in mail sent =>",err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            console.log(new Date() + "| mail sent successfully")
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
                    console.log(new Date() + "| error in mail sent =>",err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    // res.json({ status: true, result: "Email Triggered" })
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: userEmail, 
                        subject: "Thank You for Reaching Boodskap – We'll Respond Shortly",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                            console.log(new Date() + "| error in mail sent =>",err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            console.log(new Date() + "| mail sent successfully")
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
                    console.log(new Date() + "| error in mail sent =>",err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    // res.json({ status: true, result: "Email Triggered" })
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: userEmail, 
                        subject: "Thank You for Reaching Boodskap – We'll Respond Shortly",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                          
                            console.log(new Date() + "| error in mail sent =>",err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            console.log(new Date() + "| mail sent successfully")
                        }
                    });
                   
                }
            });
    });

    self.app.post('/sendnewsletteremail', function (req, res) {
        var content = req.body.body_text;
        var userEmail = req.body.email;


        var userEmailContent = `<head>
  <style>body {
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
      box-sizing: border-box;
    }
    .contentSection {
      padding: 20px 30px 10px 30px;
    }
    .cards {
      margin-top: 10px;
      background-color: #fcefef;
      width: 80%;
      margin: auto;
      text-align: center; /* Center align the content */
    }
    .cards img {
      max-width: 65%;
      height: auto;
      margin: 3px 0;
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
    .text-black {
      color: black;
    }
    .social-icons {
        margin: 0px;
    list-style: none;
    padding: 10px 0px 0px 0px;
 
    gap: 10px;
    }
    .social-icons li {
      display: inline-block;
    }
    .social-icons li a {
      text-decoration: none;
      color: inherit;
      font-size: 20px; /* Adjust the size of icons */
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
      .title {
        font-weight: bold;  
        color: black;
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
        <p class="text-black" style="font-weight:bold">Dear Subscriber,</p>
        <p class="text-black">We just wanted to take a moment to thank you for being a valued community member. Your support means the world to us, and we’re grateful to have you with us on this journey.</p>
        <p class="text-black" style="font-weight:bold;margin-bottom:3px !important">Join Our Community</p>
        <p class="text-black" style="margin-top:0px !important">We love hearing from you! Follow us on social media platforms to stay updated and join the conversation. Share your thoughts, feedback, and experiences with us. Don’t forget to tag us we might feature you in our next post!</p>
      </div>
    </div>
    <div class="cards">
        <ul class="social-icons" style="text-align:center; list-style-type:none; padding:0;">
        <li style="display:inline-block; margin: 0 5px;">
            <a href="https://www.facebook.com/boodskapiot/" target="_blank" title="Facebook">
              <img src="https://boodskap.io/images/assets/facebook.png" style="width:30px !important" alt="Facebook">
            </a>
          </li>
          <li style="display:inline-block; margin: 0 5px;">
            <a href="https://twitter.com/boodskapIOT" target="_blank" title="Twitter">
              <img src="https://boodskap.io/images/assets/twitter.png" style="width:30px !important" alt="Twitter">
            </a>
          </li>
          <li style="display:inline-block; margin: 0 5px;">
            <a href="https://www.linkedin.com/company/16180585/" target="_blank" title="Linkedin">
              <img src="https://boodskap.io/images/assets/linkedin.png" style="width:30px !important"  alt="Linkedin">
            </a>
          </li>
          <li style="display:inline-block; margin: 0 5px;">
            <a href="https://www.youtube.com/channel/UC1yOEmlV7mBfKI1aHSMk3GQ" target="_blank" title="Youtube">
              <img src="https://boodskap.io/images/assets/youtube.png"  style="width:30px !important" alt="Youtube">
            </a>
          </li>
        </ul>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <img src="https://boodskap.io/images/powered-by-boodskap.png" />
        <label class="footer-label">
        &copy; <span>`+new Date().getFullYear()+`</span>  All rights reserved
        </label>
      </div>
      
    
    </div>
  </div>
</body>`;

            let transporter = nodemailer.createTransport(self.app.conf.email);
            let info = transporter.sendMail({
                from:self.app.conf.email.fromEmail,
                to: self.app.conf.email.toEmail, 
                subject: userEmail +' subscribed on Getting News Letter',
                html: content, 
            }, function (err, stat) {
                if (err) {
                    console.log(new Date() + "| error in mail sent =>",err)
                    res.json({ status: false, result: "Email Triggered Failed" })
                } else {
                    res.json({ status: true, result: "Email Triggered" })
                    let userInfo = transporter.sendMail({
                        from:self.app.conf.email.fromEmail,
                        to: userEmail, 
                        subject: "A Big Thank You from Boodskap !",
                        html: userEmailContent, 
                    }, function (err, stat) {
                        if (err) {
                          
                            console.log(new Date() + "| error in mail sent =>",err)
                            res.json({ status: false, result: "User Email Triggered Failed" })
                        } else {
                            res.json({ status: true, result: "User Email Triggered" })
                            console.log(new Date() + "| mail sent successfully")
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




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
        res.render('index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/platform', function (req, res) {
        res.render('platform.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/iot-starter-kits', function (req, res) {
        res.render('iot-starter-kits.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/products', function (req, res) {
        res.render('products.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });
    self.app.get('/products/:id', function (req, res) {

        var id = req['params']['id']

        if (id === 'taams') {
            res.render('products/taams.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'facility-management') {
            res.render('products/facility-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'remote-security-system') {
            res.render('products/remote-security.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'visitor-management-system') {
            res.render('products/visitor-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'expense-management-system') {
            res.render('products/expense-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'heart-rate-monitoring-system') {
            res.render('products/heart-rate-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'fleet-tracking-system') {
            res.render('products/fleet-tracking.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'tank-monitoring-system') {
            res.render('products/tank-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'vehicle-license-plate') {
            res.render('products/vehicle-license-plate.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'image-recognition-system') {
            res.render('products/image-recognition.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'face-recognition-system') {
            res.render('products/face-recognition.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'emergency-alert-system') {
            res.render('products/emergency-alert.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'iot-button') {
            res.render('products/iot-button.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-restaurants') {
            res.render('products/smart-restaurants.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-farming-system') {
            res.render('products/smart-farming-system.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else {
            res.redirect("/404");
        }


    });

    self.app.get('/industries', function (req, res) {
        res.render('industries/industrial/index.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
    });

    self.app.get('/industries/:id', function (req, res) {
        var id = req['params']['id']
// Industrial automation
        if (id === 'predictive-maintenance') {
            res.render('industries/industrial/predictive.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'asset-tracking') {
            res.render('industries/industrial/ioTAssetTracking.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'condition-monitoring') {
            res.render('industries/industrial/ioTConditionMonitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'energy-management') {
            res.render('industries/industrial/ioTEnergyManagement.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'supply-chain') {
            res.render('industries/industrial/ioTSupplyChain.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'quality-control') {
            res.render('industries/industrial/ioTQualityControl.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'remote-monitoring') {
            res.render('industries/industrial/ioTRemoteMonitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'worker-safety') {
            res.render('industries/industrial/ioTWorkerSafety.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-manufacturing') {
            res.render('industries/industrial/ioTSmartManufacturing.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'blog-1') {
            res.render('industries/industrial/blog1.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'blog-2') {
            res.render('industries/industrial/blog2.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'blog-3') {
            res.render('industries/industrial/blog3.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else {
            res.redirect("/404");
        }


    });
        // Health Care Monitoring

    self.app.get('/healthcare', function (req, res) {
        res.render('industries/healthcare/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/healthcare/:id', function (req, res) {
        var id = req['params']['id']
        
        
        if (id === 'remote-patient-monitoring') {
            res.render('industries/healthcare/remote-patient-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'chronic-design-management') {
            res.render('industries/healthcare/chronic-design-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'telemedicine') {
            res.render('industries/healthcare/telemedicine.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'fitness-wellness-monitoring') {
            res.render('industries/healthcare/fitness-wellness-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'medication-management') {
            res.render('industries/healthcare/medication-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'elderly-care') {
            res.render('industries/healthcare/elderly-care.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'hospital-asset-tracking') {
            res.render('industries/healthcare/hospital-asset-tracking.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'patient-environment-monitoring') {
            res.render('industries/healthcare/patient-environment-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'surgical-assistance') {
            res.render('industries/healthcare/surgical-assistance.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'emergency-response') {
            res.render('industries/healthcare/emergency-response.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'blog-1') {
            res.render('industries/healthcare/blog1.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'blog-2') {
            res.render('industries/healthcare/blog2.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'blog-3') {
            res.render('industries/healthcare/blog3.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else {
            res.redirect("/404");
        }
    });
    // Smart Cities

    self.app.get('/smartcities', function (req, res) {
        res.render('industries/smartcities/index.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
    });

    self.app.get('/smartcities/:id', function (req, res) {
        var id = req['params']['id']
        
        
        if (id === 'remote-patient-monitoring') {
            res.render('industries/smartcities/remote-patient-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-lighting') {
            res.render('industries/smartcities/smart-lighting.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-traffic-management') {
            res.render('industries/smartcities/smart-traffic-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'waste-management') {
            res.render('industries/smartcities/waste-management.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'environmental-monitoring') {
            res.render('industries/smartcities/environmental-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-parking') {
            res.render('industries/smartcities/smart-parking.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'hospital-asset-tracking') {
            res.render('industries/smartcities/hospital-asset-tracking.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'patient-environment-monitoring') {
            res.render('industries/smartcities/patient-environment-monitoring.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'public-safety') {
            res.render('industries/smartcities/public-safety.html', { layout: '' , cdnUrl: self.app.conf.cdnUrl});
        }
        else if (id === 'smart-utilities') {
            res.render('industries/smartcities/smart-utilities.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-buildings') {
            res.render('industries/smartcities/smart-buildings.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'public-transport-management') {
            res.render('industries/smartcities/public-transport-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-water-management') {
            res.render('industries/smartcities/smart-water-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-1') {
            res.render('industries/smartcities/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-2') {
            res.render('industries/smartcities/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-3') {
            res.render('industries/smartcities/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else {
            res.redirect("/404");
        }


    });

      // Smart Home
      self.app.get('/smarthome', function (req, res) {
        res.render('industries/smarthome/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/smarthome/:id', function (req, res) {
        var id = req['params']['id']
        
        
        if (id === 'smart-thermostats') {
            res.render('industries/smarthome/smart-thermostats.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-lighting') {
            res.render('industries/smarthome/smart-lighting.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-security-systems') {
            res.render('industries/smarthome/smart-security-systems.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-appliances') {
            res.render('industries/smarthome/smart-appliances.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-home-hubs') {
            res.render('industries/smarthome/smart-home-hubs.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-irrigation-systems') {
            res.render('industries/smarthome/smart-irrigation-systems.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-smoke-detectors') {
            res.render('industries/smarthome/smart-smoke-detectors.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-doorbells') {
            res.render('industries/smarthome/smart-doorbells.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-entertainment-systems') {
            res.render('industries/smarthome/smart-entertainment-systems.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-1') {
            res.render('industries/smarthome/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-2') {
            res.render('industries/smarthome/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-3') {
            res.render('industries/smarthome/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else {
            res.redirect("/404");
        }


    });
      // Automotive

    self.app.get('/automotive', function (req, res) {
        res.render('industries/automotive/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/automotive/:id', function (req, res) {
        var id = req['params']['id']
        
        
        if (id === 'fleet-management') {
            res.render('industries/automotive/fleet-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'telematics') {
            res.render('industries/automotive/telematics.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'electric-vehicle-management') {
            res.render('industries/automotive/electric-vehicle-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'vehicle-to-everything') {
            res.render('industries/automotive/vehicle-to-everything.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'predictive-maintenance') {
            res.render('industries/automotive/predictive-maintenance.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'connected-infotainment') {
            res.render('industries/automotive/connected-infotainment.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'autonomous-vehicles') {
            res.render('industries/automotive/autonomous-vehicles.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'ubi') {
            res.render('industries/automotive/ubi.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'traffic-management') {
            res.render('industries/automotive/traffic-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-parking') {
            res.render('industries/automotive/smart-parking.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
      
        else if (id === 'blog-1') {
            res.render('industries/automotive/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-2') {
            res.render('industries/automotive/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-3') {
            res.render('industries/automotive/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else {
            res.redirect("/404");
        }


    });

     // Environmental Monitoring

    self.app.get('/environmentmonitoring', function (req, res) {
        res.render('industries/environmentmonitoring/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/environmentmonitoring/:id', function (req, res) {
        var id = req['params']['id']
        
        
        if (id === 'air-quality-monitoring') {
            res.render('industries/environmentmonitoring/air-quality-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'water-quality-monitoring') {
            res.render('industries/environmentmonitoring/water-quality-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'soil-moisture-monitoring') {
            res.render('industries/environmentmonitoring/soil-moisture-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'weather-monitoring') {
            res.render('industries/environmentmonitoring/weather-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'noise-monitoring') {
            res.render('industries/environmentmonitoring/noise-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'radiation-monitoring') {
            res.render('industries/environmentmonitoring/radiation-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'wildlife-monitoring') {
            res.render('industries/environmentmonitoring/wildlife-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'forest-fire-detection') {
            res.render('industries/environmentmonitoring/forest-fire-detection.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'pollution-monitoring') {
            res.render('industries/environmentmonitoring/pollution-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-buildings') {
            res.render('industries/environmentmonitoring/smart-buildings.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'climate-change-monitoring') {
            res.render('industries/environmentmonitoring/climate-change-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-1') {
            res.render('industries/environmentmonitoring/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-2') {
            res.render('industries/environmentmonitoring/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-3') {
            res.render('industries/environmentmonitoring/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else {
            res.redirect("/404");
        }


    });

//Retail   
    self.app.get('/retail', function (req, res) {
        res.render('industries/retail/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/retail/:id', function (req, res) {
        var id = req['params']['id']
        
       
        if (id === 'smart-shelves') {
            res.render('industries/retail/smart-shelves.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'automated-checkout') {
            res.render('industries/retail/automated-checkout.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'inventory-tracking') {
            res.render('industries/retail/inventory-tracking.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'supply-chain-visibility') {
            res.render('industries/retail/supply-chain-visibility.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'predictive-maintenance') {
            res.render('industries/retail/predictive-maintenance.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'security-loss-prevention') {
            res.render('industries/retail/security-loss-prevention.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'personalized-marketing') {
            res.render('industries/retail/personalized-marketing.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'environmental-monitoring') {
            res.render('industries/retail/environmental-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'smart-mirrors') {
            res.render('industries/retail/smart-mirrors.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-1') {
            res.render('industries/retail/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-2') {
            res.render('industries/retail/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else if (id === 'blog-3') {
            res.render('industries/retail/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
        }
        else {
            res.redirect("/404");
        }
    });

  //Agriculture  
    self.app.get('/agriculture', function (req, res) {
    res.render('industries/agriculture/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/agriculture/:id', function (req, res) {
    var id = req['params']['id']
    
   
    if (id === 'precision-agriculture') {
        res.render('industries/agriculture/precision-agriculture.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'smart-irrigation') {
        res.render('industries/agriculture/smart-irrigation.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'livestock-monitoring') {
        res.render('industries/agriculture/livestock-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'greenhouse-automation') {
        res.render('industries/agriculture/greenhouse-automation.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'soil-health-monitoring') {
        res.render('industries/agriculture/soil-health-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'weather-forecasting') {
        res.render('industries/agriculture/weather-forecasting.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'pest-disease-control') {
        res.render('industries/agriculture/pest-disease-control.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'farm-equipment-management') {
        res.render('industries/agriculture/farm-equipment-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'yield-monitoring') {
        res.render('industries/agriculture/yield-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-1') {
        res.render('industries/agriculture/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-2') {
        res.render('industries/agriculture/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-3') {
        res.render('industries/agriculture/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else {
        res.redirect("/404");
    }
    });

    //Wearable

    self.app.get('/wearable', function (req, res) {
        res.render('industries/wearable/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/wearable/:id', function (req, res) {
    var id = req['params']['id']
    
   
    if (id === 'fitness-activity') {
        res.render('industries/wearable/fitness-activity.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'health-monitoring') {
        res.render('industries/wearable/health-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'sleep-tracking') {
        res.render('industries/wearable/sleep-tracking.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'stress-monitoring') {
        res.render('industries/wearable/stress-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'medical-alerts') {
        res.render('industries/wearable/medical-alerts.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'rehabilation-monitoring') {
        res.render('industries/wearable/rehabilation-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'workplace-safety') {
        res.render('industries/wearable/workplace-safety.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'augmented-reality') {
        res.render('industries/wearable/augmented-reality.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'sports-performance-monitoring') {
        res.render('industries/wearable/sports-performance-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'remote-patient-monitoring') {
        res.render('industries/wearable/remote-patient-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-1') {
        res.render('industries/wearable/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-2') {
        res.render('industries/wearable/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-3') {
        res.render('industries/wearable/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else {
        res.redirect("/404");
    }
    });
//Energy
    self.app.get('/energy', function (req, res) {
        res.render('industries/energy/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/energy/:id', function (req, res) {
    var id = req['params']['id']
    
   
    if (id === 'smart-metering') {
        res.render('industries/energy/smart-metering.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'energy-usage-optimization') {
        res.render('industries/energy/energy-usage-optimization.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'demand-response-management') {
        res.render('industries/energy/demand-response-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'renewable-energy') {
        res.render('industries/energy/renewable-energy.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'building-energy') {
        res.render('industries/energy/building-energy.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'grid-monitoring') {
        res.render('industries/energy/grid-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'electric-vehicle') {
        res.render('industries/energy/electric-vehicle.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'leak-detection') {
        res.render('industries/energy/leak-detection.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'smart-lighting') {
        res.render('industries/energy/smart-lighting', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-1') {
        res.render('industries/energy/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-2') {
        res.render('industries/energy/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-3') {
        res.render('industries/energy/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else {
        res.redirect("/404");
    }
    });

    self.app.get('/security', function (req, res) {
        res.render('industries/security/index.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/security/:id', function (req, res) {
    var id = req['params']['id']
    
   
    if (id === 'video-surveillance') {
        res.render('industries/security/video-surveillance.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'access-control') {
        res.render('industries/security/access-control.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'intrusion-detection') {
        res.render('industries/security/intrusion-detection.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'perimeter-security') {
        res.render('industries/security/perimeter-security.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'smart-alarms') {
        res.render('industries/security/smart-alarms.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'fire-detection') {
        res.render('industries/security/fire-detection.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'environmental-monitoring') {
        res.render('industries/security/environmental-monitoring.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'asset-protection') {
        res.render('industries/security/asset-protection.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'building-management') {
        res.render('industries/security/building-management.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'wearable-security') {
        res.render('industries/security/wearable-security.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-1') {
        res.render('industries/security/blog1.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-2') {
        res.render('industries/security/blog2.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else if (id === 'blog-3') {
        res.render('industries/security/blog3.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    }
    else {
        res.redirect("/404");
    }
    });


    self.app.get('/company', function (req, res) {
        res.render('company.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });
    self.app.get('/services', function (req, res) {
        res.render('services.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });
    self.app.get('/about-us', function (req, res) {
        res.render('company.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });
    /*self.app.get('/our-team', function (req, res) {
        res.render('our-team.html',{layout:'', cdnUrl: self.app.conf.cdnUrl});
    });
    self.app.get('/careers', function (req, res) {
        res.render('careers.html',{layout:'', cdnUrl: self.app.conf.cdnUrl});
    });
    self.app.get('/latest-news', function (req, res) {
        res.render('latest-news.html',{layout:'', cdnUrl: self.app.conf.cdnUrl});
    });
    self.app.get('/events', function (req, res) {
        res.render('events.html',{layout:'', cdnUrl: self.app.conf.cdnUrl});
    });*/

    self.app.get('/pricing', function (req, res) {
        res.render('pricing.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/pricing-inr', function (req, res) {
        res.render('pricing-inr.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/pricing-eur', function (req, res) {
        res.render('pricing-eur.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/pricing-dh-aed', function (req, res) {
        res.render('pricing-aed.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/contact-us', function (req, res) {
        res.render('contact-us', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });


    self.app.get('/faq', function (req, res) {
        res.render('faq.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/privacy-policy', function (req, res) {
        res.render('privacy-policy.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/terms-condition', function (req, res) {
        res.render('terms-condition.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/returns-refund-policy', function (req, res) {
        res.render('returns-refund-policy.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/eula', function (req, res) {
        res.render('eula.html', { layout: '', cdnUrl: self.app.conf.cdnUrl });
    });


   


    //Elastic Email
    self.app.post('/sendemail', function (req, res) {

      
        if (req.body.auth) {
            var fromEmail = req.body.from;
            var fromName = req.body.fromName;
            var to = req.body.to;
            var content = req.body.body_text;
            var email_subject = req.body.email_subject;
            
           
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
                subject: fromName +' is trying to contact you' + (email_subject ?email_subject : "") ,
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
        var email_subject = req.body.email_subject;
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
                subject: userName +' is interested in Industrial IoT' + (email_subject ?email_subject : ""),
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
        var email_subject = req.body.email_subject;

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
                subject: userName +' wants to Get in touch with you' + (email_subject ?email_subject : ""),
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
        var email_subject = req.body.email_subject;

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
            <a href="https://www.instagram.com/boodskapiot/" target="_blank" title="Instagram">
              <img src="https://boodskap.io/images/assets/instagram.png" style="width:30px !important" alt="Instagram">
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
                subject: userEmail +' subscribed on Getting News Letter' + (email_subject ?email_subject : ""),
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
        res.render('404.html', { layout: '', userRole: req.session.role, cdnUrl: self.app.conf.cdnUrl });
    });

    self.app.get('/:key', function (req, res) {
        res.redirect("/404");
    });



};




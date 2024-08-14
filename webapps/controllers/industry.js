function sendAccessEmail() {
    $(".sentMessage").html('');
        $(".submitBtn").attr('disabled','disabled');
        var content = `<head>
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
                padding: 27px;
                box-sizing: border-box;
            }
            .industrySection h1 {
                color: #cd2122;
                font-size: 25px;
                margin-bottom: 8px;
                margin-top: 0;
            }
            .industrySection table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
            }
            .industrySection th, .industrySection td {
                padding: 8px;
                border: 1px solid #ccc;
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
                   .title{
          font-weight:normal;
          color:black;
        }
            @media (max-width: 768px) {
                .industrySection, .cards {
                    width: 95%;
                }
                .industrySection table, .industrySection th, .industrySection td {
                    display: block;
                    width: 100%;
                }
                .industrySection th, .industrySection td {
                    box-sizing: border-box;
                    /*padding-left: 50%;*/
                    position: relative;
                }
                .industrySection th::before, .industrySection td::before {
                    position: absolute;
                    left: 10px;
                    top: 8px;
                    white-space: nowrap;
                }
                  .cards img {
                max-width: 50%;
               
            }
               .footer-label {
               font-size: 13px;
            }
                .title{
          font-weight:bold;  color:black;
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
                <h1>Get Your Free Access `+email_subject+`</h1>
                <table>
                    <tbody>
                        <tr>
                            <td class="title">Name</td>
                            <td>`+$("#userName").val()+`</td>
                        </tr>
                      
                        <tr>
                            <td class="title">Email</td>
                            <td>`+$("#userEmail").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Phone No</td>
                            <td>`+$("#userPhoneNumber").val()+`</td>
                        </tr>
                          <tr>
                            <td class="title">Company</td>
                            <td>`+$("#userCompany").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Device</td>
                            <td>`+$("#userDevice").val()+` Devices</td>
                        </tr>
                       
                        <tr>
                            <td class="title">Date</td>
                            <td>`+new Date()+`</td>
                        </tr>
                    </tbody>
                </table>
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
        var data = {
            userName: $("#userName").val(),
            userEmail: $("#userEmail").val() ,
            userPhoneNumber:  $("#userPhoneNumber").val(),
            userCompany:  $("#userCompany").val(),
            userDevice: $("#userDevice").val() ,
            body_text: content,
            email_subject : email_subject ? email_subject : ""
        }

        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: '/sendaccessemail',
            data: JSON.stringify(data),
            success: function (response) {
                $("#userName").val('')
                $("#userEmail").val('')
                $("#userPhoneNumber").val('')
                $("#userCompany").val('')
                $("#userDevice").val('')

                $(".sentMessage").html('<div class="alert alert-success">\n' +
                    '               <strong>Successfully Sent!</strong>' +
                    '            </div>')
                    setTimeout(function() {
                        $(".sentMessage").html("")
                    }, 2000);
                $(".submitBtn").removeAttr('disabled');
                // grecaptcha.reset();
            },
            error: function (e) {

                $(".sentMessage").html('<div class="alert alert-danger">\n' +
                    '                <strong>Error!</strong> Something went wrong.\n' +
                    '            </div>')
                    setTimeout(function() {
                        $(".sentMessage").html("")
                    }, 2000);
                $(".submitBtn").removeAttr('disabled');
                // grecaptcha.reset()
            }
        })
}


function sendGetinTouchEmail() {
    $(".sentMessage").html('');
        $(".submitBtn").attr('disabled','disabled');
        var content = `<head>
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
                padding: 27px;
                box-sizing: border-box;
            }
            .industrySection h1 {
                color: #cd2122;
                font-size: 25px;
                margin-bottom: 8px;
                margin-top: 0;
            }
            .industrySection table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
            }
            .industrySection th, .industrySection td {
                padding: 8px;
                border: 1px solid #ccc;
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
                   .title{
          font-weight:normal;
          color:black;
        }
            @media (max-width: 768px) {
                .industrySection, .cards {
                    width: 95%;
                }
                .industrySection table, .industrySection th, .industrySection td {
                    display: block;
                    width: 100%;
                }
                .industrySection th, .industrySection td {
                    box-sizing: border-box;
                    /*padding-left: 50%;*/
                    position: relative;
                }
                .industrySection th::before, .industrySection td::before {
                    position: absolute;
                    left: 10px;
                    top: 8px;
                    white-space: nowrap;
                }
                  .cards img {
                max-width: 50%;
               
            }
               .footer-label {
               font-size: 13px;
            }
                .title{
          font-weight:bold;  color:black;
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
                <h1>Get in touch `+email_subject+`</h1>
                <table>
                    <tbody>
                        <tr>
                            <td class="title">Name</td>
                            <td>`+$("#name").val()+`</td>
                        </tr>
                      
                        <tr>
                            <td class="title">Email</td>
                            <td>`+$("#email").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Phone No</td>
                            <td>`+$("#phone").val()+`</td>
                        </tr>
                          <tr>
                            <td class="title">Message</td>
                            <td>`+$("#message").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Date</td>
                            <td>`+new Date()+`</td>
                        </tr>
                    </tbody>
                </table>
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
        var data = {
            name: $("#name").val(),
            email: $("#email").val() ,
            phone:  $("#phone").val(),
            message:  $("#message").val(),
            body_text: content,
            email_subject : email_subject ? email_subject : ""
        }


        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: '/sendgetintouchemail',
            data: JSON.stringify(data),
            success: function (response) {
                $("#name").val('')
                $("#email").val('')
                $("#phone").val('')
                $("#message").val('')
                $(".sentMessage").html('<div class="alert alert-success">\n' +
                    '               <strong>Successfully Sent!</strong>' +
                    '            </div>')
                    setTimeout(function() {
                        $(".sentMessage").html("")
                    }, 2000);
                $(".submitBtn").removeAttr('disabled');
            },
            error: function (e) {

                $(".sentMessage").html('<div class="alert alert-danger">\n' +
                    '                <strong>Error!</strong> Something went wrong.\n' +
                    '            </div>')
                    setTimeout(function() {
                        $(".sentMessage").html("")
                    }, 2000);
                $(".submitBtn").removeAttr('disabled');
            }
        })
}

function sendNewsletterEmail(){
    $(".sentMessage").html('');
    $(".submitBtn").attr('disabled','disabled');
    var content = `<head>
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
            padding: 27px;
            box-sizing: border-box;
        }
        .industrySection h1 {
            color: #cd2122;
            font-size: 25px;
            margin-bottom: 8px;
            margin-top: 0;
        }
        .industrySection table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        .industrySection th, .industrySection td {
            padding: 8px;
            border: 1px solid #ccc;
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
               .title{
      font-weight:normal;
      color:black;
    }
        @media (max-width: 768px) {
            .industrySection, .cards {
                width: 95%;
            }
            .industrySection table, .industrySection th, .industrySection td {
                display: block;
                width: 100%;
            }
            .industrySection th, .industrySection td {
                box-sizing: border-box;
                /*padding-left: 50%;*/
                position: relative;
            }
            .industrySection th::before, .industrySection td::before {
                position: absolute;
                left: 10px;
                top: 8px;
                white-space: nowrap;
            }
              .cards img {
            max-width: 50%;
           
        }
           .footer-label {
           font-size: 13px;
        }
            .title{
      font-weight:bold;  color:black;
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
            <h1>Getting Newsletter | Subscribed `+email_subject+`</h1>
            <table>
                <tbody>
                    <tr>
                        <td class="title">Email</td>
                        <td>`+$("#email_newsletter").val()+`</td>
                    </tr>
                </tbody>
            </table>
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
    var data = {
        email: $("#email_newsletter").val() ,
        body_text: content,
        email_subject : email_subject ? email_subject : ""
    }


    $.ajax({
        type: 'POST',
        contentType: "application/json",
        url: '/sendnewsletteremail',
        data: JSON.stringify(data),
        success: function (response) {
            $("#email_newsletter").val('')
            
            $(".sentMessage").html('<div class="alert alert-success">\n' +
                '               <strong>Successfully Sent!</strong>' +
                '            </div>')
                setTimeout(function() {
                    $(".sentMessage").html("")
                }, 2000);
            $(".submitBtn").removeAttr('disabled');
        },
        error: function (e) {

            $(".sentMessage").html('<div class="alert alert-danger">\n' +
                '                <strong>Error!</strong> Something went wrong.\n' +
                '            </div>')
                setTimeout(function() {
                    $(".sentMessage").html("")
                }, 2000);
            $(".submitBtn").removeAttr('disabled');
        }
    })
}

var a2a_config = a2a_config || {};
a2a_config.linkname = $(document).attr("title");
a2a_config.linkurl = window.location.href;
a2a_config.num_services = 4;
a2a_config.show_title = 1;



var g_response = null;
function renderResponse(response) {
    g_response = response;
}


function sendEmail() {
    $(".sentMessage").html('');
    if(g_response) {
        $(".submitBtn").attr('disabled','disabled');

        // var content = "<p><b>Name:</b><br>" + $("#cf_name").val() + "</p>" +
        //     "<p><b>Company:</b><br>" + $("#cf_cname").val() + "</p>" +
        //     "<p><b>Email:</b><br>" + $("#cf_email").val() + "</p>" +
        //     "<p><b>Phone No:</b><br>" + $("#cf_phone").val() + "</p>" +
        //     "<p><b>Subject:</b><br>" + $("#cf_subject").val() + "</p>" +
        //     "<p><b>Message:</b><br>" + $("#cf_message").val() + "</p>" +
        //     "<p><b>Date:</b><br>" + new Date() + "</p>";

        //     var content =  `<style>
        //     body {
        //         font-family: 'Playfair Display', serif;
        //         font-family: 'Roboto', sans-serif;
        //     }
        //     .container {
        //         width: 100%;
        //         background: #E6E6E6;
        //     }
           
        //     .contactSection {
        //         width: 80%;
        //         margin: 0 auto;
        //         background: #fff;
        //         border: 1px solid #ccc;
        //         padding: 27px;
        //         box-sizing: border-box;
        //     }
        //     .contactSection h1 {
        //         color: #cd2122;
        //         font-size: 25px;
        //         margin-bottom: 8px;
        //         margin-top: 0;
        //     }
        //     .contactSection table {
        //         width: 100%;
        //         border-collapse: collapse;
        //         font-size: 14px;
        //     }
        //     .contactSection th, .contactSection td {
        //         padding: 8px;
        //         border: 1px solid #ccc;
        //     }
        //     .cards {
        //         margin-top: 10px;
        //         background-color: #fcefef;
        //         width: 100%;
        //         margin: auto;
        //     }
        //     .cards img {
        //         max-width: 100%;
        //         height: auto;
        //     }
        //     .footer-label {
        //         color: #cd2122;
        //         font-size: 14px;
        //         font-weight: 300;
        //         width: 100%;
        //         text-align: right;
        //         margin-right: 10px;
        //         margin-top: 15px;
        //     }
        //     @media (max-width: 768px) {
        //         .contactSection, .cards {
        //             width: 95%;
        //         }
        //         .contactSection table, .contactSection th, .contactSection td {
        //             display: block;
        //             width: 100%;
        //         }
        //         .contactSection th, .contactSection td {
        //             box-sizing: border-box;
        //             /*padding-left: 50%;*/
        //             position: relative;
        //         }
        //         .contactSection th::before, .contactSection td::before {
        //             position: absolute;
        //             left: 10px;
        //             top: 8px;
        //             white-space: nowrap;
        //         }
        //           .cards img {
        //         max-width: 50%;
               
        //     }
        //        .footer-label {
        //        font-size: 13px;
        //     }
        //     }
        //     @media (max-width: 468px) {
               
        //        .footer-label {
        //        font-size: 11px;
        //        margin-top: 8px;
        //     }
        //     }
        // </style>
  
        // <div class="container">
        //     <div class="header" style="text-align:center;padding-top:20px !important">
        //         <img src="https://boodskap.io/images/assets/boodskap-logo.png"  width="200"  />
        //     </div>
        //     <div class="contactSection">
        //         <h1>Contact Us</h1>
        //         <table>
        //             <tbody>
        //                 <tr>
        //                     <td>Name</td>
        //                     <td>`+$("#cf_name").val()+`</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Company</td>
        //                     <td>`+$("#cf_cname").val()+`</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Email</td>
        //                     <td>`+$("#cf_email").val()+`</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Phone No</td>
        //                     <td>`+$("#cf_phone").val()+`</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Subject</td>
        //                     <td>`+$("#cf_subject").val()+`</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Message</td>
        //                     <td>`+$("#cf_message").val()+`</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Date</td>
        //                     <td>`+new Date()+`</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        //     <div class="cards">
        //         <div style="display: flex;">
        //             <img src="https://boodskap.io/images/powered-by-boodskap.png" />
        //             <label class="footer-label">
        //                 &copy;<span class="currentYear"></span> 2024 All rights reserved
        //             </label>
        //         </div>
        //     </div>
        // </div>`

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
           
            .ticketsapproved {
                width: 80%;
                margin: 0 auto;
                background: #fff;
                border: 1px solid #ccc;
                padding: 27px;
                box-sizing: border-box;
            }
            .ticketsapproved h1 {
                color: #cd2122;
                font-size: 25px;
                margin-bottom: 8px;
                margin-top: 0;
            }
            .ticketsapproved table {
                width: 100%;
                border-collapse: collapse;
                font-size: 14px;
            }
            .ticketsapproved th, .ticketsapproved td {
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
                max-width: 70%;
                height: auto;
            }
            .footer-label {
                color: #cd2122;
                font-size: 14px;
                font-weight: 300;
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
                .ticketsapproved, .cards {
                    width: 95%;
                }
                .ticketsapproved table, .ticketsapproved th, .ticketsapproved td {
                    display: block;
                    width: 100%;
                }
                .ticketsapproved th, .ticketsapproved td {
                    box-sizing: border-box;
                    /*padding-left: 50%;*/
                    position: relative;
                }
                .ticketsapproved th::before, .ticketsapproved td::before {
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
            <div class="ticketsapproved">
                <h1>Contact Us</h1>
                <table>
                    <tbody>
                        <tr>
                            <td class="title">Name</td>
                            <td>`+$("#cf_name").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Company</td>
                            <td>`+$("#cf_cname").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Email</td>
                            <td>`+$("#cf_email").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Phone No</td>
                            <td>`+$("#cf_phone").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Subject</td>
                            <td>`+$("#cf_subject").val()+`</td>
                        </tr>
                        <tr>
                            <td class="title">Message</td>
                            <td>`+$("#cf_message").val()+`</td>
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
            from: $("#cf_email").val(),
            fromName: $("#cf_name").val() ,
            to: 'contactus',
            subject:  $("#cf_subject").val(),
            body_text: content,
            auth : g_response
        }


        $.ajax({
            type: 'POST',
            contentType: "application/json",
            url: '/sendemail',
            data: JSON.stringify(data),
            success: function (response) {
                g_response = null;
                $("#cf_name").val('')
                $("#cf_cname").val('')
                $("#cf_email").val('')
                $("#cf_phone").val('')
                $("#cf_subject").val('')
                $("#cf_message").val('')

                $(".sentMessage").html('<div class="alert alert-success">\n' +
                    '               <strong>Successfully Sent!</strong> We will revert you in 24hrs.' +
                    '            </div>')

                $(".submitBtn").removeAttr('disabled');
                grecaptcha.reset();
            },
            error: function (e) {

                g_response = null;
                $(".sentMessage").html('<div class="alert alert-danger">\n' +
                    '                <strong>Error!</strong> Something went wrong.\n' +
                    '            </div>')
                $(".submitBtn").removeAttr('disabled');
                grecaptcha.reset()
            }
        })
    }
}
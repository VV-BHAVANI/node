var nodemailer = require('nodemailer');
var transporter =nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'bhavani.vanukurus@gmail.com',
        pass:'bhavani&1992_v'
    }
    });
    var mailOptions = {
        from:'bhavani.vanukurus@gmail.com',to:'bhavani@cmritonline.ac.in',subject:'Sending Email using Node.js', text:'That was easy!'};
        transporter.sendMail(mailOptions,function(error, info){
            if(error){
                console.log(error);
            }
            else{
                console.log('Email sent: '+ info.response);
            }
        });
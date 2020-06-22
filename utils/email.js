const nodemailer = require('nodemailer');

const host = 'in-v3.mailjet.com';
const port = 587;
const user = '41712a127e91c683e322bf7eefbffb56';
const pass = 'fdd0c268bd16664db50094be19f95fca';

const sendEmail = async options => {
    
    try {
        const transporter = nodemailer.createTransport({
            host,
            port,
            auth: {
                user,
                pass
            }
        });

        const mailOptions = {
            from: 'pavileanumircea@gmail.com',
            to: 'pavileanumircea@gmail.com',
            subject: options.subject,
            text: 'Email: ' +  options.email + ' Name:' + options.name + '\n' + 'Message:  '
                    + options.message
        }

        const response = await transporter.sendMail(mailOptions);
        return true;
    } 
    
    catch (err) {
        console.log(err);
        return false; 
    }

}

module.exports = sendEmail;
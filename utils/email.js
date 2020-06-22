const nodemailer = require('nodemailer');

const host = 'smtp.gmail.com';
const port = 465;
const user = 'pavileanumircea@gmail.com';
const pass = 'Jaolica1';

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
            from: 'Freelancer Mircea Mailer',
            to: user,
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
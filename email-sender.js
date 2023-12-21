//importer le module
const sendmail = require ('sendmail')();


//Options de l'e-mail
const mailOptions = {
    from: 'monmail@gmail.com',
    to: 'destinataire@exemple.com',
    subject: 'Test Node.js',
    text: 'ceci est un test d\'envoi de mail avec sendmail',
};

//envoie de l'email
sendmail(mailOptions, (error, reply) => {
    if (error) {
        console.error(error);
    } else {
        console.log(reply);
    }
});
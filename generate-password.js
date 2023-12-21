//importer le module generate-password
const generatePassword = require ('generate-password');

//fonction qui génère un mot de passe aléatoire
function randomPassword() {
    //options
    const options = {
        length: 8, //longeur du mot de passe
        numbers: true, //autoriser les chiffres
        symbols: false, //ne pas autoriser les symboles
        uppercase: true, //autoriser les majuscules
    };

    //générer le mot de passe
    const password = generatePassword.generate(options);

    //afficher le mmot de passe dans la console
    console.log('Voici votre mot de passe:', password);
}

randomPassword();
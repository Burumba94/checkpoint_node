const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('Welcome.txt', content, (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log('Le fichier welcome.txt a été créé avec succés!');
});


//2nde tâche créer un serveur

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!!!!!</h1>\n');
    res.end();
})

//port3000
const PORT = 3000;
server.listen(PORT, ()=> {
    console.log("Serveur en cours d'exécution sur http://localhost:3000{PORT}")
});

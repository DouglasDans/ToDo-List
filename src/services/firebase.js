const admin = require('firebase-admin');
const serviceAccount = require('../../webfatec-90c26-firebase-adminsdk-dlcu1-a91cace670.json'); //Json api key

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount) // Logar como adm
});

const db = admin.firestore(); // get Banco
const listaTarefas = db.collection('listaTarefas'); // get tabela

module.exports = {
    listaTarefas,
}
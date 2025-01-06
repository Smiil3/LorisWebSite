const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const nodeMail = require("nodemailer");

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "admin2023",
  database: "mydb"
});

// Connexion à MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL : ' + err.stack);
    return;
  }
  console.log('Connecté à MySQL en tant qu\'id ' + connection.threadId);
});

async function mainMail(name, email,tel, message) {
  const transporter = await nodeMail.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: "ifrukufvevgke@outlook.com",
      pass: "qwerty2023",
    },
  });

  const mailOption = {
    from: 'ifrukufvevgke@outlook.com',
    to: 'eliottco33@gmail.com',
    subject: 'Nouveau Contact - Loris Website',
    html: `<h1>Vous avez reçu un nouveau message de ${name}</h1><br> 
    <p>Email : ${email}</p> <br>
    <p>Téléphone : ${tel}</p> <br>
    <p>Nom : ${name}</p> <br>
    <p>Message : ${message}</p>`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('landing.ejs', {
    x : 'landing',
    title: "Loris - Website"
  });
app.get('/contact', (req, res) => {
  res.render('contact.ejs', {
    x : 'contact',
    title: "Loris - Website"
  })
})
  
});
app.post("/contact", async (req, res, next) => {
  const { names, email, tel, enquiry } = req.body;
  if (names || email || tel || enquiry) {
    try {
      await mainMail(names, email, tel, enquiry);
      res.send("Message Successfully Sent!");
    } catch (error) {
      res.send("Message Could not be Sent");
      console.log(error)
    }
  }
});
app.get('/recuperer-donnees', (req, res) => {
    const query = 'SELECT * FROM customers';
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });
  });

  app.post('/ajouter-donnees', (req, res) => {
    // Récupérer les données envoyées dans le corps de la requête
    const { champ1, champ2} = req.body;
    console.log(champ1, champ2)
  
    // Exécuter la requête SQL pour ajouter des données à la base de données
    var sql = `INSERT INTO customers (name, address) VALUES ('${champ1}', '${champ2}')`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  
  app.post('/supprimer-donnees', (req, res) => {
    // Récupérer les données envoyées dans le corps de la requête
    const idAASupprimer = 15//req.body.id;

    console.log(`Valeur1${idAASupprimer}`)
        var sql = `DELETE FROM customers WHERE name = 'Valeur${idAASupprimer}'`;
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
  });
// Servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

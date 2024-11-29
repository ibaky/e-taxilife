import express from 'express';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import cors from 'cors';

// Initialiser l'application Express
const app = express();
const PORT = 5000; // Ou un autre port si nécessaire

// Utiliser body-parser pour récupérer les données du formulaire
app.use(bodyParser.json());
app.use(cors()); // Permet de gérer les requêtes cross-origin

// Créer une nouvelle base de données SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erreur lors de la création de la base de données', err);
  } else {
    console.log('Base de données SQLite connectée');
  }
});

// Créer une table si elle n'existe pas déjà
db.run(`CREATE TABLE IF NOT EXISTS reservations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  lastName TEXT,
  phone TEXT,
  startAddress TEXT,
  endAddress TEXT,
  passengers INTEGER,
  luggage INTEGER,
  date TEXT
)`);

// Route POST pour recevoir les données du formulaire
app.post('/api/reservation', (req, res) => {
  const { name, lastName, phone, startAddress, endAddress, passengers, luggage, date } = req.body;

  // Insérer les données dans la table "reservations"
  const stmt = db.prepare(`
    INSERT INTO reservations (name, lastName, phone, startAddress, endAddress, passengers, luggage, date)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(name, lastName, phone, startAddress, endAddress, passengers, luggage, date, function (err) {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de l\'enregistrement de la réservation' });
    }
    res.status(201).json({ message: 'Réservation enregistrée avec succès', id: this.lastID });
  });

  stmt.finalize();
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur le port ${PORT}`);
});

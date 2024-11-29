import type { NextApiRequest, NextApiResponse } from 'next';

// Cette fonction gère la soumission des réservations
const handleReservation = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Récupérer les données du formulaire
    const { name, lastName, phone, startAddress, endAddress, passengers, luggage, date } = req.body;

    // Validation basique
    if (!name || !lastName || !phone || !startAddress || !endAddress || !passengers || !luggage || !date) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    }

    // Logique pour enregistrer les données dans une base de données (ici, on simule l'enregistrement)
    console.log('Réservation reçue:', req.body);

    // Retourner une réponse de succès
    return res.status(200).json({ message: 'Réservation enregistrée avec succès' });
  } else {
    // Si ce n'est pas une requête POST, on retourne une erreur 405 (Method Not Allowed)
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }
};

export default handleReservation;

let salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste;
// Ecrivez votre code ici
salaireMensuel = 500;
loyer = (salaireMensuel * 30) / 100;
nourriture = (salaireMensuel * 20) / 100;
transport = (salaireMensuel * 10) / 100;
autresDepenses = 75;
totalDepenses = (loyer  + nourriture + transport + autresDepenses);
reste = (salaireMensuel - totalDepenses);

// Ne pas modifier le code ci-dessous
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};

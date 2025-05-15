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

// verification
if (reste >= 100){
  console.log("Budget bien géré")
}else{
  console.log("Attention, budget serré")
}

// ajout de la categorie loisirs
let loisirs = (salaireMensuel * 15) / 100;
totalDepenses = loyer + nourriture + transport + autresDepenses ;
reste = salaireMensuel - totalDepenses;

//Calcule du pourcentage du salaire mensuel utilisé pour chaque catégorie de dépense
console.log(`Loyer: ${(loyer / salaireMensuel * 100)}%`);
console.log(`Nourriture: ${(nourriture / salaireMensuel * 100)}%`);
console.log(`Transport: ${(transport / salaireMensuel * 100)}%`);
console.log(`Autres dépenses: ${(autresDepenses / salaireMensuel * 100)}%`);
console.log(`Loisirs: ${(loisirs / salaireMensuel * 100).toFixed(1)}%`);
console.log(`Total dépenses: ${(totalDepenses / salaireMensuel * 100)}%`);
console.log(`Reste: ${reste.toFixed(2)}\n`);

// augmentation de 10 du salaire
salaireMensuel *= 1.10;

//recalucle des valeurs
loyer = salaireMensuel * 0.30;
nourriture = salaireMensuel * 0.20;
transport = salaireMensuel * 0.10;
autresDepenses = 75;
loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses;
reste = salaireMensuel - totalDepenses;

// condition pour vérifier si les dépenses totales dépassent 90% du salaireMensuel
if (totalDepenses > salaireMensuel * 0.90) {
  console.log("Dépenses trop élevées, réduisez vos charges");
} else {
  console.log("Dépenses raisonnables");
}




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

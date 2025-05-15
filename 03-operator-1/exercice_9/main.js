let paul, marie, eric, clair, madameMukuna, joseph, sarah;
// Ecrivez votre code ici

// Montant total du patrimoine
const totalPatrimoine = 60000000 + 40000000 + 20000000;

// % par categorie
const pourcentPremiereCategorie = 0.75;
const pourcentdeuxiemeCategorie = 0.25;

// Montant à repartir par categorie
const montantPremiereCategorie = totalPatrimoine * pourcentPremiereCategorie;
const montantadeuxiemeCategorie = totalPatrimoine * pourcentdeuxiemeCategorie;

// part heritage des enfants vivant (Paul et Marie)
paul = montantPremiereCategorie / 3;
marie = montantPremiereCategorie / 3;

// part heritage de eric et clair (enfants de alain qui est decédé)
eric = (montantPremiereCategorie / 3) / 2;
clair = (montantPremiereCategorie / 3) / 2;

// part de madameMUKUNA , joseph et sarah
madameMukuna = montantadeuxiemeCategorie / 3;
joseph = montantadeuxiemeCategorie / 3;
sarah = montantadeuxiemeCategorie / 3;


// Ne pas modifier le code ci-dessous
module.exports = {
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah,
};

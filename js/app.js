const fourmis = new Fourmi(1, 0.9)

console.log('Class Fourmi')
console.log(fourmis.dormir())
console.log(fourmis.manger())

const scout = new Eclaireuse(20)

console.log("\nClass Eclaireuse")
console.log(scout.explorer())

const larves = new Larve("éruciforme")

console.log("\nClass Larve")
console.log(larves.metamorphosis())

const males = new Male()

console.log("\nClass Mâle")
console.log(males.feconder())
console.log(males.voler())

const femelles = new Femelle()

console.log("\nClass Femelle")
console.log(femelles.chercherNourriture())

const workeuse = new Ouvriere("legionnaire")

console.log("\nClass Ouvrière")
console.log(workeuse.creuserGalerie())
console.log(workeuse.nettoyageGallerie())

const princesse = new Princess()

console.log("\nClass Princess")
console.log(princesse.voler())
console.log(princesse.volNuptiale())

const queen = new Reine(30, 1, 0.9)

console.log("\nClass Reine")
console.log(queen.pondre())

const soldats = new Soldat()

console.log("\nClass Soldat")
console.log(soldats.attaquer())

const nourice = new Nourrice()

console.log("\nClass Nourrice")
console.log(nourice.nourris())
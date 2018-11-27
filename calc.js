const operations = require('./operations.js');
const readline = require('readline');
const verifications = require('./verification.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Calc.js

Bienvenue à l'application Node.js Calculator ! 
Version: 1.0.0.

Usage: Il sera demandé à l'utilisateur d'entrer deux nombres,
puis de sélectionner l'opération de son choix
`);

rl.question('Entrez un premier nombre: ', (x) => {
    rl.question('Entrez un second nombre: ', (y) => {
        rl.question(`
  Veuillez sélectionner une des options suivantes:
  [1] Addition (+)
  [2] Subtraction (-)
  [3] Multiplication (*)
  [4] Division (/)

  Enter your choice: `, (choice) => {

            // Verifier que les valeurs saisies sont valides (nombres)
            if ( verifications.verifierSiNombre(x, y) ) {          

                switch (choice) {
                    case '1':
                        console.log(`La somme de ${x} et ${y} est ${operations.additioner(x, y)}.`);
                        break;
                    case '2':
                        console.log(`La difference entre ${x} et ${y} est ${operations.soustraire(x, y)}.`);
                        break;
                    case '3':
                        console.log(`Le produit de ${x} et ${y} est ${operations.multiplier(x, y)}.`);
                        break;
                    case '4':
                    // Verifier que le diviseur est different de zero (0)
                    if (verifications.verifierValeurNonNull(y)) {
                        console.log(`La division entre ${x} et ${y} est ${operations.diviser(x, y)}.`);
                    }else{
                        console.log(`La division d'un nombre par zero est impossible.`);
                    }
                    break;
                    default:
                        console.log('Veuillez redémarrer le programme et choisir un nombre entre 1 et 2');
                        break;
                }
                //rl.close();
            } else {
                console.log('Erreur... L\'application  ne supporte que les chiffres, Reessayer SVP');

            }
            rl.close();

        });
    });
});
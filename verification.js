
const verifierSiNombre = function (x, y) {
    if (isNaN(x) || isNaN(y) ) {
        return false;
      } else{
        return true;
      }
}

const verifierValeurNonNull = function (y) {
    // var verif = y;
    if (Number(y) !== 0 ) {
        // console.log('vrai');
        return true;
      } else{
        // console.log('faux');
        return false;
      }
}

// Rend les fonctions disponible pour être facilement appelées ailleurs dans le programme
module.exports = {
    verifierSiNombre,
    verifierValeurNonNull
}
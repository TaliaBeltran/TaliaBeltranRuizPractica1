var NumeroPrimo = function (Numero) {
    if (Numero == 0 || Numero == 1 || Numero == 4)
        return false;
    for (var x = 2; x < Numero / 2; x++) {
        if (Numero % x == 0)
            return false;
    }
    return true;
};
var numeroAProbar = [2, 21, 83];
numeroAProbar.forEach(function (Numero) {
    console.log("%d", Numero, NumeroPrimo(Numero));
});

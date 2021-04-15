const NumeroPrimo = Numero =>  {
    if (Numero == 0 || Numero == 1 || Numero == 4) 
    return false;
    for (let x:number = 2; x < Numero / 2; x++) {
        if (Numero % x == 0) 
        return false;
    }
    return true;
}

const numeroAProbar = [2, 21, 83];

numeroAProbar.forEach(Numero => {
    console.log("%d", Numero, NumeroPrimo(Numero));
});


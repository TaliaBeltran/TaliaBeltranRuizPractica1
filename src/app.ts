const numbPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

const numerosDeEntrada = [2, 21, 83];

numerosDeEntrada.forEach(numero => {
	console.log("%d", numero, numbPrimo(numero));
});


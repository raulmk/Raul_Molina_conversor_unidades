function opcion_usuari(): number {
    let opcio_usuari = game.askForNumber("1- C a F | 2- F a C | 3- Ultimo calculo | 0- Salir", 1)
    return opcio_usuari
}

function num_a_convertir(): number {
    let num = game.askForNumber("Numero a converir:")
    return num
}

let cerrar = false
function Main(opcio: number) {
    let num_convertir: number;
    let convertido: number;
    let cerrar: boolean;
    if (opcio == 1) {
        num_convertir = num_a_convertir()
        convertido = num_convertir * 9 / 5 + 32
        game.showLongText("" + Math.roundWithPrecision(convertido, 2) + "C", DialogLayout.Bottom)
    } else if (opcio == 2) {
        num_convertir = num_a_convertir()
        convertido = (num_convertir - 32) * 5 / 9
        game.showLongText("" + Math.roundWithPrecision(convertido, 2) + "F", DialogLayout.Bottom)
    } else if (opcio == 0) {
        cerrar = true
        game.gameOver(false)
    } else {
        game.showLongText("No existe esa opción", DialogLayout.Top)
    }
    
}

while (!cerrar) {
    Main(opcion_usuari())
}

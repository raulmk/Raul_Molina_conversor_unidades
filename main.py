def opcion_usuari():
    opcio_usuari = game.ask_for_number("""1- C a F | 2- F a C | 3- Ultimo calculo | 0- Salir""", 1) 
    return opcio_usuari

def num_a_convertir():
    num = game.ask_for_number("Numero a converir:")
    return num

cerrar = False

def Main(opcio):
    if (opcio== 1):
        num_convertir = num_a_convertir()
        convertido = (num_convertir * 9/5) + 32
        game.show_long_text(str(Math.round_with_precision(convertido, 2)) + "C", DialogLayout.BOTTOM)
    elif(opcio == 2):
        num_convertir = num_a_convertir()
        convertido = (num_convertir - 32) * 5/9
        game.show_long_text(str(Math.round_with_precision(convertido, 2)) + "F", DialogLayout.BOTTOM)
    elif(opcio == 0):
        cerrar = True
        game.game_over(False)
    else:
        game.show_long_text("No existe esa opción", DialogLayout.TOP)

while(not cerrar):
    Main(opcion_usuari())

let recompensas = document.querySelector("#recompensas").value


function elegirRecompensa() {
    //Esto nos permite separar el texto de todas las recompensas en lineas donde se encuentra cada recompensa por separado
    const lineas = recompensas.split("\n").filter(linea => linea.trim() !== "")

    // math.floor redondea hacia el numero hacia abajo al mas cercano y math.random genera un numero aleatorio entre 0 y 1
    //al multiplicarlo por el tamaño de lineas x podemos obtener numeros aleatorios entre 0 y x
    const numeroAleatorio= Math.floor(Math.random() * lineas.length)

    document.querySelector("#resultado").textContent= lineas[numeroAleatorio]
}
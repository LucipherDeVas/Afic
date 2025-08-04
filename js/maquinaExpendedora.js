function elegirRecompensa() {
    let monedas = document.querySelector("#monedas").textContent

    //Caso que nos permite usar la maquina solo cuando hayan monedas para ello
    if (monedas-10 >=0) {
        let recompensas = document.querySelector("#recompensas").value
        //Esto nos permite separar el texto de todas las recompensas en lineas donde se encuentra cada recompensa por separado
        const lineas = recompensas.split("\n").filter(linea => linea.trim() !== "")

        // math.floor redondea hacia el numero hacia abajo al mas cercano y math.random genera un numero aleatorio entre 0 y 1
        //al multiplicarlo por el tamaño de lineas x podemos obtener numeros aleatorios entre 0 y x
        const numeroAleatorio = Math.floor(Math.random() * lineas.length)

        document.querySelector("#resultado").textContent = lineas[numeroAleatorio]
        console.log(monedas)
        //LOGICA PARA RESTAR LAS MONEDAS DEL TRAGAMONEDAS//
        monedas-=10
        document.querySelector("#monedas").textContent = monedas

        //actualiza las monedas en el localstorage
        localStorage.setItem("token", monedas)
    }
    else{
        document.querySelector("#resultado").textContent = "❗❗No se puede usar la maquina, faltan monedas"
    }
}   

function darMonedas(){
    const cantidadMonedas = parseInt(localStorage.getItem("token"))
    document.getElementById("monedas").innerHTML= cantidadMonedas
}

document.addEventListener("DOMContentLoaded", function () {
  darMonedas();
});
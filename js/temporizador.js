//Esto me permite establecer los tiempos al temporizador y dirige hacia el boton iniciar de manera suave
function enfoque1() {

    //Si el temporizador no esta iniciado que realize lo siguiente
    if (iniciado === false) {
        tiempo = document.getElementById("tiempo2").innerHTML = "00:15:00"
        document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
    }
    else {
        alert("No puedes cambiar el tiempo de tu sesión de enfoque, concetrate tu puedes")
    }
}
function enfoque2() {
    if (iniciado === false) {
        tiempo = document.getElementById("tiempo2").innerHTML = "00:25:00"
        document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
    }
    else {
        alert("No puedes cambiar el tiempo de tu sesión de enfoque, concetrate tu puedes")
    }
}
function enfoque3() {
    if (iniciado === false) {
        tiempo = document.getElementById("tiempo2").innerHTML = "00:30:00"
        document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
    }
    else {
        alert("No puedes cambiar el tiempo de tu sesión de enfoque, concetrate tu puedes")
    }
}
function enfoque4() {
    if (iniciado === false) {
        tiempo = document.getElementById("tiempo2").innerHTML = "00:45:00"
        document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
    }
    else {
        alert("No puedes cambiar el tiempo de tu sesión de enfoque, concetrate tu puedes")
    }
}
function enfoque5() {
    if (iniciado === false) {
        tiempo = document.getElementById("tiempo2").innerHTML = "01:00:00"
        document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
    }
    else {
        alert("No puedes cambiar el tiempo de tu sesión de enfoque, concetrate tu puedes")
    }
}

//Variable para que no se aprete multiples veces el tiempo
let iniciado = false
//Variable la cual me permite parar el tiempo
let parar = true

// variable para ver de cuanto tiempo duro la sesion
let sesionInicial = null;

//Funcion que permite poner en marcha el temporizador
function iniciar() {
    parar = false

    //revisa si la sesion no fue iniciada lo cual me permite almacenar el tiempo principal
    if (!sesionInicial) {
        sesionInicial = document.getElementById("tiempo2").innerHTML;
    }

    //Esto me permite solamente iniciar una sola vez el temporizador
    if (iniciado === false) {
        iniciado = true

        //Nos crea un intervalo
        intervalo = setInterval(() => {

            //Este caso nos permite ver si la variable parar esta activada o no lo que indica que el usuario uso el boton
            if (parar === false) {
                tiempo = document.getElementById("tiempo2").innerHTML

                let [horas, minutos, segundos] = tiempo.split(':')

                //Transformar de string a entero
                horas = parseInt(horas, 10)
                minutos = parseInt(minutos, 10)
                segundos = parseInt(segundos, 10)

                //Caso borde para que los numeros no sean negativos
                if (horas > 0 || minutos > 0 || segundos > 0) {
                    segundos--
                    if (segundos < 0) {
                        segundos = 59
                        minutos--

                        if (minutos < 0) {
                            minutos = 59
                            horas--

                            if (horas < 0) {
                                iniciado = false
                                parar = true
                                recibirRecompensa(sesionInicial)
                                sesionInicial = null
                                clearInterval(intervalo)
                            }
                        }

                    }

                    //Transformar de entero a string
                    horas = horas.toString().padStart(2, '0')
                    minutos = minutos.toString().padStart(2, '0')
                    segundos = segundos.toString().padStart(2, '0')

                    document.getElementById("tiempo2").innerHTML = horas + ":" + minutos + ":" + segundos

                }
            }

            //El 1000 es porque es 1 seg
        }, 1000)

        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!FALTA LLAMAR A LA FUNCION QUE NOS DA LOS TOKENS DE RECOMPENSA!!!!!!!!!!!!!!
        //ADEMAS DE AGREGAR FRASES MOTIVADORAS CADA 15 MIN :)
    }


}

//funcion para pausar
function pausa() {
    parar = true
}

localStorage.setItem("token", 0)

function recibirRecompensa(sesion) {

    cantidadToken = parseInt(localStorage.getItem("token"))

    if (sesion === "01:00:00") {
        cantidadToken += 13
    }
    else if (sesion === "00:45:00") {
        cantidadToken += 10
    }
    else if (sesion === "00:30:00") {
        cantidadToken += 8
    }
    else if (sesion === "00:25:00") {
        cantidadToken += 6
    }
    else if (sesion === "00:15:00") {
        cantidadToken += 3
    }

    localStorage.setItem("token", cantidadToken)
}
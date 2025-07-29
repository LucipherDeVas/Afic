//Esto me permite establecer los tiempos al temporizador y dirige hacia el boton iniciar de manera suave
function tiempo1() {
    tiempo = document.getElementById("tiempo2").innerHTML = "00:15:00"
    document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
}
function tiempo2() {
    tiempo = document.getElementById("tiempo2").innerHTML = "00:25:00"
    document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
}
function tiempo3() {
    tiempo = document.getElementById("tiempo2").innerHTML = "00:30:00"
    document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
}
function tiempo4() {
    tiempo = document.getElementById("tiempo2").innerHTML = "00:45:00"
    document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
}
function tiempo5() {
    tiempo = document.getElementById("tiempo2").innerHTML = "01:00:00"
    document.getElementById("iniciar").scrollIntoView({ behavior: "smooth" })
}

//Variable para que no se aprete multiples veces el tiempo
let iniciado = false

function iniciar() {

    if (iniciado === false) {
        iniciado = true
        intervalo = setInterval(() => {

            tiempo = document.getElementById("tiempo2").innerHTML

            let [horas, minutos, segundos] = tiempo.split(':')

            //Transformar de string a entero
            horas = parseInt(horas, 10)
            minutos = parseInt(minutos, 10)
            segundos = parseInt(segundos, 10)

            //Caso borde para que los numeros no sean negativos
            if(horas>0 || minutos>0 || segundos>0){
                segundos--
            if (segundos < 0) {
                segundos = 59;
                minutos--;

                if (minutos < 0) {
                    minutos = 59;
                    horas--;

                    if (horas < 0) {
                        iniciado = false
                        clearInterval(intervalo);
                    }
                }

            }

            //Transformar de entero a string
            horas = horas.toString().padStart(2, '0')
            minutos = minutos.toString().padStart(2, '0')
            segundos = segundos.toString().padStart(2, '0')

            document.getElementById("tiempo2").innerHTML = horas + ":" + minutos + ":" + segundos

            }

            //Logica del reloj
            
            //El 1000 es porque es 1 seg
        }, 1000)
    }


}


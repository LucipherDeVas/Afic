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
let contador = 0

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
                console.log(tiempo)

                let [horas, minutos, segundos] = tiempo.split(':')

                //Transformar de string a entero
                horas = parseInt(horas, 10)
                minutos = parseInt(minutos, 10)
                segundos = parseInt(segundos, 10)

                if (segundos === 0 && minutos === 0 && horas === 0) {
                    iniciado = false
                    parar = true
                    recibirRecompensa(sesionInicial)
                    sesionInicial = null
                    clearInterval(intervalo)
                    return
                }

                segundos--
                contador++
                fraseMotivadora(contador)
                if (segundos < 0) {
                    segundos = 59
                    minutos--

                    if (minutos < 0) {
                        minutos = 59
                        horas--
                    }

                }

                //Transformar de entero a string
                horas = horas.toString().padStart(2, '0')
                minutos = minutos.toString().padStart(2, '0')
                segundos = segundos.toString().padStart(2, '0')

                document.getElementById("tiempo2").innerHTML = horas + ":" + minutos + ":" + segundos


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

function fraseMotivadora(contador) {
    if (contador % 900 === 0) {
        const frases = [
            "La vida es muy simple, pero insistimos en hacerla complicada. – Confucio",
            "El éxito es ir de fracaso en fracaso sin perder el entusiasmo. – Winston Churchill",
            "Haz lo que puedas, con lo que tengas, donde estés. – Theodore Roosevelt",
            "La felicidad no es algo hecho. Proviene de tus propias acciones. – Dalai Lama",
            "No cuentes los días, haz que los días cuenten. – Muhammad Ali",
            "Sé el cambio que deseas ver en el mundo. – Mahatma Gandhi",
            "Nuestra mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos. – Confucio",
            "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer. – John Wooden",
            "El futuro pertenece a quienes creen en la belleza de sus sueños. – Eleanor Roosevelt",
            "Cree que puedes y ya estás a medio camino. – Theodore Roosevelt",
            "El conocimiento habla, pero la sabiduría escucha. – Jimi Hendrix",
            "El único modo de hacer un gran trabajo es amar lo que haces. – Steve Jobs",
            "El genio se compone de un 1% de inspiración y un 99% de transpiración. – Thomas Edison",
            "Cuando cambias la forma en que miras las cosas, las cosas que miras cambian. – Wayne Dyer",
            "El que tiene un porqué para vivir puede soportar casi cualquier cómo. – Friedrich Nietzsche",
            "Solo una cosa convierte en imposible un sueño: el miedo a fracasar. – Paulo Coelho",
            "La disciplina es el puente entre metas y logros. – Jim Rohn",
            "Todo lo que puedas imaginar es real. – Pablo Picasso",
            "No soy producto de mis circunstancias, soy producto de mis decisiones. – Stephen Covey",
            "Quien en verdad quiere algo, encuentra un camino; quien no, encuentra una excusa. – Proverbio árabe",
            "Haz de cada día tu obra maestra. – John Wooden",
            "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad. – Séneca",
            "Nunca es demasiado tarde para ser lo que podrías haber sido. – George Eliot",
            "Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre. – Mahatma Gandhi",
            "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. – Albert Schweitzer",
            "La mente es todo. En lo que piensas te conviertes. – Buda",
            "No hay caminos para la paz, la paz es el camino. – Mahatma Gandhi",
            "No mires el reloj; haz lo que él hace, sigue adelante. – Sam Levenson",
            "La adversidad revela el genio, la prosperidad lo oculta. – Horacio",
            "La voluntad encuentra el camino. – Orison Swett Marden",
            "Prefiero morir de pasión que de aburrimiento. – Vincent van Gogh",
            "El que domina a los otros es fuerte; el que se domina a sí mismo es poderoso. – Lao Tsé",
            "Piensa como un hombre de acción, actúa como un hombre de pensamiento. – Henri Bergson",
            "Las oportunidades no pasan, las creas. – Chris Grosser",
            "El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene. – Ralph Waldo Emerson",
            "Cuanto más hacemos, más podemos hacer. – William Hazlitt",
            "El miedo es el enemigo de la lógica. – Frank Sinatra",
            "Nadie puede hacerte sentir inferior sin tu consentimiento. – Eleanor Roosevelt",
            "No hay elevación sin lucha. – Booker T. Washington",
            "No cuentes los días, haz que los días cuenten. – Muhammad Ali",
            "Todo parece imposible hasta que se hace. – Nelson Mandela",
            "No sueñes tu vida, vive tu sueño. – Anónimo",
            "Solo aquellos que se atreven a tener grandes fracasos terminan logrando grandes éxitos. – Robert F. Kennedy",
            "El que no está ocupado naciendo, está ocupado muriendo. – Bob Dylan",
            "Cae siete veces, levántate ocho. – Proverbio japonés",
            "Haz lo necesario para lograr tu más ardiente deseo, y lo lograrás. – Ludwig van Beethoven",
            "El aprendizaje nunca agota la mente. – Leonardo da Vinci",
            "Cuando piensas en positivo, cosas buenas suceden. – Matt Kemp",
            "Empieza donde estás, usa lo que tienes, haz lo que puedas. – Arthur Ashe"
        ];

        const numeroAleatorio = Math.floor(Math.random() * frases.length)

        const [fraseMotivadora, autor] = frases[numeroAleatorio].split("-")

        document.getElementById("frase").innerHTML = fraseMotivadora
        document.getElementById("autor").innerHTML = autor
        console.log(fraseMotivadora, autor)
    }
}
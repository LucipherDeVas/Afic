const recompensas = [
      // 20 Básicas
      "🍫 Comer un chocolate",
      "⏱️ 10 minutos de descanso",
      "🎵 Escuchar tu canción favorita",
      "👟 Salir a caminar 15 minutos",
      "📱 15 minutos de celular libre",
      "🍵 Tomar un té o café especial",
      "🎮 Jugar una partida rápida",
      "📺 Ver un video divertido",
      "🧘 Respirar y estirarse 5 minutos",
      "💬 Hablar con un amigo",
      "📖 Leer una página de un libro que te guste",
      "🎨 Dibujar o hacer algo creativo por 15 minutos",
      "😴 Siesta breve (máx. 15 minutos)",
      "🥨 Comer un snack favorito",
      "😂 Ver memes sin remordimiento",
      "🧠 Video motivacional de 5 minutos",
      "🧩 Usar 15 minutos en tu hobby favorito",
      "🍽️ Comer algo rico que prepares tú",
      "📚 Estudiar algo curioso que no sea obligatorio",
      "📆 Planear algo bonito para el finde",

      // 7 Premium
      "🎬 Salida al cine",
      "🕹️ Comprar un juego (máx. $5.000 CLP)",
      "🍕 Pedir comida por delivery",
      "🌅 Ir a ver el atardecer o paseo libre",
      "🛍️ Comprar algo que te guste (ropa, accesorio)",
      "🧩 Tarde sin estudiar, descanso total",
      "🎉 Sesión de juego sin límites por una tarde",

      // 5 Comodines
      "✨ ¡Saca una recompensa adicional hoy!",
      "🔁 Pasa directamente a una recompensa premium",
      "🧘 Día libre de presión: haz lo que puedas sin culpa",
      "🎁 Regala esta recompensa a alguien que lo necesite",
      "🏆 No hay premio físico, pero sí orgullo: ¡estás haciendo un gran trabajo!"
    ];

    function girarRecompensa() {
      const i = Math.floor(Math.random() * recompensas.length);
      const resultado = document.getElementById("resultado");
      resultado.textContent = recompensas[i];
    }
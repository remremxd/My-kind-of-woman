// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Oh, baby", time: 5 },
  { text: "Oh, man", time: 10 },
  { text: "You're making me crazy", time: 15},
  { text: "Really driving me mad", time: 20 },
  { text: "And that's alright with me", time: 26},
  { text: "There's really no fuss", time: 30 },
  { text: "As long as you're next to me :)", time: 36 },
  { text: "Just the two of us <3", time: 41 },
  { text: "(Te amo)", time: 43 },
  { text: "You're my, my, my,", time: 48 },
  { text: "My kind of woman", time: 49 },
  { text: "My, Oh, My", time: 59 },
  { text: "What a girl :)))", time: 60 },
  { text: "You're my, my, my,", time: 69 },
  { text: "My kind of woman", time: 73 },
  { text: "And I'm down on my hands and knees begging you: please baby,", time: 79 },
  { text: "Please, show me your world <33", time: 84 },
  { text: "Oh, brother", time: 94 },
  { text: "Sweetheart", time: 97 },
  { text: "I'm feeling so tired", time: 104 },
  { text: "Really falling apart", time: 110 },
  { text: "And it just don't make sense to me", time: 114 },
  { text: "I really don't know", time: 120 },
  { text: "Why you stick right next to me", time: 125 },
  { text: "Wherever I go", time: 131 },
  { text: "You're my, my, my,", time: 137 },
  { text: "My kind of woman", time: 139 },
  { text: "My, Oh, My", time: 147 },
  { text: " what a girl (te adoro)", time: 151 },
  { text: "You're my, my, my, my kind of woman", time: 157},
  { text: "And I'm down on my hands and knees", time: 168 },
  { text: "Begging you: please baby, please show me your world :D", time: 171 },
]

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
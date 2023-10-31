let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //Se uso la funcion window.onload para darse el evento de producirse una funcion cuando una pagina este totalmente cargada//
  let randomNumber =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]; //Se creo una variable randomNumber con cada elemento de array concatenado ademas de los indices producidos de forma aleatoria mediante math.random()
  document.getElementById("excuse").innerHTML = randomNumber; //En este caso se utilizo document.getElementById() para llamar a un elemento HTML mediante el ID y modificar su valor a randomNumber mediante .innerHTML. Todo para que se mostrara el resultado en la pagina.
  console.log(randomNumber); //simplemente se imprimio la variable randomNumber que contenia el array concatenado y, por lo tanto, la excusa aleatoria.
};

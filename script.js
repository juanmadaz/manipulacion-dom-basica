const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}
//h1 {color: red}
// .parrafito { ... }
// #pid { ... }

// const h1 = document.querySelector('h1'); // query selector para seleccionar por nombre de etiqueta
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input')

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'hola chiqui'; //cambia el codigo HTML
// h1.innerText = 'hola chiqui'; //cambia solo el texto
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');
// h1.classList.add('rojo');
// h1.classList.remove('verde');

// input.value = "456";

// const img = document.createElement('img');
// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
// console.log(img);

// pid.innerText = "";
// pid.appendChild(img);
// pid.replaceWith(img);
// pid.removeChild(img);
// pid.replaceChildren(img);


//querySelector solamente selecciona el primer selector que coincida con el parámetro
// console.log(document.querySelector('h3'));

//querySelector acepta class pero hay que poner los puntos de clase adentro de las comillas
// console.log(document.querySelector('.h3-danger'));

//querySelector acepta id también, anteponiendo el numeral
// console.log(document.querySelector("#identificado"));

//document.getElementById solamente selecciona elementos por ID, sin necesidad de utilizar el #
// console.log(document.getElementById("identificado"));

//document.querySelectorAll selecciona todos los elementos que cumplan con las especificaciones dentro de los paréntesis
// console.log(document.querySelectorAll(".h3-danger"));
// console.log(document.querySelectorAll("h3"));


// const primerH3 = document.getElementById("primer-h3")

//Usando textContent no podemos agregar etiquetas de HTML
// primerH3.textContent = "Hola gente del Mundo, modificado desde JS"

//Usando innerHTML podemos agregar etiquetas
// primerH3.innerHTML = "<b><i>Texto con innerHTML, desde JS<i/><b/>"

//Podemos añadir clases a HTML desde JS
//primerH3.classList.add("h3-danger")


// const lista = document.getElementById("lista")

//creando <li>
// const li = document.createElement("li")

// li.textContent = 'Primer elemento'

//añadiendo el li a la lista
// lista.appendChild(li)


//renderizar elementos de un array como li usando JS!

//usando textContent con forEach

// elementos.forEach(item => {
  //   console.log(item);
  //   const li = document.createElement('li')
  //   li.textContent = item;
  //   lista.appendChild(li)
  // })
  
  // //usando innerHTML con forEach
  // elementos.forEach(item => {
    //   lista.innerHTML += `<li>${item}</li>`
    // })
    
    //Los métodos anteriores tienen un problema, el Reflow, esto es que todos los componentes de la página se tienen que renderizar nuevamente desde 0 cada vez que hay un cambio
    
    //Fragment soluciona el Reflow
    
  // const lista = document.getElementById('lista')
  
  // const elementos = ['primero', 'segundo', 'tercero']
  
  //hay dos formas de crear Fragments

  // const fragment = new DocumentFragment()
  // const fragment = document.createDocumentFragment()
  
//ahora usamos fragment para el forEach()


// elementos.forEach(item => {
//   const li = document.createElement('li')

//   li.textContent = item

//   fragment.appendChild(li)

// })

//recién acá renderizamos 
// lista.appendChild(fragment)



//esto se hace con createElement

// const lista = document.getElementById('lista')

// const arrayList = [1,2,3,4,5,6]

// const fragment = document.createDocumentFragment()

// arrayList.forEach(item => {
//   const li = document.createElement('li')

//   li.classList.add('list')

//   const b = document.createElement('b')

//   b.textContent = "Nombre: "

//   li.appendChild(b)

//   const span = document.createElement('span')

//   span.classList.add('text-danger')
//   span.textContent = item
//   li.appendChild(span)

//   fragment.appendChild(li)

// })

// lista.appendChild(fragment)


//ahora usamos innerHTML

// let fragment = ""

// arrayList.forEach(item => {
//   fragment += `
//     <li class="list">
//       <b>Nombre: </b> <span class="text-danger">${item}</span>
//     </li>
//   `
// })

// lista.innerHTML = fragment


//el tercer método es el que hay que utilizar


// const template = document.getElementById('template')

// const fragment = document.createDocumentFragment()

// arrayList.forEach(item => {
//   template.querySelector('.list span').textContent = item

//   const clone = template.cloneNode(true)

//   fragment.appendChild(clone)

// })

// items.forEach( item => {
//   const li = document.createElement('li')
//   li.classList.add('list')
  
//   const b = document.createElement('b')
//   b.textContent = 'Nombre: '
//   li.appendChild(b)

//   const span = document.createElement('span')
//   span.classList.add('text-danger')
//   span.textContent = item
//   li.appendChild(span)

//   fragment.appendChild(li)
// })

// lista.appendChild(fragment)

//Da este resultado

// <li class="list">
//   <b>Nombre: </b> <span class="text-danger">description...</span>
// </li>


//Mismo resultado con innerHTML
// const lista = document.getElementById('lista')
// const items = [1,2,3,4,5,6]

// let fragment = ""

// items.forEach(item => {
//   fragment += `
//   <li class="list">
//     <b>Nombre: </b> <span class="text-danger">${item}</span>
//   </li>` 
// })

// lista.appendChild(fragment)



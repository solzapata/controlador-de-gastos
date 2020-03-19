/*Volumen de caja
Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.
const size = { width: 2, length: 5, height: 1 } 
getBoxVolume(size) // returns 10*/
const size = {                                  // size es un objeto con 3 keys 
    width: 2, 
    length: 5, 
    height: 1 
}

const getBoxVolume = (size) => {
    const {width, height, length} = size;       //lo desestructuro, una variable p cada key

    return (width * height * length);
}



/*Redondeo
Hacer una función que dado un número, devuelva un objeto con el número redondeado hacia abajo (Math.floor), hacia arriba (Math.ceil) y dependiendo de su punto flotante (Math.round)
round(13.3) //  returns { floor: 13, ceil: 14, round: 13 }*/
const round = x => {
  const rounding = {
    floor: Math.floor(x),
    ceil: Math.ceil(x),
    round: Math.round(x),
  }

  const {floor, ceil, round} = rounding;

  return rounding 
}
 


/*Unión de objetos
Crear una función que dos objetos como argumentos, y devuelva un objeto que sea la unión de ambos. Es decir, debe contener las propiedades de ambos objetos. Para aquellas propiedades que están compartidas entre ambos, como un objeto no puede tener propiedades repetidas, se debe priorizar el objeto del primer parámetro.
const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}
merge(info1, info2) // returns {a: 1, b: 2, c: 3, d: 4}*/
const info1 = {
  a: 1, 
  b: 2, 
  c: 3
}
const info2 = {
  d: 4, 
  b: 5
}

const merge = (info1, info2) => {
  let resultado = {};                       //objeto vacio al q agrego keys

  for (const key in info1) {                //bucle que va agregando keys del primer objeto
    resultado[key] = info1[key] 
  }

  for (const key in info2) {                // bucle que va agregando keys del segundo objeto solo si la key no estaban en rtdo
    if(!(key in resultado)) {
      resultado[key] = info2[key] 
    }
  }

  return resultado
}



/*Diferencia de objetos
Igual que el anterior, pero debe devolver un objeto con las propiedades que no se repiten entre ambos objetos
const info1 = {a: 1, b: 2, c: 3}
const info2 = {d: 4, b: 5}
differentiate(info1, info2) // returns {a: 1, c: 3, d: 4}*/
const inform1 = {
  a: 1, 
  b: 2, 
  c: 3
}
const inform2 = {
  d: 4, 
  b: 5
}

const differentiate = (inform1, inform2) => {
  let resultado = {};

  for (const key in inform1) {                    //recorro el objeto 1, si no esta la key en el objeto 2 lo agrego
    if(!(key in inform2)) {
      resultado[key] = inform1[key] 
    }
  }
  for (const key in inform2) {                   // recorro objeto 2, si no esta en el objeto 1 lo agrego
    if(!(key in inform1)) {
      resultado[key] = inform2[key] 
    }
  }

  return resultado
}


/*Eliminar propiedades
Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto sin las propiedades especificadas en el array
const data = {a: 1, b: 2, c: 3}
const props = ["c"]
removeProperties(data, props) // returns {a: 1}*/
const data = {a: 1, b: 2, c: 3, d: 4, e: 5}
const props = ["b", "c", "e"]

const removeProperties = (data, props) => {
    const resultado = {}
    for (const key in data) {                         //recorro data con keys que hice variables
        if (!(props.includes(key))) {                 //si props no incluye a esa key la agrego a resultado
            resultado[key] = data1[key]            
        }
    }
         
    return resultado
}



/*Filtrar propiedades
Crear una función que tome como argumentos un objeto y un array con strings, y devuelva el objeto con solo las propiedades especificadas en el array
const data1 = {a: 1, b: 2, c: 3}
const props1 = ["c", "b"]
filterProperties(data1, props1) // returns {b: 2, c: 3}*/
const data1 = {
  a: 1, 
  b: 2, 
  c: 3
}
const props1 = ["c", "b"]

const filterProperties = (data1, props1) => {
  const resultado = {}
  for(const key in data1){             //recorrro data y veo si en prop hay una key q este tambien en data
    if(props1.includes(key)){
      resultado[key] = data1[key]            
    }
  }
      
  return resultado
}



/*Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino
const products = { cookies: 60, chocolate: 110, soda: 120, }
const money = 115
buyProducts(money, products) // returns { cookies: true, chocolate: true, soda: false}*/
const products = { 
  cookies: 60, 
  chocolate: 110, 
  soda: 120, 
}
const money = 115

const buyProducts = (money, products) => {
  const productsCopy = Object.assign({}, products);    //creo objeto nuevo que replica products

  for(const key in productsCopy){                      //recorro el nuevo objeto
    if(productsCopy[key] <= money){                    //mientras voy recorriendo el objeto verifico si cada key es menor o igual al dinero que tengo en ese caso cambio el contenido de la key por true sino false
      productsCopy[key] = true;
    } else {
      productsCopy[key] = false;
    }
  }

  return productsCopy;
}



/*Comprar lista de productos
Crear una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, true si puede comprarlos a todos o false si no
const products1 = { cookies: 60, chocolate: 110, soda: 120, }
const money1 = 300
canBuyAllProduct(money1, products1) // returns true*/
const products1 = { 
  cookies: 60, 
  chocolate: 110, 
  soda: 120, 
}
const money1 = 300;

const canBuyAllProduct = (products1, money1) => {
  const productsCopy1 = Object.assign({}, products1);
  let sumar = 0;

  for(const key in productsCopy1){    //recorro nuevo objeto y voy sumando cada key
      sumar += productsCopy1[key];    
  }

  if(sumar <= money1){                //luego verifico si la suma total es menor o igual al dinero
    return true;
  } else {
    return false;
  }
}




/*Obtener experiencia
Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida
const score = { EASY: 10, MEDIUM: 50, HARD: 100}
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2}
getXP(challenges, score) // returns 630 (3 * 10 + 4 * 50 + 2 * 100)*/
const score = { 
  EASY: 10, 
  MEDIUM: 50, 
  HARD: 100
}
const challenges = { 
  EASY: 3, 
  MEDIUM: 4, 
  HARD: 2
}

const getXP = (challenges, score) => {
  const resultado = {};

  for(let key in challenges){
    resultado[key] = challenges[key] * score[key];
  }

  return resultado.reduce(sumarNumeros);
}




/*Analizando strings
Crear una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra
getStringInfo("H3ll0 Wor1d") // returns { LETTERS:  7, DIGITS: 3, SPACES: 1 }*/
const str = "H3ll0 Wor1d";

const getStringInfo = str => {
  const newArray = string.split("");           //no puedo hacer object assign porque es un string
  const newObject = {                       //creo un objeto vacio
    letters: 0, 
    digits: 0, 
    spaces: 0 
  };

  for(const key of newArray){                //recorro array indice x indice
    if(key === " "){                       //si hay un espacio sumo uno a spaces
      newObject.spaces++
    } else if(!isNaN(Number(key))){        //si es numero 
      newObject.digits++
    } else{
      newObject.letters++
      }
    }

  return newObject
}



/*Analizando párrafos
Crear una función que dado un string devuelva un objeto con la cantidad de letras, palabras y oraciones.
getParagraphInfo("Do. Or do not. There is no try.") // returns { LETTERS:  21, WORDS: 8, SENTENCE: 3 }*/
const string = "Do. Or do not. There is no try.";

const getParagraphInfo = string => {
  const chars = string.split("")
  const words = string.split(" ")
  const emptyObject = { 
    letters: 0,
    words: 0, 
    sentences: 0 
  };

  for (const char of chars) {
    if (char === ".") {
      emptyObject.sentences++
    } else if (char !== "." && char !== " " && char !== "," && char !== ";"){
      emptyObject.letters++
    }
  } 

  emptyObject.words = words.length

  return emptyObject;
}

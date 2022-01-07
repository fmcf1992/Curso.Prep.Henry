// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  let pletra=nombre.substring(0,1).toUpperCase();
  let letras=nombre.substring(1);
  let res=pletra.concat(letras);
  return res;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma=numeros.reduce((acum, elem)=>{return acum+elem},0);
  // for(let i=0;i<numeros.length;i++){
  //   suma+=numeros[i];
  // }
  
  cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

//  for(let i=0;i<array.length;i++){
//    cb(array[i]);
//  }
    array.forEach((elemen)=>{return cb(elemen)});
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` 
  //en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // debe retornar el nuevo array
  //Tu código:
  // let arr=[];
  // for(let i=0;i<array.length;i++){
  //   arr.push(cb(array[i]));
  // }
  let arr=array.map((elemen)=>{ return cb(elemen); })
  return arr;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // var nuevo=[];
  // for(let i=0;i<array.length;i++){
  //     // console.log(varray[i].substring(0,1));
  //   if(array[i].substring(0,1)==='a'){
  //     nuevo.push(array[i]);
  //   }
  // } 
  // return nuevo;
  let nuevo=[];
  array.forEach((elemen)=>{
    if(elemen.substring(0,1)==='a'){
      nuevo.push(elemen);
    }
    
  }); 
  return nuevo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

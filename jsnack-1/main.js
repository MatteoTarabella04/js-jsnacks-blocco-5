/* 
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. 
*/

// create array 'zucchine'
const zucchine = [

   {
      varieta:'romanesca',
      peso:20,
      lunghezza:17
   },
   {
      varieta:'nera',
      peso:30,
      lunghezza:12
   },
   {
      varieta:'classica',
      peso:40,
      lunghezza:20
   },
   {
      varieta:'napoletana',
      peso:15,
      lunghezza:18
   },
   {
      varieta:'rossa',
      peso:20,
      lunghezza:18
   },
   {
      varieta:'verde',
      peso:55,
      lunghezza:12
   },
   {
      varieta:'nera',
      peso:30,
      lunghezza:12
   },
   {
      varieta:'nera',
      peso:30,
      lunghezza:12
   },
   {
      varieta:'nera',
      peso:30,
      lunghezza:12
   },
   {
      varieta:'nera',
      peso:30,
      lunghezza:12
   },
];

// forEach zucchine get zucchina.peso and do sum of them
let somma = 0;
zucchine.forEach(zucchina => {
  somma += zucchina.peso;
})
console.log(`Il peso di tutte le zucchine è di ${somma} g`);

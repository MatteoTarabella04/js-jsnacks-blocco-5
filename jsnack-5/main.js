/* 
Snack 5
Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"
*/

// create array
const array = [1,2,3,4,5,6,7,8,9,10];

getNumbers(array,1,9);

// funnction to get numbers between a and b 
function getNumbers(myarray, a, b) {
   const thisArray = myarray.filter((num, i) => {
     if (i >= a && i <= b) {
       return true;
     }
   });
   console.log(thisArray);
 }
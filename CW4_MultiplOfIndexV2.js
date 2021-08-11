/*note - deleting elements with splice while using forEach does not work,
 because it does not account for deleting elements and therefore it skips an element*/

function multipleOfIndex(array) {
   const filteredArray = [];
   array.forEach((element, index) => {
      if (element % index === 0) {
         filteredArray.push(element);
      }
   });

   return filteredArray;
}
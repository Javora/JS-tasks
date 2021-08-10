function multipleOfIndex(array) { //note - deleting elements with splice while using for each does not work, using my own for loop would likely work
   const filteredArray = [];
   array.forEach((element, index) => {
     console.log('trying', index, element)
      if (element % index === 0) {
         filteredArray.push(element);
      }
   });
   
   return filteredArray
}
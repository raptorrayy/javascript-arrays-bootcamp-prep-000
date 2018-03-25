var chocolateBars=['snickers', 'hungred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  this.element = element;
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  this.element = element;
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array){
  array = [1,2,3];
  console.log(array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array = [1,2,3];
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  array = [1,2,3];
  var newArray = array.slice(0);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = [1,2,3,];
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array){
  array = [1,2,3];
  var newArray = array.slice(0,array.length - 1);
  return newArray;
}
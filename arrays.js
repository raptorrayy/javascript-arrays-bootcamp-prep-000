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

function accessElementInArray(array, index){
  this.array = [1,2,index];
  this.index = 'foo';
  console.log(array[2]);
}
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, ele){ const array = [ele, ...arr]; return array}

function destructivelyAddElementToBeginningOfArray(arr, ele){ arr = [ele, ...arr]; return arr }
function addElementToEndOfArray(arr, ele){ const array = [...arr, ele]; return array}
function destructivelyAddElementToEndOfArray(arr, ele){ var array = [...arr, ele]; return array}
function accessElementInArray(arr, ind){const indexed = arr[ind]; return indexed}
function destructivelyRemoveElementFromBeginningOfArray(arr){ return arr.shift()}
function removeElementFromBeginningOfArray(arr){ const array = arr.shift(); return array}

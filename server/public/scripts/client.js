$(document).ready(init);

function init() {
  $('#jsaddbtn').on('click', addEm);
  $('#jssubbtn').on('click', subIt);
  $('#jsmultbtn').on('click', multiply);
  $('#jsdivbtn').on('click', divide);
  $('#jseqbtn').on('click', doDaMath);
  $('#jsclearbtn').on('click', clearIt);
}

function addEm() {
  console.log('Gonna Add Here');
}

function subIt() {
  console.log('Gonna Subtract Here');
}

function multiply() {
  console.log('Gonna Multiply Here');
}

function divide() {
  console.log('Gonna Divide Here');
}

function doDaMath() {
  console.log('I probably need a function for the = btn');
  $.ajax({
    type:'POST',
    url:'/math'
    data: mathObject
  }).then(response)=>{
    console.log(response);
    getMathDone();
  }
}

function getMathDone() {
  console.log('Get it Here.');
}

function clearIt() {
  console.log('Gonna Clear It Here');
}

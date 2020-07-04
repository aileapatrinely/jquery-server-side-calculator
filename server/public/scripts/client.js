$(document).ready(init);

const mathObject = {
  num1: '',
  num2: '',
  operator: '',
};

function init() {
  $('.js-opbtn').on('click', setObject);
  $('#jseqbtn').on('click', doDaMath);
  // $('#jsaddbtn').on('click', addEm);
  // $('#jssubbtn').on('click', subIt);
  // $('#jsmultbtn').on('click', multiply);
  // $('#jsdivbtn').on('click', divide);
  // $('#jseqbtn').on('click', doDaMath);
  // $('#jsclearbtn').on('click', clearIt);
}

function setObject() {
  mathObject.operator = $(this).attr('data-math');
  mathObject.num1 = $('#jsnum1');
  mathObject.num2 = $('#jsnum2');
  console.log(mathObject);
}
function doDaMath() {
  console.log('Doing Post');
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

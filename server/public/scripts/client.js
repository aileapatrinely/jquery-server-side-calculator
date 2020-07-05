const { response } = require('express');

$(document).ready(init);

const mathObject = {
  num1: '',
  num2: '',
  operator: '',
};

function init() {
  $('.js-opbtn').on('click', setObject);
  $('#jseqbtn').on('click', doDaMath);
  $('#jsclearbtn').on('click', clearIt);
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
    type: 'POST',
    url: '/math',
    data: mathObject,
  }).then((response) => {
    console.log(response);
    getMathDone();
  });
}

function getMathDone() {
  console.log('Get it Here.');
  $.ajax({
    type: 'GET',
    url: '/math',
  }).then((response) => {
    console.log(response);
    renderTotal();
  });
}

function renderTotal(mathDone) {
  $('#total').empty();
  for (let total of mathDone) {
    $('#total').append(`<p>${mathDone.total}</p>`);
  }
}

function clearIt() {
  console.log('Gonna Clear It Here');
  mathObject = {
    num1: '',
    num2: '',
    operator: '',
  };
}

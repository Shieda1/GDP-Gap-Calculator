// https://www.omnicalculator.com/finance/gdp-gap

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const GDPgapRadio = document.getElementById('GDPgapRadio');
const actualGDPRadio = document.getElementById('actualGDPRadio');
const potentialGDPRadio = document.getElementById('potentialGDPRadio');

let GDPgap;
let actualGDP = v1;
let potentialGDP = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

GDPgapRadio.addEventListener('click', function() {
  variable1.textContent = 'Actual GDP';
  variable2.textContent = 'Potential GDP';
  actualGDP = v1;
  potentialGDP = v2;
  result.textContent = '';
});

actualGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP gap';
  variable2.textContent = 'Potential GDP';
  GDPgap = v1;
  potentialGDP = v2;
  result.textContent = '';
});

potentialGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP gap';
  variable2.textContent = 'Actual GDP';
  GDPgap = v1;
  actualGDP = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(GDPgapRadio.checked)
    result.textContent = `GDP gap = ${computeGDPgap().toFixed(2)}`;

  else if(actualGDPRadio.checked)
    result.textContent = `Actual GDP = ${computeactualGDP().toFixed(2)}`;

  else if(potentialGDPRadio.checked)
    result.textContent = `Potential GDP = ${computepotentialGDP().toFixed(2)}`;
})

// calculation

function computeGDPgap() {
  return ((Number(actualGDP.value) - Number(potentialGDP.value)) / Number(potentialGDP.value)) * 100;
}

function computeactualGDP() {
  return ((Number(GDPgap.value) / 100) * Number(potentialGDP.value)) + Number(potentialGDP.value);
}

function computepotentialGDP() {
  return Number(GDPgap.value) / Number(actualGDP.value);
}
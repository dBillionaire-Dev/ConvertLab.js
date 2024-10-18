'use strict';

const mmolPopup = document.getElementById('mmol-popup');
const ldlPopup = document.getElementById('ldl-popup');
const mgdlPopup = document.getElementById('mgdl-popup');
const bmiPopup = document.getElementById('bmi-popup');
const mchcPopup = document.getElementById('mchc-popup');
const mchPopup = document.getElementById('mch-popup');
const mcvPopup = document.getElementById('mcv-popup');
const pcvPopup = document.getElementById('pcv-popup');
const litrePopup = document.getElementById('litre-popup');
const hgbPopup = document.getElementById('hgb-popup');
const rbcPopup = document.getElementById('rbc-popup');
const inbPopup = document.getElementById('inb-popup');
const footPopup = document.getElementById('foot-popup');
const metrePopup = document.getElementById('metre-popup');
const celsiusPopup = document.getElementById('celsius-popup');
const fahrenheitPopup = document.getElementById('fahrenheit-popup');

const openMmolPopup = () => {
  // popup.forEach((item) => {
  //   item.classList.add('open-popup');
  // });
  mmolPopup.classList.add("open-popup");
  
};

const reOpenMmolPopup = () => {
   mmolPopup.classList.add("open-popup");
   mgdlPopup.classList.remove("open-popup");
};
const openMgdlPopup = () => {
  mgdlPopup.classList.add("open-popup");
};

const openLdlPopup = () => {
  ldlPopup.classList.add("open-popup");
};

const openBmiPopup = () => {
  bmiPopup.classList.add("open-popup");
};

const openMchcPopup = () => {
  mchcPopup.classList.add("open-popup");
};

const openMchPopup = () => {
  mchPopup.classList.add("open-popup");
};

const openMcvPopup = () => {
  mcvPopup.classList.add("open-popup");
};

const openPcvPopup = () => {
  pcvPopup.classList.add("open-popup");
  
};

const reOpenPcvPopup = () => {
   pcvPopup.classList.add("open-popup");
   litrePopup.classList.remove("open-popup");
};

const openLitrePopup = () => {
  litrePopup.classList.add("open-popup");
};

const openHgbPopup = () => {
  hgbPopup.classList.add("open-popup");
};

const openRbcPopup = () => {
  rbcPopup.classList.add("open-popup");
};

const openInbPopup = () => {
  inbPopup.classList.add("open-popup");
};

const openFootPopup = () => {
  footPopup.classList.add("open-popup");
  
};

const reOpenFootPopup = () => {
   footPopup.classList.add("open-popup");
   metrePopup.classList.remove("open-popup");
};

const openMetrePopup = () => {
  metrePopup.classList.add("open-popup");
};

const openCelsiusPopup = () => {
  celsiusPopup.classList.add("open-popup");
  
};

const reOpenCelsiusPopup = () => {
   celsiusPopup.classList.add("open-popup");
   fahrenheitPopup.classList.remove("open-popup");
};

const openFahrenheitPopup = () => {
  fahrenheitPopup.classList.add("open-popup");
};

const closePopup = () => {
  mmolPopup.classList.remove("open-popup");
  mgdlPopup.classList.remove("open-popup");
  ldlPopup.classList.remove("open-popup");
  bmiPopup.classList.remove("open-popup");
  mchcPopup.classList.remove("open-popup");
  pcvPopup.classList.remove("open-popup");
  litrePopup.classList.remove("open-popup");
  mchPopup.classList.remove("open-popup");
  mcvPopup.classList.remove("open-popup");
  hgbPopup.classList.remove("open-popup");
  rbcPopup.classList.remove("open-popup");
  inbPopup.classList.remove("open-popup");
  footPopup.classList.remove("open-popup");
  metrePopup.classList.remove("open-popup");
  celsiusPopup.classList.remove("open-popup");
  fahrenheitPopup.classList.remove("open-popup");
};

const convertMmol = () => {
  const mmolValue = document.getElementById("mmol-value").value;
  const mmolResult = document.getElementById("mmol-result");
  const mmolToMgdl = (mmolValue * 18).toFixed(2);
  mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL`;
};

const convertMgdl = () => {
  const mgdlValue = document.getElementById("mgdl-value").value;
  const mgdlResult = document.getElementById("mgdl-result");
  const mgdlToMmol = (mgdlValue / 18).toFixed(2);
  mgdlResult.innerHTML = `Result: ${mgdlValue} mg/dL = ${mgdlToMmol} mmol/L`;
};

const calculateLdl = () => {
  const totalCholesterolValue = document.getElementById("total-cholesterol-value").value;
  const hdlCholesterolValue = document.getElementById("hdl-value").value;
  const triglycerideValue = document.getElementById("triglyceride-value").value;
  const triglycerideFinal = triglycerideValue / 5;
  const ldlResult = document.getElementById("ldl-result");
  const ldlCalculation = (totalCholesterolValue - triglycerideFinal) - hdlCholesterolValue;
  ldlResult.innerHTML = `Result: LDL-C = ${ldlCalculation.toFixed(2)} mmol/L`;
};

const calculateBmi = () => {
  const weightValue = document.getElementById("weight-value").value;
  const heightValue = document.getElementById("height-value").value/100;
  const bmiResult = document.getElementById("bmi-result");
  const bmiCalculation = weightValue / (heightValue * heightValue);
  bmiResult.innerHTML = `Result: BMI = ${bmiCalculation.toFixed(2)}`;
};

const calculateMchc = () => {
  const hgbValue = document.getElementById("hgb-value").value;
  const pcvValue = document.getElementById("pcv-value").value;
  const mchcResult = document.getElementById("mchc-result");
  const mchcCalculation = (hgbValue * 100) / pcvValue;
  mchcResult.innerHTML = `Result: MCHC = ${mchcCalculation.toFixed(2)}`;
};

const calculateRbc = () => {
  const hgbValue = document.getElementById("hgb").value;
  const rbcResult = document.getElementById("rbc-result");
  const rbcCalculation = (hgbValue / 3) * 1.1;
  rbcResult.innerHTML = `Result: RBC = ${rbcCalculation.toFixed(2)} x10^12/L`;
};

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

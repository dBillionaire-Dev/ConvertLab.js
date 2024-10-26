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
const popup = document.querySelectorAll('.popup');

const openMmolPopup = () => {
  mmolPopup.classList.add("open-popup"); // Show the popup
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const reOpenMmolPopup = () => {
   mmolPopup.classList.add("open-popup");
   mgdlPopup.classList.remove("open-popup");
   document.getElementById('overlay').classList.add('blur'); // Add blur effect
};
const openMgdlPopup = () => {
  mgdlPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openLdlPopup = () => {
  ldlPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openBmiPopup = () => {
  bmiPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openMchcPopup = () => {
  mchcPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openMchPopup = () => {
  mchPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openMcvPopup = () => {
  mcvPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openPcvPopup = () => {
  pcvPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
  
};

const reOpenPcvPopup = () => {
   pcvPopup.classList.add("open-popup");
   litrePopup.classList.remove("open-popup");
   document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openLitrePopup = () => {
  litrePopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openHgbPopup = () => {
  hgbPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openRbcPopup = () => {
  rbcPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openInbPopup = () => {
  inbPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openFootPopup = () => {
  footPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const reOpenFootPopup = () => {
   footPopup.classList.add("open-popup");
   metrePopup.classList.remove("open-popup");
   document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openMetrePopup = () => {
  metrePopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openCelsiusPopup = () => {
  celsiusPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const reOpenCelsiusPopup = () => {
   celsiusPopup.classList.add("open-popup");
   fahrenheitPopup.classList.remove("open-popup");
   document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const openFahrenheitPopup = () => {
  fahrenheitPopup.classList.add("open-popup");
  document.getElementById('overlay').classList.add('blur'); // Add blur effect
};

const closePopup = () => {
  const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.classList.remove("open-popup");
    });
    document.getElementById('overlay').classList.remove('blur');
  // // Clear the input field when the popup is closed
  // const inputField = document.querySelectorAll('input[type="number"]');
  // inputField.value = '';
};

// function closeModal() {
//   const modal = document.getElementById('myModal');
//   popup.classList.remove('open');
  
//   // Clear the input field when the popup is closed
//   const inputField = document.getElementById("myInput");
//   inputField.value = '';

//   // Refresh the page to completely reset (optional, use either refresh or clear input)
//   location.reload();
// }

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
  bmiResult.innerHTML = `Result: BMI = ${bmiCalculation.toFixed(2)} kg/m<sup>2</sup>`;
};

const calculateMchc = () => {
  const hgbValue = document.getElementById("hgb-value").value;
  const pcvValue = document.getElementById("pcv-value").value;
  const mchcResult = document.getElementById("mchc-result");
  const mchcCalculation = (hgbValue * 100) / pcvValue;
  mchcResult.innerHTML = `Result: MCHC = ${mchcCalculation.toFixed(2)} g/dL`;
};

const calculateMch = () => {
  const hbValue = document.getElementById("hb-value").value;
  const rbcValue = document.getElementById("rbc-figure").value;
  const mchResult = document.getElementById("mch-result");
  const mchCalculation = (hbValue * 10) / rbcValue;
  mchResult.innerHTML = `Result: MCH = ${mchCalculation.toFixed(2)} pg`;
}

const calculateMcv  = () => {
  const hctValue = document.getElementById("hct-value").value;
  const rbcFigure = document.getElementById("rbc").value;
  const mcvResult = document.getElementById("mcv-result");
  const mcvCalculation = (hctValue * 10) / rbcFigure;
  mcvResult.innerHTML = `Result: MCV = ${mcvCalculation.toFixed(2)} fl`;
}

const convertPercentage = () => {
  const pcvGenderValue = document.getElementById("pcv-gender").value;
  const pcvAgeValue = document.getElementById("pcv-age").value;
  const percentageValue = document.getElementById("percentage-pcv").value;
  const percentageResult = document.getElementById("percentage-result");
  const percentageCalculation = percentageValue / 100;
  percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l`;
}

const convertLitre = () => {
  const litreGenderValue = document.getElementById("litre-gender").value;
  const liteAgeValue = document.getElementById("litre-age").value;
  const litreValue = document.getElementById("litre-pcv").value;
  const litreResult = document.getElementById("litre-result");
  const litreCalculation = litreValue * 100;
  litreResult.innerHTML = `Result: ${litreValue} Litre = ${litreCalculation.toFixed(2)}%`;
}

const calculateHb = () => {
  const genderValue = document.getElementById("gender").value;
  const ageValue = document.getElementById("age").value;
  const hctValue = document.getElementById("hemoglobin").value;
  const hemoglobinResult = document.getElementById("hemoglobin-result");
  //const hbCalculation = (140 - ageValue) * (genderValue === "male" ? 0.8 : 0.6) * hctValue;
  const hbCalculation = hctValue / 3;
  hemoglobinResult.innerHTML = `Result: HB = ${hbCalculation.toFixed(2)} g/dL`;
}
const calculateRbc = () => {
  const hgbValue = document.getElementById("hgb").value;
  const rbcResult = document.getElementById("rbc-result");
  const rbcCalculation = (hgbValue / 3) * 1.1;
  rbcResult.innerHTML = `Result: RBC = ${rbcCalculation.toFixed(2)} x10<sup>12</sup>/L`;
};

const calculateInb = () => {
  const totalBilirubin = document.getElementById("total-bilirubin").value;
  const directBilirubin = document.getElementById("direct-bilirubin").value;
  const  indirectBilirubinResult = document.getElementById("inb-result");
  const  indirectBilirubin = totalBilirubin - directBilirubin;
  indirectBilirubinResult.innerHTML = `Result: Indirect Bilirubin = ${indirectBilirubin.toFixed(2)} μmol/L`;
}

const convertToMetres = () => {
  const foot = document.getElementById("foot-value").value;
  const footResult = document.getElementById("foot-result");
  const footToMetres = foot * 0.3048;
  footResult.innerHTML = `Result: ${foot} Ft = ${footToMetres.toFixed(2)} metres`;
}

const convertToFoot = () => {
  let metre = document.getElementById("metre-value").value;
  let metreResult = document.getElementById("metre-result");
  let metreToFoot = metre / 0.3048;

  function metersToFeetInches() {
    // Convert meters to feet
    let totalFeet = metre * 3.28084;
    
    // Extract the whole number for feet
    let feet = Math.floor(totalFeet);
    
    // Get the decimal part and convert it to inches
    let inches = Math.round((totalFeet - feet) * 12);
  
    // If inches is 12, increment feet and reset inches to 0
    if (inches === 12) {
      feet += 1;
      inches = 0;
    }
  
    return `${feet}' ${inches}"`;
  }

  metreResult.innerHTML = `Result: ${metre} metres = ${metreToFoot.toFixed(2)} Ft (${metersToFeetInches()})`;
}

const convertCelsius = () => {
  const celsiusValue = document.getElementById("celsius-value").value;
  const celsiusResult = document.getElementById("celsius-result");
  const celsiusToFahrenheit = (celsiusValue * 9/5) + 32;
  celsiusResult.innerHTML = `Result: ${celsiusValue}°C = ${celsiusToFahrenheit.toFixed(2)}°F`;
}

const convertFahrenheit = () => {
  const fahrenheitValue = document.getElementById("fahrenheit-value").value;
  const fahrenheitResult = document.getElementById("fahrenheit-result");
  const fahrenheitToCelsius = (fahrenheitValue - 32) * 5/9;
  fahrenheitResult.innerHTML = `Result: ${fahrenheitValue}°F = ${fahrenheitToCelsius.toFixed(2)}°C`;
}

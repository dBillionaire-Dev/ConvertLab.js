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
let element = document.getElementById("error-popup");

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
        const inputs = popup.querySelectorAll('input[type="number"], input[type="text"], input[type="radio"]');
        inputs.forEach(input => {
          if (input.type === 'radio') {
            input.checked = false; // Unselect radio buttons
        } else {
            input.value = ''; // Clear the input value for number and text fields
        }
        });
        const displays = popup.querySelectorAll('p');
        displays.forEach(p => {
            p.innerHTML = ''; // Clear the display value
        });
        element.style.visibility = "hidden";
    });

    document.getElementById('overlay').classList.remove('blur');
};

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      const popups = document.querySelectorAll('.popup');
      popups.forEach(popup => {
          // Check if the popup has the 'open-popup' class
          if (popup.classList.contains('open-popup')) {
              closePopup(); // Call the function to close the popup
          }
      });
  }
});

const openErrorPopup = () => {
  element.style.visibility = "visible";
  document.getElementById('all-popup').classList.add('error-blur'); 
}
const closeErrorPopup = () => {
  element.style.visibility = "hidden";
  document.getElementById('all-popup').classList.remove('error-blur'); 
}

const convertMmol = () => {
  const mmolValue = document.getElementById("mmol-value").value;
  const mmolResult = document.getElementById("mmol-result");
  const mmolToMgdl = (mmolValue * 18).toFixed(2);
  const random = document.getElementById('random').checked;
  const fasting = document.getElementById('fasting').checked;

  // Check if all input fields are empty and no radio button is checked
  if (mmolValue.trim() === '' && !random && !fasting) {
    mmolResult.innerHTML = '';
    openErrorPopup(); // Call the function to show the error popup
    return; // Exit the function early
  }

  if (random) {
    if (mmolToMgdl > 180) {
      mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL <strong style="color:red">(HIGH)</strong>`;
    } else if (mmolToMgdl < 70) {
      mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL <strong style="color:blue">(LOW)</strong>`;
    } else {
      mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL`;
    }
  } else if (fasting) {
  if (mmolToMgdl > 120) {
    mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL <strong style="color:red">(HIGH)</strong>`;
  } else if (mmolToMgdl < 70) {
    mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL <strong style="color:blue">(LOW)</strong>`;
  } else {
    mmolResult.innerHTML = `Result: ${mmolValue} mmol/L = ${mmolToMgdl} mg/dL`;
  }
  } else{
    openErrorPopup(); // Call the function to show the error popup
  }

};

const convertMgdl = () => {
  const mgdlValue = document.getElementById("mgdl-value").value;
  const mgdlResult = document.getElementById("mgdl-result");
  const mgdlToMmol = (mgdlValue / 18).toFixed(2);
  const mgdlRandom = document.getElementById('mgdl-random').checked;
  const mgdlFasting = document.getElementById('mgdl-fasting').checked;

  // Check if all input fields are empty and no radio button is checked
  if (mgdlValue.trim() === '' && !mgdlRandom && !mgdlFasting) {
    mmolResult.innerHTML = '';
    openErrorPopup(); // Call the function to show the error popup
    return; // Exit the function early
  }

  if (mgdlRandom) {
    if (mgdlToMmol > 10) {
      mgdlResult.innerHTML = `Result: ${mgdlValue} mmol/L = ${mgdlToMmol} mg/dL <strong style="color:red">(HIGH)</strong>`;
    } else if (mgdlToMmol < 3.89) {
      mgdlResult.innerHTML = `Result: ${mgdlValue} mmol/L = ${mgdlToMmol} mg/dL <strong style="color:blue">(LOW)</strong>`;
    } else {
      mgdlResult.innerHTML = `Result: ${mgdlValue} mmol/L = ${mgdlToMmol} mg/dL`;
    }
  } else if (mgdlFasting) {
  if (mgdlToMmol > 6.67) {
    mgdlResult.innerHTML = `Result: ${mgdlValue} mmol/L = ${mgdlToMmol} mg/dL <strong style="color:red">(HIGH)</strong>`;
  } else if (mgdlToMmol < 3.89) {
    mgdlResult.innerHTML = `Result: ${mgdlValue} mmol/L = ${mgdlToMmol} mg/dL <strong style="color:blue">(LOW)</strong>`;
  } else {
    mgdlResult.innerHTML = `Result: ${mgdlValue} mmol/L = ${mgdlToMmol} mg/dL`;
  }
  } else{
    openErrorPopup(); // Call the function to show the error popup
  }

};

const calculateLdl = () => {
  const totalCholesterolValue = document.getElementById("total-cholesterol-value").value;
  const hdlCholesterolValue = document.getElementById("hdl-value").value;
  const triglycerideValue = document.getElementById("triglyceride-value").value;
  const triglycerideFinal = triglycerideValue / 5;
  const ldlResult = document.getElementById("ldl-result");
  const ldlCalculation = (totalCholesterolValue - triglycerideFinal) - hdlCholesterolValue;

  if (totalCholesterolValue.trim() === '' || hdlCholesterolValue.trim() === '' || triglycerideValue.trim() === '') {
    ldlResult.innerHTML = '';
    openErrorPopup();
  } else if (ldlCalculation > 150) {
    ldlResult.innerHTML = `Result: LDL-C = ${ldlCalculation.toFixed(2)} mmol/L <strong style="color:red">(HIGH)</strong>`;
  } else if (ldlCalculation < 50) {
    ldlResult.innerHTML = `Result: LDL-C = ${ldlCalculation.toFixed(2)} mmol/L <strong style="color:blue">(LOW)</strong>`;
  } else {
    ldlResult.innerHTML = `Result: LDL-C = ${ldlCalculation.toFixed(2)} mmol/L`;
  }
  
};

const calculateBmi = () => {
  const weightValue = document.getElementById("weight-value").value;
  const heightValue = document.getElementById("height-value").value;
  const height = heightValue/100;
  const bmiResult = document.getElementById("bmi-result");
  const bmiCalculation = weightValue / (height * height);

  console.log(`${weightValue} and ${heightValue}`);

  if (weightValue.trim() === '' || heightValue.trim() === '') {
    bmiResult.innerHTML = '';
    openErrorPopup();
    console.log(openErrorPopup());
  } else if (bmiCalculation < 18) {
    bmiResult.innerHTML = `Result: BMI = ${bmiCalculation.toFixed(2)} kg/m<sup>2</sup> <strong style="color:blue">(LOW)</strong>`;
    console.log(bmiResult);
  } else if (bmiCalculation > 25) {
    bmiResult.innerHTML = `Result: BMI = ${bmiCalculation.toFixed(2)} kg/m<sup>2</sup> <strong style="color:red">(HIGH)</strong>`;
    console.log(bmiResult);
  } else {
    bmiResult.innerHTML = `Result: BMI = ${bmiCalculation.toFixed(2)} kg/m<sup>2</sup>`;
    console.log(bmiResult);
  }
};

const calculateMchc = () => {
  const hgbValue = document.getElementById("hgb-value").value;
  const pcvValue = document.getElementById("pcv-value").value;
  const mchcResult = document.getElementById("mchc-result");
  const mchcCalculation = (hgbValue * 100) / pcvValue;

  if (hgbValue.trim() === '' || pcvValue.trim() === '') {
    mchcResult.innerHTML = '';
    openErrorPopup();
  } else if (mchcCalculation > 36) {
    mchcResult.innerHTML = `Result: MCHC = ${mchcCalculation.toFixed(2)} g/dL <strong style="color:red">(HIGH)</strong>`;
  } else if (mchcCalculation < 31.5) {
    mchcResult.innerHTML = `Result: MCHC = ${mchcCalculation.toFixed(2)} g/dL <strong style="color:blue">(LOW)</strong>`;
  } else {
      mchcResult.innerHTML = `Result: MCHC = ${mchcCalculation.toFixed(2)} g/dL`;
  }
  
};

const calculateMch = () => {
  const hbValue = document.getElementById("hb-value").value;
  const rbcValue = document.getElementById("rbc-figure").value;
  const mchResult = document.getElementById("mch-result");
  const mchCalculation = (hbValue * 10) / rbcValue;

  if (hbValue.trim() === '' || rbcValue.trim() === '') {
    mchResult.innerHTML = '';
    openErrorPopup();
  } else if (mchCalculation > 32) {
    mchResult.innerHTML = `Result: MCH = ${mchCalculation.toFixed(2)} pg <strong style="color:red">(HIGH)</strong>`;
  } else if (mchCalculation < 27) {
    mchResult.innerHTML = `Result: MCH = ${mchCalculation.toFixed(2)} pg <strong style="color:blue">(LOW)</strong>`;
  } else {
   mchResult.innerHTML = `Result: MCH = ${mchCalculation.toFixed(2)} pg`;
  }
}

const calculateMcv  = () => {
  const hctValue = document.getElementById("hct-value").value;
  const rbcFigure = document.getElementById("rbc").value;
  const mcvResult = document.getElementById("mcv-result");
  const mcvCalculation = (hctValue * 10) / rbcFigure;

  if (hctValue.trim() === '' || rbcFigure.trim() === '') {
    mcvResult.innerHTML = '';
    openErrorPopup();
  } else if (mcvCalculation > 98) {
    mcvResult.innerHTML = `Result: MCV = ${mcvCalculation.toFixed(2)} fl <strong style="color:red">(HIGH)</strong>`;
  } else if (mcvCalculation < 80) {
    mcvResult.innerHTML = `Result: MCV = ${mcvCalculation.toFixed(2)} fl <strong style="color:blue">(LOW)</strong>`;
  } else {
    mcvResult.innerHTML = `Result: MCV = ${mcvCalculation.toFixed(2)} fl`;
  }
  
}


const convertPercentage = () => {
  const maleGender = document.getElementById('male').checked;
  const femaleGender = document.getElementById('female').checked;
  let pcvAgeValue = document.getElementById("pcv-age").value;
  let percentageValue = document.getElementById("percentage-pcv").value;
  let percentageResult = document.getElementById("percentage-result");
  let percentageCalculation = percentageValue / 100;

  // Check if all input fields are empty and no radio button is checked
  if (percentageValue.trim() === '' && pcvAgeValue.trim() === '' && !maleGender && !femaleGender) {
      percentageResult.innerHTML = '';
      openErrorPopup(); // Call the function to show the error popup
      return; // Exit the function early
  }

  if (maleGender && pcvAgeValue >= 18) {
      if (percentageCalculation >= 0.40 && percentageCalculation <= 0.54) {
          percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l`;
      } else if (percentageCalculation > 0.54) {
          percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:red">(HIGH)</strong>`;
      } else {
          percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:blue">(LOW)</strong>`;
      }
  } else if (femaleGender && pcvAgeValue >= 18) {
    if (percentageCalculation >= 0.36 && percentageCalculation <= 0.46) {
        percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l`;
    } else if (percentageCalculation > 0.46) {
        percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:red">(HIGH)</strong>`;
    } else {
        percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:blue">(LOW)</strong>`;
    }
} else if (pcvAgeValue < 18 && pcvAgeValue >= 2) {
  if (percentageCalculation >= 0.34 && percentageCalculation <= 0.40) {
      percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l`;
  } else if (percentageCalculation > 0.40) {
      percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:red">(HIGH)</strong>`;
  } else {
      percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:blue">(LOW)</strong>`;
  }
} else if (pcvAgeValue < 2) {
  if (percentageCalculation >= 0.44 && percentageCalculation <= 0.54) {
      percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l`;
  } else if (percentageCalculation > 0.54) {
      percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:red">(HIGH)</strong>`;
  } else {
      percentageResult.innerHTML = `Result: ${percentageValue}% = ${percentageCalculation.toFixed(2)} l/l <strong style="color:blue">(LOW)</strong>`;
  }
  } else if (!maleGender && pcvAgeValue !== '' && pcvValue !== '') {
      openErrorPopup();
  } else if (!femaleGender && pcvAgeValue !== '' && pcvValue !== ''){
    openErrorPopup();
  }
}

const convertLitre = () => {
  const litreMaleGender = document.getElementById('litre-male').checked;
  const litreFemaleGender = document.getElementById('litre-female').checked;
  let litreAgeValue = document.getElementById("litre-age").value;
  let litreValue = document.getElementById("litre-pcv").value;
  let litreResult = document.getElementById("litre-result");
  let litreCalculation = litreValue * 100;

  // Check if all input fields are empty and no radio button is checked
  if (litreValue.trim() === '' && litreAgeValue.trim() === '' && !litreMaleGender && !litreFemaleGender) {
      litreResult.innerHTML = '';
      openErrorPopup(); // Call the function to show the error popup
      return; // Exit the function early
  }

  if (litreMaleGender && litreAgeValue >= 18) {
      if (litreCalculation >= 40 && litreCalculation <= 54) {
          litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} %`;
      } else if (litreCalculation > 54) {
          litreResult.innerHTML = `Result: ${litreValue}% = ${litreCalculation.toFixed(1)} % <strong style="color:red">(HIGH)</strong>`;
      } else {
          litreResult.innerHTML = `Result: ${litreValue}% = ${litreCalculation.toFixed(1)} % <strong style="color:blue">(LOW)</strong>`;
      }
  } else if (litreFemaleGender && litreAgeValue >= 18) {
    if (litreCalculation >= 36 && litreCalculation <= 46) {
        litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} %`;
    } else if (litreCalculation > 46) {
        litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} % <strong style="color:red">(HIGH)</strong>`;
    } else {
        litreResult.innerHTML = `Result: ${litreValue} l/l = ${litreCalculation.toFixed(1)} % <strong style="color:blue">(LOW)</strong>`;
    }
} else if (litreAgeValue < 18 && litreAgeValue >= 2) {
  if (litreCalculation >= 34 && litreCalculation <= 40) {
      litreResult.innerHTML = `Result: ${litreValue} l/l = ${litreCalculation.toFixed(1)} %`;
  } else if (litreCalculation > 40) {
      litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} % <strong style="color:red">(HIGH)</strong>`;
  } else {
      litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} % <strong style="color:blue">(LOW)</strong>`;
  }
} else if (litreAgeValue < 2) {
  if (litreCalculation >= 44 && litreCalculation <= 54) {
      litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} %`;
  } else if (litreCalculation > 54) {
      litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} % <strong style="color:red">(HIGH)</strong>`;
  } else {
      litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} % <strong style="color:blue">(LOW)</strong>`;
  }
} else if (litreValue.trim() === '' || litreAgeValue.trim() === '' && !litreMaleGender && !litreFemaleGender) {
      litreResult.innerHTML = '';
      openErrorPopup(); // Call the function to show the error popup
  } else {
      litreResult.innerHTML = `Result: ${litreValue}l/l = ${litreCalculation.toFixed(1)} %`;
  }
}

const calculateHb = () => {
  const hgbMale = document.getElementById("hgb-male").checked;
  const hgbFemale = document.getElementById("hgb-female").checked;
  const ageValue = document.getElementById("age").value;
  const hctValue = document.getElementById("hemoglobin").value;
  const hemoglobinResult = document.getElementById("hemoglobin-result");
  const hbCalculation = hctValue / 3;

  // Check if all input fields are empty and no radio button is checked
  if (hctValue.trim() === '' && ageValue.trim() === '' && !hgbMale && !hgbFemale) {
      hemoglobinResult.innerHTML = '';
      openErrorPopup(); // Call the function to show the error popup
      return; // Exit the function early
  }

  if (hgbMale && ageValue >= 18) {
      if (hbCalculation >= 13 && hbCalculation <= 18) {
          hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL`;
      } else if (hbCalculation > 18) {
          hemoglobinResult.innerHTML = `Result: ${hctValue}g/dL = ${hbCalculation.toFixed(1)} g/dL <strong style="color:red">(HIGH)</strong>`;
      } else {
          hemoglobinResult.innerHTML = `Result: ${hctValue}g/dL = ${hbCalculation.toFixed(1)} g/dL <strong style="color:blue">(LOW)</strong>`;
      }
  } else if (hgbFemale && ageValue >= 18) {
    if (hbCalculation >= 12 && hbCalculation <= 15) {
        hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL`;
    } else if (hbCalculation > 15) {
        hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL <strong style="color:red">(HIGH)</strong>`;
    } else {
        hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL <strong style="color:blue">(LOW)</strong>`;
    }
} else if (ageValue < 18 && ageValue >= 2) {
  if (hbCalculation >= 11.5 && hbCalculation <= 13.5) {
      hemoglobinResult.innerHTML = `Result: ${hctValue} % = ${hbCalculation.toFixed(1)} g/dL`;
  } else if (hbCalculation > 13.5) {
      hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL <strong style="color:red">(HIGH)</strong>`;
  } else {
      hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL <strong style="color:blue">(LOW)</strong>`;
  }
} else if (ageValue < 2) {
  if (hbCalculation >= 13.5 && hbCalculation <= 18) {
      hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL`;
  } else if (hbCalculation > 18) {
      hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL <strong style="color:red">(HIGH)</strong>`;
  } else {
      hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL <strong style="color:blue">(LOW)</strong>`;
  }
} else if (hctValue.trim() === '' || ageValue.trim() === '' && !hgbMale && !hgbFemale) {
      hemoglobinResult.innerHTML = '';
      openErrorPopup(); // Call the function to show the error popup
  } else {
      hemoglobinResult.innerHTML = `Result: ${hctValue}% = ${hbCalculation.toFixed(1)} g/dL`;
  }
}

const calculateRbc = () => {
  const hgbValue = document.getElementById("hgb").value;
  const rbcResult = document.getElementById("rbc-result");
  const rbcCalculation = (hgbValue / 3) * 1.1;

  if (hgbValue.trim() === '') {
    rbcResult.innerHTML = '';
    openErrorPopup();
  } else if (rbcCalculation > 5.4) {
    rbcResult.innerHTML = `Result: RBC = ${rbcCalculation.toFixed(2)} x10<sup>12</sup>/L <strong style="color:red">(HIGH)</strong>`;
  } else if (rbcCalculation < 4.3) {
    rbcResult.innerHTML = `Result: RBC = ${rbcCalculation.toFixed(2)} x10<sup>12</sup>/L <strong style="color:blue">(LOW)</strong>`;
  } else {
    rbcResult.innerHTML = `Result: RBC = ${rbcCalculation.toFixed(2)} x10<sup>12</sup>/L`;
  }
  
};

const calculateInb = () => {
  const totalBilirubin = document.getElementById("total-bilirubin").value;
  const directBilirubin = document.getElementById("direct-bilirubin").value;
  const  indirectBilirubinResult = document.getElementById("inb-result");
  const  indirectBilirubin = totalBilirubin - directBilirubin;

  if (totalBilirubin.trim() === '' || directBilirubin.trim() === '') {
    indirectBilirubinResult.innerHTML = '';
    openErrorPopup();
  } else if (indirectBilirubin > 0.80) {
    indirectBilirubinResult.innerHTML = `Result: Indirect Bilirubin = ${indirectBilirubin.toFixed(2)} mg/dL <strong style="color:red">(HIGH)</strong>`;
  } else if (indirectBilirubin < 0.20) {
    indirectBilirubinResult.innerHTML = `Result: Indirect Bilirubin = ${indirectBilirubin.toFixed(2)} mg/dL <strong style="color:blue">(LOW)</strong>`;
  } else {
    indirectBilirubinResult.innerHTML = `Result: Indirect Bilirubin = ${indirectBilirubin.toFixed(2)} mg/dL`;
  }
  
}

const convertToMetres = () => {
  const foot = document.getElementById("foot-value").value;
  const footResult = document.getElementById("foot-result");
  const footToMetres = foot * 0.3048;

  if (foot.trim() === '') {
    footResult.innerHTML = '';
    openErrorPopup();
  } else {
    footResult.innerHTML = `Result: ${foot} Ft = ${footToMetres.toFixed(2)} metres`;
  }
  
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

  if (metre.trim() === '') {
    metreResult.innerHTML = '';
    openErrorPopup();
  } else {
    metreResult.innerHTML = `Result: ${metre} metres = ${metreToFoot.toFixed(2)} Ft (${metersToFeetInches()})`;
  }
  
}

const convertCelsius = () => {
  const celsiusValue = document.getElementById("celsius-value").value;
  const celsiusResult = document.getElementById("celsius-result");
  const celsiusToFahrenheit = (celsiusValue * 9/5) + 32;

  if (celsiusValue.trim() === '') {
    celsiusResult.innerHTML = '';
    openErrorPopup();
  } else {
    celsiusResult.innerHTML = `Result: ${celsiusValue}°C = ${celsiusToFahrenheit.toFixed(2)}°F`;
  }
  
}

const convertFahrenheit = () => {
  const fahrenheitValue = document.getElementById("fahrenheit-value").value;
  const fahrenheitResult = document.getElementById("fahrenheit-result");
  const fahrenheitToCelsius = (fahrenheitValue - 32) * 5/9;

  if (fahrenheitValue.trim() === '') {
    fahrenheitResult.innerHTML = '';
    openErrorPopup();
  } else {
    fahrenheitResult.innerHTML = `Result: ${fahrenheitValue}°F = ${fahrenheitToCelsius.toFixed(2)}°C`;
  }
  
}

import React, { useEffect, useState } from "react";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import StepNavigation from "./stepNavigation";
import ThirdStep from "./ThirdStep";
import logo1 from "./logo1.jpeg"
import './App.css'

function App() {

  const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4']
  const [currentStep, updateCurrentStep] = useState(1);

  const [formData,setFormData]=useState({
    fullName:'',
    displayName:'',
    workspaceName:'',
    workspaceUrl:'',
    option:''
  })

  function updateStep(step) {
    updateCurrentStep((pd)=>pd+1);
    console.log()
  }
  const handleInputData = input => e => {
    const {value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  console.log(formData)
  return (
    <div className="App">
      <div className='mainTitle' >
        <img className='logo' src={logo1} />
            <h1>Eden</h1>
        </div>
      <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
  
      {currentStep === 1 && <FirstStep handleFormData={handleInputData} updateStep={updateStep} values={formData} /> }
      {currentStep === 2 && <SecondStep handleFormData={handleInputData} updateStep={updateStep} values={formData} /> }
      {currentStep === 3 && <ThirdStep handleFormData={handleInputData} updateStep={updateStep} values={formData} /> }
    {currentStep === 4 && <FourthStep handleFormData={handleInputData} updateStep={updateStep} values={formData} /> }
      
    </div>
  );
}

export default App;

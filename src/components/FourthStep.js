import React from 'react'
import rightClick from '../images/rightClick.jpeg'

function FourthStep({handleFormData,updateCurrentStep1}) {
  const submitFormData = (e) => {
    e.preventDefault();
    alert("Form data is available in console panel");
    updateCurrentStep1(1);
  };
  
  return (
    <div>
        <div className='circleWithRight'>
            <img className='rightClick'style={{width:"100px"}} src={rightClick} />
        </div>
        
        <h2 className='ftTitle'>Congratulations, Eren!</h2>
        <p className='ftpara'>You have completed onbording, you can start using the Eden!</p>
        <form onSubmit={submitFormData}>
       <input className='primaryButton' 
        type='submit'
        value='Launch Eden' 
        style={{width:'90%'}}
        onClick={submitFormData}
        />
        </form>
        </div>
  )
}

export default FourthStep
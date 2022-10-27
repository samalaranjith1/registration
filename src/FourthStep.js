import React from 'react'
import rightClick from './rightClick.jpeg'

function FourthStep({handleFormData,updateStep}) {
  const submitFormData = (e) => {
    console.log(handleFormData);
    console.log("ranjith");
    console.log(updateStep);
    window.location.reload()
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
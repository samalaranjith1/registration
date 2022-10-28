import React from 'react'

function FirstStep({handleFormData,updateStep}){
  const submitFormData = (e) => {
    e.preventDefault();
  };
  return (
      <div className='firststep'>
       <div className='fsTitle'>
       <h1>Welcome! First things first...</h1>
        <p className='fsParagraph'>You can always change them later</p>
       </div>

        <div className='fsInputFields'>
        <form onSubmit={submitFormData}>
        <div className='inputBlock'>
        <label htmlFor='fullName'>Full Name</label>
        </div>
        <div>
        <input 
        type='text' 
        id='fullName' 
        name='fullName'
        placeholder='Steve Jobs'
        onChange={handleFormData("fullName")}
        />
        </div>

        <div className='inputBlock'>
        <label htmlFor='displayName'>Display Name</label>
        </div>
        <div>
        <input 
        type='text' 
        id='displayName' 
        placeholder='Steve'
        name='displayName'
        onChange={handleFormData("displayName")}
        />
        </div>
        <input className='primaryButton' 
        type='submit'
        value='Create Workspace' style={{width:'100%'}}
        onClick={updateStep}
        />
        </form>

      </div>
        </div>
  )
}
export default FirstStep

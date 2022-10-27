import React from 'react'
import single from './self.jpeg'
import team from "./team.jpeg"

function ThirdStep({handleFormData,updateStep}) {
    const submitFormData = (e) => {
        e.preventDefault();
      };
    return (
    <div>
         <h1 className='tdTitle'>How are you planning to use Eden</h1>
        <p className='tdpara'>We'll streamline your setup experience accordingly</p>
        <form onSubmit={submitFormData}>
        <div className='optionsbox'>
        <div className="radio-toolbar">
    <div className='option1'>
    <img className='singleImage' src={single}/>
      <input type="radio"
        id="forMyself"
        name="option"
        value="forMyself"
        checked={handleFormData.option==='forMyself'}
        onChange={handleFormData("option")}
       />

      <label htmlFor="forMyself"><h2>For Myself</h2>
          <div>
              <p>Write better. Thinkmore clearly. Stay organized</p>
          </div></label>
      </div>
      <div className='option2'>
      <img className='teamImage' src={team}/>

        <input type="radio" 
        id="forTeam" 
        name="option" 
        value="forTeam"
        checked={handleFormData.option==='forTeam'}
        onChange={handleFormData("option")}
         />
        <label htmlFor="forTeam"><h2>With my team</h2>
            <div>
                <p>Wikis, docs, tasks & projects, all in one place.</p>
            </div></label>
        </div>

</div>
<p>&nbsp;</p>
       
     
        </div>
        <input className='primaryButton' 
        type='submit'
        value='Create Workspace' 
        style={{width:'90%'}}
        onClick={updateStep}
        />
        </form>
   

    </div>
  )
}

export default ThirdStep
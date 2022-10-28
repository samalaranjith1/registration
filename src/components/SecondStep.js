import React from 'react'

function Second({handleFormData,updateStep}) {
  const submitFormData = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        <h1 className='SSTitle'>Let's set up a home for all your work</h1>
        <p className='SSpara'>You can always create another workspace later</p>
        <form onSubmit={submitFormData}>
        <div className='SSInputFields'>
        <div className='SSFiled'>
        <label htmlFor='workspaceName'>Workspcae name</label>
        </div>
        <div>
        <input 
        type='text' 
        id='workspaceName' 
        placeholder='Eden'
        name='workspaceName'
        onChange={handleFormData("workspaceName")}
        />
        </div>

        <div className='SSFiled'>
        <label htmlFor='workspaceUrl'>Workspcae URL(optional)</label>
        </div>
        <div className='workspaceurl'>
          <input className='workspaceurl1' type='text' placeholder='www.eden.com' disabled/>
        <input  className='workspaceurl2'
        type='text' 
        id='workspaceUrl' 
        placeholder='Example'
        name='workspaceUrl'
        onChange={handleFormData("workspaceUrl")}

        />
        </div>
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

export default Second
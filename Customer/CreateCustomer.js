import React, { useState } from 'react'

const CreateCustomer = () => {

    const [name, setName] = useState();
    const [id, setId] = useState();

  return (
    <div>
        <form>
            <label>Customer Full Name:</label>
            <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>National Id:</label>
            <input type='number' placeholder='Enter your id' value={id} onchange={(e)=>setId(e.target.value)}/>
            {/* <input onSubmit={handleSubmit}/> */}
        </form>
    </div>
  )
}

export default CreateCustomer
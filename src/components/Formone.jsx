import React from 'react'

const FormOne = () => {
  return (
    <div className='h-screen flex items-center justify-center '>

      <div className='bg-white rounded-xl p-6 flex flex-col itmes-center gap-2'>

        <form>
          <input className='border-2 rounded px-3 py-1 text-xl'  type='text' placeholder='enter name here' />
          <input type='email' placeholder='enter email' />
          <input type='password' placeholder='enter passwprd' />
          <input type='password' placeholder='confirm password' />
          <button>Submit</button>
        </form>

      </div>

    </div>
  )
}

export default FormOne

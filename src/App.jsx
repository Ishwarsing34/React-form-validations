import { useState } from "react";
import "./App.css";

function App() {

  

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('')
 const [error ,setError] = useState('')


 const [users , setUsers] = useState([])

  const submitHandler = (e) =>{
        
    e.preventDefault();

    if(password.length < 8){
      setError('password length should be minimum of 8 chars')
    }
     

    if(password != confirmPassword){
      setError('password and confirm password must be same')
    }

    if(!/[`!@#$%^&*()><.,;]/.test(password)){
       setError('Password must contains any special characters')
       return;
    }

    if(!/[A-Z]/.test(password)){
      setError('Password should contain capital letters')
      return;
    }

    const copyUsers = [...users];

    setUsers([...copyUsers, {fullName,email,password}])

    setFullName('')
    setEmail('')
    setConfirmPassword('')
    setPassword('')


  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register
        </h2>

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
         className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter name"
            value={fullName}
            onChange={(e)=>{
              setFullName(e.target.value)
            }}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e)=>{
              setConfirmPassword(e.target.value)
            }}
          />

          {
            error && <p className="text-red-500 text-xl">{error}</p>
          }

          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

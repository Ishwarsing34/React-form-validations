import { useState } from "react";
import "./App.css";

function App2() {



  const [formData, setFormData] = useState({

    fullName: '',
    password: '',
    confirmPassword: '',
    email: ''
  })


  const [users, setUsers] = useState([])
  const [error ,setError] = useState('');


  const handleChange = () =>{

  }

  const submitHandler = (e) => {

    e.preventDefault();



  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register
        </h2>

        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            name="fullName"
            placeholder="Enter name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
           onChange={handleChange}
          />

          <input
            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            name="confirm password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
           onChange={handleChange}
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

export default App2;

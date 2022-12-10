import React, {useState, useEffect} from 'react'

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false)

  useEffect(() => {
    document.title = 'Admin Login';
  }, []);

  const usernameChange = (value) => {
    setName(value.target.value)
  }

  const passwordChange = (value) => {
    setPassword(value.target.value)
  }

  const validateValues = () => {
    if (name === 'Admin' && password === 'Admin') {
      setInvalid(false);
      document.location.href = "/AdminHome";
    } else {
      setInvalid(true);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center content-center pt-72'>
      <div className="mb-6 w-96">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input onChange={usernameChange} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Admin" />
      </div> 
      <div className="mb-6 w-96">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input onChange={passwordChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
        {invalid ? <p className='block mb-2 text-sm font-medium text-red-600'>Username or password incorrect</p> : ''}
      </div>
      <button onClick={validateValues} className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
    </div>
  )
}

export default AdminLogin

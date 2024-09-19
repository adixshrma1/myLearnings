import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div className='w-80 p-4 rounded-md drop-shadow-lg bg-white mb-2'>
        <h1 className='text-3xl'>Login</h1>
        <input 
            className='p-2 w-full my-2 rounded-md hover:drop-shadow-md border '
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}/> <br />
        <input
            className='p-2 w-full mb-3 rounded-md hover:drop-shadow-md border'
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)} /> <br />
        <button className='bg-blue-500 text-white p-2 rounded-lg' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import { UserContextProvider } from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='h-screen w-screen flex flex-col justify-center items-center '>
        <Login />
        <Profile />
      </div>

    </UserContextProvider>
  )
}

export default App

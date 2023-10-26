
import {useState} from 'react'
import Todoo from "./components/Todoo"
import Footer from "./components/Footer"


function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    if (darkMode ){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }


  return (
    <>
      <Todoo
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <Footer />
    </>
  )
}

export default App





 

























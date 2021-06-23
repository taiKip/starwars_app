import classes from './App.module.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets'
import People from './components/People'

function App() {
  const [page, setPage] = useState<string>('planets')

  const setPageName = (pageName:string) => {
    
    setPage(pageName)
    
  }

  
  return (
    <>
    <div className={classes.App} >
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPageName}/>
      <div >
{page==='planets'?<Planets/>:<People/>}
      </div>
      </div>
      
      </>
  );
}

export default App;

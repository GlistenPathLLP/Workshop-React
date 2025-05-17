import './App.css';
import React,{createContext} from 'react';
import { Parent } from './useContext/parent';
//import { StateExample } from './hooks/statesExample';
//import { BindingExample } from './bindingExample';
//import { Controlled } from './controlledUncontrolled/controlled';
//import { UnControlled } from './controlledUncontrolled/unControlled';

export const AppTheme = createContext() 


function App() {
  const theme = "dark"
  return(
    <AppTheme.Provider value={theme}>
    <div className='App'>
      <Parent/>
    </div>
    </AppTheme.Provider>
  )
}

export default App;

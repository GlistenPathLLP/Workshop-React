import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/contact';
import { ContactInfo } from './pages/contactInfo';
import { ContactInfo2 } from './pages/conatctInfo2';

function App() {
  return(
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>}>
      <Route index element={<ContactInfo/>}/>
      <Route path="contact2" element={<ContactInfo2/>}/>
    </Route>
    <Route path="/about/:apiurl" element={<About/>} />
    <Route path="*" element={<NotFound/>} />
   </Routes>
  )
}

export default App;

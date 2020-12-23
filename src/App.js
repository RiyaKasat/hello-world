import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
       {/* JSX in functional component 8*/}
      
       <Greet name="Bruce" Designation="Graduate"/>
       <Greet name="Rashmi" Designation="IAS Officer">
         <p>This is Rashmi's props demo</p>
       </Greet>
       <Greet name="Jordan" Designation="FSD">
         <button>Action</button>
       </Greet>

         {/* JSX in Class component 8*/}

       <Welcome name="Riya" hobby="painting"/>
       <Welcome name="Siya" hobby="Dancing"/>
       <Welcome name="Saga" hobby="Reading"/>
       <Hello/>
    </div>
  );
}

export default App;

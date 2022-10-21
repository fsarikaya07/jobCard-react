
import './App.css';
import Card from "../src/components/card/Card"
import data from "../src/data/data"
import Header from './components/header/Header';

function App() {
 
  return (
    <div className="App">
    <Header/>
    {data.map((item)=>{
      const {name,job,comment,img} = item
      return(<Card name={name} job={job} comment={comment} img={img}/>)
    })}
    
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/Card';
function App() {
  const data = [
    {
      id:'e1',
      heading:"Mobile Operating System",
      ul1:"Android",
      ul2:"Blackberry",
      ul3:"Iphone",
      ul4:"Windows phone"
    },
    {
      id:'e2',
      heading:"Mobile Manufacturers",
      ul1:"Samsung",
      ul2:"HTC",
      ul3:"Micromax",
      ul4:"Apple"
    }
  ]
  return (
    <div className="App">
      <Card
      heading ={data[0].heading}
      ul1 = {data[0].ul1}
      ul2 = {data[0].ul2}
      ul3 = {data[0].ul3}
      ul4 = {data[0].ul4}/>
      <Card
      heading = {data[1].heading}
      ul1 = {data[1].ul1}
      ul2 = {data[1].ul2}
      ul3 = {data[1].ul3}
      ul4 = {data[1].ul4}/>
    </div>
  );
}

export default App;

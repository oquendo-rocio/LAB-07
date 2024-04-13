import './App.css'
import { Button } from './components/Button'
import { RandomComponent } from './components/RandomComponent';

function App() {

  const buttonText = "Count : ";

  return (
    <>
      <h1>LABORATORIO 7</h1>
      <Button text={buttonText}/>
      <RandomComponent
        name="Juan Pérez"
        age={30}
        occupation="Ingeniero"
        imageUrl="./images/avatar1.png"
      />
      <RandomComponent
        name="Maria Dominguez"
        age={28}
        occupation="Psicologa"
        imageUrl="./images/avatar2.jpg"
      />
    </>
  )
}

export default App
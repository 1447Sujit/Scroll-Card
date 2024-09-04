
import './App.css'
import Scroll from './Components/Scroll'
import photo from './data'


function App() {

 
 
  return (
    <div className='appBox'>
      <h1>Scroll Bar</h1>
      <Scroll photo={photo}></Scroll>
    </div>
  )
}

export default App

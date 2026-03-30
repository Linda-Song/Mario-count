import { useState } from 'react'; // 1. useState import
import './App.css'
import CountBox from './components/CountBox'
import counterStore from './stores/counterStore'
import MarioImg from "./assets/mario.png"
import StarImg from "./assets/star.png"
import BoxImg from "./assets/box.png"

function App() {
  const {count, reset, decrease, decreaseBy, increase, increaseBy} = counterStore();
  const [isJumping, setIsJumping] = useState(false);

 // jump trigger
  const triggerJump = (newCount) => {
    if (newCount > count || newCount > 0) {
      setIsJumping(true);
      // 애니메이션 초기화
      setTimeout(() => setIsJumping(false), 500);
    }
  };


  const handleIncrease = () => {
    increase();
    triggerJump(count + 1); // 점프값이 얼마인지 트리거에게 보내준다. 
  };

  const handleIncreaseBy = (value) => {
    increaseBy(value);
    triggerJump(count + value);
  };

  const handleDecrease = () => {
    if (count > 0) {
      decrease();
      triggerJump(count - 1);
    }
  };

  const handleDecreaseBy = (value) => {
    if (count - value > 0) {
      decreaseBy(value);
      triggerJump(count - value);
    } else {
      decreaseBy(value); 
    }
  };

  return (
    <div className='app'>
      <div className='container'>
        
        <div className="game-box">
         
          <div className='mario-box'>
             <div className='box-img'>
          <img 
            src={BoxImg} 
            alt="box" 
            style={{width:'60px', height:'60px'}}  
          />
          </div>

            <img 
              src={MarioImg} 
              alt="mario" 
              style={{width:'90px'}} 
              className={isJumping ? 'mario-img jump' : 'mario-img'}
            />
            <div className='mario-btn'>
              <button onClick={() => handleDecreaseBy(10)}> - 10 </button>
              <button onClick={handleDecrease}> - 1 </button>
              <button onClick={reset}> Reset </button>
              <button onClick={handleIncrease}> + 1</button>
              <button onClick={() => handleIncreaseBy(10)}> + 10 </button>
            </div>
          </div>
          <CountBox count={count} className ="countbox"/>
        </div>
      </div>
    </div>
  )
}

export default App
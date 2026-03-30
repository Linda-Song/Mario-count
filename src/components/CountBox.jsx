import React from 'react'
import counterStore from '../stores/counterStore'

const CountBox = () => {
  const {count} = counterStore();
  return (
    <div className='countBox'>
      <h2>Score</h2>
      <h2>{count}</h2>
      
    </div>
  )
}

export default CountBox;

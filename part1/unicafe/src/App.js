import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => {
  return(<tr>
          <th>{text}</th>
          <th>{value}</th>
        </tr>
    )
}

const Statistics = ({stats}) => {
  const [good, neutral, bad] = stats

  if (Sum(stats) === 0) {
    return('no feedback given.')
  }

  const average = Average(stats)
  const positive = Positive(stats)
  

  return (
    <div>
      <table>
        <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="positive" value ={average} />
      <StatisticLine text="negative" value ={positive} />
      </tbody> 
    </table>
    </div>
  );
}


const Sum = (arr) => {
  // takes array and sums it up. Equivalent to:
  // arr.reduce((a, b) => a + b, 0)
  let sum = 0;
  const add = num => sum += num;
  arr.forEach(value => {
    add(value);
  });
  return sum;
}

const Average = (arr) => {
  // uses the sum function defined to return the average
  let sum = Sum(arr)
  let average = sum / arr.length;
  return (average.toFixed(1));
}

const Positive = (arr) => {
  // relies on good being defined first in array!
  // takes array and returns the percentage of the first over the total
  let positive = arr[0] / Sum(arr)
  positive = positive * 100
  if (positive) {
    return(positive.toFixed(1) + '%')
  } else {
    return 0
  }
 
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='bad'/>


      <h2>Statistics</h2>
      <Statistics stats={[good, neutral, bad]}></Statistics>
      </div>
  )
}

export default App
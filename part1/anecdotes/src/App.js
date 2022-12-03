import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  const rand = getRandomInt(anecdotes.length);


  const handleVotes = () => {
    // sets a new const, newVotes, with all of the values in defined array "votes"
    const newVotes = {...votes};
    let current = 0;
    // if the index has been defined, then add the current amount of votes to it
    if (selected in newVotes) {
      current += newVotes[selected]
    }
    // Add one to the tally of votes (because the user has already pressed the button). 
    newVotes[selected] = current + 1
    console.log(newVotes)
    // set "votes" to edited object "newVotes". 
    setVotes(newVotes);
  }


  const getHighestVote = () => {
    if (Object.keys(votes).length === 0) {
      return;
    }
    // return key of the highest value in the "votes" object
    const max = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
    // use the key found and grab that quote from the "anecdotes array"
    const quote = anecdotes[max];

    return quote;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      <br></br>
      <Button onClick={() => setSelected(rand)} text="Next Anecdote"/>
      <Button onClick={() => handleVotes()} text="vote"></Button>
      <h1>Highest Voted Anecdote</h1>
      {getHighestVote()}
    </div>
  )
}

export default App
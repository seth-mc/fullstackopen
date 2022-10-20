const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = (part) => {
  return (
    <>
      <p>
       {part.name} {part.exercise}
      </p>
    </>
  )
}

const Content = (part) => {
  return (
    <>
      <div>
        <Part name={part.part1n} exercise={part.part1e}/>
        <Part name={part.part2n} exercise={part.part2e}/>
        <Part name={part.part3n} exercise={part.part3e}/>
      </div>
    </>
  )
}

const Total = (exercises) => {
  return (
    <div>
      <p>
        Number of exercises {exercises.one + exercises.two + exercises.three}
        </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part1n={part1} part1e={exercises1} part2n={part2} part2e={exercises2} part3n={part3} part3e={exercises3}/>
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}

export default App
const Header = (course) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Content = (part) => {
  return (
    <>
      <p>
       {part.name} {part.exercise}
      </p>
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
      <Content name={part1} exercise={exercises1} />
      <Content name={part2} exercise={exercises2} />
      <Content name={part3} exercise={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3}/>
    </div>
  )
}

export default App
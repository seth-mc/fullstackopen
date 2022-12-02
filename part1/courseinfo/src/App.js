const Header = (course) => {

  return (
    <div>
      <h1>{course.course.name}</h1>
    </div>
  )
}

const Part = (part) => {
  
  return (
    <>
      <p>
       {part.name} {part.exercises}
      </p>
    </>
  )
}

const Content = (course) => {
  console.log("here it comes...")
  console.log(course.parts.parts)
  const [first, second, third] = course.parts.parts
  return (
    <>
      <div>
        <Part name={first.name} exercises={first.exercises}/>
        <Part name={second.name} exercises={second.exercises}/>
        <Part name={third.name} exercises={third.exercises}/>
      </div>
    </>
  )
}

const Total = (course) => {
  const [first, second, third] = course.parts.parts
  return (
    <div>
      <p>
        Number of exercises {first.exercises + second.exercises + third.exercises}
        </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App
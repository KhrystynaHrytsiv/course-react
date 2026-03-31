import './App.css'


function App() {
  const coursesTitleArray:string []= [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
  ];
  return (
    <ul>
      {coursesTitleArray.map((course, index) =><li key={index}>{course}</li>)}
    </ul>
  )
}

export default App

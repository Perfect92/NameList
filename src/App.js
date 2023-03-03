import React , {useState} from 'react'


function App() {
  const [names,setNames] = useState(['Арген','Максат','Жанылай',])
  return (
    <div className="App">
      <ul>
        {names.map((name,index)=>(
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

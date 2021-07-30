// import logo from './logo.svg';
import './App.css';
import playersData from './players-data/players-data.json'
import { useState } from 'react';
import Players from './components/Players/Players';
import Team from './components/Team/Team';



function App() {
  const [player, setPlayer] = useState(playersData)

  const [team, setTeam] = useState([])

  let addTeam = (selectTeam) => {
    let newTeam = [...team, selectTeam]
    setTeam(newTeam);
  }
  return (
    <div className="App">
      <h1>This is my team player</h1>
      {/* <h3>My selected player</h3> */}
   
        <ul>
          <h3>My selected players</h3>
          {team.map(item => <li>{item.name}</li>)}
        </ul>
        
      
      <Team team={team}></Team>
      <div className='grid-area'>
        {
          player.map(item => <Players addTeam={addTeam} item={item} key={item.id}></Players>)
        }
      </div>

    </div>
  );
}

export default App;

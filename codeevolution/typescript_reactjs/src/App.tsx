import './App.css';
import { Basic } from './components/Basic';
import { Object } from './components/Object';
import { ObjectList } from './components/ObjectList';
import { Advance } from './components/Advance';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { EventClickButton } from './components/EventClickButton';
import { EventChangeInput } from './components/EventChangeInput';
import { Css } from './components/Css';
import { LoggedIn } from './components/useState/LoggedIn';
import { User } from './components/useState/User';

function App() {
  const personName = {
    first: 'Dong gu',
    last: 'Kang'
  }
  const nameList = [
    {
      first: 'Gil Dong',
      last: 'Hone'
    },
    {
      first: 'Gi Ho',
      last: 'Kim'
    },
    {
      first: 'Jin Su',
      last: 'Lee'
    }
  ]

  return (
    <div className="App">
   
      <Basic 
        name={'DGK123'}
        messageCount={10}
        isLoggedIn={false}
      />
      <br />
      <Object name={personName} />
      <br />
      <ObjectList names={nameList} /> 
      <br />
      <Advance status={'loading'} />
      <br />
      <Oscar>
        <Heading>Oscar is dddsdg</Heading>
      </Oscar>
      <br />
      <EventClickButton 
        handleClick={
          (event, id)=>{ console.log('button clicked', event, id) }
        }
      />
      <br />
      <EventChangeInput 
        value='' 
        handleChange={ 
          (event)=>console.log(event) 
        }
      />
      <br />
      <Css styles={{border: '1px solid black', padding: '1rem', color: 'skyblue'}}/>
      <br />
      <h2>UseState</h2>
      <LoggedIn />
      <User />
      <br />

    </div> 

  );
}

export default App;

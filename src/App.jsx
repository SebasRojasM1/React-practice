import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

/* const sebasInfo = { userName: 'SebasRojasM1' };
const andreaInfo = { userName: 'Andrea123' }; */

const users = [
  {
    userName: 'SebasRojasM1',
    name: "Sebastian",
    isFollowing: true
  },
  {
    userName: 'Andrea123',
    name: "Andrea",
    isFollowing: true,
  },
]

function App() {


  return (
/*     <>   
      <TwitterFollowCard {...sebasInfo} >
        Sebastian Rojas
      </TwitterFollowCard>

      <TwitterFollowCard {...andreaInfo}>
        Andrea
      </TwitterFollowCard>
    </> */
    
    //Renderizamos el array de usuarios creados
      <section className='App'>
        {
          users.map((user) => {
          
          const { userName, name, isFollowing } = user;
          return (
            <TwitterFollowCard
              key={userName} //Identificador unico del elemento. Es obligatorio implementarlo
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          );
        })}
      </section>
    );
}

export default App;

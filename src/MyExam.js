import './App.css';
import { useQuery, gql } from '@apollo/client'

const GET_SOMETHING = gql`
  query {
    categories {
      name
    }
  }
`

function App() {

  const { error, data, loading} = useQuery(GET_SOMETHING);
  console.log(error, loading, data)

  return (
    <div>
      {loading && (<p>Loading</p>)}
      {data &&
        data.categories.map(({name})=> (
          <p key={name}>{name}</p>
        ))
      }
    </div>
  );
}

export default App;

import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_TEST_QUERY = gql`
  query {
    business(id: "garaje-san-francisco") {
      name
      id
      alias
      rating
      url
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TEST_QUERY);

  console.log(data);
  return <div className="App"></div>;
}

export default App;

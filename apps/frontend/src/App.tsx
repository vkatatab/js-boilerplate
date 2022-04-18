import graphql from 'babel-plugin-relay/macro';
import {
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './relay/RelayEnvironment';

const AppQuery = graphql`
    query AppQuery {
        books {
            title
        }
    }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AppQuery);

const App = () => {
    const data = usePreloadedQuery(AppQuery, preloadedQuery);
    return <div>{ data.books[0].title }</div>;
}

export default App;
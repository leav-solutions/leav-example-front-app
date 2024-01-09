import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import Home from './Home';

function App() {
    const ORIGIN_URL = window.location.origin;
    const API_ENDPOINT = 'graphql';

    const gqlClient = new ApolloClient({
        link: new HttpLink({
            uri: `${ORIGIN_URL}/${API_ENDPOINT}`,
        }),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={gqlClient}>
            <Home />
        </ApolloProvider>
    );
}

export default App;

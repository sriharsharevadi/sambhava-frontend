import React from 'react';
import ReactDOM from 'react-dom';
// import { ApolloProvider , useQuery} from '@apollo/react-hooks';
//
//
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

// or you can use `import gql from 'graphql-tag';` instead

client
  .query({
    query: gql`
      {   get_student(id:18){
            id
            email
            expiry_date
            lastName
            last_login
            alternate_no
          }
        
      }
    `
  })
  .then(result => console.log(result.data.get_student.id));

  // const StudentComponent = graphql(dogQuery)(props => {
  //   const { error, dogs } = props.data;
  //   if (error) {
  //     return <Text>{error}</Text>;
  //   }
  //   if (dogs) {
  //     return <Text>{dogs[0].name}</Text>;b
  //   }
  
  //   return <Text>Loading...</Text>;
  // });



  // const App = () => (
  //   <ApolloProvider client={client}>
  //     <div>
  //       <h2>client🚀</h2>
  //     </div>
  //   </ApolloProvider>
  // );
  //
  // render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

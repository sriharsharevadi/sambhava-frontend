import ApolloClient, {gql} from "apollo-boost";
const client = new ApolloClient({
    uri: 'http://52.66.43.140:3000/graphql',
});

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {

// or you can use `import gql from 'graphql-tag';` instead
   return  client
        .mutate({
            variables: { email: "rsriharsha22@gmail.com", password: "sriharsha"},
            mutation: gql`
       mutation user_login($email: String!, $password: String!){
  user_login(user:{
    email: $email,
    password:$password
  } ) {
    token
    role
    verified
    activated
    success
  
}
   }
    `
        })
        .then(user => {
            console.log(user);
            if (user.data.user_login) {
                console.log(user);
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                // user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user.data.user_login));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return  client
        .mutate({
            variables: { email: "rsjrmihhrsha22@mail.com", password: "sriharsha"},
            mutation: gql`
       mutation user_login($email: String!, $password: String!){
  user_login(user:{
    email: $email,
    password:$password
  } ) {
    token
    role
    verified
    activated
    success
  
}
   }
    `
        })
        .then(user => {
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
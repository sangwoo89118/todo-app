import types from './types';

const BASE_URL = 'http://programmingtest-env.psgbbuhp4i.us-east-1.elasticbeanstalk.com';

export function signIn(cred){
    return dispatch =>{
        fetch(BASE_URL + '/login',{
            method: 'POST',
            headers: {     
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cred)
        }).then(res => localStorage.setItem('token', res.headers.get('Authorization')))
        .catch(err => alert('error', err));
        
        dispatch({ type: types.SIGN_IN });      
    }
}
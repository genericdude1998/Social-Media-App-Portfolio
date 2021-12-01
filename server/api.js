import {posts} from './posts';

export function getLoginToken(username,password){

    return new Promise((res,rej) => {
        setTimeout(() => {
            if(username === 'Admin' && password === '1234'){
                res({data:'live-server-token'});
            }
            else{
                rej({response:{data:'username or password are wrong please try again!'}});
            }
        }, 100);
    });
}

export function getPosts(token){

    return new Promise((res,rej) => {
        setTimeout(() => {
            if(token){
                res({data: posts});
            }
            else{
                rej({response:{data:'no token given!'}});
            }
        }, 100);
    });
}

getPosts('whatevertoken').then(res => console.log(res));


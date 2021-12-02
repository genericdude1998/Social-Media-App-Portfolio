import {posts} from './posts';
import { users } from './users';

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
                res({data: [...posts]});
            }
            else{
                rej({response:{data:'no token given!'}});
            }
        }, 100);
    });
}

export function getUser(id){

    return new Promise((res,rej) => {
        setTimeout(() => {
            if(id){
                res({data: users[id]});
            }
            else{
                rej({response:{data:'no id given'}});
            }
        }, 100);
    });
}

export function sendPost(content){

    return new Promise((res) => {
        const newPost = {
            id: posts.length, 
            name: 'Me', 
            content: content, 
            date: new Date().toLocaleString(), 
            comments:[],
        }
        posts.push(newPost);

        setTimeout(() => {
            res({data: 'posted a new post!'});
        }, 100);
    });
}

export function sendComment(content, postId){

    return new Promise((res) => {
        const newComment = {name: 'Me', content: content, date: new Date().toLocaleString()}
        posts[postId].comments = [...posts[postId].comments, newComment];

        setTimeout(() => {
            res({data: 'posted a new comment!'});
        }, 100);
    });
}

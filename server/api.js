export function getLoginToken(username,password){

    return new Promise((res,rej) => {
        setTimeout(() => {
            if(username === 'Admin' && password === '1234'){
                res({data:'live-server-token'});
            }
            else{
                rej({response:{data:'username or password are wrong please try again!'}});
            }
        }, 2000);
    });
}

export function setCookie(name,value){
    const cookie =`${name}=${value}`;
    document.cookie = cookie;
    return cookie;
}
const takeTokens= <T>  (key:string) =>{
    const token = localStorage.getItem(key) || '';
    if (!token){
        return token as T
    }
    const parse = JSON.parse(token);
    return parse as T
}

export {takeTokens}
import {type FC, memo} from "react";

const User:FC<{foo:()=> void, arr:number[], user:{name:string}}> = memo(({arr, user}) => {
    console.log('user');
    console.log(arr);
    return (
        <div>
            {user.name}
        </div>
    );
})

export {User};
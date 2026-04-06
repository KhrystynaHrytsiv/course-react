import {type FC, memo} from "react";

const User:FC<{foo:()=> void}> = memo(() => {
    console.log('user');
    return (
        <div>
            user
        </div>
    );
})

export {User};
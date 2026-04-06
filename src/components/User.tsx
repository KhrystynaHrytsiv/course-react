import {memo} from "react";

const User = memo(() => {
    console.log('user');
    return (
        <div>
            user
        </div>
    );
})

export {User};
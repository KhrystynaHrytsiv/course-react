import {type SyntheticEvent, useState} from "react";

interface IForm{
    username:string,
    password:string
}
const Form = () => {
    const [formState, setFormState] = useState<IForm>({username:'hello', password: '1111'});


    const handleSubmit = (ev:SyntheticEvent<HTMLFormElement>) => {
        ev.preventDefault();
        // console.log(ev);
        // console.log(ev.target);
        // const form = ev.target as HTMLFormElement;
        // console.log(form);
        // console.log(form.username.value);
        // console.log(form.password.value);
        const user ={
            username: formState.username,
            password:formState.password
        };
        console.log(user);
    }


    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, username:input.value})
    // }
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, password:input.value})
    // }

    const handleInputChange = (e:SyntheticEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    )
};

export {Form};
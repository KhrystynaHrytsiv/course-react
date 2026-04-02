import {useForm} from "react-hook-form";

interface IForm{
    username:string,
    password:string,
    age:number
}
const Form = () => {
    const {handleSubmit, register} = useForm<IForm>();
    const handler =(formData:IForm) =>{
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handler) }>
                <input type="text" {...register('username')} />
                <input type="text"  {...register('password')} />
                <input type="number"  {...register('age')} />
                <button>send</button>
            </form>
        </div>
    )
};

export {Form};
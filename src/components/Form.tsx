import {useForm} from "react-hook-form";

interface IForm{
    username:string,
    password:string,
    age:number
}
const Form = () => {
    const {handleSubmit, register, formState:{errors, isValid}} = useForm<IForm>({mode:'all'});
    const handler =(formData:IForm) =>{
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handler) }>
                <label><input type="text" {...register('username',
                    {required:true,
                        // pattern:{value:/\w+/, message: 'wrong username'},
                        minLength:{value:1, message: 'incorrect name'}
                    })} />
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label><input type="text"  {...register('password', {
                    required: true,
                    minLength: {value: 3, message: 'pass is too short'},
                    maxLength: {value: 7, message: 'pass is too long'}
                })} />
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label><input type="number"  {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 1, message: 'age too small'},
                    max: {value: 117, message: 'age too big'},
                })} />
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    )
};

export {Form};
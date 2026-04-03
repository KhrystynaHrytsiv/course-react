export const retriveLocalStorage= <T>(key:string) =>{
    const object = localStorage.getItem(key) || '';//беремо об'єкт з лс
    if (!object){
        return {} as T;//якщо немає об'єкта то примусово повернути пустий об'єкт вказаного типу
    }
    const parse = JSON.parse(object);//в іншому випадку об'єкт перетворити на рядковий
    return parse as T //повернути об'єкт та привести його до потрібного типу
};

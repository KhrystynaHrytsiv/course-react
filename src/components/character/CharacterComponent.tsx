import type {ICharacter} from "../../interface/ICharacter.ts";
import type {FC, ReactNode} from "react";
import css from './Character.module.css'

interface IProp {
    member:ICharacter,
    children:ReactNode
}
const CharacterComponent:FC<IProp> = ({member, children}) => {
    const {name, surname, age,  photo} = member;
    return (
        <div className={css.member}>
            <h2>{name} {surname} {age}</h2>
            <img src={photo} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export {CharacterComponent};
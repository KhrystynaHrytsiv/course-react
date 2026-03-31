import type {ICourse} from "../interface/ICourse.ts";
import type {FC} from "react";

interface IProp {
   course:ICourse
}
const Course:FC<IProp> = ({course}) => {
    const {title, monthDuration } = course;
    return (
        <div className='border-gray-500 bg-gray-300 my-3 w-50 text-center'>
            <h2 className='font-bold'>{title}</h2>
            <p>MonthDuration: {monthDuration}</p>
        </div>
    );
};

export {Course};
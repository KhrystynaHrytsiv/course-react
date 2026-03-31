import type {ICourse} from "../interface/ICourse.ts";
import {Course} from "./Course.tsx";

const CourseArray = () => {
    const coursesAndDurationArray:ICourse[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    return (
        <div>
            {coursesAndDurationArray.map((course, index) => <Course key={index} course={course}/>)}
        </div>
    );
};

export {CourseArray};
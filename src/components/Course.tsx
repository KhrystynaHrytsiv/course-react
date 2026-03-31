import type {ICourse} from "../model/ICourse.ts";

const Course = ({course}:{course:ICourse}) => {
    const {title, monthDuration, hourDuration, modules} = course;
    return (
        <div style={{border: '1px solid', padding: '20px'}}>
          <h2>{title}</h2>
            <p>MonthDuration: {monthDuration}</p>
            <p>HourDuration: {hourDuration}</p>
            <ul>
                {modules.map((item, index) =><li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export {Course};
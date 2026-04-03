import {Cars} from "../components/Cars/Cars.tsx";
import {CarForm} from "../components/CarForm.tsx";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
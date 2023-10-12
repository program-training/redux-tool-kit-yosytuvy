import { leftAnimal, rightAnimals } from "../data/animals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { update } from "../store/animalSlice";

const LeftButtons = () => {
    const animal = useAppSelector((store) => store.animal).animal;

    const animals = leftAnimal;
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="left-buttons">
                {animals.map((animalFromArray) => (
                    <button
                        onClick={() => {
                            dispatch(update(animalFromArray));
                        }}
                        style={{
                            backgroundColor:
                                animal === animalFromArray ? "blue" : "green",
                        }}>
                        {animalFromArray}
                    </button>
                ))}
            </div>
        </>
    );
};

export default LeftButtons;

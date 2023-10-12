import { rightAnimals } from "../data/animals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { update } from "../store/animalSlice";

const RightButtons = () => {
    const animal = useAppSelector((store) => store.animal).animal;

    const animals = rightAnimals;

    const dispatch = useAppDispatch();

    return (
        <>
            <div className="right-buttons">
                {animals.map((animalFromArray) => (
                    <button
                        onClick={() => {
                            dispatch(update(animalFromArray));
                        }}
                        style={{
                            backgroundColor:
                                animal === animalFromArray ? "blue" : "orange",
                        }}>
                        {animalFromArray}
                    </button>
                ))}
            </div>
        </>
    );
};

export default RightButtons;

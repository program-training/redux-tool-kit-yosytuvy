import { useAppDispatch } from "../store/hooks";
import { update } from "../store/animalSlice";

const InputField = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <input
                className="input"
                type="text"
                onChange={(e) => dispatch(update(e.target.value))}
            />
        </>
    );
};

export default InputField;

import InputField from "./InputField";
import LeftButtons from "./LeftButtons";
import RightButtons from "./RightButtons";

const Main = () => {
    return (
        <>
            <div className="options">
                <div className="buttons">
                    <LeftButtons />
                    <RightButtons />
                </div>
                <InputField />
            </div>
        </>
    );
};

export default Main;

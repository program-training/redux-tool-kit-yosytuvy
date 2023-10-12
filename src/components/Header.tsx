import { useAppSelector } from "../store/hooks";

const Header = () => {
    const animal = useAppSelector((store) => store.animal).animal;

    return (
        <>
            <div className="title">Chosen animal: {animal}</div>
        </>
    );
};

export default Header;

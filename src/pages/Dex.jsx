import { useNavigate } from "react-router-dom";
import PokemonContainer from "../components/Pokemon/PokemonContainer";

const Dex = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </button>
            <PokemonContainer />
        </div>
    );
};

export default Dex;

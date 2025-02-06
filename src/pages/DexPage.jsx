import { useNavigate } from "react-router-dom";
import PokemonContainer from "../components/Pokemon/PokemonContainer";

const DexPage = () => {
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

export default DexPage;

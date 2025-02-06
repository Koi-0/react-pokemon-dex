import { useNavigate } from "react-router-dom";
import PokemonList from "../components/Pokemon/PokemonList";

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
            <PokemonList />
        </div>
    );
};

export default Dex;

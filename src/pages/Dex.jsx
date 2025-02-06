import { useNavigate } from "react-router-dom";
import PokemonContainer from "../components/Pokemon/PokemonContainer";
import styled from "styled-components";

const Dex = () => {
    const navigate = useNavigate();

    return (
        <PokemonWrapper>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Home
            </button>
            <PokemonContainer />
        </PokemonWrapper>
    );
};

const PokemonWrapper = styled.div`
    padding: 20px;
`;

export default Dex;

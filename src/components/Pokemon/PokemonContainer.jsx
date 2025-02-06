import styled from "styled-components";
import PokemonDashboard from "./PokemonDashboard";
import PokemonList from "./PokemonList";

const PokemonContainer = () => {
    return (
        <PokemonWrapper>
            <PokemonDashboard />
            <PokemonList />
        </PokemonWrapper>
    );
};

const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export default PokemonContainer;

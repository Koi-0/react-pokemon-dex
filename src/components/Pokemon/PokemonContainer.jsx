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

/* 스타일 정의 (styled-components) */

const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export default PokemonContainer;

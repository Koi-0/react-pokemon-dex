import styled from "styled-components";
import PokemonDashboard from "./PokemonDashboard";
import PokemonList from "./PokemonList";
// import { useState } from "react";

const PokemonContainer = () => {
    // const [addCards, setAddCards] = useState([]);

    // const addPokemon = () => {};

    // const removePokemon = () => {};

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

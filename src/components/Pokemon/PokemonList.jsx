import styled from "styled-components";
import MOCK_DATA from "../../data/mock-data"; // Pokemon 데이터 가져오기
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    return (
        <div>
            <PokemonCardList>
                {MOCK_DATA.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </PokemonCardList>
        </div>
    );
};

const PokemonCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgb(240, 240, 240);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    padding: 20px;
`;

export default PokemonList;

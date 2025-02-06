import styled from "styled-components";
import PokemonDashboard from "./PokemonDashboard";
import PokemonList from "./PokemonList";
import { useState } from "react";

const PokemonContainer = () => {
    // 추가된 포켓몬 리스트 상태
    const [addCards, setAddCards] = useState([]);

    // 포켓몬 추가
    const addPokemon = (pokemon) => {
        console.log(pokemon);
        console.log(addCards);

        // 이미 6개의 포켓몬이 추가된 경우
        if (addCards.length >= 6) {
            alert("최대 6개의 포켓몬만 추가할 수 있습니다!");
            return;
        }

        // 포켓몬이 이미 존재하는지 확인
        if (!addCards.some((element) => element.id === pokemon.id)) {
            // 새로운 포켓몬일 경우
            setAddCards([...addCards, pokemon]);
            alert(`[${pokemon.korean_name}]이(가) 추가되었습니다.`);
        } else {
            alert(`[${pokemon.korean_name}]은(는) 이미 추가되었습니다!`);
        }
    };

    // 포켓몬 제거
    // const removePokemon = () => {};

    return (
        <PokemonWrapper>
            <PokemonDashboard addCards={addCards} />
            <PokemonList addPokemon={addPokemon} />
        </PokemonWrapper>
    );
};

const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export default PokemonContainer;

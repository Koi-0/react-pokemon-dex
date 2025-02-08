import styled from "styled-components";
import PokemonDashboard from "./PokemonDashboard";
import PokemonList from "./PokemonList";
import { useState } from "react";

const PokemonContainer = () => {
    // 추가된 포켓몬 리스트 상태 (배열 형태로 관리)
    const [addCards, setAddCards] = useState([]);

    // 포켓몬 추가 함수
    const addPokemon = (pokemon) => {
        // 이미 6개의 포켓몬이 추가된 경우
        if (addCards.length >= 6) {
            console.log("최대 6개의 포켓몬만 추가할 수 있습니다!");
            alert("최대 6개의 포켓몬만 추가할 수 있습니다!");
            return;
        }

        // 포켓몬이 이미 존재하는지 확인
        if (!addCards.some((element) => element.id === pokemon.id)) {
            // 새로운 포켓몬일 경우 추가
            setAddCards([...addCards, pokemon]);
            console.log(`${pokemon.korean_name}이(가) 추가되었습니다.`);
            alert(`[${pokemon.korean_name}]이(가) 추가되었습니다.`);
        } else {
            // 이미 추가된 포켓몬일 경우 경고 메시지 출력
            console.log(`${pokemon.korean_name}은(는) 이미 추가되었습니다!`);
            alert(`[${pokemon.korean_name}]은(는) 이미 추가되었습니다!`);
        }
    };

    // 포켓몬 제거 함수
    const removePokemon = (id) => {
        // 삭제할 포켓몬 찾기
        const removedPokemon = addCards.find((pokemon) => pokemon.id === id);

        if (removedPokemon) {
            console.log(`${removedPokemon.korean_name}이(가) 삭제되었습니다.`);
            alert(`[${removedPokemon.korean_name}]이(가) 삭제되었습니다.`);
        }

        // 포켓몬 제거
        setAddCards(addCards.filter((pokemon) => pokemon.id !== id));
    };

    return (
        <PokemonWrapper>
            <PokemonDashboard addCards={addCards} removePokemon={removePokemon} />
            <PokemonList addCards={addCards} addPokemon={addPokemon} removePokemon={removePokemon} />
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

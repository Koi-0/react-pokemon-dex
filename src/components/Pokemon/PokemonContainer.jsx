import styled from "styled-components";
import PokemonDashboard from "./PokemonDashboard";
import PokemonList from "./PokemonList";
import { useState } from "react";

const PokemonContainer = () => {
    // 추가된 포켓몬 리스트 상태 (배열 형태로 관리)
    const [addCards, setAddCards] = useState([]);

    // 포켓몬 추가 함수
    const addPokemon = (pokemon) => {
        // console.log(pokemon); // 추가하려는 포켓몬 객체 확인
        // console.log(addCards); // 현재 추가된 포켓몬 목록 출력

        // 이미 6개의 포켓몬이 추가된 경우
        if (addCards.length >= 6) {
            alert("최대 6개의 포켓몬만 추가할 수 있습니다!");
            return;
        }

        // 포켓몬이 이미 존재하는지 확인
        if (!addCards.some((element) => element.id === pokemon.id)) {
            // 새로운 포켓몬일 경우 추가
            setAddCards([...addCards, pokemon]);
            alert(`[${pokemon.korean_name}]이(가) 추가되었습니다.`);
        } else {
            // 이미 추가된 포켓몬일 경우 경고 메시지 출력
            alert(`[${pokemon.korean_name}]은(는) 이미 추가되었습니다!`);
        }
    };

    // 포켓몬 제거 함수 (추후 기능 추가 예정)
    // const removePokemon = () => {};

    return (
        <PokemonWrapper>
            <PokemonDashboard addCards={addCards} />
            <PokemonList addPokemon={addPokemon} />
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

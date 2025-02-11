import { useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";

// Context 생성
const PokemonProvider = ({ children }) => {
    const [addCards, setAddCards] = useState([]);
    // addCards : 현재 추가된 포켓몬들의 리스트
    // setAddCards : 포켓몬을 추가하거나 삭제할 때 배열을 업데이트하는 함수
    // useState([]) : 포켓몬을 담을 배열 생성 (처음에는 빈 배열)

    // 포켓몬 추가 함수
    const addPokemon = (pokemon) => {
        // 포켓몬이 6마리 이상 추가된 경우
        if (addCards.length >= 6) {
            console.log("최대 6개의 포켓몬만 추가할 수 있습니다.");
            alert("최대 6개의 포켓몬만 추가할 수 있습니다.");
            return;
        }

        // 포켓몬 존재 여부 확인
        if (!addCards.some((element) => element.id === pokemon.id)) {
            // 새로운 포켓몬일 경우 -> 추가
            setAddCards([...addCards, pokemon]);
            console.log(`[${pokemon.korean_name}]이(가) 추가되었습니다.`);
            alert(`[${pokemon.korean_name}]이(가) 추가되었습니다.`);
        } else {
            // 이미 추가된 포켓몬일 경우 -> 경고 메시지 출력
            console.log(`[${pokemon.korean_name}]은(는) 이미 추가되었습니다.`);
            alert(`[${pokemon.korean_name}]은(는) 이미 추가되었습니다.`);
        }
    };

    // 포켓몬 삭제 함수
    const removePokemon = (id) => {
        // 삭제할 포켓몬 찾기
        const removedPokemon = addCards.find((pokemon) => pokemon.id === id);

        // 삭제 메시지 출력
        if (removedPokemon) {
            console.log(`[${removedPokemon.korean_name}]이(가) 삭제되었습니다.`);
            alert(`[${removedPokemon.korean_name}]이(가) 삭제되었습니다.`);
        }

        setAddCards(addCards.filter((pokemon) => pokemon.id !== id));
    };

    return <PokemonContext.Provider value={{ addCards, addPokemon, removePokemon }}>{children}</PokemonContext.Provider>;
};

export default PokemonProvider;

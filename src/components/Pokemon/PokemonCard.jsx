import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../../context/PokemonContext";

const PokemonCard = ({ pokemon, addPokemon, isDashboard }) => {
    const { removePokemon } = useContext(PokemonContext);

    // 페이지 이동을 위한 `useNavigate` 훅 사용
    const navigate = useNavigate();

    // "추가" 버튼 클릭 시 실행되는 함수
    const handleAddButton = (e) => {
        e.stopPropagation(); // 부모 클릭 이벤트 방지
        addPokemon(pokemon); // 부모 컴포넌트에서 전달된 addPokemon 함수 호출
    };

    // "삭제" 버튼 클릭 시 실행되는 함수
    const handleDeleteButton = (e) => {
        e.stopPropagation(); // 부모 클릭 이벤트 방지
        removePokemon(pokemon.id); // 부모 컴포넌트에서 전달된 removePokemon 함수 호출
    };

    return (
        // 클릭하면 디테일 페이지 이동
        <PokemonCardDiv
            onClick={() => {
                navigate(`/pokemon-detail/${pokemon.id}`); // 카드 클릭 시 해당 포켓몬 ID로 이동
            }}
        >
            {/* 포켓몬 이미지 */}
            <PokemonCardImg src={pokemon.img_url} alt={pokemon.korean_name} />
            {/* 포켓몬 정보 */}
            <PokemonCardContent>
                <PokemonCardTitle>{pokemon.korean_name}</PokemonCardTitle>
                <PokemonCardId>No.{String(pokemon.id).padStart(3, "0")}</PokemonCardId> {/* 포켓몬 아이디 번호를 세 자리로 변경 */}
            </PokemonCardContent>
            {/* isDashboard 값에 따라 버튼 변경 */}
            {isDashboard ? <PokemonCardAddButton onClick={handleDeleteButton}>삭제</PokemonCardAddButton> : <PokemonCardAddButton onClick={handleAddButton}>추가</PokemonCardAddButton>}
        </PokemonCardDiv>
    );
};

/* 스타일 정의 (styled-components) */

const PokemonCardDiv = styled.div`
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
        transform: translateY(-5px);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
    }
`;

const PokemonCardImg = styled.img`
    width: 100px;
    height: 100px;
`;

const PokemonCardContent = styled.div`
    margin: 10px 0px;
`;

const PokemonCardTitle = styled.p`
    color: black;
    font-size: 14px;
    font-weight: bold;
    margin: 10px 0px;
`;

const PokemonCardId = styled.p`
    color: rgb(102, 102, 102);
    font-size: 12px;
`;

const PokemonCardAddButton = styled.button`
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 0);
    margin: 10px 0px;
    padding: 5px 10px;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default PokemonCard;

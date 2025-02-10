import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../../data/mock-data"; // Pokemon 데이터 가져오기
import styled from "styled-components";

const PokemonDetail = () => {
    // 페이지 이동을 위한 `useNavigate` 훅 사용
    const navigate = useNavigate();

    const { id } = useParams(); // url에서 id 값 가져오기 (문자열 형태로 들어옴)
    const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id)); // 숫자로 변환 후, 해당 포켓몬 찾기

    // 해당하는 포켓몬이 없을 경우 -> 예외 처리
    if (!pokemon) {
        alert("해당 포켓몬을 찾을 수 없습니다!");
        return;
    }

    return (
        <PokemonDetailWrapper>
            <PokemonDetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonDetailTitle>{pokemon.korean_name}</PokemonDetailTitle>
            <p>타입 : {pokemon.types.join(", ")}</p>
            <p>{pokemon.description}</p>
            <PokemonDetailButton
                onClick={() => {
                    navigate("/dex"); // useNavigate를 사용하여 "/dex" 경로로 이동
                }}
            >
                뒤로 가기
            </PokemonDetailButton>
        </PokemonDetailWrapper>
    );
};

/* 스타일 정의 (styled-components) */

const PokemonDetailWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;
`;

const PokemonDetailImg = styled.img`
    width: 200px;
    height: 200px;
`;

const PokemonDetailTitle = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: rgb(255, 0, 0);
`;

const PokemonDetailButton = styled.button`
    background-color: #f9f9f9;
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: border-color 0.2s;
    &:hover {
        border-color: #646cff;
    }
`;

export default PokemonDetail;

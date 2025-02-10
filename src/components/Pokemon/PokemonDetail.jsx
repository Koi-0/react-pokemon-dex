import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../../data/mock-data"; // Pokemon 데이터 가져오기

const PokemonDetail = () => {
    // 페이지 이동을 위한 `useNavigate` 훅 사용
    const navigate = useNavigate();

    // "뒤로 가기" 버튼 클릭 시 실행되는 함수
    const handleGoBack = () => {
        navigate("/dex"); // "/dex" 페이지로 이동
    };

    const { id } = useParams(); // url에서 id 값 가져오기 (문자열 형태로 들어옴)
    const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id)); // 숫자로 변환 후, 해당 포켓몬 찾기

    // console.log(pokemon.id, pokemon.korean_name);
    // 해당하는 포켓몬이 없을 경우 -> 예외 처리
    if (!pokemon) {
        console.log("해당 포켓몬을 찾을 수 없습니다!");
        return <h2>해당 포켓몬을 찾을 수 없습니다!</h2>;
    }

    return (
        <div>
            <h1>{pokemon.korean_name}</h1>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <p>번호: {pokemon.id}</p>

            {/* 버튼 클릭 시 /dex 페이지로 이동 */}
            <button onClick={handleGoBack}>뒤로 가기</button>
            {/* <p>타입: {pokemon.type.join(", ")}</p> */}
        </div>
    );
};

export default PokemonDetail;

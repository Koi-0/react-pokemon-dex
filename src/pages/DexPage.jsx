import { useNavigate } from "react-router-dom";
import PokemonContainer from "../components/Pokemon/PokemonContainer";

const DexPage = () => {
    // 페이지 이동을 위한 `useNavigate` 훅 사용
    const navigate = useNavigate();

    return (
        <div>
            {/* 버튼 클릭 시 / (홈페이지)로 이동 */}
            <button
                onClick={() => {
                    navigate("/"); // useNavigate를 사용하여 홈페이지로 이동
                }}
            >
                Home
            </button>

            {/* 포켓몬 도감 컴포넌트 렌더링 */}
            <PokemonContainer />
        </div>
    );
};

export default DexPage;

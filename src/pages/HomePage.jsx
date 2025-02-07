import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
    // 페이지 이동을 위한 `useNavigate` 훅 사용
    const navigate = useNavigate();

    return (
        <HomeWrapper>
            {/* 포켓몬 로고 이미지 */}
            <HomeImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" alt="Pokemon Logo" />

            {/* 버튼 클릭 시 /dex 페이지로 이동 */}
            <HomeButton
                onClick={() => {
                    navigate("/dex"); // useNavigate를 사용하여 "/dex" 경로로 이동
                }}
            >
                포켓몬 도감 시작하기
            </HomeButton>
        </HomeWrapper>
    );
};

/* 스타일 정의 (styled-components) */

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffdfad;
`;

const HomeImg = styled.img`
    width: 600px;
    margin-bottom: 20px;
`;

const HomeButton = styled.button`
    color: white;
    background-color: rgb(255, 0, 0);
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
    &:hover {
        background-color: #cc0000;
    }
    cursor: pointer;
`;

export default HomePage;

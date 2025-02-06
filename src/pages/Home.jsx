import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <img src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" alt="Pokemon Logo" />
            <button
                onClick={() => {
                    navigate("/dex");
                }}
            >
                포켓몬 도감 시작하기
            </button>
        </div>
    );
};

// const HomeWrapper = styled.div``;

export default Home;

import styled from "styled-components";

const PokemonBallImgUrl = "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";

const PokemonDashboard = () => {
    return (
        <PokemonDashboardSection>
            <PokemonDashboardTitle>나만의 포켓몬</PokemonDashboardTitle>
            <PokemonDashboardCardList>
                {[...Array(6)].map((_, index) => (
                    <PokemonDashboardCard key={index}>
                        <PokemonDashboardImg src={PokemonBallImgUrl} alt="Pokeball Icon" />
                    </PokemonDashboardCard>
                ))}
            </PokemonDashboardCardList>
        </PokemonDashboardSection>
    );
};

const PokemonDashboardSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(248, 248, 248);
    margin-bottom: 20px;
    border-radius: 10px;
`;

const PokemonDashboardTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 20px 0px;
    color: rgb(255, 0, 0);
`;

const PokemonDashboardCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 100%;
    justify-items: center;
`;

const PokemonDashboardCard = styled.div`
    width: 100px;
    height: 100px;
    background-color: rgb(255, 255, 255);
    border: 2px dashed rgb(204, 204, 204);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const PokemonDashboardImg = styled.img`
    width: 50px;
    height: 50px;
`;

export default PokemonDashboard;

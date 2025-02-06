import styled from "styled-components";

const PokemonBallImgUrl = "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";

const PokemonDashboard = ({ addCards }) => {
    const defaultCards = [...Array(6)].map((_, index) => ({
        id: index,
        img_url: PokemonBallImgUrl,
        korean_name: "기본 포켓몬",
    }));

    const cardsToDisplay = defaultCards.map((card, index) => {
        // addCards 배열에 추가된 포켓몬이 있을 경우, 첫 번째 카드만 바꾸기
        if (addCards[index]) {
            return {
                ...card,
                img_url: addCards[index].img_url, // 추가된 포켓몬의 이미지로 바꿔주기
                korean_name: addCards[index].korean_name, // 추가된 포켓몬 이름으로 바꾸기
            };
        }
        return card;
    });

    return (
        <PokemonDashboardSection>
            <PokemonDashboardTitle>나만의 포켓몬</PokemonDashboardTitle>
            <PokemonDashboardCardList>
                {cardsToDisplay.map((pokemon) => {
                    return (
                        <PokemonDashboardCard key={pokemon.id}>
                            <PokemonDashboardImg src={pokemon.img_url || PokemonBallImgUrl} alt={pokemon.korean_name} />
                        </PokemonDashboardCard>
                    );
                })}
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
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

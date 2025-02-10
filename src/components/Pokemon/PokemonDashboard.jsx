import styled from "styled-components";
import PokemonCard from "./PokemonCard";

// 기본 포켓볼 이미지 URL
const PokemonBallImgUrl = "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";

const PokemonDashboard = ({ addCards, removePokemon }) => {
    // 6개의 기본 카드(포켓볼 이미지) 생성
    const defaultCards = [...Array(6)].map((_, index) => ({
        id: index,
        img_url: PokemonBallImgUrl,
        korean_name: "pokemon_ball_default_image",
    }));

    return (
        <PokemonDashboardSection>
            <PokemonDashboardTitle>나만의 포켓몬</PokemonDashboardTitle>
            <PokemonDashboardCardList>
                {defaultCards.map((card, index) => (
                    <div key={index}>
                        {/* 포켓몬이 추가된 경우 ? 포켓몬 카드 표시 : 포켓볼 이미지 표시 */}
                        {addCards[index] ? (
                            <PokemonCard
                                key={index}
                                pokemon={addCards[index]}
                                removePokemon={removePokemon}
                                isDashboard={true} // 대시보드에서만 "삭제" 버튼 보이게 설정
                            />
                        ) : (
                            <PokemonDashboardCard>
                                <PokemonDashboardImg src={card.img_url} alt="포켓볼" />
                            </PokemonDashboardCard>
                        )}
                    </div>
                ))}
            </PokemonDashboardCardList>
        </PokemonDashboardSection>
    );
};

/* 스타일 정의 (styled-components) */

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

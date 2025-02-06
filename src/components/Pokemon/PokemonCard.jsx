import styled from "styled-components";

const PokemonCard = ({ pokemon }) => {
    return (
        <PokemonCardDiv>
            <PokemonCardImg src={pokemon.img_url} alt={pokemon.korean_name} />
            <PokemonCardContent>
                <PokemonCardTitle>{pokemon.korean_name}</PokemonCardTitle>
                <PokemonCardId>No.{pokemon.id}</PokemonCardId>
            </PokemonCardContent>
            <PokemonCardButton>추가</PokemonCardButton>
        </PokemonCardDiv>
    );
};

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

const PokemonCardButton = styled.button`
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

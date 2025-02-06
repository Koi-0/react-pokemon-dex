import MOCK_DATA from "../../data/mock-data"; // Pokemon 데이터 가져오기
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
    // console.log(MOCK_DATA); // 출력 확인 완료

    return (
        <div>
            PokemonList 컴포넌트입니다.
            <div>
                {MOCK_DATA.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;

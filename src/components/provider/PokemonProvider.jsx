import { PokemonContext } from "../../context/PokemonContext";

const PokemonProvider = ({ children }) => {
    return <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>;
};

export default PokemonProvider;

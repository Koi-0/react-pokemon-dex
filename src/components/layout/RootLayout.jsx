import styled from "styled-components";

// Compositional Layout
const RootLayout = ({ children }) => {
    return (
        <MainContainer>
            <MainContent>{children}</MainContent>
        </MainContainer>
    );
};

const MainContainer = styled.main`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
`;

const MainContent = styled.div`
    width: 100%;
    background-color: red;
`;

export default RootLayout;

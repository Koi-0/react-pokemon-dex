import styled from "styled-components";

// Compositional Layout
const RootLayout = ({ children }) => {
    return (
        <RootLayoutContainer>
            <RootLayoutContent>{children}</RootLayoutContent>
        </RootLayoutContainer>
    );
};

const RootLayoutContainer = styled.main`
    width: 100%;
`;

const RootLayoutContent = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export default RootLayout;

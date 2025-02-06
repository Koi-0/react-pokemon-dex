import styled from "styled-components";

// Compositional Layout
const RootLayout = ({ children }) => {
    return (
        <RootLayoutContainer>
            <RootLayoutContent>{children}</RootLayoutContent>
        </RootLayoutContainer>
    );
};

const RootLayoutContainer = styled.div`
    /* max-width: 1280px; */
    /* width: 100%; */
    /* margin: 0 auto; */
    /* padding: 20px; */
    /* text-align: center; */
    /* background-color: yellowGreen; */
`;

const RootLayoutContent = styled.div`
    /* width: 100%; */
    /* background-color: gray; */
`;

export default RootLayout;

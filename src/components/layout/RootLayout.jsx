import styled from "styled-components";

// RootLayout 컴포넌트 : 전체 애플리케이션의 기본 레이아웃을 설정하는 역할
const RootLayout = ({ children }) => {
    return (
        <RootLayoutContainer>
            <RootLayoutContent>{children}</RootLayoutContent>
        </RootLayoutContainer>
    );
};

// RootLayoutContainer : 페이지 전체를 감싸는 최상위 컨테이너
const RootLayoutContainer = styled.main`
    width: 100%;
`;

// RootLayoutContent : 페이지의 중앙 정렬 및 최대 너비 설정
const RootLayoutContent = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export default RootLayout;

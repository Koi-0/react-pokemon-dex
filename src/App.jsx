import RootLayout from "./components/layout/RootLayout";
import Router from "./shared/Router";

function App() {
    return (
        // RootLayout으로 감싸서 기본적인 페이지 레이아웃 적용
        <RootLayout>
            <Router /> {/* Router를 사용하여 애플리케이션의 라우팅 관리 */}
        </RootLayout>
    );
}

export default App;

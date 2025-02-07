// 1. react-router-dom을 사용하기 위해서 필요한 API들을 import 한다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DexPage from "../pages/DexPage";

// 2. Router 컴포넌트를 정의한다.
// BrowserRouter를 감싸는 이유는 SPA(Single Page Application)에서 브라우저가 새로고침 없이 페이지 이동을 가능하게 해준다.
const Router = () => {
    return (
        <BrowserRouter>
            {/* 3. Routes 컴포넌트 : 여러 개의 Route를 그룹화하여 관리 */}
            <Routes>
                {/* 4. Routes 작성 방법 : Route에는 react-router-dom에서 지원하는 props들이 있다.
					- path : URL 경로 정의 (ex : "/"는 홈페이지(HomePage), "/dex"는 포켓몬 도감 페이지(DexPage))
					- element : 해당 경로에서 렌더링할 컴포넌트 지정
				 */}
                <Route path="/" element={<HomePage />} />
                <Route path="/dex" element={<DexPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

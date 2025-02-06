// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 한다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";

// 2. Router 함수를 만든다.
// Router 함수가 BrowserRouter를 감싸는 이유는, SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어준다.
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes 작성 방벙 
					Route에는 react-router-dom에서 지원하는 props들이 있다.
					path는 우리가 흔히 말하는 사용하고 싶은 "주소"를 넣어주면 된다.
					element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어주면 된다.
				 */}
                <Route path="/" element={<Home />} />
                <Route path="dex" element={<Dex />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

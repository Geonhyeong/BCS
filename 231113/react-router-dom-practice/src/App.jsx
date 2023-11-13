import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import User from "./pages/user";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

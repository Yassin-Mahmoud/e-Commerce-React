import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/product/:id"
                            element={<SingleProduct />}
                        />
                        <Route path="*" element={<Navigate to={"/"} />} />
                    </Routes>
                    <Sidebar />
                    <Footer />
                </Router>
            </div>
        </>
    );
};

export default App;

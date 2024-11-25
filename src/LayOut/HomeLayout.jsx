
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Leasted from "../components/Leasted";
import Navber from "../components/Navber";
import LeftNavber from "./LeftNavber";
import RightNavber from "./RightNavber";


const HomeLayout = () => {
    return (
        <div className=" font-Poppins">
            
            <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
            <Leasted>
            </Leasted>
            </section>
            </header>
            <nav>
            <section className="w-11/12 mx-auto p-5">
            <Navber></Navber>
            </section>
            </nav>
            <main className=" w-11/12 mx-auto grid grid-cols-12">
            <aside className=" col-span-3"><LeftNavber></LeftNavber></aside>
            <section className=" col-span-6">main part here
                <Outlet></Outlet>
            </section>
            <aside className=" col-span-3"><RightNavber></RightNavber></aside>
            </main>
        </div>
    );
};

export default HomeLayout;
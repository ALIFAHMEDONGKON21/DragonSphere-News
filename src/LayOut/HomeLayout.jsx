import Header from "../components/Header";
import Leasted from "../components/Leasted";
import Navber from "../components/Navber";


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
            <main>

            </main>
        </div>
    );
};

export default HomeLayout;
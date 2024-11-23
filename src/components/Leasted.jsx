;
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Leasted = () => {
    return (
        <div className="flex gap-2">
            <p className="bg-red-500 text-white px-3 py-2">Latest</p>
            <Marquee speed={100} pauseOnHover >
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nihil?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nihil?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nihil?</Link>
            </Marquee>
        </div>
    );
};

export default Leasted;

import { BsGithub } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
const GogleGitLog = () => {
    return (
        <div className="w-full">
            <p className=" font-semibold mt-2">Log in with</p>
           <div className=" space-y-2 bg-base-100 ">
           <button className="btn w-full"><FaGoogle></FaGoogle> Log in with Google</button>
           <button className="btn w-full"><BsGithub></BsGithub> Log in with GitHub</button>
           </div>
        </div>
    );
};

export default GogleGitLog;
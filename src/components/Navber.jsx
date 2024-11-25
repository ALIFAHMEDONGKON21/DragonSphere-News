
import { Link } from 'react-router-dom';
import usericons from '../assets/user.png'

const Navber = () => {
    return (
        <div>
            <div className='flex justify-between' >
                <div className=''></div>
                <div className="nav flex space-x-5">
                    <Link to='/'>Home</Link>
                    <Link to='/career'> Career</Link>
                    <Link to='/about'> About</Link>
                </div>
                <div className='flex gap-2'>
                 <div>
                    <img src={usericons} alt="" />
                 </div>
                 <div>
                    <button className='bg-slate-900 text-white p-2 rounded-lg'>Log in</button>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;
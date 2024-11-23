import headerphot from '../assets/logo.png'
import moment from 'moment';
 


const Header = () => {
    return (
        <div className=' flex flex-col  justify-center items-center p-2'>
            <img className='w-[300px]' src={headerphot} alt="" />
            <h3 className='text-gray-300 '>The DragonSphere Journal</h3>
            <p>
                {
                 moment().format('MMMM Do YYYY, h:mm:ss a')
                }
            </p>
            
           
        </div>
    );
};

export default Header;
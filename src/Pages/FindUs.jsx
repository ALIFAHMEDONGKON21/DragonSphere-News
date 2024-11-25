
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { RiFacebookBoxFill } from 'react-icons/ri';

const FindUs = () => {
    return (
        <div className='mt-5'>
            <p className=' font-semibold '>Find Us</p>
            <div className="join flex join-vertical justify-start">
              <button className="btn join-item justify-start "><RiFacebookBoxFill></RiFacebookBoxFill> Facebook</button>
              <button className="btn join-item justify-start"><BsInstagram></BsInstagram> Instagram</button>
              <button className="btn join-item justify-start"><BsWhatsapp></BsWhatsapp> Whatsapp</button>
            </div>
            
        </div>
    );
};

export default FindUs;
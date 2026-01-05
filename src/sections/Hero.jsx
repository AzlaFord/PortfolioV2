import profile from "../../public/me.png"
import { Mail ,MapPinHouse} from 'lucide-react';

function Hero(){
    return (<>
        <div className=' border-1 w-70 h-140 rounded-lg bg-[#1e1e1f] p-5'>
            <div className="flex justify-center">
                <img src={profile} alt="Profile" className="w-48 h-48 rounded-lg mt-5" />
            </div>
            <div className="flex justify-center mt-5">
                <h2>Bivol Victor</h2>
            </div>
            <div className="flex justify-center">
                <p>Full-Stack Developer</p>
            </div>
            <div className="flex justify-start mt-5">
                <div>
                    <Mail className="mr-1"></Mail>
                </div>
                <div>
                    <h2>EMAIL</h2>
                    <a href="mailto:vbivol394@gmail.com">vbivol394@gmail.com</a>
                </div>
                
            </div>
            <div className="flex justify-start mt-5">
                <MapPinHouse/>
            </div>
        </div>    
    </>)
}

export default Hero
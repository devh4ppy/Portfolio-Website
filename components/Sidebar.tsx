import { AiFillGithub,AiFillLinkedin,AiFillInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme==="light"?"dark":"light")
    }

    return (
        <div>
            <Image src="/image/photo.jpg"
            alt="user avatar" 
            className="w-32 h-32 rounded-full mx-auto"
            width="128"
            height="128"
            layout="intrinsic"
             />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Pankaj</span> Singh
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full dark:bg-black-500">
                Web Developer
            </p>
            <a className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center dark:bg-black-500" 
            href="/asset/Resume_pankaj.pdf" 
            download="Resume_pankaj.pdf">
                <GiTie className="w-6 h-6" />Download Resume
            </a>


            {/* //social icon */}
            <div className="flex justify-around my-5 text-green w-9/12 md:w-full mx-auto">
                <a href="https://github.com/devh4ppy">
                    <AiFillGithub className=" w-8 h-8 cursor-pointer " />
                </a>
                <a href="linkedin.com/in/pankaj-singh-691a6a222">
                    <AiFillLinkedin className=" w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillInstagram className=" w-8 h-8 cursor-pointer" />
                </a>
            </div>

            {/* address */}
            <div className="my-5 py-4 bg-gray-200 dark:bg-dark-200"
             style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Mumbai,India</span>
                </div>
                <p className="my-2">pankaj2244619@gmail.com</p>
                <p className="my-2">8983320170</p>
            </div>
            {/* Email button  */}
            <button className="bg-gradient-to-r from-green to-blue-500 w-8/12 rounded-full py-2 my-2 px-5 bg-black text-white focus:outline-none"  
            onClick={()=>window.open('mailto:pankaj2244619@gmail.com')}>
                Email Me
            </button>
            <button 
            onClick={changeTheme}
            className="bg-gradient-to-r from-green to-blue-500 w-8/12 rounded-full py-2 my-2 px-5 text-white bg-black">
                Toggle UI
            </button>

        </div>
    )
}

export default Sidebar

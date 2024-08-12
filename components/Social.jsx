import Link from "next/link";
import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const socials = [

    { icon: <FaGithub />, path: 'https://github.com/abhijithp327' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/abhijithp327/' },
    { icon: <SiGmail />, path: 'mailto:abhijithp327@gmail.com' },

];


const Social = ({ containerStyles, iconStyles }) => {
    return (

        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link href={social.path} key={index} className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
};

export default Social;
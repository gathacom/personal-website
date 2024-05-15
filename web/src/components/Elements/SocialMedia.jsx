import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="flex justify-center items-center gap-3 text-inherit mb-2">
          <a href="https://www.instagram.com/yogaa.psb" target="blank">
            <div className="hover:text-emerald-500 cursor-pointer ">
                <FaInstagram size={30} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/yoga-pasaribu/" target="blank">
            <div className="hover:text-emerald-500 cursor-pointer ">
                <FaLinkedin size={30} />
            </div>
          </a>
          <a href="https://github.com/gathacom" target="blank">
            <div className="hover:text-emerald-500 cursor-pointer ">
                <FaGithub size={30} />
            </div>
          </a>
          </div>
    )
}

export default SocialMedia
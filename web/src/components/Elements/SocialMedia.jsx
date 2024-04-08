import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="flex justify-center items-center gap-3 text-inherit mb-2">
            <div className="hover:text-emerald-500 cursor-pointer ">
                <FaInstagram size={30} />
            </div>
            <div className=" hover:text-emerald-500 cursor-pointer">
              <FaLinkedin size={30} />
            </div>
            <div className=" hover:text-emerald-500 cursor-pointer">
              <FaGithub size={30} />
            </div>
          </div>
    )
}

export default SocialMedia
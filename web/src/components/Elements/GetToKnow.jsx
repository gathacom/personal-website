import { FaArrowDown } from "react-icons/fa"
import MainButton from "../Fragments/MetaButton"

export const GetToKnow = ({ href , onClick=() => {} }) => {
    return (
        <>
            <button className="block w-full mt-5 p-2 relative z-20" onClick={onClick}>
              <div className="flex justify-center items-center gap-1">
                <p className="text-base font-semibold text-primary">
                  Get To Know Me
                </p>
                <MainButton variant="secondary" size="icon">
                  <FaArrowDown/>
                </MainButton>
              </div>
            </button>
        </>
    )
}

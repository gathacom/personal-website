import { Button } from "@/components/ui/button";

const MainButton = ({ children, onClick=() => {} , ...props }) => {
  return (
    <>
      {/* <div className="relative"> */}
      <Button
        variant={props.variant}
        size = {props.size}
        {...props}
        className={`z-10 cursor-pointer ${props.classname}`}
        onClick={onClick}
      >
        {children}
      </Button>
      {/* <div className="absolute left-6 min-w-[25%] min-h-full bg-[rgba(16,185,129,1)]"></div>
      </div> */}
    </>
  );
};

export default MainButton;

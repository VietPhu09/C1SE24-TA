

import LeftForm from "./LeftForm/LeftForm";
import RightForm from "./RightForm/RightForm";


// flex items-center w-full
const UserProfile = () => {
    return (
        <div className="h-auto flex flex-row bg-[#edeef1] ">
            <div className="w-[40%]">
                <LeftForm />

            </div>

            <div className="w-[60%]">
                <RightForm />
            </div>
        </div>
    );
};

export default UserProfile;
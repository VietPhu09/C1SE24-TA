import React from 'react'
import LeftForm from '../components/User_Profile_Component/LeftForm';
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
  }

export default UserProfile
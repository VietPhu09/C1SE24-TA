import React from 'react';
import ChangeAvatar from './ChangeAvatar';



const PersonalInformation = () => {
    return (
        // Thoong tin ca nhan
        <div className=" bg-white rounded-md mt-[30px] w-[832px] h-[auto]">
            <h1 className='font-bold ml-[19px] mt-3 mb-4'>Thông tin cá nhân</h1>

            <div className='flex flex-row justify-around'>
                <ChangeAvatar />
                <div className='ml-[5px] w-[605px] position: relative '>
                    <div class="flex flex-col mb-[30px]">
                        <label class=" text-gray-700 font-bold mb-3">Họ và Tên</label>
                        <input type="text" placeholder="Nhập tên của bạn"
                            className="w-[605px] px-2 py-2 border border-gray-400 rounded-md" />
                    </div>

                    {/* Gioitinh - Ngaysinh */}
                    <div className='flex flex-row justify-between'>
                        <div className="flex flex-col ">
                            <label className="font-bold mb-3">Giới tính</label>
                            <select className="border border-gray-400 w-[125px] px-2 py-2 rounded-md">
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </select>
                        </div>
                        <div className="flex flex-col ">
                            <label className="font-bold mb-3">Ngày sinh:</label>
                            <input
                                type="date"
                                className="border border-gray-400 w-[285px] px-2 py-2 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end py-8">
                        <button className="bg-[#0064d2] rounded-md text-white font-bold py-3 w-[180px] ">
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PersonalInformation;

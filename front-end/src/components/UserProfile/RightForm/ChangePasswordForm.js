import React, { useState } from 'react';

const ChangePasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentPassword !== 'password123') {
            setError('Mật khẩu cũ không đúng');
            return;
        }
        else (
            alert('Thanh cong')
        )



        setError('');
    };

    return (
        <div className=" bg-white rounded-md mt-[30px] w-[832px] h-[auto]">
            <h1 className='font-bold ml-[19px] mt-3 mb-4'>Thay đổi mật khẩu</h1>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} >
                <div className='flex flex-row justify-around ml-[100px]'>
                    <div className="mb-4">
                        <label htmlFor="currentPassword" className="block mb-1">
                            Mật khẩu cũ:
                        </label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="border border-gray-400 w-[285px] px-2 py-2 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="newPassword" className="block mb-1">
                            Mật khẩu mới:
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="border border-gray-400 w-[285px] px-2 py-2 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex justify-end py-8">
                    <button className="bg-[#0064d2] rounded-md text-white font-bold py-3 w-[180px] mr-[15px]">
                        Đổi mật khẩu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangePasswordForm;

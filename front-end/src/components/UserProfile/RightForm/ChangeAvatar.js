
import React from 'react';
import Avatar from './Avatar';

const ChangeAvatar = () => {
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                localStorage.setItem('avatarUrl', reader.result);
                window.location.reload();
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center mt-5">
            <Avatar />
            <label htmlFor="avatar-upload" className="mt-3 bg-blue-500 text-white p-2 rounded cursor-pointer">
                Đổi ảnh đại diện
            </label>
            <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
            />
        </div>
    );
};

export default ChangeAvatar;
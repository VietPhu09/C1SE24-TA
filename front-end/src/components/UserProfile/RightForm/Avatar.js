import React from 'react';

const Avatar = () => {
    const imageUrl = localStorage.getItem('avatarUrl') || 'path/to/default/Wayne.jpg';

    return (
        <div className="flex items-center justify-center">
            <img
                src={imageUrl}
                alt="Avatar"
                className="rounded-full w-[110px] h-[110px] object-cover"
            />
        </div>
    );
};

export default Avatar;
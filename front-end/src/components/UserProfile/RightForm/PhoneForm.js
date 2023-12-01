import React, { useState } from 'react';

const PhoneForm = () => {
    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleAddPhoneNumber = () => {
        setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
        setShowForm(false);
    };

    return (
        <div className="mt-4 p-4">

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
                onClick={() => setShowForm(true)}

            >
                Thêm số điện thoại
            </button>


            {showForm && (
                <div className="mt-[50px]">

                    <input
                        type="text"
                        placeholder="Nhập số điện thoại"
                        value={newPhoneNumber}
                        onChange={(e) => setNewPhoneNumber(e.target.value)}
                        className="border rounded py-2 px-3"
                    />
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={handleAddPhoneNumber}
                    >
                        Thêm
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={() => setShowForm(false)}
                    >
                        Hủy
                    </button>
                </div>
            )}

            <ul className="mt-4">
                {phoneNumbers.map((phoneNumber, index) => (
                    <li key={index} className="mb-2">
                        {phoneNumber}{' '}
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() =>
                                setPhoneNumbers((prevNumbers) =>
                                    prevNumbers.filter((_, i) => i !== index)
                                )
                            }
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhoneForm;

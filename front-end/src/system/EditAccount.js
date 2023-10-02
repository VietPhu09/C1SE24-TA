import React from 'react';
import InputReadOnly from './InputReadOnly';


const EditAccount = () => {
    return (
        <div >
            <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Chinh sua thong tin ca nhan</h1>
            <div className='w-3/5 border'>
                <InputReadOnly />
            </div>
        </div>
    )
}

export default EditAccount; 
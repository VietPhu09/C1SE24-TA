import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Address = () => {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(response => {
                const data = response.data;
                setCities(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCityChange = (event) => {

        const selectedCityId = event.target.value;
        const selectedCity = cities.find(city => city.Id === selectedCityId);
        if (selectedCity) {
            setDistricts(selectedCity.Districts);
        }
    };

    const handleDistrictChange = (event) => {
        const selectedDistrictId = event.target.value;
        const selectedDistrict = districts.find(district => district.Id === selectedDistrictId);
        if (selectedDistrict) {
            setWards(selectedDistrict.Wards);
        }
    };

    return (
        <div className="bg-white rounded-md w-[832px] h-[auto] mt-[30px] ">
            <h1 className='font-bold ml-[19px] mt-3 mb-4'>Địa chỉ</h1>

            <div className="flex flex-col justify-center bg-white rounded-md  ml-[130px] w-[680px] h-[auto] ">
                <div >
                    <h1>Tỉnh/TP</h1>
                    <select id="city" onChange={handleCityChange}
                        className='border border-gray-400 w-full px-2 py-2 rounded-md mb-3'>
                        <option value="" selected > Chọn tỉnh thành</option >
                        {
                            cities.map(city => (
                                <option key={city.Id} value={city.Id}>{city.Name}</option>
                            ))
                        }
                    </select >
                </div>
                <div className='flex flex-row justify-between mb-6'>
                    <div>
                        <h1>Quận/Huyện</h1>
                        <select id="district" onChange={handleDistrictChange}
                            className='border border-gray-400 w-[285px] px-2 py-2 rounded-md'>
                            <option value="" selected>Chọn quận huyện</option>
                            {districts.map(district => (
                                <option key={district.Id} value={district.Id}>{district.Name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h1>Xã/Phường</h1>
                        <select id="ward"
                            className='border border-gray-400 w-[285px] px-2 py-2 rounded-md'>
                            <option value="" selected>Chọn phường xã</option>
                            {wards.map(ward => (
                                <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Address;





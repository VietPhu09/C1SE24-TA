import React from 'react';
import PersonalInformation from './PersonalInfomation';
import Email from './Email';
import Phone from './Phone';
import Address from './Address';
import ChangePasswordForm from './ChangePasswordForm';


const RightForm = () => {
    return (
        <div>
            <PersonalInformation />
            <Email />
            <Phone />
            <Address />

            <ChangePasswordForm />

        </div>
    );
};

export default RightForm;

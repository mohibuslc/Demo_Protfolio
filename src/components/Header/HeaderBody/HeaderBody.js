import React from 'react';
import profile from '../../../images/nur.png'
import './HeaderBody.css'
import HeaderMessage from '../HeaderMessage/HeaderMessage';

const HeaderBody = () => {
    return (
        <div className="row w-100 m-0 p-0 pt-5 styleOfHeader">
            {/* <ParticlesBg type="circle" bg={true} /> */}
            <div className="col-md-7 h-100 d-flex justify-content-center align-items-center">
                <HeaderMessage></HeaderMessage>
            </div>
            <div className="col-md-5 h-100 text-center d-flex justify-content-center align-items-end">
                <div className="mb-auto h-100 d-flex justify-content-center align-items-end">

                    <img className="headerProfileImage img-fluid" src={profile} alt="Nur-Siddiky" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;
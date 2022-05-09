import React from 'react';

const AnnouncementList = (props) => {
    return (
        <div>
            <div className="announcements">
                <div className="announcement_car">
                    <div className="car_id">{props.car.id}</div>
                    <div className="car_mark">
                        {props.car.markCar}
                    </div>
                    <div className='car_name'>
                        {props.car.nameCar}
                    </div>
                    <div className='car_engine'>
                        {props.car.engine}
                    </div>
                    <div className='car_engine_fuel'>
                        {props.car.engineFuel}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementList;
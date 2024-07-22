import React, { memo } from 'react';
import { User } from '../types';
import Helmet from './Helmet';

interface UserRowProps {
    user: User;
    index: number;
    isSelected: boolean;
}

const UserRow: React.FC<UserRowProps> = memo(({ user, index, isSelected }) => {
    return (
        <div className={` flex  items-center gap-6 px-2 cursor-pointer`}>
            <h1 className='text-sm md:text-xl'>{index + 1}</h1>
            <div className={`w-[48px] h-[48px] `}>
                <Helmet
                    color={user.color}
                    className={`object-contain rounded-full  ${isSelected ? 'outline outline-2 outline-offset-4 outline-purple-700' : ''}`}
                />
            </div>
            <div className='flex flex-col justify-around'>
                <h2 className=' text-base md:text-xl overflow-hidden  text-ellipsis whitespace-nowrap '>{user.name}</h2>
                <div>
                    <span className='text-purple-700'>{new Date(user.time).toISOString().substr(11, 8)}</span>
                    {' '}
                    <span style={{ color: user.color }}>| {user.speed} km/h</span>
                </div>
            </div>
        </div>
    );
});

export default UserRow;

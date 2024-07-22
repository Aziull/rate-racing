import React, { useCallback, useState } from 'react';
import Loader from './Loader';
import useLazyLoad from '../hooks/useLazyLoad';
import { User } from '../types';
import UserRow from './UserRow';
import { fetchUsers } from '../lib/actions/user.actions';

const UserTable: React.FC = () => {
  const { data: users, loading, hasMore } = useLazyLoad<User>(fetchUsers, 50);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);


  return (
    <ul className='w-full'>
      {users.map((user, index) => (
        <li key={index} className='my-4' onClick={() => setSelectedUser(index)}>
          <UserRow
            user={user}
            index={index}
            isSelected={selectedUser === index}
          />
        </li>
      ))}

      {loading && <Loader />}
      {!hasMore && <div>No more users to load.</div>}
    </ul>
  );
};


export default UserTable;

import React from 'react';
import UserTable from './components/UserTable';
import { loadDataToLocalStorage } from './lib/actions/user.actions';

if (typeof window !== 'undefined') {
  loadDataToLocalStorage()
}


const App: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">User Ranking Table</h1>
            <UserTable />
        </div>
    );
};

export default App;

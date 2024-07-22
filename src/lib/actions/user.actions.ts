import { generateMockUsers } from "../../data/mockData";
import { User } from "../../types";

export const fetchUsers = async (offset: number, limit: number): Promise<User[]> => {
    const allUsers = JSON.parse(window.localStorage.getItem('allUsers') || '[]');
    return allUsers.slice(offset, offset + limit);
};

export const loadDataToLocalStorage = () => {
    const allUsers = JSON.parse(window.localStorage.getItem('allUsers') || '[]');
    if (allUsers.length === 0) {
        const newUsers = generateMockUsers(50_000);
        window.localStorage.setItem('allUsers', JSON.stringify(newUsers));
    }
}
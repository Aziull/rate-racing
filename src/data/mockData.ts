import { Color, User } from "../types";

export const generateMockUsers = (count: number): User[] => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push({
      color: [Color.RED, Color.GREEN, Color.BLUE][Math.floor(Math.random() * 3)],
      name: `User ${i + 1}`,
      speed: Math.floor(Math.random() * 100) + 100,
      time: Math.floor(Math.random() * 5000) + 4000,
    });
  }
  return users;
};

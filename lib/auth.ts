import { User } from './types';
import { mockUser } from './mock-data';

// Mock authentication functions

export const login = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    // In a real app this would make an API call
    // For mock purpose just return success if the form is filled out
    if (email && password) {
      // Simulate network delay
      setTimeout(() => {
        resolve(mockUser);
      }, 800);
    } else {
      setTimeout(() => {
        reject(new Error('Invalid credentials'));
      }, 800);
    }
  });
};

export const register = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<User> => {
  return new Promise((resolve, reject) => {
    // In a real app this would make an API call
    // For mock purpose just return success if the form is filled out
    if (firstName && lastName && email && password) {
      // Simulate network delay
      setTimeout(() => {
        resolve({
          ...mockUser,
          firstName,
          lastName,
          email,
        });
      }, 800);
    } else {
      setTimeout(() => {
        reject(new Error('Please fill out all fields'));
      }, 800);
    }
  });
};
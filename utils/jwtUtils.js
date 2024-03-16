// utils/jwtUtils.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Function to generate JWT token
export const generateToken = (payload) => {
    return jwt.sign(payload, '1nIaf9nSR+R8IRt+5uqFUa3uJDyUwdMJLBYH3mANXtaDF2K4Lujo1l59bVoIGQIy', { expiresIn: '1h' });
};

// Function to verify JWT token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, '1nIaf9nSR+R8IRt+5uqFUa3uJDyUwdMJLBYH3mANXtaDF2K4Lujo1l59bVoIGQIy');
    } catch (error) {
        return null;
    }
};

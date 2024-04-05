import jwt from 'jsonwebtoken';
import { errorHandler } from './errror.js';


export const verifyToken = (req, res, next) => {
    const requested_token = req.headers['authorization'];
    requested_token.split(' ')
    const token = requested_token[1];
    if (!token) return next(errorHandler(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'Token is not valid!'));

        req.user = user;
        next();
    });

}
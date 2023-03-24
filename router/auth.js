import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controller/auth.js';
import { validate } from '../middleware/valitator.js';

const router = express.Router();

const validateCredential = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('username should be ad least 5 charactors'),
  body('password')
    .trim()
    .isLength({ min: 5 })
    .withMessage('password should be at least 5 charactors'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('name').notEmpty().withMessage('name is missing'),
  body('email').isEmail().normalizeEmail().withMessage('invalid email'),
  body('url')
    .isURL()
    .withMessage('invalid URL')
    .optional({ nullable: true, checkFalsy: true }),
  validate,
];

// POST /auth/signup
router.post('/signup', validateSignup, authController.signUp);
// POST /auth/login
router.post('/login', validateCredential, authController.login);

export default router;
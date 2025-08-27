import express from 'express';
import { 
  registerController,
  loginController,
  testController,
  forgotPasswordController 
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// REGISTER || POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

// FORGOT PASSWORD || POST
router.post('/forgot-password', forgotPasswordController);

// TEST ROUTE || GET
router.get('/test', requireSignIn, isAdmin, testController);

// PROTECTED user ROUTE AUTH || GET
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

// PROTECTED admin  ROUTE AUTH || GET
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;

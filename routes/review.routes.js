import { Router } from 'express';
import { getReviews } from './../controller/review.controller.js';

const router = Router();

router.get("/reviews", getReviews);

export default router;
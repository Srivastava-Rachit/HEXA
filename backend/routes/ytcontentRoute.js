import { Router } from 'express';
import { createYtContent, getAllYtContent } from '../controllers/ytcontentController.js';

const ytcontentrouter = Router();

ytcontentrouter.post('/addyt', createYtContent);
ytcontentrouter.get('/allyt', getAllYtContent)

export default ytcontentrouter;
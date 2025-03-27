import { Router } from 'express';
import { createYtGamesContent, getAllYtGamesContent } from '../controllers/ytgamesController.js';

const ytgamerouter = Router();

ytgamerouter.post('/addgameyt', createYtGamesContent);
ytgamerouter.get('/allgameyt', getAllYtGamesContent)

export default ytgamerouter;
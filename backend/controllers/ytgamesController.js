import YtGameContent from '../modals/ytgames.js';

export const createYtGamesContent = async (req, res) => {
    try {
        const { gametitle, gameyoutubeLink, githubgameLink, gamedriveLink, gametopmateLink, gamelivePreview } = req.body;

        const newYtGamesContent = new YtGameContent({
            gametitle,
            gameyoutubeLink,
            githubgameLink,
            gamedriveLink,
            gametopmateLink,
            gamelivePreview
        });

        const savedYtGamesContent = await newYtGamesContent.save();
        res.status(201).json(savedYtGamesContent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllYtGamesContent = async (req, res) => {
    try {
        const allYtGamesContents = await YtGameContent.find();
        res.status(200).json(allYtGamesContents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
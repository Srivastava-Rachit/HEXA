import mongoose from "mongoose";

function getISTDate() {
    const now = new Date();
    const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
    return new Date(now.getTime() + istOffset);
}

const ytgamesSchema = new mongoose.Schema({
    gametitle: { type: String, required: true },
    gameyoutubeLink: { type: String, required: true },
    githubgameLink: { type: String, required: true },
    gamedriveLink: { type: String, required: true },
    gametopmateLink: { type: String, required: true },
    gamelivePreview: { type: String, required: true }
}, 
{
    timestamps: {
        currentTime: getISTDate,
    },
});

const YtGameContent = mongoose.models.YtGames || mongoose.model("YtGames", ytgamesSchema);

export default YtGameContent;
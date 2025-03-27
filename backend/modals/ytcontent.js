import mongoose from "mongoose";

function getISTDate() {
    const now = new Date();
    const istOffset = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
    return new Date(now.getTime() + istOffset);
}

const ytcontentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { 
        type: String, 
        required: true,
        enum: ['free', 'paid'],
        default: 'free'
    },
    projectType: {
        type: String,
        required: true,
        enum: ['react', 'fullstack', 'js', 'apps', '3d', 'others'],
        default: 'react'
    },
    youtubeLink: { type: String, required: true },
    githubLink: { type: String, required: true },
    driveLink: { type: String, required: true },
    topmateLink: { type: String, required: true },
    livePreview: { type: String, required: true }
}, 
{
    timestamps: {
        currentTime: getISTDate,
    },
});

const YtContent = mongoose.models.YtContent || mongoose.model("YtContent", ytcontentSchema);

export default YtContent;
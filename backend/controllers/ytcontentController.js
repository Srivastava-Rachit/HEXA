import YtContent from '../modals/ytcontent.js';

export const createYtContent = async (req, res) => {
    try {
        const { 
            title,
            category,
            projectType,
            youtubeLink,
            githubLink,
            driveLink,
            topmateLink,
            livePreview
        } = req.body;

        // Validate required fields
        if (!title || !youtubeLink || !githubLink || !driveLink || !topmateLink || !livePreview) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newYtContent = new YtContent({
            title,
            category: category || 'free',
            projectType: projectType || 'react',
            youtubeLink,
            githubLink,
            driveLink,
            topmateLink,
            livePreview
        });

        const savedYtContent = await newYtContent.save();
        res.status(201).json(savedYtContent);
    } catch (error) {
        console.error('Error creating content:', error);
        res.status(400).json({ 
            message: error.message,
            errorDetails: error.errors 
        });
    }
};

export const getAllYtContent = async (req, res) => {
    try {
        const allYtContents = await YtContent.find().sort({ createdAt: -1 });
        res.status(200).json(allYtContents);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
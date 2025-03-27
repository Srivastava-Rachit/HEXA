import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiYoutube, FiGithub, FiLink, FiFile, FiUser, FiBox, FiDollarSign, FiCode } from 'react-icons/fi';

const YtAdd = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'free',
    projectType: 'react',
    youtubeLink: '',
    githubLink: '',
    driveLink: '',
    topmateLink: '',
    livePreview: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const url = 'https://hexa-backend-9y0v.onrender.com'

  const validateURL = (url, type) => {
    let pattern;
    switch (type) {
      case 'youtubeLink':
        pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/i;
        break;
      case 'githubLink':
        pattern = /^(https?:\/\/)?(www\.)?github\.com\/.+$/i;
        break;
      case 'driveLink':
        pattern = /^(https?:\/\/)?(www\.)?drive\.google\.com\/.+$/i;
        break;
      default:
        return false;
    }
    return pattern.test(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateURL(formData.youtubeLink, 'youtubeLink')) {
      newErrors.youtubeLink = 'Please enter a valid YouTube URL';
    }
    if (!validateURL(formData.githubLink, 'githubLink')) {
      newErrors.githubLink = 'Please enter a valid GitHub URL';
    }
    if (!validateURL(formData.driveLink, 'driveLink')) {
      newErrors.driveLink = 'Please enter a valid Google Drive URL';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/ytcontent/addyt`, formData);
      console.log('Submitted Content:', response.data);
      setMessage('Content published successfully!');
      setFormData({
        title: '',
        category: 'free',
        projectType: 'react',
        youtubeLink: '',
        githubLink: '',
        driveLink: '',
        topmateLink: '',
        livePreview: ''
      });
    } catch (error) {
      console.error('Error submitting content:', error);
      setMessage('Error publishing content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <div className="absolute inset-0 bg-[linear-gradient(#10B981_1px,transparent_1px),linear-gradient(to_right,#10B981_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-800/50 backdrop-blur-lg border border-zinc-700 rounded-2xl p-8 max-w-2xl w-full shadow-xl hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] transition-shadow"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex justify-center mb-2"
          >
            <FiBox className="text-emerald-400 text-4xl p-3 bg-zinc-700/50 rounded-xl backdrop-blur-sm" />
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Content Manager
          </h2>
          <p className="text-zinc-300 mt-2">
            Quickly add and manage your content below
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Title */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiFile className="inline-block mr-1 text-emerald-400" /> Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter video title"
                required
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </motion.div>

            {/* Pricing Type */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiDollarSign className="inline-block mr-1 text-emerald-400" /> Pricing Type
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                required
              >
                <option value="free">Free Content</option>
                <option value="paid">Paid Content</option>
              </select>
            </motion.div>

            {/* Project Type */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiCode className="inline-block mr-1 text-emerald-400" /> Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                required
              >
                <option value="react">React Project</option>
                <option value="fullstack">Full Stack Project</option>
                <option value="js">JavaScript</option>
                <option value="apps">Mobile Apps</option>
                <option value="3d">3D Websites</option>
                <option value="others">Others</option>
              </select>
            </motion.div>

            {/* YouTube Link */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiYoutube className="inline-block mr-1 text-emerald-400" /> YouTube Link
              </label>
              <input
                type="url"
                name="youtubeLink"
                value={formData.youtubeLink}
                onChange={handleChange}
                placeholder="https://youtube.com/..."
                required
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              {errors.youtubeLink && (
                <p className="text-red-400 text-sm mt-1 bg-red-900/30 px-2 py-1 rounded-md">{errors.youtubeLink}</p>
              )}
            </motion.div>

            {/* GitHub Link */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiGithub className="inline-block mr-1 text-emerald-400" /> GitHub Link
              </label>
              <input
                type="url"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                placeholder="https://github.com/..."
                required
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              {errors.githubLink && (
                <p className="text-red-400 text-sm mt-1 bg-red-900/30 px-2 py-1 rounded-md">{errors.githubLink}</p>
              )}
            </motion.div>

            {/* Drive Link */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiLink className="inline-block mr-1 text-emerald-400" /> Drive Link
              </label>
              <input
                type="url"
                name="driveLink"
                value={formData.driveLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/..."
                required
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              {errors.driveLink && (
                <p className="text-red-400 text-sm mt-1 bg-red-900/30 px-2 py-1 rounded-md">{errors.driveLink}</p>
              )}
            </motion.div>

            {/* Topmate Link */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiUser className="inline-block mr-1 text-emerald-400" /> Topmate Link
              </label>
              <input
                type="url"
                name="topmateLink"
                value={formData.topmateLink}
                onChange={handleChange}
                placeholder="https://topmate.io/..."
                required
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </motion.div>

            {/* Live Preview */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <label className="block text-sm font-medium text-zinc-300 mb-1">
                <FiLink className="inline-block mr-1 text-emerald-400" /> Live Preview
              </label>
              <input
                type="url"
                name="livePreview"
                value={formData.livePreview}
                onChange={handleChange}
                placeholder="https://example.com/..."
                required
                className="w-full bg-zinc-700/30 border border-zinc-600 rounded-lg px-4 py-2 text-zinc-100 placeholder-zinc-400
                  focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-cyan-400 hover:from-emerald-600 hover:to-cyan-500
                text-zinc-900 font-semibold py-3 rounded-lg shadow-lg transition-all transform hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-800"
            >
              Publish Content
            </button>
          </motion.div>
        </form>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 flex items-center justify-center space-x-2 text-emerald-400"
          >
            <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
            <span>Submitting...</span>
          </motion.div>
        )}

        {message && (
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="mt-4 p-3 bg-emerald-900/30 text-emerald-400 rounded-lg text-center"
          >
            {message}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default YtAdd;

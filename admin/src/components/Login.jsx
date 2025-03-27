import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Axios for making API requests
import { ToastContainer, toast } from 'react-toastify'; // Toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
    const [loginError, setLoginError] = useState('');  // For displaying login error messages
    const navigate = useNavigate();

    const url = 'https://hexa-backend-9y0v.onrender.com'

    // Handle input changes (for both text fields and checkbox)
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form behavior
        setLoginError('');    // Clear previous errors

        try {
            const response = await axios.post(`${url}/api/admin/logina`, {
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200 && response.data.success) {
                // Successful login
                console.log('Login successful:', response.data);

                // Show success toast notification
                toast.success('Logged in successfully!', {
                    position: "top-center",
                    autoClose: 3000,  // Close after 3 seconds
                });

                if (formData.rememberMe) {
                    localStorage.setItem('userData', JSON.stringify(formData));
                }

                // Set login state and redirect to home page
                setIsLoggedIn(true);
                navigate('/');
            } else {
                // Login failed: Incorrect email/password
                setLoginError('Incorrect email or password. Please try again.');
                toast.error('Login failed. Incorrect email or password!', {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setLoginError('An error occurred. Please try again later.');
            toast.error('An error occurred while logging in.', {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8 rounded-lg shadow-xl max-w-md w-full mx-auto animate-slideUp">
                <h2 className="text-center text-3xl font-semibold text-white mb-6">Login</h2>

                {loginError && <p className="text-red-500 text-center mb-4">{loginError}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-500 rounded-md bg-transparent text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
                        />
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-500 border-gray-600 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                                Remember me
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300 transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
            </div>

            {/* Toast Container for Notifications */}
            <ToastContainer />
        </div>
    );
};

export default Login;

import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(() => {
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(() => {
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/login-image.jpg')" }}>
            <div className="flex justify-center items-center min-h-screen backdrop-blur-sm bg-black/40">
                <div className="card bg-white/90 shadow-2xl w-full max-w-md rounded-lg p-6">
                    <h3 className="text-3xl font-bold text-center text-blue-600 mb-4">Login to Your Account</h3>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600">Password</label>
                            <input type="password" name="password" placeholder="Enter your password" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" required />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" /> Remember Me
                            </div>
                            <Link to="#" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all duration-300">Log In</button>
                    </form>

                    <div className="my-4 text-center text-gray-600">
                        <p>Don't have an account? <Link to="/register" className="text-blue-600 font-semibold hover:underline">Register</Link></p>
                    </div>

                    <div className="my-4 text-center">
                        <span className="text-gray-600">Or</span>
                    </div>

                    <button onClick={handleGoogleLogIn} className="w-full flex justify-center items-center py-3 bg-white border border-gray-300 rounded-md text-gray-600 font-semibold hover:bg-gray-100 transition-all duration-300">
                        <svg aria-label="Google logo" className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

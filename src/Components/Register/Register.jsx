import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { auth, googleProvider } from '../../firebase.init';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const gender = e.target.gender.value;
        const dob = e.target.dob.value;

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        if (passwordStrength === 'Weak') {
            setError("Password is too weak.");
            setLoading(false);
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log("User created:", result.user);
                navigate('/');
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setPasswordStrength(getStrength(password));
    };

    const getStrength = (pass) => {
        if (pass.length < 6) return 'Weak';
        if (pass.match(/[A-Z]/) && pass.match(/\d/)) return 'Strong';
        return 'Medium';
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log("Google user:", result.user);
                navigate('/');
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1470&q=80')` }}>
            <div className="bg-black bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full text-white">
                <h3 className="text-3xl text-center font-bold mb-6">Create Your Account</h3>
                <form onSubmit={handleRegister}>
                    <label className="label">Full Name</label>
                    <input type="text" name="name" className="input input-bordered w-full bg-white text-black" placeholder="John Doe" required />

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input input-bordered w-full bg-white text-black" placeholder="you@example.com" required />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="input input-bordered w-full bg-white text-black"
                        placeholder="Enter password"
                        onChange={handlePasswordChange}
                        required
                    />
                    <div className="text-sm mt-1">Password Strength: <span className={`${passwordStrength === 'Weak' ? 'text-red-400' : passwordStrength === 'Strong' ? 'text-green-400' : 'text-yellow-300'}`}>{passwordStrength}</span></div>

                    <label className="label">Confirm Password</label>
                    <input
                        type="password"
                        className="input input-bordered w-full bg-white text-black"
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <label className="label">Gender</label>
                    <select name="gender" className="select select-bordered w-full bg-white text-black" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>

                    <label className="label">Date of Birth</label>
                    <input type="date" name="dob" className="input input-bordered w-full bg-white text-black" required />

                    {error && <div className="text-red-400 text-sm mt-2">{error}</div>}

                    <button className={`btn btn-accent w-full mt-4 ${loading ? 'loading' : ''}`} type="submit">
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <div className="divider text-white">OR</div>
                {/* Corrected function call */}
                <button onClick={handleGoogleSignIn}
    className="w-full flex justify-center items-center py-3 bg-white border border-gray-300 rounded-md text-gray-600 font-semibold hover:bg-gray-100 transition-all duration-300">
    <svg aria-label="Google logo" className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
        </g>
    </svg>
    Continue with Google
</button>

                <p className="mt-4 text-center text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaBell } from 'react-icons/fa';  
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
<div className={`w-64 h-screen bg-blue-600 text-white p-6 transition-all ${isSidebarOpen ? 'block' : 'w-20'}`}>
  <div className="flex justify-between items-center">
    <h2 className={`text-2xl font-bold mb-8 ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</h2>
    <FaBars className="cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
  </div>
  <ul>
    <li className="mb-6 hover:bg-blue-500 rounded-lg p-2">
      <Link to="/" className="text-white">Home</Link>
    </li>
    <li className="mb-6 hover:bg-blue-500 rounded-lg p-2">
      <Link to="/profile" className="text-white">Profile</Link>
    </li>
    <li className="mb-6 hover:bg-blue-500 rounded-lg p-2">
      <Link to="/orders" className="text-white">Orders</Link>
    </li>
    <li className="mb-6 hover:bg-blue-500 rounded-lg p-2">
      <Link to="/settings" className="text-white">Settings</Link>
    </li>
  </ul>
</div>


            {/* Main Content Area */}
            <div className="ml-64 p-8 w-full">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">Welcome to your Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <FaBell className="text-xl cursor-pointer" />
                        <div className="flex items-center space-x-2">
                            <FaUserCircle className="text-2xl" />
                            <p className="text-gray-700">John Doe</p>
                        </div>
                    </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
                        <p className="text-3xl font-bold text-blue-600">1,245</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700">Total Orders</h3>
                        <p className="text-3xl font-bold text-blue-600">342</p>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700">Revenue</h3>
                        <p className="text-3xl font-bold text-blue-600">$12,354</p>
                    </div>
                </div>


                {/* Recent Orders Section */}
                <div className="bg-white p-6 shadow-md rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Orders</h3>
                    <ul>
                        <li className="border-b py-4">Order #342 placed by John Doe</li>
                        <li className="border-b py-4">Order #343 placed by Jane Smith</li>
                        <li className="border-b py-4">Order #344 placed by Sarah Lee</li>
                    </ul>
                </div>

                {/* Recent Activity Section */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
                    <ul>
                        <li className="border-b py-4">User John Doe registered</li>
                        <li className="border-b py-4">Order #342 placed</li>
                        <li className="border-b py-4">Payment of $500 received</li>
                        <li className="border-b py-4">Profile updated by Jane Smith</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

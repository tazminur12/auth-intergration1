import React from 'react';

const Orders = () => {
    const orders = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: "$59.99",
            status: "Delivered",
            date: "Apr 10, 2025",
            image: "/public/wireless.jpg"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: "$129.99",
            status: "Shipped",
            date: "Apr 25, 2025",
            image: "/public/smart-watch.webp"
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            price: "$39.99",
            status: "Processing",
            date: "Apr 28, 2025",
            image: "/public/Bluetooth-Speaker.jpg"
        },
        {
            id: 4,
            name: "4K Ultra HD TV",
            price: "$899.99",
            status: "Shipped",
            date: "Apr 22, 2025",
            image: "/public/LED.jpg"
        },
        {
            id: 5,
            name: "Gaming Laptop",
            price: "$1,299.99",
            status: "Delivered",
            date: "Apr 15, 2025",
            image: "/public/laptop.jpg"
        },
        {
            id: 6,
            name: "Digital Camera",
            price: "$499.99",
            status: "Processing",
            date: "Apr 27, 2025",
            image: "/public/camera.jpg"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">🛒 Your Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map(order => (
                    <div key={order.id} className="card w-full bg-base-100 shadow-sm hover:shadow-md transition">
                        <figure>
                            <img src={order.image} alt={order.name} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {order.name}
                                <div className="badge badge-secondary">{order.status}</div>
                            </h2>
                            <p>{order.date}</p>
                            <p className="text-indigo-600 font-bold">{order.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-sm text-indigo-600">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;

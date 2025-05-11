'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const AmazonKurtas = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const url =
                'https://realtime-amazon-data.p.rapidapi.com/product-search?keyword=kurta%20set&country=in&page=1&sort=Featured';

            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '3e1c209175mshd280390482053d2p1aedcfjsna62d5aa47d85',
                    'x-rapidapi-host': 'realtime-amazon-data.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log('API result:', result);
                setProducts(result.details || []);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div className="text-center py-6">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
            {products.map((product, idx) => (
                <motion.div
                    key={idx}

                    className="p-4"
                >
                    <div className="overflow-hidden flex items-center justify-center h-64 mb-3" >
                        <img
                            src={product.productImage}
                            alt={product.ProductTitle}
                            className="w-auto h-64 object-cover mix-blend-multiply transition duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                    <h2 className="text-lg line-clamp-2">{product.ProductTitle}</h2>
                    <p className="">From Rs.{product.price}</p>



                </motion.div>
            ))}
        </div>
    );
};

export default AmazonKurtas;

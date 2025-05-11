  'use client';
  import Image from 'next/image';
  import Link from 'next/link';
  import { useState } from 'react';
  import { Review } from '../types';



  const slides = [
    {
      image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-3.jpg',
      title: 'Spring Fashion Sale',
      description: 'Get 40% to 70% off on all clothing collections. Limited time only!',
      link: '/shop',
      price: 2400,
      id: 1,
    },
    {
      image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-3.jpg',
      title: 'Trendy Styles',
      description: 'Refresh your wardrobe with this season’s must-haves.',
      link: '/shop/trending',
      price: 2000,
      id: 2,
    },
    {
      image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-2_e8973ef1-a987-4eba-b8ff-fed7c29869c2.jpg',
      title: 'Women’s Collection',
      description: 'Stylish picks for work, play, and everything in between.',
      link: '/shop/men',
      price: 3000,
      id: 3,
    },
    {
      image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape_06d9932f-d00c-474c-b5ab-9802c125b87f.jpg',
      title: 'Co-Ord Twinning',
      description: 'Chic and elegant designs for every occasion.',
      link: '/shop/women',
      price: 2800,
      id: 4,
    },
    {
      image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-3.jpg',
      title: 'Grab Awesome Deals',
      description: 'Cute, comfy, and made to move — perfect for little ones.',
      link: '/shop/kids',
      price: 1500,
      id: 5,
    },
    {
      image: 'https://phutari.co.in/cdn/shop/files/3_6abcb5af-7844-411f-bfa0-e4e743de750c.jpg',
      title: 'Kids’ Wear',
      description: 'Use code **SAVE20** at checkout for an extra 20% off!',
      link: '/shop/all',
      price: 1800,
      id: 6,
    },
  ];

  export default function HeroSlider() {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [newReview, setNewReview] = useState({
      name: '',
      rating: 1,
      comment: '',
    });

    const handleReviewSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!newReview.name || !newReview.comment) {
        alert('Please fill out all fields.');
        return;
      }

      const review = {
        ...newReview,
        id: reviews.length + 1,
        date: new Date().toISOString().split('T')[0], // Format the date
      };

      setReviews((prevReviews) => [review, ...prevReviews]);
      setNewReview({ name: '', rating: 1, comment: '' });
    };
  
  
    const [cart, setCart] = useState(() => {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      }
      return [];
    });

    const handleAddToCart = (item: typeof slides[0]) => {
      const existingCart = [...cart]; // Use current state
      const existingItem = existingCart.find((x: any) => x.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingCart.push({
          id: item.id,
          name: item.title,
          image: item.image, // Store the URL
          price: item.price,
          quantity: 1,
        });
      }

      setCart(existingCart); // Update the state with the new cart
      localStorage.setItem('cart', JSON.stringify(existingCart)); // Store in localStorage
      console.log(`${item.title} added to cart!`); // For debugging
      alert(`${item.title} added to cart!`); // Confirmation alert
    };

    
    return (<>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {slides.map((slide) => (
          <div key={slide.id} className="rounded overflow-hidden shadow-md bg-white">
            <div className="relative w-full h-48">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                unoptimized // Required for external URLs unless using remotePatterns
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{slide.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{slide.description}</p>
              <p className="text-sm font-semibold">Price: Rs. {slide.price}</p>
              <div className="flex space-x-2 mt-4">
                <Link
                  href={slide.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Shop Now
                </Link>
                <button
                  onClick={() => handleAddToCart(slide)}
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <br/>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Product Reviews</h2>

        {/* Display Reviews */}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <p className="text-gray-600 text-center">No reviews yet. Be the first to review!</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-white p-4 rounded shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">{review.date}</p>
              </div>
            ))
          )}
        </div>

        {/* Review Form */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Submit Your Review</h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-2 border rounded shadow-sm"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Rating</label>
              <select
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview((prev) => ({ ...prev, rating: Number(e.target.value) }))
                }
                className="w-full px-4 py-2 border rounded shadow-sm"
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} {rating === 1 ? 'star' : 'stars'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Your Review</label>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview((prev) => ({ ...prev, comment: e.target.value }))
                }
                className="w-full px-4 py-2 border rounded shadow-sm"
                placeholder="Write your review here..."
                rows={4}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded shadow hover:bg-blue-700"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </>);
  }
  const initialReviews: Review[] = [
    {
      id: 1,
      name: 'Alice',
      rating: 5,
      comment: 'Amazing product! Loved it!',
      date: '2025-05-03',
    },
    {
      id: 2,
      name: 'Bob',
      rating: 4,
      comment: 'Great quality, but could be a bit cheaper.',
      date: '2025-05-02',
    },
    {
      id: 3,
      name: 'Charlie',
      rating: 3,
      comment: 'Good product, but not what I expected.',
      date: '2025-04-28',
    },
  ];

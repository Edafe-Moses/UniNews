import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Personalized News Feed',
    description: 'Stay updated with news tailored to your interests.',
    image: 'https://source.unsplash.com/featured/?university,news',
  },
  {
    title: 'Campus Events',
    description: 'Discover upcoming events and activities on campus.',
    image: 'https://source.unsplash.com/featured/?university,events',
  },
  {
    title: 'Student Forums',
    description: 'Engage with fellow students in various discussions.',
    image: 'https://source.unsplash.com/featured/?students,discussion',
  },
  {
    title: 'Dormitory Information',
    description: 'Find details about on-campus housing options.',
    image: 'https://source.unsplash.com/featured/?dormitory,room',
  },
  {
    title: 'Library Resources',
    description: 'Access a vast collection of academic materials.',
    image: 'https://source.unsplash.com/featured/?library,books',
  },
  {
    title: 'Sports Facilities',
    description: 'Explore the sports amenities available on campus.',
    image: 'https://source.unsplash.com/featured/?university,sports',
  },
  {
    title: 'Lecture Halls',
    description: 'View the various lecture halls and their capacities.',
    image: 'https://source.unsplash.com/featured/?lecture,hall',
  },
  {
    title: 'Clubs and Societies',
    description: 'Join clubs that match your interests and passions.',
    image: 'https://source.unsplash.com/featured/?university,club',
  },
];

const MainSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Features
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;

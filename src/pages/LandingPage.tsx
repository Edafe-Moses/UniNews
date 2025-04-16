import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Newspaper } from "lucide-react";

export default function LandingPage() {
  useEffect(() => {
    document.title = "UniNews | Stay Informed";
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-transparent to-pink-900 opacity-60 z-0"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-10 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <Newspaper className="text-indigo-600" size={28} />
            <h1 className="text-2xl font-bold text-indigo-700">UniNews</h1>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex space-x-6 text-gray-700"
          >
            <li className="hover:text-indigo-600 cursor-pointer">Home</li>
            <li className="hover:text-indigo-600 cursor-pointer">About</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5">Login</Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 px-6 md:px-16 flex flex-col items-center text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Personalized University News at Your Fingertips
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-white max-w-2xl mb-6"
        >
          Stay up-to-date with the latest events, announcements, and updates tailored to your interests and university community.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-lg font-semibold rounded-xl">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-32 bg-white py-6 shadow-inner text-center text-gray-600 text-sm z-10 relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} UniNews. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}

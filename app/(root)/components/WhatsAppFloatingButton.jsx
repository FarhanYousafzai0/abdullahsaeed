'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppFloatingButton = () => {
  const phoneNumber = '923335931323'; // 🔁 Replace with your actual WhatsApp number (without +)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700 transition-all"
      >
        <FaWhatsapp className="text-3xl" />
      </Link>
    </motion.div>
  );
};

export default WhatsAppFloatingButton;

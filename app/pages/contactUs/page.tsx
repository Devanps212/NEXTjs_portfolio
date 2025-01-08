'use client'
import Form from '@/app/components/form/form';
import Image from 'next/image';
import { motion } from 'framer-motion'
import React from 'react';

const ContactUs = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 rounded p-3 md:px-5 gap-3'>
        <motion.div 
          className="hidden sm:block"
          initial={{ opacity:0, x:-50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration: 0.5, ease:'easeIn' }}>
          <Image
            src="https://res.cloudinary.com/dlkrxem40/image/upload/v1735829185/websites/main/DALL_E_2025-01-02_20.16.09_-_A_top_view_of_a_person_typing_on_a_laptop._The_laptop_is_placed_on_a_wooden_desk_with_some_stationery_items_like_pens_notebooks_and_a_cup_of_coffee_qcj3cg.webp"
            alt='contact-Us'
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div 
          className="w-full mx-auto p-6 border border-gray-300 rounded-lg shadow-md"
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration: 0.5, ease:'easeIn' }}>
          <h2 className="font-semibold text-center text-4xl text-gray-800 mb-6">Contact Us</h2>
          <Form inputs={['Email', 'Message']} />
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;

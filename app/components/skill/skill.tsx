'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ImagesSkills } from '@/app/types/skills/image';

const SkillsImages = ({
  images,
  title
}: {
  images: ImagesSkills[],
  title: string
}) => {
  return (
    <div className='bg-yellow-300 w-auto p-5 rounded-lg shadow-lg'>
      <h2 
        className='title font-light text-center text-md sm:text-lg md:text-xl lg:text-3xl p-3'
        style={{fontFamily:"sans-serif"}}>{title}</h2>
      <div className={`p-5 flex ${images.length === 2 ? '' : 'flex-col'} space-y-3`}>
        {
          images.length > 3 ? (
            <>
              <div className='flex justify-center items-center'>
                {
                  images.slice(0, 4).map(({src, alt, link}, index) => (
                    <Link href={link} key={index+1} target='_blank'>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          width={100}
                          height={100}
                          className="p-3 xl:p-2 mx-1 bg-white border rounded-xl h-19 w-14 hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black-400/50"
                        />
                      </motion.div>
                    </Link>
                  ))
                }
              </div>
              <div className='flex justify-center items-center'>
                {
                  images.slice(4).map(({src, alt, link}, index) => (
                    <Link href={link} key={index+1} target='_blank'>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index + 4) * 0.1, ease: 'easeOut' }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          width={100}
                          height={100}
                          className="p-3 xl:p-2 mx-1 bg-white border rounded-xl xl:h-18 xl:w-18 h-19 w-14 hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black-400/50"
                        />
                      </motion.div>
                    </Link>
                  ))
                }
              </div>
            </>
          ) : (
            <div className='flex justify-center items-center'>
              {
                images.map(({src, alt, link}, index) => (
                  <Link href={link} key={index+1} target='_blank'>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1, ease: 'easeOut' }}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={100}
                        height={100}
                        className="xl:p-3 sm:p-2 p-1 mx-1 bg-white border rounded-xl h-10 w-10 xl:h-16 xl:w-16 hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black-400/50"
                      />
                    </motion.div>
                  </Link>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default SkillsImages;

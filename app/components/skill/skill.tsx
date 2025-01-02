import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ImagesSkills } from '@/app/types/skills/image';

const SkillsImages = ({
  images, 
  title
}: {
  images: ImagesSkills[], 
  title: string
}) => {
  return (
    <div className='bg-yellow-300 rounded-lg shadow-lg'>
        <h2 className='font-semibold text-center text-3xl p-3'>{title}</h2>
        <div className={`p-5 flex ${images.length === 2 ? '' : 'flex-col'} space-y-3`}>
          {
            images.length > 3 ? (
              <>
                <div className='flex justify-center items-center'>
                  {
                    images.slice(0, 4).map(({src, alt, link}, index) => (
                      <Link href={link} key={index+1} target='_blank'>
                        <Image
                          src={src}
                          alt={alt}
                          width={100}
                          height={100}
                          className="
                          p-3 mx-1 bg-white border rounded-xl h-16 w-16 hover:-translate-y-2 
                          transform transition-all duration-300 ease-in-out hover:shadow-lg 
                          hover:shadow-black-400/50"
                        />
                      </Link>
                    ))
                  }
                </div>
                <div className='flex justify-center items-center'>
                  {
                    images.slice(4).map(({src, alt, link}, index) => (
                      <Link href={link} key={index+1} target='_blank'>
                        <Image
                          src={src}
                          alt={alt}
                          width={100}
                          height={100}
                          className="p-3 mx-1 bg-white border rounded-xl h-16 w-16 hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black-400/50"
                        />
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
                      <Image
                        src={src}
                        alt={alt}
                        width={100}
                        height={100}
                        className="p-3 mx-1 bg-white border rounded-xl h-16 w-16 hover:-translate-y-2 transform transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black-400/50"
                      />
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

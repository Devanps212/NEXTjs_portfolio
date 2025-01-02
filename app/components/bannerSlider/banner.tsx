'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Projects } from '@/app/types';

const Carousel = ({
  projects,
  projectType
}: {
  projects: Projects[], 
  projectType: "mini" | "main"
}) => {

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      spaceBetween={50}
      slidesPerView={projectType === "main" ? 1 : 3}
    >
      {projects.map(({ src, alt, github, live }, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full border p-1 rounded group">
            <Image
              src={src}
              alt={alt}
              layout="responsive"
              width={700}
              height={500}
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="
              absolute bottom-4 left-1/2 transform -translate-x-1/2 
              flex space-x-4 justify-center w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ">
              <a
                href={live ? live : '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  className={`
                    text-black ${projectType === "main" ? "px-4 py-2" : "px-3 py-1"} rounded-lg transition-all transform ease-out
                    hover:-translate-y-1 hover:scale-105 hover:font-semibold active:scale-95
                  `}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (live === undefined) {
                      e.preventDefault();
                      alert("No link found");
                    }
                  }}
                  style={{
                    background: 'linear-gradient(90deg, rgba(42,189,255,1) 0%, rgba(90,255,248,1) 100%)',
                  }}
                >
                  Live
                </button>
              </a>
              <a
                href={github ? github : '#'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  className={`
                    text-black ${projectType === "main" ? "px-4 py-2" : "px-3 py-1"} rounded-lg hover:bg-gray-600 transition-all transform ease-out
                    hover:-translate-y-1 hover:scale-105 hover:font-semibold active:scale-95
                  `}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (github === undefined) {
                      e.preventDefault();
                      alert("No link found");
                    }
                  }}
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,153,0,1) 0%, rgba(237,255,90,1) 100%)',
                  }}
                >
                  Git
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

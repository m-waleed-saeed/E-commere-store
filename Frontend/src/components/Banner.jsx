import React, { useEffect, useState } from 'react'
import userRequest from '../requestMethods';

const Banner = () => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchRandomBanner = async () => {
      try {
        const res = await userRequest.get('/banners/random');
        setBanner(res.data);
      } catch (error) {
        console.error('Failed to fetch random banner', error)
      }
    }
    fetchRandomBanner();
  }, [])
  console.log(banner);
  if (!banner) {
    return <div>Loading...</div>
  }
  return (
    <div className={`relative bg-[url(--banner.image)] bg-no-repeat bg-cover bg-center h-[80vh] w-full`} style={{ backgroundImage: `url(${banner.image})` }}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-[8%]">
        <div className="max-w-[50%]">
          <h1  className="font-playfair-display text-5xl font-oosemibold text-white mb-8 leading-tight">{banner.title}</h1>

          <p className="font-montserrat text-white text-opacity-80 mb-4 text-lg">
            {banner.subtitle}
          </p>

          <div className="flex gap-4">
            <button className="btn-primary bg-[#ff3333] text-white px-8 py-3 rounded-sm font-montserrat font-semibold hover:bg-[#e62e2e] transition-all duration-300 transform hover:-translate-y-1">
              Shop Now
            </button>
            <button className="btn-secondary bg-[#D4B14A] text-black px-6 py-3 rounded-sm font-montserrat font-semibold hover:bg-[#c2a042] transition-all duration-300 transform hover:-translate-y-1">
              CALL: 435 698 456
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
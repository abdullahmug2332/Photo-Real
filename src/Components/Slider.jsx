
import Marquee from "react-fast-marquee";
import { baseURL } from '../../API/baseURL';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Slider() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/slider`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.slider);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className='fixed top-0 z-50'>
        <div className="slider-container">
          <Marquee speed={100} gradient={false} pauseOnHover={true} className='slider-text hover:cursor-pointer'>
            <p className='text-[#FFA500]'>
              {data}
            </p>
          </Marquee>

        </div>
      </div>

    </>
  )
}


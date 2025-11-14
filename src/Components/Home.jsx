import { useEffect, useState } from 'react';
import Homehero from './HomeHero';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import { baseURL } from '../../API/baseURL';

export default function Home() {
  const [homeData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setData(result);
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
  if (!homeData) return <p>No data found</p>;

  return (
    <>
      {homeData.hero && <Homehero data={homeData.hero} />}
      {homeData.about && <Home2 data={homeData.about} />}
      {homeData.services && <Home3 data={homeData.services} />}
      {homeData.products && <Home4 data={homeData.products} />}
    </>
  );
}

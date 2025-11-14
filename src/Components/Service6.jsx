import React, { useEffect } from 'react';
import img1 from "../assets/service6.jpg";
import { useState } from 'react';
  import { baseURL } from '../../API/baseURL';
export default function Service6() {
  
  const [data, setData] = useState(null);
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
        const response = await fetch(`${baseURL}/service6`);
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
  if (!data) return <p>No data found</p>;


  return (
    <section className="w-[95%] 2xl:w-[75%] mx-auto my-[90px] py-[20px]">
      {/* Title */}
      <h1 className="h1 !text-[#3E4349] uppercase">
        {data.title.split(" ").map((t, i) =>
          data.highlightedtitle.includes(t) ? (
            <span key={i} className="text-[#20B2AA]">{t} </span>
          ) : (
            <span key={i}>{t} </span>
          )
        )}
      </h1>
      <br />

      {/* Image */}
      
        <img
          src={img1}
          className="w-[200px] md:w-[400px] xl:w-[500px] hidden md:block float-right my-7 ml-[20px] mt-[50px]"
          alt="Service"
        />
      

      {/* Sections */}
      {data.sections.map((section, idx) => (
        <div key={idx}>
          {section.title && <h1 className="h1 text-[#3E4349]">{section.title}</h1>}
          {section.title && <hr />}<br />

          {section.list && (
            <ul className={`list-disc list-inside  ml-[20px] p`}>
              {section.list.map((item, i) => (
                <li key={i} className="my-[1px] p pf">{item}</li>
              ))}
            </ul>
          )}

          {section.paragraphs && section.paragraphs.map((p, i) => (
            <p key={i} className="p pf ">{p}</p>
          ))}

          <br />
        </div>
      ))}
    </section>
  );
}

import React, { useEffect } from 'react';
import img1 from "../assets/service2.jpg";
import { useState } from 'react';
import { baseURL } from '../../API/baseURL';

export default function Service2() {
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
        const response = await fetch(`${baseURL}/service2`);
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
      <h1 className="h1 uppercase h">
        {data.title.split(" ").map((t, i) =>
          data.highlightedtitle.includes(t) ? (
            <span key={i} className="text-[#20B2AA]">{t} </span>
          ) : (
            <span key={i} className="text-[#3E4349]">{t} </span>
          )
        )}
      </h1>

      <div>
        <img className="float-right ml-7 w-[200px] md:w-[300px] rounded-lg hidden md:block" src={img1} alt="Service" />

        {/* Descriptions */}
        {data.descriptions.map((desc, i) => (
          <p key={i} className="p pf mb-4">{desc}</p>
        ))}

        {/* Sections */}
        {data.sections.map((section, idx) => (
          <div key={idx} className="mb-4">
            {section.title && <h1 className="p">{section.title}:</h1>}
            {section.title && <hr />}

            {section.list && (
              <ul className="list-disc list-inside p pf">
                {section.list.map((item, i) => (
                  <li key={i} className="my-[5px] p pf">{item}</li>
                ))}
              </ul>
            )}

            {section.paragraphs && section.paragraphs.map((p, i) => (
              <p key={i} className="p pf mb-4" dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

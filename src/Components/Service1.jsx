import img1 from "../assets/service1.jpg";
import { useEffect } from 'react'
import { useState } from 'react';
import { baseURL } from '../../API/baseURL';

export default function Service1() {

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
        const response = await fetch(`${baseURL}/service1`);
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
    <section className="w-[95%] 2xl:w-[75%] mx-auto mt-[130px]">
      {/* Title */}
      <h1 className="h1 uppercase h">
        {data.title.split(" ").map((t, i) => (
          data.highlightedtitle.includes(t) ? (
            <span key={i} className="text-[#20B2AA]">{t} </span>
          ) : (
            <span key={i} className="text-[#3E4349]">{t} </span>
          )
        ))}
      </h1>

      <br />

      {/* Descriptions */}
      <div>
        <img className="float-right hidden md:block ml-7 mb-4" src={img1} alt="Service" />
        <p className="p pf mb-4">{data.des1}</p>
        <p className="p pf mb-4">{data.des2}</p>
        <p className="p pf mb-4">{data.des3}</p>
      </div>

      {/* Sections */}
      {data.sections.map((section, idx) => (
        <div key={idx}>
          <h1 className="h1 text-[#3E4349] h">{section.title}</h1>
          <hr />
          {section.list && (
            <ul className="list-disc list-inside  pf ">
              {section.list.map((item, i) => (
                <li key={i} className="my-[10px]  p pf" dangerouslySetInnerHTML={{ __html: item }} >
                </li>
              ))}
            </ul>
          )}
          {section.paragraphs &&
            section.paragraphs.map((p, i) => (
              <p key={i} className="p pf mb-4" dangerouslySetInnerHTML={{ __html: p }}>
              </p>
            ))}

          {/* Table Section */}
          {section.table && (
            <div className="overflow-x-auto p-4">
              <table className="min-w-[700px] border border-gray-300 text-sm shadow-xl !pf">
                <thead>
                  <tr className="bg-[#20B2AA] text-white">
                    <th className="text-left p-3 border-r border-gray-300">Country</th>
                    <th className="text-left p-3 border-r border-gray-300">Passport Requirements</th>
                    <th className="text-left p-3">Visa Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row, i) => (
                    <tr key={i} className="border-t border-gray-300">
                      <td className="p-3 align-top font-medium p pf">{row.country}</td>
                      <td className="p-3 align-top p pf">
                        {row.passport.map((req, j) => (
                          <div key={j} dangerouslySetInnerHTML={{ __html: req }}></div>
                        ))}
                      </td>
                      <td className="p-3 align-top p pf">
                        {row.visa.map((req, j) => (
                          <div key={j} dangerouslySetInnerHTML={{ __html: req }}></div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <br />
        </div>
      ))}
    </section>
  );
}

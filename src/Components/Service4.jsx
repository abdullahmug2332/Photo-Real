import React, { useEffect } from 'react';
import img1 from "../assets/service4.jpg";
import { useState } from 'react';
  import { baseURL } from '../../API/baseURL';
export default function Service4() {
  
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
        const response = await fetch(`${baseURL}/service4`);
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
      <h1 className="h1 text-[#3E4349] uppercase h">
        {data.title.split(" ").map((t, i) =>
          data.highlightedtitle.includes(t) ? (
            <span key={i} className="text-[#20B2AA]">{t} </span>
          ) : (
            <span key={i}>{t} </span>
          )
        )}
      </h1>
      <hr />
      <br />

      {/* Paragraphs and Image */}
      {data.paragraphs.map((p, i) => (
        <p key={i} className="p pf mb-4">{p}</p>
      ))}
      <img src={img1} className="w-[100%] my-7 hidden md:block" alt="Service" />

      {/* Sections */}
      {data.sections.map((section, idx) => (
        <div key={idx}>
          <h1 className="h1 text-[#3E4349] h">{section.title}</h1>
          <hr /><br />

          {/* Paragraphs */}
          {section.paragraphs && section.paragraphs.map((p, i) => (
            <p key={i} className="p pf mb-4">{p}</p>
          ))}

          {/* List */}
          {section.list && (
            <ul className="list-disc list-inside p pf">
              {section.list.map((item, i) => (
                <li key={i} className="my-[5px] p pf">{item}</li>
              ))}
            </ul>
          )}

          {/* Table */}
          {section.table && (
            <div className="overflow-x-auto">
              <table className="min-w-[600px] w-[100%] border border-gray-300 text-sm shadow-xl p">
                <thead>
                  <tr className="bg-[#20B2AA] text-white p">
                    {section.table.thead.map((head, i) => (
                      <th key={i} className="text-left p-3 border-r border-gray-300 !text-white p">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i} className="border-t border-gray-300">
                      {section.table.thead.map((col, j) => (
                        <td key={j} className="p-3 align-top font-medium p">{row[col]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {section.note && <p className="p mt-2">{section.note}</p>}
            </div>
          )}
          <br />
        </div>
      ))}
    </section>
  );
}

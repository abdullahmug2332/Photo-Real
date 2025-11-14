import { useEffect } from 'react';
import img1 from "../assets/service8.jpg";
import { useState } from 'react';
import { baseURL } from '../../API/baseURL';

export default function Service8() {
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
          const response = await fetch(`${baseURL}/service8`);
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

      {/* Paragraphs */}
      {data.paragraphs.map((p, i) => (
        <p key={i} className="p pf mb-4">{p}</p>
      ))}

      {/* List */}
      {data.list && (
        <ul className="list-disc list-outside ml-5 p">
          {data.list.map((item, i) => (
            <li key={i} className="my-[5px] p pf">{item}</li>
          ))}
        </ul>
      )}
      <br />

      {/* Note */}
      {data.note && <p className="p mb-4">{data.note}</p>}

      {/* Image */}
      <img src={img1} className="w-[100%]" alt="Service" />

      {/* Sections with tables */}
      {data.sections.map((section, idx) => (
        <div key={idx}>
          {section.title && <h1 className="h1 text-[#3E4349]">{section.title}</h1>}
          {section.title && <hr />}<br />

          {/* Table */}
          {section.table && (
            <div className="overflow-x-auto">
              <table className="min-w-[700px] w-[100%] border border-gray-300 text-sm shadow-xl p my-[60px]">
                <thead>
                  <tr className="bg-[#20B2AA] text-white">
                    {section.table.thead.map((head, i) => (
                      <th key={i} className="text-left p-3 border-r border-gray-300 !text-white p">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.tbody.map((row, i) => (
                    <tr key={i} className="border-t border-gray-300">
                      <td className="p-3 align-top font-medium">{row.type}</td>
                      <td className="p-3 align-top">{row.cd}</td>
                      <td className="p-3 align-top">{row.usb}</td>
                      <td className="p-3 align-top">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Section Paragraphs */}
          {section.paragraphs && section.paragraphs.map((p, i) => (
            <p key={i} className="p pf mb-4" dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </div>
      ))}
    </section>
  );
}

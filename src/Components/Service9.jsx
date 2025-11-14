import  { useEffect } from 'react';
import img1 from "../assets/service9.png";
import { useState } from 'react';
import { baseURL } from '../../API/baseURL';

export default function Service9() {
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
        const response = await fetch(`${baseURL}/service9`);
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
          data.highlightedtitle.includes(t.toLowerCase()) ? (
            <span key={i} className="text-[#20B2AA]">{t} </span>
          ) : (
            <span key={i}>{t} </span>
          )
        )}
      </h1>
      <br />

      {/* Image */}
      <img src={img1} className="w-[200px] md:w-[400px] xl:w-[500px] hidden md:block float-right my-7 ml-[20px] mt-[50px]" alt="Service" />

      {/* Paragraphs */}
      {data.paragraphs.map((p, i) => (
        <p key={i} className="p mb-4">{p}</p>
      ))}

      {/* Lists */}
      {data.lists.map((list, idx) => (
        <ul key={idx} className="list-disc list-outside ml-5 p mb-4">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ))}

      {/* Sections */}
      {data.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          {section.title && <h1 className="h1 text-[#3E4349]">{section.title}</h1>}
          {section.paragraph && <p className="p mb-4">{section.paragraph}</p>}

          {/* Table */}
          {section.table && (
            <div className="overflow-x-auto">
              <table className="min-w-[400px] w-[100%] border border-gray-300 text-sm shadow-xl p mb-4">
                <thead>
                  <tr className="bg-[#20B2AA] text-white">
                    {section.table.thead.map((head, i) => (
                      <th key={i} className="text-left p-3 border-r border-gray-300 !text-white">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.tbody.map((row, i) => (
                    <tr key={i} className="border-t border-gray-300">
                      <td className="p-3 align-top font-medium">{row.service}</td>
                      <td className="p-3 align-top">{row.price}</td>
                      <td className="p-3 align-top">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {section.note && <p className="p">{section.note}</p>}
            </div>
          )}
        </div>
      ))}

      <p className="p">Thank You!</p>
    </section>
  );
}

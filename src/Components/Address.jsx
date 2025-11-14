import { useEffect } from "react";
import img1 from "../assets/address1.png";
import img2 from "../assets/address2.png";
import { useState } from "react";
import { baseURL } from "../../API/baseURL";


export default function Address() {
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
        const response = await fetch(`${baseURL}/address`);
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
    <section className="ah mt-[120px] w-[97%] 2xl:w-[75%] mx-auto">
      <h1 className="h1 text-center">
        {data.title.split(" ").map((t, i) => (
          data.highlightedtitle.includes(t) ? (
            <span key={i} className="text-[#20B2AA]">{t} </span>
          ) : (
            <span key={i} className="text-[#3E4349]">{t} </span>
          )
        ))}
      </h1>

      <iframe
        className="w-[100%] h-auto min-h-[80vh] rounded-[20px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.1618517830902!2d-73.99001928344659!3d40.69243293208334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a491f8cd38d%3A0x6d83b64e40f5470a!2sPhotoreal!5e0!3m2!1sen!2s!4v1745843725958!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

      <div className="flex flex-col md:flex-row justify-between my-[20px]">
        {data.cards.map((card, i) => (
          <div
            key={i}
            className="text-center md:text-start my-[10px] md:my-[30px] w-[70%] mx-auto md:w-[30%] shadow-xl p-7 rounded-lg duration-500 hover:scale-[1.02] cursor-pointer"
          >
            <p className="text-[#20B2AA] text-[20px] md:text-[25px]">
              <strong>{card.heading}</strong>
            </p>
            {card.items.map((item, j) => (
              <p key={j} className="p">
                {item.text}
              </p>
            ))}
          </div>
        ))}
      </div>

      <img src={img1} className="w-[100%] rounded-[15px]" />

      <div className="flex my-[50px] justify-between">
        <div className="w-[100%] md:w-[50%]">
          {/* Location */}
          <div className="p-7 rounded-lg shadow-xl duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20B2AA] text-[20px] md:text-[25px]">
              <strong>{data.info.location.heading}</strong>
            </p>
            {data.info.location.paragraphs.map((p, i) => (
              <p key={i} className="p">
                {p}
              </p>
            ))}
          </div>
          <br />

          {/* Subway */}
          <div className="p-7 rounded-lg shadow-xl duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20B2AA] text-[20px] md:text-[25px]">
              <strong>{data.info.subway.heading}</strong>
            </p>
            <ul className="list-disc">
              {data.info.subway.list.map((item, i) => (
                <li key={i} className="my-[10px] p">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <br />

          {/* Parking */}
          <div className="p-7 rounded-lg shadow-xl duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20B2AA] text-[20px] md:text-[25px]">
              <strong>{data.info.parking.heading}</strong>
            </p>
            {data.info.parking.paragraphs.map((p, i) => (
              <p key={i} className="p">
                {p}
              </p>
            ))}
          </div>
          <br />

          {/* Wheelchair */}
          <div className="p-7 rounded-lg shadow-xl duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20B2AA] text-[20px] md:text-[25px]">
              <strong>{data.info.wheelchair.heading}</strong>
            </p>
            {data.info.wheelchair.paragraphs.map((p, i) => (
              <p key={i} className="p">
                {p}
              </p>
            ))}
          </div>
        </div>

        <img
          className="md:w-[400px] h-auto hidden md:block rounded-[15px]"
          src={img2}
        />
      </div>
    </section>
  );
}

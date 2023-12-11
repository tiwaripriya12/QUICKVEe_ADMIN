import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";

const Welcome = () => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setVisibleCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  const openCalendar = () => {
    setVisibleCalendar(true);
  };

  const closeCalendar = () => {
    setVisibleCalendar(false);
  };

  return (
    <>
      <Container>
        <Row>
          <div className="flex justify-between mx-12 my-7 relative">
            <div className="lg:text-[28px] text-[#000000] adminstd_medium opacity-100 leading-tight font-normal sm:text-sm md:text-sm">
              Welcome Malik Saleh
            </div>
            <div
  onClick={() => setVisibleCalendar(prevState => !prevState)}
  className={`lg:text-[28px] text-[#000000] adminstd_medium opacity-100 leading-tight font-normal sm:text-sm md:text-sm ${visibleCalendar ? 'active' : ''}`}
>
  Oct 4, 2023 - Oct 4, 2023
</div>
            <div
              className={visibleCalendar ? "dataCalender" : "nonedatacalender"}
            >
              <div className="flex mx-auto w-full">
                <div className="w-full border-r border-gray-400 p-4">
                  <div className="my-8">Select Option</div>
                  <ul className="flex space-x-8">
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Today</a>
                    </li>
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Yesterday</a>
                    </li>
                  </ul>
                  <ul className="flex space-x-8 mt-4">
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Week to Date</a>
                    </li>
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Last Week</a>
                    </li>
                  </ul>
                  <ul className="flex space-x-8 mt-4">
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Last 7 Days</a>
                    </li>
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Month to Date</a>
                    </li>
                  </ul>
                  <ul className="flex space-x-8 mt-4">
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Last 30 Days</a>
                    </li>
                    <li className="border px-16 py-2 rounded">
                      <a href="#">Last Month</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full p-4">
                  <div className="">Right Column</div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
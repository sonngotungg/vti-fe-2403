import React, { useState, useEffect } from "react";
import "./App.css";
const mockData = [
  {
    id: 1,
    title: "item 1",
  },
  {
    id: 2,
    title: "item 2",
  },
  {
    id: 3,
    title: "item 3",
  },
  {
    id: 4,
    title: "item 4",
  },
  {
    id: 5,
    title: "item 5",
  },
  {
    id: 6,
    title: "item 6",
  },
  {
    id: 7,
    title: "item 7",
  },
  {
    id: 8,
    title: "item 8",
  },
  {
    id: 9,
    title: "item 9",
  },
  {
    id: 10,
    title: "item 10",
  },
  {
    id: 11,
    title: "item 11",
  },
  {
    id: 12,
    title: "item 12",
  },
];

export default function App() {
  const [dataList, setDataList] = useState([]);
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, 2000);
    });
  };

  const getData = async () => {
    const responseData = await fetchData();
    setDataList(responseData);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleScrollAtTheEnd = (e) => {
    // catch the scroll-in-the-bottom event of a specific element
    // element.scrollTop is the pixels hidden in top due to the scroll
    // element.scrollHeight is the pixels of the whole div
    // element.clientHeight is the pixels that you see in the browser
    const contentHeight = e.target.scrollHeight;
    const distanceFromVisibleTopAndTheContentTop = e.target.scrollTop;
    const dataListContainerHeight = e.target.offsetHeight;

    const isBottom =
      distanceFromVisibleTopAndTheContentTop + dataListContainerHeight ===
      contentHeight;

    if (isBottom) {
      console.log("is bottom", distanceFromVisibleTopAndTheContentTop);
    }
  };

  // catch the scroll-in-the-bottom event of the browser window
  useEffect(() => {
    function scrollBottom(e) {
      const windowInnerHeight = window.innerHeight;
      const widnowScrollY = window.scrollY;
      const bodyElementHeight = document.documentElement.offsetHeight;

      const isWindowBottom =
        widnowScrollY + windowInnerHeight >= bodyElementHeight;

      if (isWindowBottom) {
        console.log("at the bottom of window");
      }
    }

    document.addEventListener("scroll", scrollBottom);

    return () => {
      document.removeEventListener("scroll", scrollBottom);
    };
  }, []);

  return (
    <div className="App" onScrollEnd={() => console.log("first")}>
      <h1>Data List</h1>
      <div className="data-list" onScroll={handleScrollAtTheEnd}>
        {/* 2. show list of item has title only */}
        {dataList
          .filter((item) => item.title)
          .map((item) => (
            <div key={item.title} className="data-item">
              <p>Title: {item.title}</p>
            </div>
          ))}
      </div>
      <div onScrollEnd={() => console.log("second")} className="footer">
        1
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d672e6ec6f314124a5e4acd4b6c9d24b").then((response) => {
      setData(response.data);
    });
  }, []);

  function handleClick(url) {
    console.log(`Link clicked: ${url}`);
  }

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>
          <a href={item.url} onClick={() => handleClick(item.url)}>
            {item.title}
          </a>
        </p>
      ))}
    </div>
  );
}

export default MyComponent;
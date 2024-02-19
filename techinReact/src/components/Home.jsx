import { BookCard } from './BookCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [data, setData] = useState(null);
  // const [categories, setCategories] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books')
      .then((resp) => {
        console.log(resp);
        setData(resp.data);
        // const categories = [...new Set(data.map((book) => book.category))];
        // setCategories(categories);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="books-main-div">
      {/* <div>
        Filtruoti pagal kategoriją: <br />
        <select name="" id="">
          {categories.map((category, index) => (
            <option key={index} value="category">
              {category}
            </option>
          ))}
        </select>
      </div> */}
      {data.map((item) => (
        <BookCard key={item.id} {...item} />
      ))}
    </div>
  );
};

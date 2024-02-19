import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
    price: 0,
    cover: '',
    reserved: false,
  });

  useEffect(() => {
    setBook((prevState) => ({
      ...prevState,
      id: generateUniqueId(),
    }));
  }, []);

  const generateUniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books', book, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        console.log(resp);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Knygos registracija</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>
            Pavadinimas
            <span className="required-field">*</span>
          </span>
          <input type="text" name="title" id="title" required minLength={5} onChange={handleChange} />
        </label>
        <label>
          <span>
            Autorius
            <span className="required-field">*</span>
          </span>
          <input type="text" name="author" id="author" required minLength={10} onChange={handleChange} />
        </label>
        <label>
          <span>
            Kategorija
            <span className="required-field">*</span>
          </span>
          <input type="text" name="category" id="category" required minLength={5} onChange={handleChange} />
        </label>
        <label>
          <span>
            Kaina
            <span className="required-field">*</span>
          </span>
          <input type="number" name="price" id="price" step="0.01" required onChange={handleChange} min={0.01} />
        </label>
        <label>
          <span>
            Nuotrauka
            <span className="required-field">*</span>
          </span>
          <input type="text" name="cover" id="cover" required minLength={20} onChange={handleChange} />
        </label>
        <input type="submit" value="Registruoti" className="submit-button" />
      </form>
    </>
  );
};

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export const BookCard = (props) => {
  const { title, cover, author, reserved, price, id } = props;
  const [isReserved, setReserved] = useState(reserved);

  const handleClick = async () => {
    try {
      const newReservationStatus = !isReserved;
      await axios.put(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`, {
        reserved: newReservationStatus,
      });
      setReserved(newReservationStatus);
    } catch (error) {
      console.error('Error updating reservation status:', error);
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cover} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
          <br />
          {price}
        </Card.Text>
        {isReserved ? (
          <>
            <p className="text-danger text-center">Rezervuota</p>
            <Button className="button" onClick={handleClick} variant="secondary">
              Grąžinti
            </Button>
          </>
        ) : (
          <>
            <p className="text-primary text-center">Turime sandėlyje</p>
            <Button className="button" onClick={handleClick} variant="secondary">
              Rezervuoti knygą
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

import { useState } from 'react';
export const Review = () => {
  const [review, setReview] = useState({
    name: '',
    title: '',
    reviewText: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <>
      <h2>Atsiliepimas</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <span>
            Vardas
            <span className="required-field">*</span>
          </span>
          <input type="text" name="name" required minLength={5} onChange={handleChange} />
        </label>
        <label>
          <span>
            Pavadinimas
            <span className="required-field">*</span>
          </span>
          <input type="text" name="title" required minLength={5} onChange={handleChange} />
        </label>
        <label>
          <span>
            Tekstas
            <span className="required-field">*</span>
          </span>
          <textarea cols="30" rows="10" name="reviewText" required onChange={handleChange}></textarea>
        </label>
        <input type="submit" value="Registruoti" className="submit-button" />
      </form>

      {showToast && (
        <>
          <div className="pop-up-card">
            <div>Ačiū, {review.name}</div>
            <div>Jūsų atsiliepimą gavome</div>
            <button className="submit-button" onClick={handleToastClose} style={{ marginTop: '10px' }}>
              Uždaryti
            </button>
          </div>
          <div className="transp-div"></div>
        </>
      )}
    </>
  );
};

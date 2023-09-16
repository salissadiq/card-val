import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardForm from './components/CardForm';

function App() {
  const [carddetails, setCardDetials] = useState({
    cardHolder: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: ""
  })
  const handleCardDetails = (e) => {
    setCardDetials(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  const payHandler = (e) => {
    e.preventDefault();

  }
  console.log(carddetails);
  return (
    <div className='flex justify-center gap-10 items-center mt-[200px]'>
      <Card carddetails={carddetails} />
      <CardForm handleCardDetails={handleCardDetails} pay={payHandler} />
    </div>
  );
}

export default App;

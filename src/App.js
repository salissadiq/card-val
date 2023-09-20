// Importing the 'useState' hook from React, which allows functional components to have state
import { useState } from 'react';

// Importing CSS styles from 'App.css' to style the components in this file
import './App.css';

// Importing the 'Card' and 'CardForm' components from their respective files
import Card from './components/Card';
import CardForm from './components/CardForm';

// Importing 'ToastContainer' and 'toast' from 'react-toastify' for displaying toast notifications
import { ToastContainer, toast } from 'react-toastify';

// Importing the CSS for 'react-toastify' to style the toast notifications
import 'react-toastify/dist/ReactToastify.css';

// Importing 'axios' for making HTTP requests
import axios from 'axios';

// Defining the main functional component 'App'
function App() {
  // Using the 'useState' hook to create state for card details and a function to update them
  const [carddetails, setCardDetials] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: ""
  });

  // Function to handle changes in card details input fields and update the state
  const handleCardDetails = (e) => {
    setCardDetials(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    });
  }

  // Function to handle the payment process when the user submits the form
  const payHandler = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to the server to validate the card details
      const response = await axios.post(`http://localhost:5000/validate-card`, carddetails);

      // Displaying a success toast if the response status is 200 (OK)
      if (response.status === 200) {
        toast.success(`Your ${response?.data?.cardType} is valid`);
      }
    } catch (error) {
      // Handling different error scenarios and displaying appropriate error toasts
      if (!error?.response?.data.isCardValid) {
        toast.error('Invalid credit card');
      } else if (!error?.response?.data.isExpiryValid) {
        toast.error('Your credit card has expired');
      } else if (!error?.response?.data.isCvvValid) {
        toast.error('Your credit card cvv is invalid');
      }
    }
  }

  // Rendering the components (Card, CardForm, and ToastContainer) in the DOM
  return (
    <div className='flex justify-center gap-10 items-center mt-[200px]'>
      <Card carddetails={carddetails} />
      <CardForm handleCardDetails={handleCardDetails} pay={payHandler} carddetails={carddetails} />
      <ToastContainer />
    </div>
  );
}

// Exporting the 'App' component as the default export
export default App;

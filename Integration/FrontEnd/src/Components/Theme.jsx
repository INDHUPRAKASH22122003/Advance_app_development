import { useEffect,useState} from 'react';
import axios from 'axios';
import Form from './Form';
import "./Theme.css"
import Nav from "./Nav"
function Theme() {

  const[open1,setOpen] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  
  const handleOpen = (eventName,eventPrice) => {
      setOpen(true);
      setEventName(eventName);
      setEventPrice(eventPrice);
  }

  const handleCloseForm = () => {
    setOpen(false);
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/events")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const filteredEvents = data.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term submitted:', searchTerm);
  };

    return (
      <div className="be-overall">
      <div className='home-b'>
        <Nav/>
        <div className='be-h1'>
            <h2>Select the Theme:</h2>
        </div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" type="submit">
          <b>Search</b>
        </button>
      </form>

        
      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Upcoming Events for Now...</h3>
        <p>Watch this space for upcoming events!</p>
      </div>
        )}
      
       <br></br><br></br>
        

        <div className='be-grid'>
        {filteredEvents.map(event => (
          <div key={event.id} onClick={() => handleOpen(event.name,event.price)}>
            <section className="pb-5">
            <div className="container text-center" >
            <div className="gallery-wrapper">
                <div className="grid-sizer col-lg-4 col-md-6"></div>
                <div className="col-lg-4 col-md-6 grid-item mb-4">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src={event.image} alt="" />
                <h2 className="h4">{event.name}</h2>
                <p className="small text-muted font-italic">Theme cost: {event.price}</p>
                <p className="small text-muted font-italic">Rating: {event.rating}</p>
                <p className="small text-muted font-italic">Photographer Status: {event.photographer}</p>
                <p className="small text-muted font-italic">Description: {event.description}</p>
                </div>
            </div>
            </div>
        </section> 
       </div>
       ))}
        {open1 && (<Form eventName={eventName} eventPrice={eventPrice} handleCloseForm={handleCloseForm} />)}         
        </div>
      <br></br>
        </div>
       
        
      </div>
  )
}

export default Theme
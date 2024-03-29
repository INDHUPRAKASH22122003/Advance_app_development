import './AdDelEvent.css';
import axios from 'axios';

function DelEvents({eventName , id, handleClose1}) {


    const handleButtonClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/book/${id}`);
            window.location.href = "/viewevents";
            alert("Event Deleted Successfully!");
        } catch (error) {
            alert("Failed to Delete Event!");
            console.error(error);
        }
    };


    return (
        <div>
            <div className="del-modal-container">
                <div className="del-modal-content">
                <div className="del-evnt-create-box">
                    <div className=''>
                       <img onClick={handleClose1} className="del-img" src="https://cdn-icons-png.flaticon.com/512/8367/8367508.png"></img>
                        <h2 className='del-h11'>Delete Confirmation</h2><br></br>
                            <div className="del-msg">
                                <h3 className="del-msg1">Do you want to delete&nbsp;' {eventName} ' booked by You?&nbsp;</h3>
                            </div>
                            <br></br>
                            <a href="/ViewEvents"><button className="del-can">Cancel</button></a><button onClick={handleButtonClick} className="del-del">Delete</button>

                            </div>
                            
                    </div>
                </div>
                </div>
            </div>
    )
}
export default DelEvents
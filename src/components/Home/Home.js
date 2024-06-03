import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import './Home.css';
import MyVerticallyCenteredModal from'../Modal/Modal';
const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <div  className='conatcCont'>
     <div>
     <h1>Home</h1>
  
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
 
    </div>   
    </div>
    </>
  )
}

export default Home
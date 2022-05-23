import axios from "axios";
import { Table,Navbar,Container, Row, Col, Button, ButtonGroup, Form,NavbarBrand, FormGroup,NavBrand } from "react-bootstrap";
import{useState,useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";



export default function UserDetail(){
    const api= "http://localhost:5000/Users";
    let {Username} = useParams();
    
    const [accessData, setAccessData] = useState([]);
    const navigate = useNavigate();
    const loadData = async () => {
        const response = await axios.get(api);
        setAccessData(response.accessData);
    };

    useEffect(() => {
        loadData();
        const datas = localStorage.getItem('Users');
        setAccessData(datas);
    },[])
    const logout = () =>{
        setTimeout(navigate(`/`),1000);

    }
    return(
        
        <>
            <ToastContainer/>
             <Navbar bg="primary" variant="dark" className="justify-content-center">
                <Navbar.Brand >
                    <div>
                        Welcome {Username} 
                    </div>
                </Navbar.Brand>
            </Navbar>
            <Button style={{marginTop:"15px"}} onClick={logout}>Logout</Button>
            <Container>
                
            
            </Container>  
    
        </>
       )
}
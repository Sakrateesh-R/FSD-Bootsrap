import axios from "axios";
import { Table,Navbar,Container, Row, Col, Button, ButtonGroup, Form,NavbarBrand, FormGroup,NavBrand } from "react-bootstrap";
import{useState,useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetail from "./UserDetail";
import { BrowserRouter as Router,Routes,Route,Link, useNavigate } from "react-router-dom";

const api = "http://localhost:5000/Users";

export default function Login(){
    const [userSession,setUserSession] = useState({
        Name:"",
        Username:"",
        Password:"",
        Age:""
    });
    
    const navigate = useNavigate();
   // const [routerPath,setRouterPath] =useState();

    const [validUser, setValidUser] = useState(false);
    const [data,setData] = useState([]);
    const [formData,setFormData] = useState({
        Username:"",
        Password:""
    });

    useEffect( () => {
        const retain = localStorage.getItem("Users");
        if(retain){
            setData(JSON.parse(retain));
        }
    },[]);

    useEffect( () => {
        localStorage.setItem('Users',JSON.stringify(data))
    });

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormData({...formData,[name]:value})
        console.log(value)
    }
    useEffect( ()=>{
        loadData();
        console.log(data.Username)
        /*console.log(loadData());*/
      },[]);
    
      const loadData = async () =>{
        const response = await axios.get(api);
        setData(response.data)
      };

    const loginUser = () =>{
        data.map((item,index) =>{
            if(item.Username === formData.Username){
                if(item.Username === formData.Username && item.Password === formData.Password){
                    toast.success("Sucessfully Logged in")
                    setValidUser(true);
                    setUserSession({
                        Username:item.Username,
                        Password:item.Password,
                        Age:item.Age,
                        Name:item.Name
                    });
                    console.log(userSession.Age)
                    setTimeout(setFormData({
                        Username:"",
                        Password:""
                    }),500)

                    
                    setTimeout(navigate(`/userdetail/${item.Username}`),1000);

                }
                else{
                    toast.error("UserName or Password Error");
                    setTimeout(setFormData({
                        Username:"",
                        Password:""
                    }),500)
                    console.log(formData.Username)
                    console.log(item.Username)
                }
            } else if(item.Password === formData.Password){
                if(item.Username === formData.Username && item.Password === formData.Password){
                    toast.success("Sucessfully Logged in");
                    setValidUser(true);
                    setUserSession({
                        Username:item.Username,
                        Password:item.Password,
                        Age:item.Age,
                        Name:item.Name
                    });
                    setTimeout(setFormData({
                        Username:"",
                        Password:""
                    }),500)
                     
                    setTimeout(navigate(`/userdetail/:${item.Username}`),500);

                }
                else{
                    toast.error("UserName or Password Error");
                    setTimeout(setFormData({
                        Username:"",
                        Password:""
                    }),500)
                    console.log(formData.Username)
                    console.log(item.Username)
                }
            }
            
            
        })   
    }

    return(
        <div style={{marginTop:"10px"}} >
            <ToastContainer />
                <Navbar bg="primary" variant="dark" className="justify-content-center">
                    <Navbar.Brand>
                        Welcome user Login to continue...
                    </Navbar.Brand>
                </Navbar>
                <Container >
                    <Row>
                        <Col md="8">
                            <FormGroup className="justify-content-center">
                                <Form.Label>
                                    UserName:
                                </Form.Label>
                                <Form.Control type="text" id="username" name="Username" value={formData.Username} onChange={handleChange}/>
                                <Form.Label>
                                    Password:
                                </Form.Label>
                                <Form.Control type="password" id="password" name="Password" value={formData.Password} onChange={handleChange} />
                            </FormGroup>
                            <div className="d-grid gap-2" style={{marginTop:"10px"}}>
                                <Button  variant="primary" onClick={loginUser}>Submit</Button>
                            </div>
                        </Col>    
                        
                    </Row>       
                     
                </Container>
                {validUser ?
                <div>
                    <UserDetail dat={userSession} />
                    {console.log(userSession.Username) }
                </div>
                    : null}   
        </div> 
                   
    );
}

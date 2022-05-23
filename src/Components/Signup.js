import {useState,useEffect} from "react";
import  {Table, Container, Row, Col, Button, ButtonGroup, Form, Navbar, NavbarBrand, FormGroup} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import '../App.css';
//import Login from "./Login";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
const api = "http://localhost:5000/Users";

function Signup() {
  const[data, getData] = useState([]);

  useEffect( ()=>{
    loadData();
    /*console.log(loadData());*/
  },[])

  const loadData = async () =>{
    const response = await axios.get(api);
    getData(response.data)
  };
  
  const handleDelete = (id) =>{
    axios.delete(`${api}/${id}`);
    toast.error('Data Deleted Sucessfully');
    setTimeout( loadData, 500);
  }
  //Form handling
  const[formData, setFormData] = useState({
    Name:'',
    Username:'',
    Password:'',
    Age:''
  });
 
  const handleChange =(e)=>{
    const{name,value}  = e.target;
    console.log(value)
    setFormData({...formData,[name]:value});
  }
  //Submit data

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!formData.Name || !formData.Age || !formData.Username || !formData.Password){
      toast.error('Fields Should not be Empty');
    }else{

      if(edit){
        axios.put(`${api}/${userId}`,formData);
        toast.success("Data Updated successfully");
        setFormData({
          Name:"",
          Username:"",
          Password:"",
          Age:""
        })
        setEdit(false);
        setUserId(null);
        setTimeout(loadData,500);

      }else{
        axios.post(api,formData);
        toast.success("Data Added Sucessfully");
        setFormData({
          Name:"",
          Username:"",
          Password:"",
          Age:""
        })
        setTimeout(loadData,500);
      }
    }
  }
  //Edit /Update functionality
  const[userId, setUserId] =useState(null)
  const[edit,setEdit] = useState(false)
  const handleEdit = (id) =>{
    const singleUser = data.find(item => item.id === id);
    setFormData(singleUser);
    setUserId(id);
    setEdit(true);
  }

  return (
    <>
    
        <ToastContainer />
        <Navbar bg="primary" variant="dark" className="justify-content-center">
          <Navbar.Brand >
            <h3 >This is a head section</h3>
          </Navbar.Brand>
        </Navbar>
        <Container> 
          <Row>
            <Col md="5">
              <h2>Signup new User</h2>
              <FormGroup>
                <Form.Label>Name : </Form.Label>
                <Form.Control type="text" name="Name" id="Name" value={formData.Name} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>UserName : </Form.Label>
                <Form.Control type="text" name="Username" id="Username" value={formData.Username} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Password : </Form.Label>
                <Form.Control type="password" name="Password" id="Password" value={formData.Password} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Age : </Form.Label>
                <Form.Control type="number" name="Age" id="Age" value={formData.Age} onChange={handleChange} />
              </FormGroup>
              <div className="d-grid gap-2" style={{marginTop:"10px"}}>
                <Button variant="primary" size="lg" onClick={handleSubmit}>{edit ? "Update":"Submit"}</Button>
              </div>
            </Col>
            <Col md="7">
              <h2>Data</h2>
              <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>SI.No</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>UserName</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {data.map( (item, index)=>(
                    <tbody key={index}>
                      <tr >
                        <td>{index+1}</td>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Username}</td>
                        <td>
                          <ButtonGroup>
                            <Button style={{marginRight:"5px"}} variant="secondary" onClick={()=> handleEdit(item.id)}>Update</Button>
                            <Button style={{marginLeft:"5px"}} variant="danger" onClick={()=> handleDelete(item.id)}>Delete</Button>
                          </ButtonGroup>
                        </td>
                      </tr> 
                    </tbody>
                  ))}     
              </Table>
            </Col>
          </Row>
        </Container>
    </>
      
      
  );
}

export default Signup;
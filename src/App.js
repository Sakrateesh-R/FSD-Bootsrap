/*import {useState,useEffect} from "react";
import  {Table, Container, Row, Col, Button, ButtonGroup, Form, Navbar, NavbarBrand, FormGroup} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './App.css';*/
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import UserDetail from "./Components/UserDetail";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navigation from "./Components/Navigation";

const api = "http://localhost:5000/Users";

function App() {
  /*const[data, setData] = useState([]);

  useEffect( ()=>{
    loadData();
    /*console.log(loadData());*//*
  },[])

  const loadData = async () =>{
    const response = await axios.get(api);
    setData(response.data)
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
*/
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path ="/userdetail/:Username" element={<UserDetail/>}/>
        <Route path="/" element={<Home/>} />
      </Routes> 
    </Router>
      
  );
}

export default App;
 
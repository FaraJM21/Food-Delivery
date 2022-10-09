import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { isAdmin } from "../redux/isAdminReducer";
import { isLoged } from "../redux/isLogedInReducer";
import { setUserUsername } from "../redux/loginReducer";
import { addUser } from "../redux/usersReducer";

function useForms(place) {
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users.arr);
  let admin = useSelector((state) => state.admin);
  const [user, setUser] = useState({});
  const ref = useRef(null);
  let navigate = useNavigate();

  const handleChange = (e) => {
    if (place === "register") {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
        id: uniqid(),
        orderedFoods: [],
        hasCard:false,
        creditCard:{},
      });
    } 
    
    else {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (place === "register") {
      if (
        users.find(
          (users) => users.tel === user.tel && users.username === user.username
        )
      ) {
        ref.current.style = "color:orange; opacity:1";
        ref.current.innerHTML = "This user is already created";
       
        setTimeout(() => {
          ref.current.style.opacity = "0";

        }, 3000);
      } else if (users.find((users) => users.username === user.username)) {
        ref.current.style = "color:orange; opacity:1";
        ref.current.innerHTML = "This username is already taken";
        setTimeout(() => {
          ref.current.style.opacity = "0";
        }, 3000);
      } else if (users.find((users) => users.tel === user.tel)) {
        ref.current.style = "color:orange; opacity:1";
        ref.current.innerHTML = "This number is already in use";
        setTimeout(() => {
          ref.current.style.opacity = "0";
        }, 3000);
      } 

      
      
      else {
        dispatch(addUser(user));
        ref.current.style = "color:lime; opacity:1";
        ref.current.innerHTML = "Accoount Created Successfully";
        dispatch(setUserUsername(user.username)) 
        dispatch(isLoged(true))
       
        setTimeout(() => {
          ref.current.style.opacity = "0";
          navigate('/')
        }, 2000);
        setUser({});
      }
    } 
    
    
    
    else {
      if (user.username === admin.username && user.psw === admin.psw) {
        dispatch(setUserUsername(user.username))
        dispatch(isLoged(true))
        dispatch(isAdmin(true))
        navigate('/')
        
        setUser({});
      
      } 
      
      
      
      
      else if (
        users.find(
          (users) => users.username === user.username && users.psw === user.psw
        )
      ) {
        dispatch(setUserUsername(user.username))
        dispatch(isLoged(true))
        setUser({});
       navigate('/')
      
      }
      
      
      
      else if (
        users.find(
          (users) => users.username === user.username && users.psw !== user.psw
        )
      ) {
        ref.current.innerHTML = "Incorrect Password or User !";
        ref.current.style = "color:orange; opacity:1";
        setTimeout(() => {
          ref.current.style = "opacity:0";
        }, 3000);
      } 
      
      
      else {
        ref.current.innerHTML = `This user doesn't exist`;
        ref.current.style = "color:red; opacity:1";
        setTimeout(() => {
          ref.current.style = "opacity:0";
        }, 3000);
      }
    }
  };

  return [user, ref, handleChange, handleSubmit];
}

export default useForms;

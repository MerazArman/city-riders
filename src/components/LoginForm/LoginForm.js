import React, { useContext, useState } from 'react';
import './Login.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import { FcGoogle } from 'react-icons/fc'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { sub } from 'date-fns/esm';
import Header from '../Header/Header';
import { useHistory, useLocation} from 'react-router-dom';



!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const LoginForm = () => {
  //=========================== use state context history location etc hooks ground------------------------
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false
  });
  const [newUser, setNewUser] = useState(false);
  const [userLogged, setUserLogged, ] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
  // ---------------------------------google sign in authentication start now ----------------------------------
  const googleHandlerBtn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const userInfo = {
          isSignIn: true,
          name: displayName,
          email: email,
          success:true
        }
        setUser(userInfo)
        setUserLogged(userInfo)
        history.replace(from);
        console.log(res, res.user);
      }).catch((err) => {
        let userInfo = { ...user}
        userInfo.error = err.message;
        userInfo.success = false;
        setUser(userInfo)
        setUserLogged(userInfo)
        console.log(err.code, err.message, err.email);
      });
  }
  //  ----------------------------fb authentication start now -------------------------------

  const fbBtnHandler = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const userInfo = {
          isSignIn: true,
          name: displayName,
          email: email,
          success:true
        }
        setUser(userInfo)
        setUserLogged(userInfo)
        history.replace(from);
        console.log(res, res.user);
      })
      .catch((err) => {
        let userInfo = { ...user}
        userInfo.error = err.message;
        userInfo.success = false;
        setUser(userInfo)
        setUserLogged(userInfo)
        console.log(err, err.code, err.message, err.email);
      });

  }
  //------------------------------------- sign out function----------------------------------------------------
  const signOutHandler = () => {
    firebase.auth().signOut()
      .then((res) => {
        const signOutUser = {
          isSignIn: false,
          name: '',
          email: '',
          photo: '',
          error: '',
          success: false
        }
        setUser(signOutUser)
        setUserLogged(signOutUser)
        history.replace(from);
        console.log(res, res.user);
      }).catch((err) => {
        console.log(err.message, err.code);
      });
  }
  //------------------------------------- email validation start now-----------------------------------  ------

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === 'email') {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      // console.log(isFormValid);
    }
    if (e.target.name === 'password') {
      isFormValid = /\d{1}/.test(e.target.value);
      // console.log(isFormValid);
    }
    if (e.target.name === 'confirmPassword') {
      isFormValid = /\d{1}/.test(e.target.value);
      // console.log(isFormValid);
    }

    if (isFormValid) {
      let userInfo = { ...user }
      userInfo[e.target.name] = e.target.value;
      setUser(userInfo)
      console.log(userInfo);
    }

  }

  //================================= sign up and sign in email and password authentication====================== 

  // const submitHandlerBtn = (e) => {
  //   if (newUser && user.email && user.password === user.confirmPassword) {
  //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  //       .then((res) => {
  //         let userInfo = { ...user}
  //         updateProfileName(user.name)
  //         setUser(userInfo)
  //         // setUserLogged(userInfo)
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         let userInfo = { ...user}
  //         userInfo.error = err.message;
  //         setUser(userInfo)
  //         // setUserLogged(userInfo)
  //         console.log(err, err.code, err.message);
  //       })
  //   }
  //   if (!newUser && user.email && user.password) {
  //     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  //       .then((res) => {
  //         let userInfo = { ...user, name: res.user.displayName}
  //         console.log(userInfo);
  //         setUser(userInfo)
  //         setUserLogged(userInfo)
  //         console.log(res, res.user);
  //       })
  //       .catch((err) => {
  //         let userInfo = { ...user};
  //         userInfo.error = err.message
  //         setUser(userInfo)
  //         // setUserLogged(userInfo)
  //         console.log(err, err.code, err.message);
  //       })
  //   }
  //   e.preventDefault();
  // }

  const signUp = (e) => {
    if (newUser && user.email && user.password) {
      if (user.password === user.confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          let userInfo = { ...user}
          userInfo.success = true;
          updateProfileName(user.name)
          setUser(userInfo)
          setUserLogged(userInfo)
          history.replace(from);
          console.log(res);
        })
        .catch((err) => {
          let userInfo = { ...user}
          userInfo.error = err.message;
          userInfo.success = false;
          setUser(userInfo)
          setUserLogged(userInfo)
          console.log(err, err.code, err.message);
        })
      }else{
        let userInfo = { ...user}
        userInfo.error = "Passwords don't match "
        setUser(userInfo)
      }
    }  
      e.preventDefault()
  }


  const signIn = (e) =>{
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          let userInfo = { ...user, name: res.user.displayName}
          console.log(userInfo);
          userInfo.success = true;
          setUser(userInfo)
          setUserLogged(userInfo)
          history.replace(from);
          console.log(res, res.user);
        })
        .catch((err) => {
          let userInfo = { ...user};
          userInfo.error = err.message
          userInfo.success = false;
          setUser(userInfo)
          setUserLogged(userInfo)
          console.log(err, err.code, err.message);
        })
    }
    e.preventDefault()
  }

  //=============================== update user profile name ================================
  const updateProfileName = (name) => {
       const user = firebase.auth().currentUser;
       user.updateProfile({
       displayName: name
       })
       .then(function () {
        console.log('created successfully', name);
       })
       .catch(function (err) {
         console.log(err);
       });
  };


  return (
    <div className="container-fluid">
      <Header></Header>
      <div className="full-form ">
        {/* <h1>Name {user.name} </h1>
        <button onClick={signOutHandler}>sign out</button> */}
        <div class="center w-50 border mt-5 m-auto" style={{ marginTop: '' }} >
          <h1>Login</h1>
          <form onSubmit={newUser? signUp : signIn}>
            {newUser && 
            <div class="txt_field">
              <input type="text" name="name" onBlur={handleBlur} required />
              <span></span>
              <label>Username</label>
            </div> }
            <div class="txt_field">
              <input type="email" name="email" onBlur={handleBlur} required />
              <span></span>
              <label>Email</label>
            </div>
            <div class="txt_field">
              <input type="password" name="password" onBlur={handleBlur} required />
              <span></span>
              <label>Password</label>
            </div>
            {newUser &&
            <div class="txt_field">
              <input type="password" name="confirmPassword" onBlur={handleBlur} required />
              <span></span>
              <label> Confirm Password</label>
            </div>}
                {newUser ? <div></div>
                 : <div class="pass">Forgot Password?</div>
                 }
                 <p style={{color:'red', textAlign:'center'}}>
                   {user.error}
                 </p>
            <input type="submit" className="btn-danger" value={newUser ? "Sign up":"Login"} />
            <div class="signup_link">
               {newUser ? 'have an account': 'Not a member? '} <span onClick={() => setNewUser(!newUser)}> {newUser ? 'Sign in': 'Sign up'} </span>
            </div>
            <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div className="border-bottom w-100 ml-5"></div>
                                <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                <div className="border-bottom w-100 mr-5"></div>
                            </div>
                            <button className="btn btn-lg btn-google btn-block text-uppercase" onClick={googleHandlerBtn} >  Sign in with Google</button>
                            <button className="btn btn-lg  btn-facebook btn-block text-uppercase" type="submit" onClick={fbBtnHandler}>  Sign in with Facebook</button>
          </form>
          {/* <div className="or-line"></div>
          <p className="or-style">or</p>
          <div className="or-line" ></div>
          <button className="fb-account" onClick={fbBtnHandler} > <FacebookIcon color="primary" className="fb-icon" fontSize="large" ></FacebookIcon> sign in with Facebook</button>
          <button className=" google-account" onClick={googleHandlerBtn}> <FcGoogle className="fb-icon" fontSize="large" ></FcGoogle> sign in with Google</button> */}
        </div>

      </div>
    </div>
  );
      }
export default LoginForm;
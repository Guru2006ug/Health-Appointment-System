import React, { Component } from 'react';
import './App.css'
class App extends Component{
  showsignin(){
    let popup=document.getElementById("popup");
    popup.style.display="block";
    let popheader=document.getElementById("popupheader");
    popheader.innerHTML="LOGIN";
    let SIn=document.getElementById("signin");
    let Sup=document.getElementById("signup");
    SIn.style.display="block";
    Sup.style.display="none";
    popup.classList.add("animated-popup");
}
showsignup(){
  let popup=document.getElementById("popup");
  popup.style.display="block";
  let popheader=document.getElementById("popupheader");
  popheader.innerHTML="Create New Account";
  let SIn=document.getElementById("signin");
  let Sup=document.getElementById("signup");
  SIn.style.display="none";
  Sup.style.display="block";
  let fullname=document.getElementById("fullname");
  let email=document.getElementById("email");
  let role=document.getElementById("role");
  let signuppassword=document.getElementById("spassword");
  let confirmpassword=document.getElementById("cpassword");
  fullname.value="";
  email.value="";
  role.value="";
  signuppassword.value="";
  confirmpassword.value="";
  popup.classList.add("animated-popup");
}
closeSignin(event){
  if(event.target.id==="popup"){
  let popup=document.getElementById("popup");
  popup.style.display="none";
  }  
}

scrollToAbout = () => {
  const aboutSection = document.getElementById("AboutSection");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

scrollToServices = () => {
  const ServiceSection = document.getElementById("actions-section");
  if (ServiceSection) {
    ServiceSection.scrollIntoView({ behavior: "smooth" });
  }
};
render(){
  return(
    <div id="Container">
                 <div id='popup'onClick={this.closeSignin} >
                    <div id='popupwindow' >
                        <div id='popupheader'><label>LOGIN</label></div>
                        <div id='signin'>
                            <label className='usernamelabel'>Username:</label>
                            <input type='text' id='username' />
                            <label className='passwordlabel'>Password:</label>
                            <input type='password' id='password' />
                            <div className='forgetpassword'>Forget<label onClick={this.forgetPassword}>Password?</label></div>
                            <button className='signinbutton'>SIGN IN</button>
                            <div className='div1' id='responseDiv1'></div>
                            <div className='div2'>
                                Don't Have An Account
                                <label onClick={this.showsignup}> SignUp Now</label>
                            </div>
                        </div>

                        <div id='signup'>
                            <label>FullName:</label>
                            <input type='text' id='fullname'/>
                            <label>Email:</label>
                            <input type='text' id='email'/>
                            <label>Select Role:</label>
                            <select id='role'>
                                <option value=''></option>
                                <option value='1'>Admin</option>
                                <option value='2'>Doctor</option>
                                <option value='3'>Patient</option>
                            </select>
                            <label>Password:</label>
                            <input type='password' id='spassword'/>
                            <label>Confirm Password:</label>
                            <input type='password' id='cpassword'/>
                            <button onClick={this.userRegistration}>Register</button>
                            <div>Already Have an Account? <span onClick={this.showsignin}>SignIn</span></div>

                        </div>
                    </div>
                </div>
      <div id="Header">
        <img className='logo' src='logo.png' alt=' ' />
        <div className='logotext'>Health Care Appointment System</div>
        <label className='signintext' onClick={this.showsignin}>SignIn</label>
        <label className='Registertext' onClick={this.showsignup}>Register</label>
        <label className='Servicestext' onClick={this.scrollToServices}>Services</label>
        <label className='Abouttext' onClick={this.scrollToAbout}>About</label>
        <label className='Hometext'>Home</label>
        <div className='searchbar'>
        <input type='text' className='searchdoctext' placeholder='search Doctors' />
        <img className='searchicon' src='searchicon.png'alt=' ' />
        </div>
        <img className='bellicon' src='bell.png'alt=' ' />
      </div>

      <div id="Content">

      <img className="home" src="home3.jpg" alt="Home Page" />
      <div className='text1'>"Quality care at your fingertips - Easy, fast, reliable!"</div>
      </div>
       
      <div id="AboutSection">
  <img className="about-img" src="about.jpg" alt="About Us" />
  <div className="about-text">
    <h2 className="animated-text">Why Choose Our Healthcare System?</h2>
    <p>
      We are committed to providing seamless and reliable healthcare services 
      through advanced appointment scheduling and medical record management.
    </p>

    <div className="info-grid">
      <div className="info-box">
        <img src="hospital-building.png" alt="Hospital Icon" />
        <div>
          <span>73+</span>
          <p>Largest healthcare network of hospitals</p>
        </div>
      </div>
      
      <div className="info-box">
        <img src="clinic.png" alt="Clinic Icon" />
        <div>
          <span>700+</span>
          <p>Largest private network of clinics</p>
        </div>
      </div>

      <div className="info-box">
        <img src="medical-checkup.png" alt="Diagnostics Icon" />
        <div>
          <span>2,300+</span>
          <p>Diagnostic centers across the country</p>
        </div>
      </div>

      <div className="info-box">
        <img src="pharmacy.png" alt="Pharmacy Icon" />
        <div>
          <span>6,000+</span>
          <p>Pharmacies available nationwide</p>
        </div>
      </div>

      <div className="info-box">
        <img src="location.png" alt="Location Icon" />
        <div>
          <span>10,000+</span>
          <p>Pin codes covered for healthcare access</p>
        </div>
      </div>

      <div className="info-box">
        <img src="doctor.png" alt="Doctor Icon" />
        <div>
          <span>11,000+</span>
          <p>Registered doctors available</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="actions-section">
  <h2>What Would You Like To Do Today?</h2>
  <div class="actions-grid">
    <div class="action-box">
      <img src="medical-appiontment.png" alt="Book Appointment"/>
      <p>Book Appointment</p>
    </div>
    <div class="action-box">
      <img src="online-consult.png" alt="Consult Online"/>
      <p>Consult Online</p>
    </div>
    <div class="action-box">
      <img src="report.png" alt="Book Health Checkup"/>
      <p>Book Health Checkup</p>
    </div>
    <div class="action-box">
      <img src="medical-prescription.png" alt="View Health Record"/>
      <p>View Health Record</p>
    </div>
  </div>
</div>


      

      

      <div id="Footer">
      <div class="footer-container">
      <p class="footer-text">© Copyright 2025. All Rights Reserved.</p>
    
        <div class="footer-social">
      <a href="https://www.facebook.com" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
      <a href="https://twitter.com" target="_blank" class="social-icon"><i class="fab fa-x-twitter"></i></a>
      <a href="https://www.youtube.com" target="_blank" class="social-icon"><i class="fab fa-youtube"></i></a>
      <a href="https://www.linkedin.com" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        </div>
       </div>
      </div>

    </div>
  );
 }
}
export default App

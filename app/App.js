import React from 'react'
import './App.css';
import './App.scss';
import { QuoteNav } from './QuoteNav';
import HOUSEWIFE from "./house_wife.jpg";

const Icons = {

  Home: _ => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512.000000 512.000000">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M2360 5084 c-73 -34 -102 -62 -1158 -1117 -596 -595 -1098 -1105 -1117 -1133 -76 -113 -98 -285 -55 -415 65 -193 219 -307 440 -325 l79 -7 3 -816 c3 -801 4 -817 24 -871 73 -192 187 -307 363 -367 65 -22 75 -22 551 -23 467 0 486 1 518 20 18 11 41 34 52 52 19 32 20 52 20 668 0 433 4 648 11 675 17 60 64 121 117 152 l47 28 316 0 316 0 49 -30 c55 -34 107 -111 118 -172 3 -21 6 -318 6 -661 0 -675 -2 -649 55 -702 l27 -25 481 -3 c322 -2 499 1 534 8 138 29 298 151 361 275 70 140 66 83 70 981 l3 812 82 7 c198 17 333 105 413 270 34 68 34 71 34 205 0 135 0 136 -36 210 -34 73 -61 101 -1132 1172 -1071 1071 -1099 1098 -1172 1132 -74 36 -75 36 -210 36 -135 0 -136 0 -210 -36z m277 -274 c36 -14 2148 -2124 2168 -2166 35 -74 9 -168 -58 -212 -39 -26 -48 -27 -207 -32 -180 -5 -201 -11 -237 -67 -17 -25 -18 -89 -23 -928 -5 -823 -6 -903 -22 -936 -27 -57 -66 -98 -122 -127 l-51 -27 -357 -3 -357 -4 -3 579 c-3 566 -4 579 -26 643 -59 173 -174 295 -342 359 -64 25 -70 25 -402 29 -283 3 -347 1 -400 -12 -207 -53 -370 -220 -414 -425 -11 -52 -14 -183 -14 -619 l0 -554 -357 4 -358 3 -55 30 c-67 37 -115 98 -129 165 -7 35 -11 329 -11 918 0 842 -1 868 -20 899 -37 61 -57 67 -240 73 -159 5 -168 6 -207 32 -67 44 -93 138 -58 212 19 39 2131 2152 2165 2165 34 13 102 13 137 1z" />
        </g>
      </svg>
    )
  },
  Explore: _ => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M2235 5105 c-455 -60 -855 -224 -1235 -509 -124 -93 -386 -355 -479 -479 -261 -350 -430 -743 -496 -1157 -26 -160 -32 -539 -11 -710 97 -799 562 -1502 1266 -1913 256 -149 549 -254 864 -309 174 -30 543 -37 727 -13 1188 149 2110 1084 2239 2272 16 145 8 533 -14 667 -184 1134 -1088 2011 -2216 2151 -152 18 -501 18 -645 0z m655 -310 c902 -138 1638 -805 1859 -1685 51 -201 65 -322 65 -550 0 -226 -14 -350 -63 -544 -225 -888 -962 -1557 -1864 -1690 -661 -99 -1345 111 -1843 565 -390 355 -639 821 -721 1351 -24 156 -24 480 0 636 94 607 407 1130 892 1492 340 254 736 404 1175 444 90 8 397 -4 500 -19z" />
          <path d="M2945 3534 c-468 -251 -862 -468 -876 -483 -15 -14 -232 -408 -483 -876 -410 -763 -456 -854 -456 -895 0 -85 65 -150 150 -150 41 0 133 47 895 456 468 250 862 468 877 482 14 15 232 409 482 877 409 762 456 854 456 895 0 85 -65 150 -150 150 -41 0 -132 -47 -895 -456z m512 -81 c-2 -5 -127 -237 -277 -516 l-273 -509 -238 238 c-203 203 -236 240 -221 248 31 19 1007 545 1010 545 2 1 1 -2 -1 -6z m-775 -1244 c-4 -3 -232 -126 -507 -274 -275 -147 -504 -270 -509 -273 -5 -3 1 14 15 39 14 24 139 257 279 517 l254 473 238 -238 c131 -130 234 -240 230 -244z" />
        </g>
      </svg>
    )
  },
  Support: _ => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
          <path d="M2300 5100 c-663 -112 -1205 -569 -1418 -1195 -75 -219 -102 -411 -102 -722 l0 -173 -55 0 c-224 0 -413 -144 -492 -377 -14 -41 -17 -117 -20 -528 -4 -424 -2 -488 12 -550 46 -192 185 -331 382 -380 50 -13 113 -15 337 -13 261 3 276 4 303 24 54 41 54 30 51 908 -3 747 -4 814 -20 843 -33 60 -61 73 -156 73 l-85 0 6 223 c3 122 13 266 22 319 109 675 642 1199 1317 1293 789 110 1535 -407 1716 -1190 29 -126 42 -268 42 -470 l0 -173 -89 -4 c-71 -2 -93 -7 -111 -23 -51 -46 -50 -27 -50 -911 0 -563 3 -830 11 -846 21 -46 58 -63 151 -68 l88 -5 -69 -75 c-121 -133 -299 -242 -471 -289 -72 -20 -248 -43 -261 -35 -4 2 -10 19 -13 38 -14 75 -87 199 -160 272 -126 125 -268 184 -446 184 -182 0 -316 -55 -445 -185 -92 -92 -136 -167 -165 -281 -56 -218 3 -437 160 -595 88 -89 172 -139 285 -170 109 -30 278 -24 377 13 96 36 173 84 240 150 82 82 129 164 158 276 l11 42 62 0 c85 0 219 25 328 60 265 87 491 260 662 507 67 97 82 113 105 113 44 0 156 34 204 63 63 37 128 106 160 169 46 91 50 146 46 649 l-4 464 -28 80 c-51 147 -129 259 -227 324 -62 42 -169 81 -219 81 l-28 0 -5 268 c-4 164 -11 296 -20 342 -70 373 -228 684 -482 949 -279 291 -636 475 -1043 536 -140 21 -415 19 -552 -5z m-1270 -3016 l0 -666 -182 4 c-204 5 -228 11 -296 73 -77 69 -77 70 -77 585 l0 455 24 53 c30 67 108 139 159 148 20 3 42 7 47 9 6 2 81 4 168 4 l157 1 0 -666z m3446 644 c45 -24 103 -93 130 -154 40 -92 45 -164 42 -600 -3 -453 -2 -447 -70 -497 -54 -40 -96 -49 -265 -54 l-163 -6 0 668 0 667 148 -4 c111 -3 154 -8 178 -20z m-1645 -1754 c238 -75 332 -373 181 -572 -59 -77 -189 -142 -287 -142 -106 0 -233 67 -300 158 -106 145 -94 328 31 462 96 103 235 138 375 94z" />
        </g>
      </svg>
    )
  },
  Verified: _ => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height={13} width={13} viewBox="0 0 512.000000 512.000000" >
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#38b348" stroke="none">
          <path d="M2265 5109 c-487 -60 -917 -239 -1310 -547 -104 -82 -350 -334 -431 -442 -286 -382 -453 -790 -509 -1240 -20 -163 -20 -477 0 -640 98 -792 564 -1493 1265 -1903 256 -149 549 -254 864 -309 174 -30 543 -37 727 -13 1188 149 2110 1084 2239 2272 16 145 8 533 -14 667 -184 1134 -1088 2011 -2216 2151 -135 16 -493 19 -615 4z m1557 -1685 c82 -57 113 -177 69 -262 -30 -56 -1447 -1468 -1493 -1487 -48 -19 -108 -19 -156 0 -51 22 -777 744 -803 800 -52 111 11 248 130 284 47 14 65 14 116 0 33 -9 89 -60 338 -307 l297 -297 638 637 c395 396 650 643 672 653 55 24 141 15 192 -21z" />
        </g>
      </svg>
    )
  },
  PhoneCall: _ => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height={10} width={10} viewBox="0 0 512.000000 512.000000" >
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f79634" stroke="none">
          <path d="M275 5102 c-125 -43 -231 -157 -265 -285 -17 -62 -8 -446 15 -637 65 -550 206 -1035 444 -1525 239 -493 518 -883 910 -1276 393 -392 783 -671 1276 -910 490 -238 975 -379 1525 -444 191 -23 575 -32 637 -15 96 25 187 93 242 179 61 94 61 93 61 692 0 483 -2 551 -17 595 -32 95 -87 166 -168 219 -80 51 -133 64 -289 71 -274 10 -498 46 -746 117 -169 48 -275 55 -369 24 -69 -23 -66 -21 -419 -289 l-299 -226 -124 72 c-554 321 -906 673 -1225 1225 l-72 124 226 300 c125 165 237 314 250 331 34 46 62 148 62 226 0 48 -11 107 -41 211 -75 266 -103 441 -119 734 -9 177 -18 223 -55 295 -24 47 -102 127 -151 156 -91 53 -96 54 -689 53 -492 0 -555 -2 -600 -17z" />
        </g>
      </svg>
    )
  }
}


export class Backend extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      msg : '',
      signupMSG : '',
      loginMSG : '',
      LoginUser : {},
      leadMSG : '',
      leadDetails : {}
    }
    this.Fetch = this.Fetch.bind(this)
    this.Signup = this.Signup.bind(this)
    this.Login = this.Login.bind(this)
    this.SignupAction = this.SignupAction.bind(this)
    this.LoginAction = this.LoginAction.bind(this)
    this.Profile = this.Profile.bind(this)
    this.AddLead = this.AddLead.bind(this)
    this.AddLeadAction = this.AddLeadAction.bind(this)
    this.GetLeadsData = this.GetLeadsData.bind(this)
    this.ViewLeads = this.ViewLeads.bind(this)
    
  }

Fetch(page='',data,cb=_=>{},method="POST"){
  fetch(`http://localhost:3001/${page}/`, {
    method: method,
    ...(data ? {headers: {'Content-type': 'application/json'} , body: JSON.stringify(data) } : { })
}).then(d=>d.json()).then(e=>cb(null,e)).catch(e=>cb(e,null));
  
}


SignupAction(e){
  e.preventDefault()
  let el = e.target.elements
  this.Fetch('signup',{name : el.name.value , email : el.email.value , password : el.password.value , phNumber : el.phNumber.value},
  (e,r)=>{
    if(e)this.setState({signupMSG:e});
    else if(r){
      if(!r.ok)this.setState({signupMSG:r?.msg});
      else {this.setState({signupMSG:'',LoginUser:r.msg , msg : 'Signup successfully'}); console.log("signup data  = ",r)}
    }
  })
  
}

LoginAction(e){
  e.preventDefault()
  let el = e.target.elements 
  this.Fetch('login',{ email : el.email.value , password : el.password.value },
  (e,r)=>{
    if(e)this.setState({loginMSG:e});
    else if(r){
      if(!r.ok)this.setState({loginMSG:r?.msg});
      else {this.setState({loginMSG:'',LoginUser:r.msg , msg : 'Login successfully'}); console.log("login data = ",r)}
    }
  })
}

AddLeadAction(e){
  e.preventDefault()
  let el = e.target.elements 
  this.Fetch('add-lead',{ name : el.name.value , phNumber : el.phNumber.value , address : el.address.value , referrer_email : this.state.LoginUser.email},
  (e,r)=>{
    if(e)this.setState({loginMSG:e});
    else if(r){
      if(!r.ok)this.setState({leadMSG:r?.msg});
      else {this.setState({loginMSG:'',leadDetails:r.msg , msg : 'Lead Added Successfully'}); console.log("d = ",r)}
    }
  })
}

GetLeadsData(){
 if(!this.state.leadDetails?.ok){
  this.Fetch("get-leads/"+this.state?.LoginUser?.email,null,(e,r)=>{
    if(e) this.setState({leadMSG:'Something went wrong try again later'});
    else if(r){
      if(!r.ok)this.setState({leadMSG:r?.msg});
      else {this.setState({leadDetails:r ,leadMSG:''});}
      console.log("request_leads = ",r)
    }
  },'GET')
}
}

ViewLeads(){
  this.GetLeadsData();
    return(
      this.state.LoginUser.email ?
    <>
        <div className="viewLeads">
    <h3>Total Leads <div style={{float:'right',marginRight:10}}>{this.state?.leadDetails?.msg?.totalRewards && <span>${this.state?.leadDetails?.msg?.totalRewards.toFixed(2)}</span>}</div></h3>
          <div className="GlobalScrollBar">
            <table style={{fontSize:12}}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone No.</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Earn</th>
                </tr>
              </thead>
              <tbody>
                {
                  (this.state?.leadDetails?.msg?.leads || []).map((e,i)=>{
                    let nd = new Date(Number(e.date_time))
                    return(
                      <tr key={i+Math.random()}>
                          <td>{e.id}</td>
                          <td style={{textTransform:'capitalize'}}>{e.name}</td>
                          <td>{e.phnumber}</td>
                          <td>{e.address}</td>
                          <td style={{textTransform:'capitalize'}}>{e.status}</td>
                          <td>{nd.getDate() + "/"+nd.getMonth()+"/"+nd.getFullYear()}</td>
                          <td>{Number(e.referrer_reward)?.toFixed(2)}</td>
                      </tr>
                    )
                  })
                }
              </tbody>  
            </table>
            </div>
        </div>
    </>
   :<div>Singup/Login First</div>
    )
}

Signup(){
    return(
      <>
          <form className="signup-form" style={{textAlign:'center'}} onSubmit={this.SignupAction}>
              <h4 style={{textAlign :'center'}}>Sign Up</h4>

              <div className="form-group">
                  <input type="text" placeholder="Name" name="name" required/>
                  <span></span>
              </div>

              <div className="form-group">
                  <input type="email" placeholder="Email" name="email" required/>
                  <span></span>
              </div>

              <div className="form-group">
                  <input type="number" placeholder="Phone Number" name="phNumber" min={0} required />
                  <span></span>
              </div>

              <div className="form-group">
                  <input type="password" placeholder="Password" name="password" required />
                  <span></span>
              </div>
              <div style={{margin : 15}}>
                {this.state.signupMSG}
                <p>{this.state.msg}</p>
              </div>
              <input type="submit" value="Submit"  />
          </form>
      </>
    )
}

Login(){
  return(
    <>
      <form className="login-form" style={{textAlign:'center'}} onSubmit={this.LoginAction}>
        <h4 style={{textAlign :'center'}}>Login</h4>

          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required/>
            <span></span>
          </div>
          
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" required/>
            <span></span>
          </div>
          <div style={{margin : 15}}>
            {this.state.loginMSG}
            <p>{this.state.msg}</p>
            </div>

          <input type="submit" value="Submit"  />

      </form>
    </>
  )
}

AddLead(){
  return(
    this.state.LoginUser.email ?

    <>
      <div className="add-lead" style={{textAlign:'center'}}>
          <form className="add-lead-form" style={{textAlign:'center'}} onSubmit={this.AddLeadAction}>
              <h4>Add Lead</h4>
              <div className="form-group">
                  <input type="text" name="name" placeholder="Name" required/>
                  <span></span>
              </div>
              <div className="form-group">
                  <input type="number" name="phNumber" placeholder="Phone Number" min={0} required/>
                  <span></span>
              </div>
              <div className="form-group">
                  <textarea name="address" placeholder="Address" required/>
              </div>
              <div style={{margin : 15}}>
                {this.state.leadMSG}
               <p>{this.state.msg}</p>
              </div>
              
              <input type="submit" value="Submit"  />
          </form>
      </div>
    </>
   :<div>Singup/Login First</div>

  )
}

Profile(){
  return(
    this.state.LoginUser.email ?
    <>
      <div className="user-profile">
          <h4 style={{textAlign:'center'}}>Profile</h4>
          <div>Name<p>{this.state.LoginUser.name}</p></div>
          <div>Email<p>{this.state.LoginUser.email}</p></div>
          <div>Phone Number<p>{this.state.LoginUser.phnumber}</p></div>
          <div>Password<p>*****</p></div>
      </div>
    </>
   : <div>Singup/Login First</div>

  )
}

  render(){
    if(this.state.msg){
      setTimeout(_=>this.setState({msg :''}),4000)
    }
 
    return(
      <>
      { this.props.show==='signup' && <this.Signup />}
      { this.props.show==='login' && <this.Login />}
      { this.props.show==='profile' && <this.Profile />}
      { this.props.show==='addlead' && <this.AddLead />}
      { this.props.show==='viewleads' && <><this.ViewLeads /></>}
      
      </>
    )
  }
}



export class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      field: 'SUBSCRIPTIONS',
      Footerfield: 0,
      menuStatus : '',
      isBackend : false,
      backendPage : ''
    }

    this.timerDiv = React.createRef();
    this.menuDiv = React.createRef();

    this.MobScreen = this.MobScreen.bind(this)
    this.timer = this.timer.bind(this)
    this.BannerHeader = this.BannerHeader.bind(this)
    this.BannerNav = this.BannerNav.bind(this)
    this.SubscriptionDetails = this.SubscriptionDetails.bind(this)
    this.Main = this.Main.bind(this)
    this.LeftNav = this.LeftNav.bind(this)
    this.MenuStatus = this.MenuStatus.bind(this)
    this.Backend = this.Backend.bind(this)
    
  }

  UNSAFE_componentWillMount() {
    this.timer()
    setInterval(this.timer, 1000)
  }

  timer() {
    let d = new Date(), t = d.getHours(), m = d.getMinutes()
    t = t < 10 ? '0' + t : t
    m = m < 10 ? '0' + m : m
    if (this.timerDiv.current) {
      this.timerDiv.current.innerText = t + ' : ' + m
    }
  }

  MobScreen({ render }) {
    return (
      <>
        <div className="MobScreen" >
          <div className="left-button-1"></div>
          <div className="left-button-2"></div>
          <div className="left-button-3"></div>
          <div className="right-button-1"></div>
          <div className="top-camera-section">
            <div className="sensor"></div>
            <div className="speaker"></div>
            <div className="camera"></div>
          </div>
          <div className="Mob-body">
            <div className="top-section">
              <div className="time" ref={this.timerDiv}></div>
              <div className="network">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" viewBox="0 0 16 16">
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                </svg>
              </div>
              <div className="wi-fi">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" viewBox="0 0 16 16">
                  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                </svg>
              </div>
              <div className="battery">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" viewBox="0 0 16 16">
                  <path d="M2 6h10v4H2V6z" />
                  <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                </svg>
              </div>
            </div>
            <div className="Mob-content">
              {render}
            </div>
          </div>
        </div>
      </>
    )
  }

  BannerHeader() {
    return (
      <>
        <div className="banner-logo" onClick={_=>{this.setState({menuStatus : 'open' })}}>
          <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fillRule="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className="banner-name">ChefKart</div>
        <div className="banner-searchIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </>
    )
  }

  BannerNav() {
    return (
      <>
        <div style={{ width: '100%', position: 'absolute', left: 0, paddingTop: 35.8 }}>
          <QuoteNav onClick={(i, e) => this.setState({ field: e.target.dataset.field?.replace(/ /g, '') })} activeClassName="nav-top-section-active" >
            <div active={this.state.field === 'ATTENDANCE'} data-field="ATTENDANCE">ATTENDANCE</div>
            <div active={this.state.field === 'SUBSCRIPTIONS'} data-field="SUBSCRIPTIONS">SUBSCRIPTIONS</div>
          </QuoteNav>
        </div>
      </>
    )
  }

  SubscriptionDetails() {
    return (
      <>
        <div className="subscription-details" style={{ marginTop: 20, marginLeft: 13 }}>
          <p style={{ fontWeight: 700, fontSize: 11 }}>Subscription details</p>
          <div className="row" style={{ marginLeft: 1, marginTop: -8 }}>
            <div className="col">
              <p style={{ fontSize: 8 }}>Start</p>
              <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: -5 }}>12 Apr 2021</p>
            </div>
            <div className="col">
              <p style={{ fontSize: 8 }}>Expire</p>
              <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: -5 }}>12 May 2021</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  Main({render}) { 
    return (
      <>
        <div className="Main-container">
          <header>
            <div className="banner-list">
              <this.BannerHeader />
              <this.BannerNav />
            </div>
          </header>
        {
          render ? render
            :
          <section>
            <div style={{display : this.state.field==='SUBSCRIPTIONS' && this.state.Footerfield===0 ? 'block' : 'none'}} className="subsriptions-home">
              <h4 style={{ marginLeft: 15 }}>My Subsriptions</h4>
              <div className="card">
                <div style={{ paddingBottom: 30 }}>
                  <div className="premium">Premium</div>
                </div>
                <div className="row" style={{ marginLeft: 10 }}>
                  <div className="col" style={{ maxWidth: 80 }}>
                    <img src={HOUSEWIFE} alt="HOUSEWIFE" width={40} height={40} style={{ padding: 1, borderRadius: '100%', background: '#f79939' }} />
                  </div>
                  <div className="col" style={{ minWidth: 130, marginLeft: 13 }}>
                    <div>
                      <b style={{ fontSize: 14 }}>Nazma Biwi</b> <span style={{ marginLeft: 5 }}><Icons.Verified /></span>
                    </div>
                    <div style={{ display: 'flex', marginTop: 5, fontSize: 10, fontWeight: 'bold', color: '#989898' }}>
                      <div style={{ width: 15, height: 15, borderRadius: '100%', background: 'whitesmoke' }}>
                        <div ><Icons.PhoneCall /></div>
                      </div> <span style={{ marginLeft: 8 }}>7836097431</span>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
                <this.SubscriptionDetails />

                <div className="buttons" style={{ marginTop: 15 }}>
                  <button type="button" value="cancelPlan">Cancel Plan</button>
                  <button type="button" value="renewPlan">Renew Plan</button>
                </div>
              </div>

              <div style={{
                float: 'right',
                marginRight: 20,
                marginTop: 25,
                color: '#f79939',
                fontSize: 30,
                fontWeight: 'bold'
              }}>+</div>
            </div>
            <div style={{display : this.state.field==='ATTENDANCE' && this.state.Footerfield===0 ? 'block' : 'none' ,color:'#ccc',marginTop:30,marginLeft:70}}>ATTENDANCE</div>
            <div style={{display : this.state.Footerfield===1 ? 'block' : 'none' ,color:'#ccc',marginTop:30,marginLeft:100}}>Explore</div>
            <div style={{display : this.state.Footerfield===2 ? 'block' : 'none' ,color:'#ccc',marginTop:30,marginLeft:100}}>Support</div>       
          </section>
        
          }
          <footer>
            <div style={{ width: '100%' }} className="MobBodyFooterNav">
              <QuoteNav onClick={(i, e) => this.setState({ Footerfield: i })} activeClassName="footer-nav-active" >
                <div active={this.state.Footerfield === 0} data-field="HOME">
                  <Icons.Home />
                  <br />Home
                  </div>
                <div active={this.state.Footerfield === 1} data-field="EXPLORE">
                  <Icons.Explore />
                  <br />Explore
                    </div>
                <div active={this.state.Footerfield === 2} data-field="SUPPORT">
                  <Icons.Support />
                  <br />Support
                  </div>
              </QuoteNav>
            </div>
          </footer>
        </div>
        <this.LeftNav />

      </>
    )
  }

  MenuStatus(){
    let d = this.menuDiv
    if(d.current){
      let m = d.current.children[0]
      if(this.state.menuStatus==='open'){
          d.current.style.display="block"// 
          m?.classList.remove("nav-menu-close")
          m?.classList.add("nav-menu-open")
        }else if(this.state.menuStatus==='close'){
          m?.classList.add("nav-menu-close")
          m?.classList.remove("nav-menu-open")
          setTimeout(_=>d.current.style.display="none",510) 

        }
    }
  }

 Backend(page) {
   if(page==='frontend'){
    this.setState({isBackend : false , backendPage : page , menuStatus : 'close'})
   }else this.setState({isBackend : true , backendPage : page , menuStatus : 'close'})
 }

  LeftNav(){
    return(
      <>
        <div className="LeftNav">
            <div className="nav-back" ref={this.menuDiv}>
              <div className="nav-front">
                 <div className="closebtn" onClick={_=>this.setState({menuStatus : 'close'})}>&times;</div>
                <div className="nav-content">
                    <p onClick={_=>this.Backend('signup')}>Signup</p>
                    <p onClick={_=>this.Backend('login')}>Login</p>
                    <p onClick={_=>this.Backend('profile')}>Profile</p>
                    <p onClick={_=>this.Backend('addlead')}>Add Lead</p>
                    <p onClick={_=>this.Backend('viewleads')}>View Leads</p>
                    <p onClick={_=>this.Backend('frontend')} style={{paddingTop : 50}}>Frontend</p>
                </div>
              </div>

            </div>
        </div>
      </>
    )
  }

  render() {
    setTimeout(_=>this.MenuStatus(),100)

    return (
      <>
        <this.MobScreen render={
          
             <this.Main render={
              this.state.isBackend && <>
                <Backend show={this.state.backendPage} />
              </>
            } />
        } />
        
        <span style={{cursor:'pointer',textDecoration:'underline',color:'red'}} onClick={_=>this.setState({menuStatus:'open'})}>Click here</span> to open backend task

      </>
    )
  }
}


export default App;

import React from "react";
import {Link,Route,HashRouter as Router,Switch } from "react-router-dom"
import Room from "./Room"
import Appbar from "./Appbar"
import LandingPage from "./LandingPage"
import "./style.css";
const TR={
  landingpage:{
    title:"Satış Ortağı Toplantısı",
    desc:"Canlı yayınımız 11:00'de başlayacaktır. Lütfen bilgilerinizi doldurarak giriş yapınız.",
    magaza:"* Satıcı Mağaza Adı",
    satici:"* Satıcı Kodu",
    email:"* Satıcı E-mail Adresi",
    kvk:"KVKK Sözleşmesi",
    kvkdesc:" * KVKK Sözleşmesini okudum, anladım.",
    btn:"CANLI YAYINA GİRİŞ"

  },
  room:{
    sor:"Soru Sor",
    gonder:"Gönder",
    srlr:"Sorular"

  }
};
const EN={
  landingpage:{
    title:"Selling Partner Meeting",
    desc:"Live broadcast will start at 11:00 AM.Please fill the information to join.",
    magaza:"* Seller Store Name",
    satici:"* Seller Code",
    email:"* Seller E-mail Address",
    kvk:"KVKK Agreement",
    kvkdesc:"* I confirm that I have read, understand KVKK Agreement",
    btn:"JOİN LIVE BROADCAST"

  },
  room:{
    sor:"ASK A QUESTION",
    gonder:"Send",
    srlr:"Questions"

  }
}
export default function App() {
const [state,setState]=React.useState({...TR})
const handleClickTR=()=>{
  setState({...TR})
}
const handleClickEN=()=>{
  setState({...EN})
}
console.log(state.landingpage)
  return (
    <>
      <Router>
      <Appbar handleClickEN={handleClickEN} handleClickTR={handleClickTR} />
        <Switch>
          <Route exact path="/" >
            <LandingPage changeLang={state.landingpage}/>
          </Route>
          <Route  path="/room" >
            <Room changeLang={state.room} />
          </Route>
        </Switch>
      </Router>
     
    </>
  );
}

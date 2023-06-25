import { useState } from "react";
import './App.css';
import Input from "./components/input/Input";
import Button from './components/button/Button';
import Form from "./components/form/Form";

function App() {
  const [user, setUser] = useState({ name: "", password: ""});
const handleChange = (e) => {
if(e.target.type==="text"){ 
setUser({...user, name: e.target.value});
console.log(user)
}else if(e.target.type==="password")
{ 
  setUser({...user, password: e.target.value});
  console.log(user);
}
};
const handleClick=()=> {
  if(user.name==="")
  {
    alert("Kullanıcı Adı Boş Bırakılamaz");
  }
  else if(user.password==="")
  {
    alert("Şifre Boş Bırakılamaz");
  }
  else {
    alert("Kullanıcı Adı:" + user.name + " " + "Parolanız:" + user.password);
  }
};
  return (
    <div className="App">
     <h2>Giriş Formu</h2>
     <Form>
     <Input type={"text"} value={user.name} placeHolder={"Kullanıcı Adı"} onChange={handleChange}/>
     <Input type={"password"} value={user.password} placeHolder={"Şifre Giriniz"} onChange={handleChange}/>
     <Button onClick={handleClick} />
     </Form>
     
    </div>
  );
}

export default App;

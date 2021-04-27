import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get('/api/test')
      .then((response) => {
        console.log(response)
        setLists(response.data)
      })
  }, [])

  const [lists, setLists] = useState([])
  const [value, setValue] = useState("")

  const changeHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/api/value', null, {params:{value:value}})
      .then(response => {
        console.log(response)
        if(response.status == 200) {
          setLists([...lists, response.data])
          setValue("")
        } else {
          alert('값을 DB에 넣는데 실패했습니다.')
        }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="contatiner">
            {lists && lists.map((list, index) => (
              <li key={index}>{list.value}</li>
            ))}
          <br/>
          <form className="example" onSubmit={submitHandler}>
            <input type="text" placeholder="입력해주세요..." onChange={changeHandler} value={value}/>
            <button type="submit">확인</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;

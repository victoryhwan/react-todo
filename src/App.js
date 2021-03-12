/*eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, changeTitle] = useState(['국어','영어','수학'])
  let [modalTitle, changeModalTitle] = useState('과학')
  return (
    <div>
      {
        title.map((item)=>{
          return (
            <div>
              <div>zzz</div>
              <div>ggg</div>
              <div>{item}</div>
              <hr></hr>
            </div>
          )
        })
      }
      <button onClick={ ()=>{ changeModalTitle(title[0]) } }>버튼1</button>
      <button onClick={ ()=>{ changeModalTitle(title[1]) } }>버튼1</button>
      <button onClick={ ()=>{ changeModalTitle(title[2]) } }>버튼1</button>
      <Modal title={modalTitle}></Modal>
    </div>

    
  );
}

function Modal(props){
  return (
    <div>
      {console.log(JSON.stringify((props)))}
      <div className="dtdd">1112</div>
      <div>222</div>
      <div>{props.title}</div>
      <hr></hr>
    </div>
  )
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';

// import CommentDetail from './components/Comment/comment.component';
// import ApprovalCard from './components/Approve/approve.component';

const url = 'https://picsum.photos/200/300';

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log('res = ' + res);
        setData(res);
      })
  }, []);

  let img = <img src="#" alt="blabla"/>;

  console.log(data);

  return (
    <div className="ui container comments">
      {img}
    </div>
  ); 
}

export default App;

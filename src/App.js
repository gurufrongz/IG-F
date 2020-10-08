import React ,{useState, useEffect}from 'react';
import './App.css';
import Post from'./Post'
import { db } from 'firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Icon';
import { Input } from '@material-ui/core';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState ([]);
  const [open, setOpen] = useState ([false]);
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [email, setEmail] = useState ('');


  /*useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);*/
  

const signUp =(event) =>{

}

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
          <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
         />
         <Input 
         placeholder="username"
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         />
         <Input 
         placeholder="email"
         type="text"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />
         <Input
         placeholder="password"
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
          <Button onClick={signUp}>Sign Up</Button>
          </center>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
         />
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <h1> ว๊ากกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก ! ! ! ! ! ! ! </h1>
        
{
  posts.map(post =>(
    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
  ))
}

        <Post username="AdopTzPw" caption="ว้าวว ทำใหม่" imageUrl="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/78341754_2472165533043620_5142518958028488704_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeGGhMbZvZESbZPaEPr-j-Ijf5PMEGXX6kx_k8wQZdfqTAGgACvc4Z9Iw1M3TFkolOemO_YRme_k7kZpxrcOPNVH&_nc_ohc=TKy51lXPWtIAX9tfMxK&_nc_ht=scontent.fbkk22-2.fna&oh=a3b0302915480fdc85c6d7549767fea6&oe=5FA3243D"/>

        <Post username="JaruwanFF" caption="Preawawa500CC" imageUrl="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/119642112_2697473267172836_2049176385023145064_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeGanTy5q4YXCIR-Qq5A36RiwXGXp4Tlb7fBcZenhOVvt_NDQg036_fpZpq77rya1_GAVmiemx3prNUPTy-hb_Py&_nc_ohc=zzSu0dkA4-YAX-PEbTT&_nc_ht=scontent.fbkk22-1.fna&oh=59d7b2ce3c62295e58c1563d4f82e4f5&oe=5F9F9F25"/>

        <Post username="Siraphat" caption="Jaruwan<3" imageUrl="https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.0-9/84541658_2540957306164442_6319788340178583552_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeFuEZDVlKLsXJOMjJvI99bnXelV98JrUV5d6VX3wmtRXgXVZ3B615dVy_DAxxLA1ZJXf3g0KOmj4GVwt33X-7tI&_nc_ohc=Y_N6Ca63mIQAX9AUfrc&_nc_ht=scontent.fbkk22-4.fna&oh=50a544b358e4aee77240b2268d78c69f&oe=5FA26FA1"/>
      
    </div>
  );
}

export default App;

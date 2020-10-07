import React ,{useState, useEffect}from 'react';
import './App.css';
import Post from'./Post'
import { db } from 'firebase';

function App() {
  const [posts, setPosts] = useState ([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);
  
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
         />
      
      </div>
      <h1> Hello </h1>
        
{
  posts.map(post =>(
    <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
  ))
}

        <Post username="AdopTzPw" caption="ว้าวว ทำใหม่" imageUrl="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/107842421_2667973340129504_2250674154371402536_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGJPji405iMjnp4F_QeanVQcGcp-AGh_dtwZyn4AaH926HLM1Vnfnntvk8stWVovMD3h-YUlq-s83cM30LLNecW&_nc_ohc=xr9FYA4eqooAX-A7oFa&_nc_ht=scontent.fbkk22-2.fna&oh=e4e60cfdfee02379165550798a27c624&oe=5F7C5C57"/>

        <Post username="JaruwanFF" caption="Preawawa500CC" imageUrl="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/119642112_2697473267172836_2049176385023145064_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_eui2=AeGanTy5q4YXCIR-Qq5A36RiwXGXp4Tlb7fBcZenhOVvt_NDQg036_fpZpq77rya1_GAVmiemx3prNUPTy-hb_Py&_nc_ohc=zzSu0dkA4-YAX-PEbTT&_nc_ht=scontent.fbkk22-1.fna&oh=59d7b2ce3c62295e58c1563d4f82e4f5&oe=5F9F9F25"/>

        <Post username="Siraphat" caption="Jaruwan<3" imageUrl="https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.0-9/84541658_2540957306164442_6319788340178583552_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeFuEZDVlKLsXJOMjJvI99bnXelV98JrUV5d6VX3wmtRXgXVZ3B615dVy_DAxxLA1ZJXf3g0KOmj4GVwt33X-7tI&_nc_ohc=Y_N6Ca63mIQAX9AUfrc&_nc_ht=scontent.fbkk22-4.fna&oh=50a544b358e4aee77240b2268d78c69f&oe=5FA26FA1"/>
      
    </div>
  );
}

export default App;

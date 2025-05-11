import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import PostDetails from './Pages/PostDetails';
import Posts from './Pages/Posts';
import Profile from './Pages/Profile';



function App() {

  return (
    <>
       <div className="w-full">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/postDetails/:id' element={<PostDetails />} />
          <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>      
       </div>
    </>
  )
}

export default App;

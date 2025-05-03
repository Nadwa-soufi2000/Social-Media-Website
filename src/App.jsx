import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import PostDetails from './Pages/PostDetails';
import Posts from './Pages/Posts';



function App() {

  return (
    <>
       <div className="w-full">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/postDetails/:id' element={<PostDetails />} />
        </Routes>      
       </div>
    </>
  )
}

export default App;

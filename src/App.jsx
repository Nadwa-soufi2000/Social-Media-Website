import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import PostDetails from './Components/PostDetails';



function App() {

  return (
    <>
       <div className="w-full">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/postDetails/:id' element={<PostDetails />} />
        </Routes>      
       </div>
    </>
  )
}

export default App;

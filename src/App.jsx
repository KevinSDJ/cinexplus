import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/containers/home'
import Private from './components/middlewarecomponent/privateRoutes'
import { AuthProvider } from './context/auth'
import AuthPage from './pages/auth'
import { useEffect } from 'react'
import { fetchtrendingweek, fetchupcomming, fetchpopularity } from './store/actions/datamovieactions'
import { getScreenSize } from './store/slices/componentdata'
import { useDispatch } from 'react-redux'
import Main from './pages/main'
import 'swiper/css'
import MovieDetail from './pages/details'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchpopularity())
    dispatch(fetchtrendingweek())
    dispatch(fetchupcomming())
  }, [])
  const resize = (e) => {
    dispatch(getScreenSize(window.innerWidth))
  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.addEventListener('resize', resize, false)
    }
  }, [])

  return (

    <BrowserRouter>
       <AuthProvider>
       <Routes>
         <Route path='/auth' element={<AuthPage/>} />
         <Route path='/' element={<Private/>}>
            <Route path='/' element={<Home/>}>
              <Route path='/' element={<Main/>}/>
              <Route path='movie/:id' element={<MovieDetail/>}/>
            </Route>
         </Route>
       </Routes>
       </AuthProvider>
    </BrowserRouter>
  )
}

export default App

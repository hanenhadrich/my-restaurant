import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppNavbar from './components/AppNavbar'
import NotFound from './pages/NotFound'
import Container from 'react-bootstrap/Container'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Collaborators from './pages/Collaborators'
import CreateTask from './pages/CreateTask'
import TaskDetails from './pages/TaskDetails'
import UpdateTask from './pages/UpdateTask'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTasks } from './store/tasksSlice'


function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchTasks())
  // }, [])
  return (
    <BrowserRouter>
      <AppNavbar />
      <Container className='mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/collaborators' element={<Collaborators />} />
          <Route path='/tasks/:id' element={<TaskDetails />} />
          <Route path='/create-task' element={<CreateTask />} />
          <Route path='/update-task/:id' element={<UpdateTask />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
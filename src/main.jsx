//https://pogramming-study.s2436.workers.dev/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import "./reset.css";
import TodoListApp from './TodoListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>,
)

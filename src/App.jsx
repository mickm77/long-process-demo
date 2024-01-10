import { useState } from 'react'
import './App.css'

import Layout from './Layout'
import ProgressBar from './pages/ProgressBar'
import Spinner from './pages/Spinner'
import Data from './pages/Data'
import Data2 from './pages/Data2'
import Hello from './pages/Hello'



function App() {

  const [page, setPage] = useState("Hello")



  return <Layout setPage={setPage}>

        {page === "Spinner" && <Spinner />}
        {page === "ProgressBar" && <ProgressBar />}
        {page === "Data" && <Data />}
        {page === "Data2" && <Data2 />}
        {page === "Hello" && <Hello />}

</Layout>
}

export default App

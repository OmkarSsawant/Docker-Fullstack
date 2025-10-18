import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CurrentTime } from './Time'


const client =new QueryClient()

function App() {


  return (
    <>
      <QueryClientProvider client={client}>
        <h1>GO:</h1><CurrentTime api={"http://127.0.0.1:8080/time"}/><br/>
        <h1>NODE:</h1><CurrentTime api={"http://127.0.0.1:3000/time"}/>
      </QueryClientProvider>
    </>
  )
}

export default App

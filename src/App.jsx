import './App.css'
import { TenantDashboard } from './components/TenantDashboard'
import { LandlordDashboard } from './components/LandlordDashboard'
import { useState,useEffect } from 'react'

const mockData = [{ticket_id: 1, tenant_id: 1, subject: "My room", description: "There is a mouse in it", status: "Not Fixed"}]


function App() {
  const tenant = "Alex"
  const landLord = "Mohamed"
  const [tickets,setTickets] = useState([])
  const [isLoading,setIsLoading] = useState(true)

 
  
    const handleFixTickets = (id) => {

       setTickets(tickets.map(t => {
        if (t.ticket_id === id){
          const fixedTicket = {...t, status:"Fixed"}
          return fixedTicket
        }
        else {
          return t
        }
      }))
  
    }
    
    //Fecthing mockData: This method block the user from typing until data loads (The "Loading..." spinner)
    useEffect(() => {
        const timer = setTimeout(() => {
            setTickets([mockData[0]])
            setIsLoading(false)
        }, 3000)

        return () => {
        clearTimeout(timer)
       }
    },[]);
  
  return (
    <>
      <h1>RentEasy</h1>
      <TenantDashboard name = {tenant}
      tickets={tickets} 
      setTickets={setTickets}
      isLoading= {isLoading}/>

      <LandlordDashboard name= {landLord} 
      tickets={tickets} 
      fixTicket={handleFixTickets}
      isLoading={isLoading}/>
    </>
  ) 
}

export default App 

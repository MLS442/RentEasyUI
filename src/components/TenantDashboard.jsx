import { useState} from 'react'


export const TenantDashboard  = ({name,tickets,setTickets,isLoading}) => {

    
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    const handleAddTicket = () => { 
        if(subject === '' || description === ''){
           return alert("The fields should not be empty")
        }

        const newTicket = {ticket_id: crypto.randomUUID(), 
            tenant_id: Date.now(), 
            subject: subject, 
            description: description,
            status: "Not Fixed"
        }

        setTickets([...tickets, newTicket])
        setSubject('')
        setDescription('')
    }
    
    /*Fetching mockData: This method do not change the data in the state. It 
    prevents data loss if the user write while the mock data is being fetched.
    useEffect(() => {

        const timer = setTimeout(() => {
            setTickets(prev => [...prev, ...mockData])
        }, 7000)

       return () => {
        clearTimeout(timer)
       }
    },[]);*/

       /*this verify if the value of isLoading,
       if its true, it will always show the loading spinner*/
       
       if(isLoading){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }


    return (
        <>
           <h2>Hello {name} </h2>

           <h3>Report a problem</h3> <br />

           <div>
               <input 
               type="text"
               value= {subject}
               onChange={(e) => setSubject(e.target.value) }
               placeholder='subject'
               /> <br />

               

               <input 
               type="text"
               value= {description}
               onChange={(e) => setDescription(e.target.value) }
               placeholder='description'
               />
           </div> <br />

           <button onClick={handleAddTicket}>Report</button> <br />

           <ul>
               {tickets.map(t => (<li key= {t.ticket_id}>
                {t.ticket_id},
                {t.tenant_id},
                {t.subject},   
                {t.description},
                {t.status}
               </li>))}
           </ul>
        </>
    )
}
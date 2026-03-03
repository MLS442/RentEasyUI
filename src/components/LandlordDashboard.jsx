
export const LandlordDashboard = ({name,tickets, fixTicket,isLoading}) => {

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

           <ul>
               {tickets.map(t => (<li key= {t.ticketId}>
                {t.ticketId}, 
                {t.tenantId},
                {t.subject}, 
                {t.description},
                {t.status},   <button onClick={() => fixTicket(t.ticketId)}>Mark as fixed</button>
               </li>))}
           </ul> <br />

        </>
    )
}
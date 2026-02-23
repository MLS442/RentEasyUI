
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
               {tickets.map(t => (<li key= {t.ticket_id}>
                {t.ticket_id}, 
                {t.tenant_id}, 
                {t.subject}, 
                {t.description},
                {t.status},   <button onClick={() => fixTicket(t.ticket_id)}>Mark as fixed</button>

                <p>{t.status}</p>
               </li>))}
           </ul> <br />

        </>
    )
}
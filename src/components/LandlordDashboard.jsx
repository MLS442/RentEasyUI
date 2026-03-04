
export const LandlordDashboard = ({name,tickets, fixTicket,isLoading,tenants}) => {

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

           <div>
              <h2>Tenants List</h2>
           </div>

           <ul>
              {tenants.map(t => (<li key= {t.id}>
                {t.id},
                {t.fullName},
                {t.address},
                {t.email},
                {t.phone},
                {t.birthDate}
              </li>))}
           </ul>
        </>
    )
}
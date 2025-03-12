import Card from './Card';
function Tours({tours,removeTour}) {

    return(
        <div className='container'>   
            <div>
                 <h2 className='title'>Plan with Me</h2>
            </div>   
            <div className='cards'>
                {
                      tours.map((tour)=>{  //rather than code for every single card we hv to use "map function" nd make so many cards that we want
                        return < Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                      }) // ...tour} means copy the data or cloning
                }
            </div>  
        </div>
    )
    
}
export default Tours;
import { useEffect, useState } from 'react';
import * as St from './board.style'

export default function Board () {

  const [days , setDays] = useState([])

  useEffect(()=>{
     fetch(`${process.env.REACT_APP_API_URL}days`)
     .then(res => {
      return res.json()
    })
     .then(data => {
      setDays(data)
    });
  }
     ,[]);

  

    return (
      <St.MainContainer>
       
          <St.descBoard>

            {days.map(day =>

               <St.descCard key={day.id}>{day.day}</St.descCard>
               
               )}
        
          </St.descBoard>
       
      </St.MainContainer>
    );
}
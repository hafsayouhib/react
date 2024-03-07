import React from 'react';
import lists from'./Nav.module.css'
let Menu = [
    {
        name:'home',
        link:'/'
    },
    {
        name:'about',
        link:'/about'
    },{
        name:'contact',
        link:'/contact'

    }
]

let Menulist=()=>{
    return(

            Menu.map((item,i)=>{
              return(
                    <li key={i} className={lists.list1}>{item.name}</li>);
                

            })
    );
        
    
}
export default Menulist

    
  

        
 


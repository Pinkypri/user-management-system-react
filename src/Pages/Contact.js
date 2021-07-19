import  { useContext } from 'react'
import Navbar from '../Components/Navbar'
import {GlobalContext} from "../Context/GlobalState";

const Contact = () => {
const {users} = useContext(GlobalContext);
 
    return (
        <div>
          <Navbar/>
          
          {users.map((user,index)=>{
            return(
              <div key={index}>
                <br/>
                <h2>{user.name}</h2><br/>
                <p>{user.email}</p><br/>
                <p>{user.contact}</p><br/>
                <p>{user.address}</p><br/>
                </div>
            )
          })
          }
        </div>
    )
}

export default Contact


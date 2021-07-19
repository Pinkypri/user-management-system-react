
import  { useContext } from 'react'
import Navbar from '../Components/Navbar'
import {GlobalContext} from "../Context/GlobalState";

const User = () => {
const {users,deleteuser} = useContext(GlobalContext);
 
    return (
        <div>
          <Navbar/>
          
          {users.map((user,index)=>{
            return(
              <div key={index}>
                <br/>
                <h2>User Information</h2><br/>
                <p>{user.name}</p><br/>
                <p>{user.email}</p><br/>
                <p>{user.contact}</p><br/>
                <p>{user.address}</p><br/>
                <button onClick={()=>{deleteuser(index)}}>Delete</button>
                </div>
            )
          })
          }
        </div>
    )
}

export default User

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_USER":
        return{
           users: [...state.users,action.payload],
        };
        case "DELETE_USER":
            const tempuser=state.users.filter((user,index)=>{
                return index!==action.userId;
            })
            return{
                users:[...tempuser]
            }
        default:
            return state;
    }
};
export default reducer
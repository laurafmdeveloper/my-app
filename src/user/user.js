export default function User(){
    const user="";
    if (!user){
        return(<button>Login</button>)

    }
    return(<div>user: {user}</div>)
}
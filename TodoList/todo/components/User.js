
function User({ user }) {
    return (
        <div className=" h-full flex flex-col items-center justify-center">
            <h4>{user.firstname} {user.lastname}</h4>
            <p>{user.email}</p>
            
        </div>
    )
}

export default User

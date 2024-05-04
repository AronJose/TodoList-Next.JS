
function Header() {
    return (
        <div className="bg-gray-700 w-full h-20 shadow   ">
            <div className="px-5 w-full h-full flex align-center justify-between">
                <div className="w-3/4  flex items-center">
                    <h1 className="text-white font-mono font-bold text-4xl mx-16">ToDo</h1>
                </div>
                <div className="w-1/4 flex items-center justify-between">
                    {/* <a href="/home" className="text-white">Home</a>  */}
                    <a href="/" className="text-white ml-12 font-bold">Add-User</a> 
                    <a href="/users" className="text-white mr-28 font-bold">Users</a> 
                </div>
            </div>
        </div>
    )
}

export default Header

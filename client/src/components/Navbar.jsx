

const Navbar = () => {
  return (
    <nav className="h-[4rem]  w-[100vw] grid place-items-center box-border border ">
        <div className="flex justify-between align-middle my-0 mx-auto w-[70%]">
            <div><h1 className="text-gray-400 text-4xl">My<span className="text-red-400 ">Blog</span></h1></div>

            <ul  className="flex justify-between item-center gap-8 text-xl text-500">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>

            <div className="flex justify-between item-center gap-8  text-xl text-500">
                <li>Login</li>
                <li>Register</li>
            </div>
        </div>

    </nav>
  )
}

export default Navbar
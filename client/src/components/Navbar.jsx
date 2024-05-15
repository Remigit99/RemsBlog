import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="h-[4rem]  w-[100vw] grid place-items-center box-border border ">
        <div className="flex justify-between align-middle my-0 mx-auto w-[70%]">
            <div><h1 className="text-gray-400 text-4xl">My<span className="text-red-400 ">Blog</span></h1></div>

            <ul  className="flex justify-between item-center gap-8 text-xl text-500">
                <Link to="/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to="/contact">Contact</Link>

            </ul>

            <div className="flex justify-between item-center gap-8  text-xl text-500">
                <Link to="login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>

    </nav>
  )
}

export default Navbar
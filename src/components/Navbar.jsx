import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-around items-center py-5  border-b">
                <h1 className="">Coffee Shop</h1>
                <div className="flex gap-5"> 
                    <NavLink to='/' className='hover:underline'>Home</NavLink>
                    <NavLink to='/create' className='hover:underline'>Create</NavLink>
                    <NavLink to='/signup' className='hover:underline'>Sign Up</NavLink>
                    <NavLink to='/signin' className='hover:underline'>Sign In</NavLink>
                    <NavLink to='/users' className='hover:underline'>Users</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
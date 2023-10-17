import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Home = () => {
    const coffeesData = useLoaderData()

    const [coffees, setCoffees] = useState(coffeesData)

    //Delete method
    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your Coffee has been deleted.',
                    'success'
                )
                fetch(`https://coffe-shop-server-363kvtyom-rakibul-islams-projects.vercel.app/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = coffees.filter(coffee => coffee._id !== _id);
                        setCoffees(remaining)
                    })
            }
        })

    }


    //Find Update data 
    // const handleUpdate = (_id) =>{
    //     console.log(_id)
    // }
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5 w-11/12 mx-auto py-5">
                {
                    coffees.map(coffee => <>
                        <div className="flex justify-between items-center bg-[#F5F4F1] rounded-md p-4 gap-3">
                            <img src={coffee.photo} alt="" className="h-32 w-32" />
                            <div className="flex flex-col">
                                <h4 className="">Name: {coffee.name}</h4>
                                <h4 className="">Chef: {coffee.supplier}</h4>
                                <h4 className="">Teste: {coffee.teste}</h4>
                            </div>
                            <div className="flex flex-col">
                                <button className="btn">View</button>
                                <Link to={`/update/${coffee._id}`}>
                                    <button className="btn">Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(coffee._id)} className="btn">Delete</button>
                            </div>
                        </div>
                    </>
                    )
                }

            </div>
        </div>
    );
};

export default Home;
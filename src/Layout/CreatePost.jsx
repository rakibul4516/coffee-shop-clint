
const CreatePost = () => {
    const handleSubmitData = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = event.target.coffeeName.value;
        const chef = event.target.chef.value;
        const supplier = event.target.supplier.value;
        const teste = event.target.teste.value;
        const category = event.target.category.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;
        const coffees= {name,chef,supplier,teste,category,details,photo}

        fetch('https://coffe-shop-server-363kvtyom-rakibul-islams-projects.vercel.app/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(coffees)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
        })

    }
    return (
        <div className="w-11/12 mx-auto bg-[#F4F3F0] p-20">
            <div className="text-center my-6">
                <h1 className="text-3xl font-extrabold drop-shadow-2xl my-2">Add New Coffee</h1>
                <p className="text-sm w-10/12 mx-auto ">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div> 
            <form onSubmit={handleSubmitData} className="">
                <div className="md:flex gap-5 mb-5 w-full">
                    <div className="md:flex flex-col items-start w-full gap-2">
                        <label className="text-lg font-semibold px-3">Coffee Name</label>
                        <input type="text" placeholder="Coffee Name" name="coffeeName" className="input input-bordered input-info w-full"/>
                    </div>
                    <div className="md:flex flex-col items-start w-full gap-2">
                        <label className="text-lg font-semibold px-3">Chef</label>
                        <input type="text" name="chef" placeholder="Chif" className="input input-bordered input-info w-full" />
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="md:flex flex-col items-start w-full gap-2">
                        <label className="text-lg font-semibold px-3">Supplier</label>
                        <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered input-info w-full"/>
                    </div>
                    <div className="md:flex flex-col items-start w-full gap-2">
                        <label className="text-lg font-semibold px-3">Taste</label>
                        <input type="text" name="teste" placeholder="Teste" className="input input-bordered input-info w-full" />
                    </div>
                </div>
                <div className="md:flex gap-5 mb-5">
                    <div className="md:flex flex-col items-start w-full gap-2">
                        <label className="text-lg font-semibold px-3">Category</label>
                        <input type="text" placeholder="Coffee Category" name="category" className="input input-bordered input-info w-full"/>
                    </div>
                    <div className="md:flex flex-col items-start w-full gap-2">
                        <label className="text-lg font-semibold px-3">Details</label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered input-info w-full" />
                    </div>
                </div>
                <div className=" mb-5">
                    <div className="flex flex-col items-start w-full">
                        <label className="text-lg font-semibold px-3">Photo URL</label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered input-info w-full" />
                    </div>
                </div>
                <button type="submit" className="btn btn-active btn-neutral w-full">Add Coffee</button>
            </form>

        </div>
    );
};

export default CreatePost;
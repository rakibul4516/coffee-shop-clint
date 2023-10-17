import { useLoaderData } from "react-router-dom";

const ViewUser = () => {
    const users = useLoaderData()
    return (
        <div className="flex justify-center items-center flex-col">
            {users?.map(user =><>
            <div>
                <h1>{user.email}</h1>
            </div>
            </>)
            }
        </div>
    );
};

export default ViewUser;
import { useState } from "react";
import getData from "../util/api.user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


const UserList = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState();


    useEffect(() => {
        
        const token = localStorage.getItem("token");
        if (!token) {
            return navigate("/login")
        }
        setToken(token);
        gettingData(token);
    }, []);

    const [user, setUser] = useState([]);
    const gettingData = async (token) => {
        const header={
            "Authorization":token
        }
        const response = await getData(header);
        console.log(response)
        setUser(response.data.data);
    }

    

    return <>
        <div>
            
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Number</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(e => {
                            return <tr>
                                <th scope="row">.</th>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.number}</td>
                                <td>{e.email}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
        </div >
    </>

}

export default UserList;




function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
ReactDOM.render(
    <PaginatedItems itemsPerPage={4} />,
    document.getElementById('container')
);
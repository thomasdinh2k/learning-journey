import { useEffect, useState } from "react";
import axios from "axios";

const UseAxios = () => {
	
	// useEffect(() => {
	// 	axios({
	// 		method: "GET",
	// 		url: "https://reqres.in/api/users",
	// 	})
	// 		.then((respond) => {
	// 			console.log(respond.data.data);
    //             setData(respond.data.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);
    const [data, setData] = useState([])



    useEffect( () => {
        const fetchData = async() => {
            try {
                const respond = await axios.get("https://reqres.in/api/users");
                setData(respond.data.data);
            } catch (error) {  
                console.log('There was an error', error);
            }
        }


        fetchData()

    }, [])
	
	return (
		<>
            <div>Data Feed</div>
			{data.map((e) => (
                <>
                    <img src={e.avatar}></img>
    				<p key={e.id}>{e.first_name} ||| {e.email}</p>
                </>

			))}
		</>
	);
};
export default UseAxios;

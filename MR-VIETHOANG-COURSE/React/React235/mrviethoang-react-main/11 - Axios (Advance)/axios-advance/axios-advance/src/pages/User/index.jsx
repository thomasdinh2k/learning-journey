import { useEffect, useState } from "react";
import { getUsers } from "../../services/Api";

const UserComponent = () => {
  const [userData, getUserData] = useState([ ]);

  useEffect(() => {
    getUsers().then( ({data}) => {
        getUserData(data);
    } )
    
  }, []);

  return (
    <div>
      <h2>
      </h2>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {userData.map(e => (
                <tr key={e.id}>
                    <th>{e.name}</th>
                    <th>{e.username}</th>
                    <th>{e.email}</th>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserComponent;

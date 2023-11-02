/* eslint-disable react/prop-types */
const UsrTable = ({ userData, photoData }) => {
  return (
    <div>
      <table className=" table table-sm caption-top table-striped table-hover table-bordered">
        <caption>List of Users (Using Template API)</caption>
        <thead className="table-danger">
          <tr>
            <td className="tg-0pky">Avatar</td>
            <td className="tg-0pky">Full Name</td>
            <td className="tg-0pky">Username</td>
            <td className="tg-0pky">Phone Number</td>
            <td className="tg-0pky">Company Name</td>
            <td className="tg-0pky">Email</td>
          </tr>
        </thead>
        <tbody>
          {photoData.map((photoItem, index) => {
            return (
              <tr key={photoItem.id}>
                <td>
                  <img src={photoItem.url} alt={photoItem.description} />
                </td>
                <td className="tg-0pky">{userData[index].name}</td>
                <td className="table-row">{userData[index].username}</td>
                <td className="table-row">{userData[index].phone}</td>
                <td className="table-row">{userData[index].company.name}</td>
                <td className="table-row">{userData[index].email}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsrTable;

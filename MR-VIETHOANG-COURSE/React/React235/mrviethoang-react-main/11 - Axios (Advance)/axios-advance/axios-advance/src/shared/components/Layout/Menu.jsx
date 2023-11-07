const Menu = () => {
  return (
    <div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary Moe</td>
            <td>marymoe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July Dooley</td>
            <td>julydooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Menu;

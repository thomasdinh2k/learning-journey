import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        Demo đơn giản về hiển thị danh sách <b>Thành viên &amp; Bài viết</b>{" "}
        thông qua việc <b>GET Data API bằng Axios Module</b>
      </p>
      <div id="menu">
        <ul>
          <li>
            <Link to="users">view user</Link>
          </li>
          <li>
            <Link to="post">view posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header
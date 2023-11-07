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
            <a href="#">view users</a>
          </li>
          <li>
            <a href="#">view posts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header
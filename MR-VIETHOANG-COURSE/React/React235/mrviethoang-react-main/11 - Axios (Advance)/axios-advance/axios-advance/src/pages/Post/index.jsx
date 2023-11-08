import { useEffect, useState } from "react";
import { getPosts } from "../../services/Api";

// const config = {
//     params: {
//         page: 1,
//         limit: 10
//     }
// }

const PostComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postData, getPostData] = useState([]);

  // Paginate the Data
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Slice the Data for the current page
  const currentData = postData.slice(startIndex, endIndex);
  // Button for next, previous page
  const pageControl = (indicator) => {
    if (
      currentPage < Math.ceil(postData.length / itemsPerPage) &&
      indicator === "next"
    ) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    getPosts().then((data) => {
      console.log(data.data);
      getPostData(data.data);
    });
  }, []);

  return (
    <div>
      <div className="pagination">
        <button onClick={() => pageControl("previous")}>Previous Page</button>
        <p>Current Page: {currentPage}</p>
        <button onClick={() => pageControl("next")}>Next Page</button>
      </div>
      <table className="table table-primary table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data) => (
            <tr key={data.id}>
              <th>{data.id}</th>
              <th>{data.title}</th>
              <th>{data.body}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostComponent;

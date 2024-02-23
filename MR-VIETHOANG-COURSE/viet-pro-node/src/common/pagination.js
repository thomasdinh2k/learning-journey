module.exports = (TotalRow, limit, currentPage) => {
	// TODO: Tìm ra page đầu, page cuối, page hiện tại, 2 page trước hiện tại, 2 page sau hiện tại

	// Page đầu = 0, page cuối = tổng số page, currentPage tự truyền xuống

	const test_input = { TotalRow, limit, currentPage };
	console.log("test_input", test_input);

	const totalPageNum = Math.ceil(TotalRow / limit);

	let finalPageList = [];
	const delta = 3;
	let delta_right = currentPage + delta;
	let delta_left = currentPage - delta;
	// Chạy iteration, nếu số đạt điều kiện thì đưa vào trong Array
	for (let i = 1; i <= totalPageNum; i++) {
		if (
			// i == 1 || // First Page
			i == currentPage ||
			(i >= delta_left && i <= delta_right)
			// i == totalPageNum // Last Page
		) {
			finalPageList.push(i);
		}
	}

	// finalPageList.splice(1, 0, "...");

	let testPageListParam = { totalPageNum, finalPageList };

	console.log("test_list_param", testPageListParam);

	return testPageListParam;
};

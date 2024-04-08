const pagination = async (model, query, currentPage, limit) => {
	
    const total = await model.find(query).countDocuments()
	const totalPages = Math.ceil(total / limit)
	const next = currentPage + 1
	const prev = currentPage - 1
	const hasNext = currentPage >= totalPages ? false : true
	const hasPrev = currentPage <= 1 ? false : true

	return {
		total, // Tổng số documents trả về
		currentPage, //
		next,
		hasNext,
		prev,
		hasPrev,
	}
}

module.exports = pagination
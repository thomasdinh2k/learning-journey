const UserInput = () => {
    
    /**
     * TODO Thu thập giá trị của người dùng và đặt biến cho từng ô
     * 
     * Sau đó nghiên cứu cách đưa vào hàm tính toán (được export ra từ ./util)
     */
    
    return (
		<section id="user-input">
			<div className="input-group">
			    <p>
			        <label>INITIAL INVESTMENT</label>
        			<input type="number" required></input>
			    </p>
			    <p>
			        <label>ANNUAL INVESTMENT</label>
        			<input type="number" required></input>
			    </p>
			</div>

			<div className="input-group">
			    <p>
			        <label>EXPECTED RETURN</label>
        			<input type="number" required></input>
			    </p>
			    <p>
			        <label>DURATION</label>
        			<input type="number" required></input>
			    </p>
			</div>
			
			
		</section>
	);
};

export default UserInput;

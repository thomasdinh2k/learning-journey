import { Helmet } from "react-helmet";
import "../../public/success.css"
const Success = () => {
	return (
		<div>
			<Helmet>
				<title> Success </title>
			</Helmet>
			{/*	Order Success	*/}
			<div id="order-success">
				<div className="row">
					<div id="order-success-img" className="col-lg-3 col-md-3 col-sm-12" />
					<div id="order-success-txt" className="col-lg-9 col-md-9 col-sm-12">
						<h3>bạn đã đặt hàng thành công !</h3>
						<p>
							Vui lòng kiểm tra email để xem lại thông tin đơn hàng của mình.
						</p>
					</div>
				</div>
			</div>
			{/*	End Order Success	*/}
		</div>
	);
};

export default Success;

var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy",
});

var lazy_load_group = [];

$(document).ready(function () {
	Hura.UI.loadGroup(lazy_load_group);

	_run_search();

	showCartSummary(".js-cart-count");

	getRecentOrder();

	checkIcon();

	$(".banner-popup-container").fadeIn();

	$("#js-goTop").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 800);
	});

	$(window).scroll(function () {
		if ($(window).scrollTop() > 230) $("#js-fixed-right").addClass("active");
		else $("#js-fixed-right").removeClass("active");
	});

	setTimeout(function () {
		$("#js-cdn-font-awesome").attr(
			"href",
			"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
		);
		$(".global-banner-fixed").addClass("on-screen");
	}, 500);
});

function getRecentOrder() {
	Hura.Ajax.post("account", { action_type: "recent-order" }).then(function (
		order_list
	) {
		//console.log(order_list);
		if (order_list.length > 0) {
			var html = Hura.Template.parse(headerOrder, order_list);
			Hura.Template.render("#js-list-order", html);
		} else {
			$("#js-list-order").html("Bạn chưa mua đơn hàng nào !");
		}
	});
}

function checkCustomerOrder() {
	var error = "";
	var order_id = $("#js-order-code").val();

	var email = $("#js-order-email").val();

	if (email.length == "") error += "- Bạn chưa nhập email \n";
	if (order_id.length == "") error += "- Bạn chưa nhập mã đơn hàng \n";

	if (error != "") {
		alert(error);
	} else {
		Hura.Ajax.post("user", {
			action_type: "check-order",
			email: email,
			order_id: order_id,
		}).then(function (order_info) {
			if (order_info == false) {
				$("#js-customer-order-note").html(
					'<p class="red font-600">- Email hoặc mã đơn hàng không chính xác vui lòng kiểm tra lại !</p>'
				);
			} else {
				//location.href = '/taikhoan?view=order-detail&id=' + order_info.orderId;
				$("#js-customer-order-note").html(buildHtmlCustomerOrder(order_info));
			}
		});
	}
}

function buildHtmlCustomerOrder(data) {
	var data_list = data.item_list;
	var html = [];
	html.push(`
            <table border="1" bordercolor="#e1e1e1" class="text-center">
                <tr>
                    <td>Mã đơn</td>
                    <td>Tổng giá trị</td>
                    <td>Tình trạng</td>
                </tr>

                <tr>
                    <td><a href="/taikhoan?view=order-detail&id=${
											data.orderId
										}">#${data.orderId}</a></td>
                    <td class="red font-600">${formatCurrency(
											data.totalValue
										)}<u>đ</u></td>
                    <td>${data.status_message}</td>
                </tr>
            </table>
        `);
	return html.join("");
}

function compare_addProduct(id, img, pa) {
	var pro_img = img;
	var pro_id = id;

	if ($("#js-compare-holder a").length < 3) {
		$(".global-compare-group").show();
		$("#js-alert").html("");

		if ($(pa).hasClass("selected") == true) {
			$("#js-compare-holder a").each(function () {
				var id = $(this).attr("data-id");
				if (id == pro_id) {
					$(this).remove();
				}
			});
			$(pa).removeClass("selected");
		} else {
			var creat_item =
				`<a href="javascript:void(0)" class="js-compare-item position-relative" data-id="` +
				pro_id +
				`">
                            <span class="remove-compare js-remove-compare" onclick="removeCompare(this)"></span>
                            <img src="` +
				pro_img +
				`"/>
                            </a>`;
			$("#js-compare-holder").append(creat_item);
			$(pa).addClass("selected");
		}
	} else {
		$("#js-alert").html("Bạn được chọn tối đa 3 sản phẩm !");

		if ($(pa).hasClass("selected") == true) {
			$("#js-compare-holder a").each(function () {
				var id = $(this).attr("data-id");
				if (id == pro_id) {
					$(this).remove();
				}
			});
			$(pa).removeClass("selected");
			$("#js-alert").html("");
		}
	}

	if ($("#js-compare-holder a").length == 0) {
		$(".global-compare-group").hide();
	}

	// popup search
	if ($("#js-compare-holder a").length == 3) {
		$("#js-addCompare-popup").hide();
	} else {
		$("#js-addCompare-popup").show();
	}
}

function removeCompare(pa) {
	var id = $(pa).parents(".js-compare-item").attr("data-id");
	var pro_id = $("#js-pd-item").attr("data-id");
	$(pa).parents(".js-compare-item").remove();

	if (pro_id == id) {
		$("#js-pd-item").removeClass("selected");
	}

	if ($(".js-compare-item").length < 3) {
		$("#js-addCompare-popup").show();
	} else {
		$("#js-addCompare-popup").hide();
	}
}

function compare_link() {
	var compare_item = $(".js-compare-item").length;
	if (compare_item < 2) {
		$("#js-alert").html("Cần tối thiểu 2 sản phẩm để so sánh !");
	} else {
		$("#js-alert").html("");

		var ids = [];
		$(".js-compare-item").each(function () {
			var id = $(this).attr("data-id");
			ids.push(id) + ",";
		});
		var current_list = String(ids);

		window.location = "/so-sanh?list=" + current_list;
	}
}

function compare_close() {
	$("#js-compare-holder").html("");
	$(".global-compare-group").hide();
	$(".js-p-compare").removeClass("selected");
}

function closePopupSearch() {
	$("#js-popup-seach").val("");
	$("#js-seach-holder").html("");
	$(".popup-search-container").hide();
}

function run_carousel(holder) {
	$(holder + " .owl-carousel").owlCarousel({
		margin: 8,
		lazyLoad: true,
		loop: false,
		autoplay: false,
		autoplayTimeout: 4000,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: [
			"<i class='icons arrow-left'></i>",
			"<i class='icons arrow-right'></i>",
		],
		items: 5,
	});
}

function checkContentHeight(height) {
	$(".js-static-content").each(function () {
		var $row = $(this);
		var $row_height = $row.height();

		if ($row_height > height) {
			$row.css("height", height);
			$row.addClass("bg-content");
			$(".js-showmore-button").css("display", "block");
		}
	});

	$(".js-showmore-button").click(function () {
		$(this)
			.parents(".js-static-container")
			.find(".js-static-content")
			.css("height", "auto");
		$(this)
			.parents(".js-static-container")
			.find(".js-static-content")
			.removeClass("bg-content");
		$(this)
			.parents(".js-static-container")
			.find(".js-showless-button")
			.css({ display: "block", "margin-top": "15px" });
		$(this).hide();
	});

	$(".js-showless-button").click(function () {
		$(this)
			.parents(".js-static-container")
			.find(".js-static-content")
			.css("height", height);
		$(this)
			.parents(".js-static-container")
			.find(".js-static-content")
			.addClass("bg-content");
		$(this)
			.parents(".js-static-container")
			.find(".js-showmore-button")
			.css("display", "block");
		$(this).hide();

		$("html, body").animate(
			{
				scrollTop:
					$(this)
						.parents(".js-static-container")
						.find(".js-static-content")
						.offset().top - 30,
			},
			800
		);
	});
}

function getIdYoutube(url) {
	var video_id = url.split("v=")[1];
	var ampersandPosition = video_id.indexOf("&");
	if (ampersandPosition != -1) {
		video_id = video_id.substring(0, ampersandPosition);
	}
	return video_id;
}

function addProductToCart(product_id, variant_id, quantity, redirect) {
	var product_prop = {
		quantity: quantity,
		buyer_note: "",
	};

	Hura.Cart.Product.add(product_id, variant_id, product_prop).then(function (
		response
	) {
		if (response.status === "error") {
			// bao loi
			if (response.error_type == "item-in-cart")
				alert("Sản phẩm đã trong giỏ hàng");
			else if (response.error_type == "invalid-item-id")
				alert("ID sản phẩm không đúng");
			else alert(response.message);
		} else {
			if (redirect == 0) {
				alert("Đã thêm sản phẩm vào giỏ hàng !");
				showCartSummary(".js-cart-count");
			} else {
				window.location.href = "/cart";
			}
		}
	});
}

function show_hide_pass(pa) {
	var x = $(pa).parents(".item").find(".input-pass").attr("type");

	if (x === "password") {
		$(pa).parents(".item").find(".input-pass").attr("type", "text");
	} else {
		$(pa).parents(".item").find(".input-pass").attr("type", "password");
	}
}

function open_oauth(service) {
	window.open(
		"/oauth/login.php?service=" + service + "&return_url=" + service + "",
		"Login_OAuth",
		"width=600, height=500"
	);
}

function checkIcon() {
	if ($(".p-item").hasClass("loaded") == false) {
		layIconCustom(this);
	}
}

function convertToSlug(Text) {
	// var newText = Text.split('.').join(" ");
	if (Text.lastIndexOf(".") > 0) {
		var newText = Text.substr(Text.lastIndexOf(".") + 2);
		// console.log(newText);
	} else newText = Text;
	return newText
		.toLowerCase()
		.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
		.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
		.replace(/ì|í|ị|ỉ|ĩ/g, "i")
		.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
		.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
		.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
		.replace(/đ/g, "d")
		.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
		.replace(/\u02C6|\u0306|\u031B/g, "")
		.replace(/[^\w ]+/g, "")
		.replace(/ +/g, "-");
}

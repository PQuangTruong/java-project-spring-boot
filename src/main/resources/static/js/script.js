$(function(){

// User Register validation

	var $userRegister=$("#userRegister");

	$userRegister.validate({
		
		rules:{
			name:{
				required:true,
				lettersonly:true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNumber: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 12

			},
			password: {
				required: true,
				space: true

			},
			confirmpassword: {
				required: true,
				space: true,
				equalTo: '#pass'

			},
			address: {
				required: true,
				all: true

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			}, img: {
				required: false,
			}
			
		},
		messages:{
			name:{
				required: 'Tên là bắt buộc',
				lettersonly: 'Tên không hợp lệ'
			},
			email: {
				required: 'Email là bắt buộc',
				space: 'Không được chứa khoảng trắng',
				email: 'Email không hợp lệ'
			},
			mobileNumber: {
				required: 'Số điện thoại là bắt buộc',
				space: 'Không được chứa khoảng trắng',
				numericOnly: 'Số điện thoại không hợp lệ',
				minlength: 'Ít nhất 10 chữ số',
				maxlength: 'Tối đa 12 chữ số'
			},
			password: {
				required: 'Mật khẩu là bắt buộc',
				space: 'Không được chứa khoảng trắng'
			},
			confirmpassword: {
				required: 'Xác nhận mật khẩu là bắt buộc',
				space: 'Không được chứa khoảng trắng',
				equalTo: 'Mật khẩu không khớp'
			},
			address: {
				required: 'Địa chỉ là bắt buộc',
				all: 'Địa chỉ không hợp lệ'
			},
			city: {
				required: 'Thành phố là bắt buộc',
				space: 'Không được chứa khoảng trắng'
			},
			state: {
				required: 'Tỉnh/Thành phố là bắt buộc',
				space: 'Không được chứa khoảng trắng'
			},
			pincode: {
				required: 'Mã bưu điện là bắt buộc',
				space: 'Không được chứa khoảng trắng',
				numericOnly: 'Mã bưu điện không hợp lệ'
			},
			img: {
				required: 'Ảnh đại diện là bắt buộc'
			}
		}

	})
	
	
// Orders Validation

var $orders=$("#orders");

$orders.validate({
		rules:{
			firstName:{
				required:true,
				lettersonly:true
			},
			lastName:{
				required:true,
				lettersonly:true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNo: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 12

			},
			address: {
				required: true,
				all: true

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			},
			paymentType:{
			required: true
			}
		},
	messages:{
		firstName:{
			required: 'Họ là bắt buộc',
			lettersonly: 'Tên không hợp lệ'
		},
		lastName:{
			required: 'Tên đệm là bắt buộc',
			lettersonly: 'Tên không hợp lệ'
		},
		email: {
			required: 'Email là bắt buộc',
			space: 'Không được chứa khoảng trắng',
			email: 'Email không hợp lệ'
		},
		mobileNo: {
			required: 'Số điện thoại là bắt buộc',
			space: 'Không được chứa khoảng trắng',
			numericOnly: 'Số điện thoại không hợp lệ',
			minlength: 'Ít nhất 10 chữ số',
			maxlength: 'Tối đa 12 chữ số'
		},
		address: {
			required: 'Địa chỉ là bắt buộc',
			all: 'Địa chỉ không hợp lệ'
		},
		city: {
			required: 'Thành phố là bắt buộc',
			space: 'Không được chứa khoảng trắng'
		},
		state: {
			required: 'Tỉnh/Thành phố là bắt buộc',
			space: 'Không được chứa khoảng trắng'
		},
		pincode: {
			required: 'Mã bưu điện là bắt buộc',
			space: 'Không được chứa khoảng trắng',
			numericOnly: 'Mã bưu điện không hợp lệ'
		},
		paymentType:{
			required: 'Vui lòng chọn phương thức thanh toán'
		}
	}

})

// Reset Password Validation

var $resetPassword=$("#resetPassword");

$resetPassword.validate({
		
		rules:{
			password: {
				required: true,
				space: true

			},
			confirmPassword: {
				required: true,
				space: true,
				equalTo: '#pass'

			}
		},
	messages:{
		password: {
			required: 'Mật khẩu là bắt buộc',
			space: 'Không được chứa khoảng trắng'
		},
		confirmpassword: {
			required: 'Xác nhận mật khẩu là bắt buộc',
			space: 'Không được chứa khoảng trắng',
			equalTo: 'Mật khẩu không khớp'
		}
	}
})
})

jQuery.validator.addMethod('lettersonly', function(value, element) {
		return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
	});
	
		jQuery.validator.addMethod('space', function(value, element) {
		return /^[^-\s]+$/.test(value);
	});

	jQuery.validator.addMethod('all', function(value, element) {
		return /^[^-\s][a-zA-Z0-9_,.\s-]+$/.test(value);
	});


	jQuery.validator.addMethod('numericOnly', function(value, element) {
		return /^[0-9]+$/.test(value);
	});

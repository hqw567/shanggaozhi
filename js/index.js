$(function () {
	let getSelect = $('.search .dropdown-search')
	let getTempid = $('.search .tempid')
	let getInput = $('.search .input-search')
	getSelect.change(function () {
		let checkText = $(this).find("option:selected").text()
		if (checkText === '资讯') {
			getTempid.attr({
				'value': '1'
			})
		} else if (checkText === '学校') {
			getTempid.attr({
				'value': '4'
			})
		} else {
			getTempid.attr({
				'value': '2'
			})
		}
	})
	getInput.focus(function () {
		$('.search').addClass('search-shadow')
	})
	getInput.blur(function () {
		$('.search').removeClass('search-shadow')
	})
	$('.search form').submit(function () {
		if ($.trim($('input[name=keyboard]').val()) === '') {
			alert('输入内容不能为空，请您重新输入！')
			return false
		}
	})

	function tabSwitch(whoEvent, thisClass, cont, contClass, Default, TabUl) {
		$(whoEvent).click(function () {
			$(this).addClass(thisClass)
			$(this).siblings().removeClass(thisClass)
			$(cont).eq($(this).index()).addClass(contClass)
			$(cont).eq($(this).index()).siblings().removeClass(
				contClass)
			if (Default.css('display') === 'block') {
				TabUl.css('display', 'none')
			}
			Default.text($(this).text())
		})
		Default.click(function () {
			TabUl.toggle()
		})


		$(window).scroll(function () {
			if ($('.tab-default').css('display') === 'block') {
				TabUl.hide()
			}

		})

	}

	let schoolDefault = $(".school .tab-default")
	let schoolTabUl = $(".school .tab-default").siblings($('ul'))
	let specialtyDefault = $(".specialty .tab-default")
	let specialtyTabUl = $(".specialty .tab-default").siblings($('ul'))
	let listDefault = $(".list .tab-default")
	let listTabUl = $(".list .tab-default").siblings($('ul'))
	// $(".school .option").click(function () {
	// 	$(this).addClass('option-border')
	// 	$(this).siblings().removeClass('option-border')
	// 	$('.school .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
	// 	$('.school .option-select-cont').eq($(this).index()).siblings().removeClass(
	// 		'option-select-cont-show')
	// 	if (schoolDefault.css('display') === 'block') {
	// 		schoolTabUl.css('display', 'none')
	// 	}
	// 	schoolDefault.text($(this).text())
	// })
	// schoolDefault.click(function () {
	// 	schoolTabUl.toggle()
	// })
	tabSwitch(".school .option", 'option-border', '.school .option-select-cont', 'option-select-cont-show', schoolDefault, schoolTabUl)
	tabSwitch(".specialty .option", 'option-border', '.specialty .option-select-cont', 'option-select-cont-show', specialtyDefault, specialtyTabUl)
	tabSwitch(".list .option", 'option-border', '.list .option-select-cont', 'option-select-cont-show', listDefault, listTabUl)
	// $(".specialty .option").click(function () {
	// 	$(this).addClass('option-border')
	// 	$(this).siblings().removeClass('option-border')
	// 	$('.specialty .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
	// 	$('.specialty .option-select-cont').eq($(this).index()).siblings().removeClass(
	// 		'option-select-cont-show')
	// 	if (specialtyDefault.css('display') === 'block') {
	// 		specialtyTabUl.css('display', 'none')
	// 	}
	// 	specialtyDefault.text($(this).text())
	// })
	// specialtyDefault.click(function () {
	// 	specialtyTabUl.toggle()
	// })

	// $(".list .option").click(function () {
	// 	$(this).addClass('option-border')
	// 	$(this).siblings().removeClass('option-border')
	// 	$('.list .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
	// 	$('.list .option-select-cont').eq($(this).index()).siblings().removeClass(
	// 		'option-select-cont-show')
	// 	if (listDefault.css('display') === 'block') {
	// 		listTabUl.css('display', 'none')
	// 	}
	// 	listDefault.text($(this).text())
	// })
	// listDefault.click(function () {
	// 	listTabUl.toggle()
	// })



	$(".popular .option").click(function () {
		$(this).addClass('option-border-hot')
		$(this).siblings().removeClass('option-border-hot')
		$('.popular .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
		$('.popular .option-select-cont').eq($(this).index()).siblings().removeClass(
			'option-select-cont-show')
	})


	$(".main-school-left .option").click(function () {
		$(this).addClass('main-school-active')
		$(this).siblings().removeClass('main-school-active')
		$('.main-school-left .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
		$('.main-school-left .option-select-cont').eq($(this).index()).siblings().removeClass(
			'option-select-cont-show')
	})



	$('#mmenu').click(function () {
		if ($('.search-box').css('display') === 'block') {
			$('#squit').hide()
			$('#ssearch').show()
			$('.search-box').hide()
		}
		$(this).hide()
		$('#mquit').show()
		$('.nav').show()
	})
	$('#mquit').click(function () {
		$(this).hide()
		$('#mmenu').show()
		$('.nav').hide()

	})

	$('#ssearch').click(function () {
		if ($('.nav').css('display') === 'block') {
			$('#mquit').hide()
			$('#mmenu').show()
			$('.nav').hide()
		}
		$(this).hide()
		$('#squit').show()
		$('.search-box').show()
	})
	$('#squit').click(function () {
		$(this).hide()
		$('#ssearch').show()
		$('.search-box').hide()
	})
	$('.pop-search-close').click(function () {
		$('#squit').hide()
		$('#ssearch').show()
		$('.search-box').hide()
	})

	$('.specialty-sort-title').click(function () {
		$('.specialty-sort-content').slideToggle('normal', function () {
			let _this = $(this)
			$(window).scroll(function () {
				_this.slideUp()
			})
		})
	})

	$('.school-sort div p').click(function () {
		let _this = $(this)
		$('.school-sort div p').not(_this).siblings('ul').hide()
		_this.siblings('ul').slideToggle('normal', function () {
			$(window).scroll(function () {
				_this.siblings('ul').slideUp()
			})
		})
	})
})

$(function () {
	selectModel();
});


function selectModel() {
	var $box = $('div.model-box');
	var $option = $('ul.model-select-option', $box);
	var $txt = $('div.model-select-text', $box);
	var speed = 10;
	/**
	 * 单击某个下拉列表时，显示当前下拉列表的下拉列表框
	 * 并隐藏页面中其他下拉列表
	 */
	$txt.on('click', function () {
		var $self = $(this);
		$option.not($self).siblings('ul.model-select-option').slideUp(speed, function () {
			init($self);
		});
		$self.siblings('ul.model-select-option').slideToggle(speed, function () {
			init($self);
		});
		return false;
	});

	// 点击选择，关闭其他下拉
	/**
	 * 为每个下拉列表框中的选项设置默认选中标识 data-selected
	 * 点击下拉列表框中的选项时，将选项的 data-option 属性的属性值赋给下拉列表的 data-value 属性，并改变默认选中标识 data-selected
	 * 为选项添加 mouseover 事件
	 */
	$option.find('li').each(function (index, element) {
		var $self = $(this);
		if ($self.hasClass('selected')) {
			$self.addClass('data-selected');
		}
	}).mousedown(function () {
		$(this).parent().siblings('div.model-select-text').text($(this).text()).attr('data-value', $(this)
			.attr('data-option'));
		$('.classid').attr('value', $(this)
			.attr('data-option'));
		$option.slideUp(speed, function () {
			init($(this));
		});
		$(this).addClass('selected data-selected').siblings('li').removeClass('selected data-selected');
		return false;
	}).mouseover(function () {
		$(this).addClass('selected').siblings('li').removeClass('selected');
	});

	// 点击文档隐藏所有下拉
	$(document).on('click scroll', function () {
		var $self = $(this);
		$option.slideUp(speed, function () {
			init($self);
		})
	});

	/**
	 * 初始化默认选择
	 */
	function init(obj) {
		obj.find('li.data-selected').addClass('selected').siblings('li').removeClass('selected');
	}
}

$(function () {
	$(window).scroll(function () {
		let top = $(this).scrollTop()
		if (top > 200) {
			$('.gotop').stop().fadeIn()

		} else {
			$('.gotop').stop().fadeOut()
		}
	})
	$('.gotop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 300)
	})
})

$(function () {
	$(".pimg").click(function () {
		var _this = $(this); //将当前的pimg元素作为_this传入函数
		imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
	});
});

function imgShow(outerdiv, innerdiv, bigimg, _this) {
	var src = _this.attr("src"); //获取当前点击的pimg元素中的src属性
	$(bigimg).attr("src", src); //设置#bigimg元素的src属性

	/*获取当前点击图片的真实大小，并显示弹出层及大图*/
	$("<img/>").attr("src", src).load(function () {
		var windowW = $(window).width(); //获取当前窗口宽度
		var windowH = $(window).height(); //获取当前窗口高度
		var realWidth = this.width; //获取图片真实宽度
		var realHeight = this.height; //获取图片真实高度
		var imgWidth, imgHeight;
		var scale = 0.8; //缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放

		if (realHeight > windowH * scale) { //判断图片高度
			imgHeight = windowH * scale; //如大于窗口高度，图片高度进行缩放
			imgWidth = imgHeight /
				realHeight * realWidth; // 等比例缩放宽度
			if (imgWidth > windowW * scale) { //如宽度扔大于窗口宽度
				imgWidth = windowW * scale; //再对宽度进行缩放
			}
		} else if (realWidth > windowW * scale) { //如图片高度合适，判断图片宽度
			imgWidth = windowW * scale; //如大于窗口宽度，图片宽度进行缩放
			imgHeight = imgWidth / realWidth * realHeight; // 等比例缩放高度
		} else { //如果图片真实高度和宽度都符合要求，高宽不变
			imgWidth = realWidth;
			imgHeight = realHeight;
		}
		$(bigimg).css("width", imgWidth); //以最终的宽度对图片缩放

		var w = (windowW - imgWidth) / 2; // 计算图片与窗口左边距
		var h = (windowH - imgHeight) / 2; // 计算图片与窗口上边距
		$(innerdiv).css({
			"top": h,
			"left": w
		}); //设置#innerdiv的top和left属性
		$(outerdiv).fadeIn("fast"); //淡入显示#outerdiv及.pimg
	});

	$(outerdiv).click(function () { //再次点击淡出消失弹出层
		$(this).fadeOut("fast");
	});
}
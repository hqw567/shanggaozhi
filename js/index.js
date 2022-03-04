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




    $(".school .option").click(function () {
		$(this).addClass('option-border')
		$(this).siblings().removeClass('option-border')
		$('.school .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
		$('.school .option-select-cont').eq($(this).index()).siblings().removeClass(
			'option-select-cont-show')
    })
    $(".popular .option").click(function () {
		$(this).addClass('option-border')
		$(this).siblings().removeClass('option-border')
		$('.popular .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
		$('.popular .option-select-cont').eq($(this).index()).siblings().removeClass(
			'option-select-cont-show')
    })
    $(".specialty .option").click(function () {
		$(this).addClass('option-border')
		$(this).siblings().removeClass('option-border')
		$('.specialty .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
		$('.specialty .option-select-cont').eq($(this).index()).siblings().removeClass(
			'option-select-cont-show')
    })
    $(".list .option").click(function () {
		$(this).addClass('option-border')
		$(this).siblings().removeClass('option-border')
		$('.list .option-select-cont').eq($(this).index()).addClass('option-select-cont-show')
		$('.list .option-select-cont').eq($(this).index()).siblings().removeClass(
			'option-select-cont-show')
    })
})
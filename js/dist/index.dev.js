"use strict";

$(function () {
  var getSelect = $('.search .dropdown-search');
  var getTempid = $('.search .tempid');
  var getInput = $('.search .input-search');
  getSelect.change(function () {
    var checkText = $(this).find("option:selected").text();

    if (checkText === '资讯') {
      getTempid.attr({
        'value': '1'
      });
    } else if (checkText === '学校') {
      getTempid.attr({
        'value': '4'
      });
    } else {
      getTempid.attr({
        'value': '2'
      });
    }
  });
  getInput.focus(function () {
    $('.search').addClass('search-shadow');
  });
  getInput.blur(function () {
    $('.search').removeClass('search-shadow');
  });
  $('.search form').submit(function () {
    if ($.trim($('input[name=keyboard]').val()) === '') {
      alert('输入内容不能为空，请您重新输入！');
      return false;
    }
  });
  $(".school .option").click(function () {
    $(this).addClass('option-border');
    $(this).siblings().removeClass('option-border');
    $('.school .option-select-cont').eq($(this).index()).addClass('option-select-cont-show');
    $('.school .option-select-cont').eq($(this).index()).siblings().removeClass('option-select-cont-show');
  });
  $(".popular .option").click(function () {
    $(this).addClass('option-border');
    $(this).siblings().removeClass('option-border');
    $('.popular .option-select-cont').eq($(this).index()).addClass('option-select-cont-show');
    $('.popular .option-select-cont').eq($(this).index()).siblings().removeClass('option-select-cont-show');
  });
  $(".specialty .option").click(function () {
    $(this).addClass('option-border');
    $(this).siblings().removeClass('option-border');
    $('.specialty .option-select-cont').eq($(this).index()).addClass('option-select-cont-show');
    $('.specialty .option-select-cont').eq($(this).index()).siblings().removeClass('option-select-cont-show');
  });
  $(".list .option").click(function () {
    $(this).addClass('option-border');
    $(this).siblings().removeClass('option-border');
    $('.list .option-select-cont').eq($(this).index()).addClass('option-select-cont-show');
    $('.list .option-select-cont').eq($(this).index()).siblings().removeClass('option-select-cont-show');
  });
  $(".main-school-left .option").click(function () {
    $(this).addClass('main-school-active');
    $(this).siblings().removeClass('main-school-active');
    $('.main-school-left .option-select-cont').eq($(this).index()).addClass('option-select-cont-show');
    $('.main-school-left .option-select-cont').eq($(this).index()).siblings().removeClass('option-select-cont-show');
  });
});
var mySwiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }
});
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
  }); // 点击选择，关闭其他下拉

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
    $(this).parent().siblings('div.model-select-text').text($(this).text()).attr('data-value', $(this).attr('data-option'));
    $('.classid').attr('value', $(this).attr('data-option'));
    $option.slideUp(speed, function () {
      init($(this));
    });
    $(this).addClass('selected data-selected').siblings('li').removeClass('selected data-selected');
    return false;
  }).mouseover(function () {
    $(this).addClass('selected').siblings('li').removeClass('selected');
  }); // 点击文档隐藏所有下拉

  $(document).on('click', function () {
    var $self = $(this);
    $option.slideUp(speed, function () {
      init($self);
    });
  });
  /**
   * 初始化默认选择
   */

  function init(obj) {
    obj.find('li.data-selected').addClass('selected').siblings('li').removeClass('selected');
  }
}
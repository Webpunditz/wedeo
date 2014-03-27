//======================================Global Variables =================================
var next_page = 2;
var total_pages;
var initiated = 0;
$(document).ready(function(e) {	

//============================== category page functions ====================================	
	$('.cat').addClass('shake');
	$('.cat').each(function(i,v){
		var categories = localStorage.getItem('categories');
		if(categories !== null){
		categories = categories.split(',');
		var thisItem = $(this);
		var thisCategory = $(this).attr('data-title');
		$.each(categories,function(i,v){
			if(v == thisCategory){
				$(thisItem).removeClass('shake');
				$(thisItem).attr("data-check", "1");
			}
		});
		}
	});
	
    $('.cat').click(function(){
		$(this).toggleClass('shake');
		 var dataCheck = $(this).attr("data-check");
        if($(this).attr("data-check") == "0"){
             $(this).attr("data-check", "1");			
        } else if($(this).attr("data-check") == "1"){
             $(this).attr("data-check","0");
        }
        var cat = "";
        $('.cat').each(function(){
            if($(this).attr('data-check') == "1"){
                cat += "," + $(this).attr('data-title');
            }
        });
        localStorage.setItem("categories", cat.slice( 1 ));
	});
	$('.cat').click(function(){
		if(localStorage.getItem('categories') === null || localStorage.getItem('categories') === ''){
			$('#skipContinue').html('Skip');
		}else{
			$('#skipContinue').html('Continue');
		}
	});
	
	// divide things
	

//============================== add category page functions ====================================

$('.add').click(function(){
	var add = localStorage.setItem("add", true);
	location.href = 'index.html';	
});
	
//============================== player page functions ====================================

	$(function () {
		var video_id = GetParameterValues('v');
		var id = GetParameterValues('id');
		var des = GetParameterValues('des');
		var tit = GetParameterValues('title');
		var agotime$ = GetParameterValues('ago');
	});
	function GetParameterValues(param) {
		var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for (var i = 0; i < url.length; i++) {
			var urlparam = url[i].split('=');
			if (urlparam[0] == param) {
				return urlparam[1];
			}
		}
	}
	var videoLink = "http://www.youtube.com/embed/" + GetParameterValues('v') +"?html5=1";
	$('.wedeoplayer iframe').attr('src', videoLink).show();
	$('.description h1').html(decodeURIComponent(GetParameterValues('title')));
	$('.description span').html(decodeURIComponent(GetParameterValues('ago')));
	$('.description p').html(decodeURIComponent(GetParameterValues('des')));
});
(function()
{
	var xmp = $("xmp");
	xmp.attr("theme", "spacelab");
	
	var hd = $('head');
	hd.append('<meta http-equiv="X_UA_Compatible" content="IE=Edge"/>');
	
	$("body").append(navbar);
	$("#headline").text($("title").text());
	
	var count = 0;
	var fixBreadcrumb = function() 
	{
		var bc = $(".container ol:first-child");
		if (bc.length > 0)
		{
			bc.addClass("breadcrumb").addClass("brand");
			$("<span> / </span>").insertAfter(bc.children());
			bc.append($("<li class='active'>" + $("title").text() + "</li>"));
			$(".navbar-header").empty();
			$(".navbar-header").append(bc);
		} else if (++count < 100)
		{
			setTimeout(fixBreadcrumb, 0);
		}
	};
	setTimeout(fixBreadcrumb, 0);
	
})();
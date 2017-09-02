$(function(){

	var r = 0;
	var g = 0;
	var b = 0;
	var increase = 5;
	var rgb = "";

	$("html").mousedown(function(){
		if(b < 255) b+= increase;

		else b = 0;

		setVals("","",b);
		calcColor();
		copy();
	});

	$("html").mousemove(function(event){
		setVals(event.pageX,event.pageY);
		calcColor();
		copy();

	});

	function copy()
	{
		//Not mine but it works
		var dummy = document.createElement("input");
		// Add it to the document
		document.body.appendChild(dummy);
		// Set its ID
		dummy.setAttribute("id", "dummy_id");
		// Output the array into it
		document.getElementById("dummy_id").value=rgb;
		// Select it
		dummy.select();
		// Copy its contents
		document.execCommand("copy");
		// Remove it as its not needed anymore
		document.body.removeChild(dummy);
	}

	function setVals(x,y,z)
	{
		if(x) r = Map(x,0,screen.availWidth);
		if(y) g = Map(y,0,screen.availHeight);
		if(z) b = z;
	}

	function calcColor()
	{
		rgb = "rgb"+"("+r+","+g+","+b+")";

		$("#rgb").text(rgb);

		$("html").css("background-color",rgb);
	}

	function Map(val,min,max)
	{
		var diff = max-min;
		var fraction = val/diff;

		return Math.ceil(255*fraction);
	}

});

$(document).ready(function(){
	$(".oof").click(function(e){
		var k=String(e.currentTarget.id);
		$.post("/upsmsSend",{num:k,},function(data,status){
			console.log(data);
			alert("Message is sent");
		});
	});
	$(".kof").click(function(e){
		var k=String(e.currentTarget.id);
		$.post("/presmsSend",{num:k},function(data,status){
			console.log(data);
			alert("Message is sent");
		});
	});

});

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('.cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
});

$('.infoButton,.aboutButton').click(function() {
	$('.sideBar').toggleClass('expanded');
	$('.projectsList').toggleClass('collapsed');
	$('.navArrows').toggleClass('collapsed');
	
});

$('.infoButton').click(function(){
    var $this = $(this);
    $this.toggleClass('.infoButton');
    if($this.hasClass('.infoButton')){
        $this.text('Close');
    } else {
        $this.text('Info');
	}	
});

$( function() {
	$( ".projectThumbnail" ).draggable();
} );


$('.aboutButton').click(function(){
	var $this = $(this);
	$this.toggleClass('.aboutButton');
	if($this.hasClass('.aboutButton')){
			$this.text('Close');         
	} else {
			$this.text('About');
	}
});

$('.nextButton').click(function(event){
	event.preventDefault();
	console.log($(".current").length);
	if($(".current").length == ($(".img-wrap").length)) {
		console.log("reset");
		$(".current").removeClass("current");
		$(".img-wrap").first().addClass("current");
	} else {
		$(".current").next().addClass("current");
	}
});

$('.backButton').click(function(event){
	event.preventDefault();
	console.log($(".current").length);
	if($(".current").length == 1) {
		console.log("reset");
		$(".img-wrap").addClass("current");
	} else {
		$(".current").last().removeClass("current");
	}
});


$(".img-wrap").each(function() {
	$(this).css("top",(Math.random()*8)+"vw");
	$(this).css("left",(Math.random()*-4) + "vw");
});


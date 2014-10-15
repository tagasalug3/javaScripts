$(document).ready(function(){
    $("#empathyMeter").hide().css({width:"0px"});
    $("#managementMeter").hide().css({width:"0px"});
    $("#teamWorkMeter").hide().css({width:"0px"});
    $("#contentStrtgyMeter").hide().css({width:"0px"});
	$("#sewingMeter").hide().css({width:"0px"});
    $("#uxBestPracticesMeter").hide().css({width:"0px"});
    $("#codingHTMLMeter").hide().css({width:"0px"});
    $("#codingCSSMeter").hide().css({width:"0px"});
    $("#codingJSMeter").hide().css({width:"0px"});
    $("#codingJQMeter").hide().css({width:"0px"});
    $("#codingPHPMeter").hide().css({width:"0px"});
	$("#ironingMeter").hide().css({width:"0px"});

    $("#empathyGauge").mouseenter(function(){
    	$("#empathyMeter").fadeIn(1);
    	$("#empathyMeter").animate({width:"95%"}, 2000);
  	});
  	
  	$("#managementGauge").mouseenter(function(){
    	$("#managementMeter").fadeIn(1);
    	$("#managementMeter").animate({width:"90%"}, 2000);
  	});
 	
  	$("#teamWorkGauge").mouseenter(function(){
    	$("#teamWorkMeter").fadeIn(1);
    	$("#teamWorkMeter").animate({width:"90%"}, 2000);
  	});
  	
	$("#contentStrtgyGauge").mouseenter(function(){
    	$("#contentStrtgyMeter").fadeIn(1);
    	$("#contentStrtgyMeter").animate({width:"93%"}, 2000);
  	});
	
	$("#sewingGauge").mouseenter(function(){
    	$("#sewingMeter").fadeIn(1);
    	$("#sewingMeter").animate({width:"9%"}, 2000);
  	});
  	
	$("#uxBestPracticesGauge").mouseenter(function(){
    	$("#uxBestPracticesMeter").fadeIn(1);
    	$("#uxBestPracticesMeter").animate({width:"88%"}, 2000);
  	});

	$("#codingHTMLGauge").mouseenter(function(){
    	$("#codingHTMLMeter").fadeIn(1);
    	$("#codingHTMLMeter").animate({width:"90%"}, 2000);
  	});
  	
	$("#codingCSSGauge").mouseenter(function(){
    	$("#codingCSSMeter").fadeIn(1);
    	$("#codingCSSMeter").animate({width:"90%"}, 2000);
  	});
  	
	$("#codingJSGauge").mouseenter(function(){
    	$("#codingJSMeter").fadeIn(1);
    	$("#codingJSMeter").animate({width:"75%"}, 2000);
  	});
  	
	$("#codingJQGauge").mouseenter(function(){
    	$("#codingJQMeter").fadeIn(1);
    	$("#codingJQMeter").animate({width:"87%"}, 2000);
  	});
  	
	$("#codingPHPGauge").mouseenter(function(){
    	$("#codingPHPMeter").fadeIn(1);
    	$("#codingPHPMeter").animate({width:"75%"}, 2000);
  	});
	
	$("#ironingGauge").mouseenter(function(){
    	$("#ironingMeter").fadeIn(1);
    	$("#ironingMeter").animate({width:"3%"}, 2000);
  	});
    
  });
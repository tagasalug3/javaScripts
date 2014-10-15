$(document).ready(function(){

 var allBoxes = "#targetUsers, #defineNeeds, #artiRequire, #teamMgt, #infoArch, #workFlow, #contentStrat, #projMgt, #projPrep, #understanding, #research, #design, #execution,#testing, #iteration, #endorsement, #support, #mockUps, #wireframes, #prototypes, #personas, #workflowDiagrams, #webtools";	
 var allBoxesH2 = "#targetUsers h2, #defineNeeds h2, #artiRequire h2, #teamMgt  h2, #infoArch h2, #workFlow h2, #contentStrat h2, #projMgt h2, #projPrep h2, #understanding h2, #research h2, #design h2, #execution h2,#testing h2, #iteration h2, #endorsement h2, #support h2, #mockUps h2, #wireframes h2, #prototypes h2, #personas h2, #workflowDiagrams h2, #webtools h2";	
 var allBoxesP = "#targetUsers p, #defineNeeds p, #artiRequire p, #teamMgt p, #infoArch p, #workFlow p, #contentStrat p, #projMgt p, #projPrep p, #understanding p, #research p, #design p, #execution p,#testing p, #iteration p, #endorsement p, #support p, #mockUps p, #wireframes p, #prototypes p, #personas p, #workflowDiagrams p, #webtools p";	

 var normalFocusBox = {"width":"193px", "height":"193px", "border": "4px solid #7f5f54", "margin":"25px", "position":"relative", "overflow":"hidden"};
 var normalStructureBox = {"width":"193px", "height":"193px", "border": "4px solid #8e5835", "position":"relative", "overflow":"hidden"};
 var normalProcessBox = {"width":"193px", "height":"193px", "border": "4px solid #82674e", "position":"relative", "overflow":"hidden"};
 var normalToolsBox = {"width":"193px", "height":"193px", "border": "4px solid #88535b", "position":"relative", "overflow":"hidden"};
 
 
 var normalH2 = {"font-size":"70px","margin-top":"70px","margin-left":"105px"};
 var largeH2 = {"font-size":"144px","margin-top":"55px","margin-left":"30px"};
 
 var normalP = {"font-size":"20px", "margin-left":"2px"};

function makeBoxSmall()
{
  $(allBoxes).css({"width":"203px", "height":"203px", "margin":"25px", "overflow":"hidden"});
  $(allBoxesH2).css({"font-size":"80px","margin-top":"100px","margin-left":"100px"});
  $(allBoxesP).hide();
  $("#targetUsers, #defineNeeds, #artiRequire").css({"border": "3px solid #7f5f54"});
  $("#teamMgt, #infoArch, #workFlow, #contentStrat, #projMgt").css({"border": "3px solid #8e5835"});
  $("#projPrep, #understanding, #research, #design, #execution, #testing, #iteration, #endorsement, #support").css({"border": "3px solid #82674e"});
  $("#mockUps, #wireframes, #prototypes, #personas, #workflowDiagrams, #webtools").css({"border": "3px solid #88535b"});
}

function normalizeBox()
{
  $(allBoxes).css({"width":"193px", "height":"193px", "margin":"25px", "position":"relative", "overflow":"hidden"});
  $(allBoxesH2).css(normalH2);
  $(allBoxesP).css(normalP);
  $("#artiRequire p").css({"letter-spacing":"0px"});
  $("#infoArch p").css({"letter-spacing":"0px"});
  $("#targetUsers, #defineNeeds, #artiRequire").css({"border":"4px solid #7f5f54"});
  $("#teamMgt, #infoArch, #workFlow, #contentStrat, #projMgt").css({"border":"4px solid #8e5835"});
  $("#projPrep, #understanding, #research, #design, #execution, #testing, #iteration, #endorsement, #support").css({"border":"4px solid #82674e"});
  $("#mockUps, #wireframes, #prototypes, #personas, #workflowDiagrams, #webtools").css({"border":"4px solid #88535b"});
}
 
function jumpingBox(thatBox)
{
    $(thatBox).animate({"marginTop":"-=10px"}, 500);
    $(thatBox).animate({"marginTop":"+=10px"}, 500);
    $(thatBox).animate({"marginTop":"-=5px"}, 500);
    $(thatBox).animate({"marginTop":"+=5px"}, 500);
}
 
 normalizeBox();
 
  $("#targetUsers").mouseenter(function(){
    	$("#targetUsers h2").css(largeH2);
    	$("#targetUsers").css(normalFocusBox);
    	$("#targetUsers p").show().css(normalP);
    	jumpingBox("#targetUsers");
  });
 
  $("#targetUsers").click(function(){
    	window.location = '?page=element_tu';
    	
  });
  
  $("#targetUsers").mouseleave(function(){
    	normalizeBox();
  });
  
  
  $("#defineNeeds").mouseenter(function(){
    	$("#defineNeeds h2").css(largeH2);
    	$("#defineNeeds h2").css({"marginLeft":"20px"});
    	$("#defineNeeds").css(normalFocusBox);
    	$("#defineNeeds p").show().css(normalP);
    	jumpingBox("#defineNeeds");
  });  
  
  $("#defineNeeds").click(function(){
  		window.location = '?page=element_dn';
  });
  
  $("#defineNeeds").mouseleave(function(){
    	 normalizeBox();
  });
  
  
  $("#artiRequire").mouseenter(function(){
    	$("#artiRequire h2").css(largeH2);
    	$("#artiRequire").css(normalFocusBox);
    	$("#artiRequire p").show().css(normalP);
		jumpingBox("#artiRequire");  
  });    
  
  $("#artiRequire").click(function(){
    	window.location = '?page=element_ar';
  });

  $("#artiRequire").mouseleave(function(){
    	 normalizeBox();
  });
  
  
  $("#teamMgt").mouseenter(function(){
    	$("#teamMgt h2").css(largeH2);
    	$("#teamMgt h2").css({"marginLeft":"12px"});
    	$("#teamMgt").css(normalStructureBox);
    	$("#teamMgt p").show().css(normalP);
    	jumpingBox("#teamMgt");
  });    
  
  $("#teamMgt").click(function(){
      	window.location = '?page=element_tm';
  });

  $("#teamMgt").mouseleave(function(){
    	 normalizeBox();
  });
  
  
  $("#infoArch").mouseenter(function(){
    	$("#infoArch h2").css(largeH2);
    	$("#infoArch h2").css({"marginLeft":"45px"});
    	$("#infoArch").css(normalStructureBox);
    	$("#infoArch p").show().css(normalP);
    	jumpingBox("#infoArch");
  });      
  
  $("#infoArch").click(function(){
		window.location = '?page=element_ia';
  });

  $("#infoArch").mouseleave(function(){
    	 normalizeBox();
  });
  
  
  $("#workFlow").mouseenter(function(){
    	$("#workFlow h2").css(largeH2);
     	$("#workFlow h2").css({"marginLeft":"20px"});
     	$("#workFlow").css(normalStructureBox);
    	$("#workFlow p").show().css(normalP);
    	jumpingBox("#workFlow");
  });  
  
  $("#workFlow").click(function(){
    	window.location = '?page=element_wf';
  });

  $("#workFlow").mouseleave(function(){
    	 normalizeBox();
  });


  $("#contentStrat").mouseenter(function(){
    	$("#contentStrat h2").css(largeH2);
    	$("#contentStrat h2").css({"marginLeft":"25px"});
    	$("#contentStrat").css(normalStructureBox);
    	$("#contentStrat p").show().css(normalP);
    	jumpingBox("#contentStrat");
  });    
  
  $("#contentStrat").click(function(){
    	window.location = '?page=element_cs';
  });

  $("#contentStrat").mouseleave(function(){
    	 normalizeBox();
  });


  $("#projMgt").mouseenter(function(){
    	$("#projMgt h2").css(largeH2);
    	$("#projMgt h2").css({"marginLeft":"7px"});
    	$("#projMgt").css(normalStructureBox);
    	$("#projMgt p").show().css(normalP);
    	jumpingBox("#projMgt");
  });    
  
   $("#projMgt").click(function(){
    	window.location = '?page=element_pm';
  });
  
  $("#projMgt").mouseleave(function(){
    	 normalizeBox();
  });


  $("#projPrep").mouseenter(function(){
    	$("#projPrep h2").css(largeH2);
    	$("#projPrep h2").css({"marginLeft":"35px"});
    	$("#projPrep").css(normalProcessBox);
    	$("#projPrep p").show().css(normalP);
    	jumpingBox("#projPrep");
  });    
  
  $("#projPrep").click(function(){
    	window.location = '?page=element_pr';
  });
  
  $("#projPrep").mouseleave(function(){
    	 normalizeBox();
  });


  $("#understanding").mouseenter(function(){
    	$("#understanding h2").css(largeH2);
    	$("#understanding h2").css({"marginLeft":"18px"});
    	$("#understanding").css(normalProcessBox);
    	$("#understanding p").show().css(normalP);
    	jumpingBox("#understanding");
  });    
  
   $("#understanding").click(function(){
    	window.location = '?page=element_un';
  });
  
  $("#understanding").mouseleave(function(){
    	 normalizeBox();
  });


  $("#research").mouseenter(function(){
    	$("#research h2").css(largeH2);
    	$("#research h2").css({"marginLeft":"25px"});
    	$("#research").css(normalProcessBox);
    	$("#research p").show().css(normalP);
    	jumpingBox("#research");
  });    
  
   $("#research").click(function(){
    	window.location = '?page=element_re';
  });
  
  $("#research").mouseleave(function(){
    	 normalizeBox();
  });


  $("#design").mouseenter(function(){
    	$("#design h2").css(largeH2);
    	$("#design h2").css({"marginLeft":"22px"});
    	$("#design").css(normalProcessBox);
    	$("#design p").show().css(normalP);
    	jumpingBox("#design");
  });    
  
   $("#design").click(function(){
    	window.location = '?page=element_de';
  });
  
  $("#design").mouseleave(function(){
    	 normalizeBox();
  });


  $("#execution").mouseenter(function(){
    	$("#execution h2").css(largeH2);
    	$("#execution").css(normalProcessBox);
    	$("#execution p").show().css(normalP);
    	jumpingBox("#execution");
  });    
  
   $("#execution").click(function(){
    	window.location = '?page=element_ex';
  });
  
  $("#execution").mouseleave(function(){
    	 normalizeBox();
  });


  $("#testing").mouseenter(function(){
    	$("#testing h2").css(largeH2);
    	$("#testing").css(normalProcessBox);
    	$("#testing p").show().css(normalP);
    	jumpingBox("#testing");
  });    
  
   $("#testing").click(function(){
    	window.location = '?page=element_te';
  });
  
  $("#testing").mouseleave(function(){
    	 normalizeBox();
  });


  $("#iteration").mouseenter(function(){
    	$("#iteration h2").css(largeH2);
    	$("#iteration h2").css({"marginLeft":"55px"});
    	$("#iteration").css(normalProcessBox);
    	$("#iteration p").show().css(normalP);
    	jumpingBox("#iteration");
  });    
  
   $("#iteration").click(function(){
    	window.location = '?page=element_it';
  });
  
  $("#iteration").mouseleave(function(){
    	 normalizeBox();
  });


  $("#endorsement").mouseenter(function(){
    	$("#endorsement h2").css(largeH2);
    	$("#endorsement").css(normalProcessBox);
    	$("#endorsement p").show().css(normalP);
    	jumpingBox("#endorsement");
  });    
  
   $("#endorsement").click(function(){
    	window.location = '?page=element_en';
  });
  
  $("#endorsement").mouseleave(function(){
    	 normalizeBox();
  });


  $("#support").mouseenter(function(){
    	$("#support h2").css(largeH2);
    	$("#support h2").css({"marginLeft":"23px"});
    	$("#support").css(normalProcessBox);
    	$("#support p").show().css(normalP);
    	jumpingBox("#support");
  });    
  
   $("#support").click(function(){
    	window.location = '?page=element_su';
  });
  
  $("#support").mouseleave(function(){
    	 normalizeBox();
  });


  $("#mockUps").mouseenter(function(){
    	$("#mockUps h2").css(largeH2);
    	$("#mockUps h2").css({"marginLeft":"8px"});
    	$("#mockUps").css(normalToolsBox);
    	$("#mockUps p").show().css(normalP);
    	jumpingBox("#mockUps");
  });    
  
   $("#mockUps").click(function(){
    	window.location = '?page=element_mu';
  });
  
  $("#mockUps").mouseleave(function(){
    	 normalizeBox();
  });


  $("#wireframes").mouseenter(function(){
    	$("#wireframes h2").css(largeH2);
    	$("#wireframes h2").css({"marginLeft":"40px"});
    	$("#wireframes").css(normalToolsBox);
    	$("#wireframes p").show().css(normalP);
    	jumpingBox("#wireframes");
  });    
  
     $("#wireframes").click(function(){
    	window.location = '?page=element_fr';
  });
  
  $("#wireframes").mouseleave(function(){
    	 normalizeBox();
  });


  $("#prototypes").mouseenter(function(){
    	$("#prototypes h2").css(largeH2);
    	$("#prototypes h2").css({"marginLeft":"35px"});
    	$("#prototypes").css(normalToolsBox);
    	$("#prototypes p").show().css(normalP);
    	jumpingBox("#prototypes");
  });    
  
   $("#prototypes").click(function(){
    	window.location = '?page=element_pt';
  });
  
  $("#prototypes").mouseleave(function(){
    	 normalizeBox();
  });


  $("#personas").mouseenter(function(){
    	$("#personas h2").css(largeH2);
    	$("#personas h2").css({"marginLeft":"28px"});
    	$("#personas").css(normalToolsBox);
    	$("#personas p").show().css(normalP);
    	jumpingBox("#personas");
  });    
  
   $("#personas").click(function(){
    	window.location = '?page=element_pe';
  });
  
  $("#personas").mouseleave(function(){
    	 normalizeBox();
  });


  $("#workflowDiagrams").mouseenter(function(){
    	$("#workflowDiagrams h2").css(largeH2);
    	$("#workflowDiagrams h2").css({"marginLeft":"10px"});
    	$("#workflowDiagrams").css(normalToolsBox);
    	$("#workflowDiagrams p").show().css(normalP);
    	jumpingBox("#workflowDiagrams");
  });    
  
   $("#workflowDiagrams").click(function(){
    	window.location = '?page=element_wd';
  });
  
  $("#workflowDiagrams").mouseleave(function(){
    	 normalizeBox();
  });


  $("#webtools").mouseenter(function(){
    	$("#webtools h2").css(largeH2);
    	$("#webtools h2").css({"marginLeft":"20px"});
    	$("#webtools").css(normalToolsBox);
    	$("#webtools p").show().css(normalP);
    	jumpingBox("#webtools");
  });    
  
   $("#webtools").click(function(){
    	window.location = '?page=element_wt';
  });
  
  $("#webtools").mouseleave(function(){
    	 normalizeBox();
  });
		  	
});
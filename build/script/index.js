$(document).ready(function() {
	var skillData = [
		{'skillName':'html','data':'80%'},
		{'skillName':'css','data':'80%'},
		{'skillName':'javascript','data':'70%'},
		{'skillName':'jquery','data':'65%'},
		{'skillName':'ajax','data':'60%'},
		{'skillName':'html5','data':'45%'},
		{'skillName':'css3','data':'45%'},
		{'skillName':'gulp','data':'60%'},
		{'skillName':'less','data':'60%'},
		{'skillName':'git','data':'60%'},
		{'skillName':'photoshop','data':'90%'}
	]
	$('#fullPage').fullpage({
		// sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#f65'],
		scrollingSpeed: 500,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		navigation: true,
		// navigationColor: '#fff',
		navigationTooltips: ['首页', '个人信息', '项目&作品', '专业技能', '工作经历', '了解更多'],
		css3: true,
		verticalCentered: false,

		afterRender:function(anchorLink,index){
			$('.skill-tree').animate({
				'top':'52%',
				'opacity':1
			},1000,'easeOutBounce');

			setInterval(arrowAnimate,1500)

			function arrowAnimate(){
				$('.arrow').animate({top:'5px',opacity:1},600,'swing',function(){
					$(this).animate({top:'0px',opacity:0},600,'swing')
				})
			}
		},
		afterLoad:function(anchorLink,index){
			if(index == 1){
				$('.skill-tree').animate({
					'top':'52%',
					'opacity':1
				},1000,'easeOutBounce');
			}

			if(index == 2){
				$('.my-portrait').animate({opacity:1},2000,function(){
					$('.name').animate({opacity:1},1000,function(){
						$('.underLine-long').animate({width:'100%'},1000,'easeOutElastic',function(){
							$('.education').animate({opacity:1},1000,function(){
								$('.email').animate({opacity:1},1000,function(){
									$('.tel').animate({opacity:1},1000,function(){
										$('.underLine-short').animate({width:'50%'},1000,'easeOutElastic',function(){
											$('.position').animate({opacity:1},1000)
										})
									})
								})
							})
						})
					})
				})
			}
			if(index == 3){
				$('.logo-works').animate({left:'20',opacity:1},1000,'easeOutElastic')
			}
	
			if(index == 4){
				for(var i=0; i<skillData.length; i++){
					$('.'+skillData[i].skillName).animate({width: skillData[i].data},1000,'easeOutBounce');
				}
			}
			if(index == 5){
				$('.college').slideDown(1000,'easeOutBounce');
				var bounce_1 = setTimeout(function(){$('.firstJob').slideDown(1000,'easeOutElastic')}, 200);
				var bounce_2 = setTimeout(function(){$('.secondJob').slideDown(1000,'easeOutElastic')}, 400);
				var bounce_3 = setTimeout(function(){$('.thirdJob').slideDown(1000,'easeOutElastic')}, 600);
			}
		},
		onLeave:function(index, nextIndex, direction){
			if(index == 1){
				$('.skill-tree').animate({
					'top':'-269px',
					'opacity':0
				},500,'easeOutExpo')
			}

			if(index == 2 ){
				$('.my-portrait').animate({opacity:0},50,function(){
					$('.name').animate({opacity:0},50,function(){
						$('.underLine-long').animate({width:0},50,'easeOutElastic',function(){
							$('.education').animate({opacity:0},50,function(){
								$('.email').animate({opacity:0},50,function(){
									$('.tel').animate({opacity:0},50,function(){
										$('.underLine-short').animate({width:0},50,'easeOutElastic',function(){
											$('.position').animate({opacity:0},50)
										})
									})
								})
							})
						})
					})
				})
			}
			if(index == 3){
				$('.logo-works').animate({left:'-100px',opacity:0},1000,'easeOutBounce')
			}
			if(index == 4){
				for(var i=0; i<skillData.length; i++){
					console.log(skillData[i].skillName,skillData[i].data);
					$('.'+skillData[i].skillName).animate({width: 0},2000,'easeOutBounce');
				}
			}

			if(index == 5){
				$('.company').slideUp(500,0,'easeOutBounce');
			}
		}
	});
});
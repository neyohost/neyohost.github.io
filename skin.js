// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: minka-custom.ggsk
// Generated 2021-11-03T12:34:16

function pano2vrSkin(player,base) {
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
	player.addVariable('menu_open', 2, false);
	player.addVariable('menu_touch', 2, false);
	player.addVariable('menu_cloner', 1, 0);
	player.addVariable('category_var', 0, "");
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('plan_status', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
	player.addVariable('vis_loader', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._menu_responsive_small=document.createElement('div');
		el.ggId="menu responsive small";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1c212a;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 101.205%;';
		hs+='left : -5px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100.846%;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_responsive_small.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_responsive_small.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 500))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._menu_responsive_small.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu_responsive_small.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu_responsive_small.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._menu_responsive_small.ggCurrentLogicStateScaling == 0) {
					me._menu_responsive_small.ggParameter.sx = 0;
					me._menu_responsive_small.ggParameter.sy = 0;
					me._menu_responsive_small.style[domTransform]=parameterToTransform(me._menu_responsive_small.ggParameter);
				}
				else {
					me._menu_responsive_small.ggParameter.sx = 1;
					me._menu_responsive_small.ggParameter.sy = 1;
					me._menu_responsive_small.style[domTransform]=parameterToTransform(me._menu_responsive_small.ggParameter);
				}
			}
		}
		me._menu_responsive_small.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_responsive_small.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_responsive_small.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_responsive_small.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._menu_responsive_small.ggCurrentLogicStateAlpha == 0) {
					me._menu_responsive_small.style.visibility=me._menu_responsive_small.ggVisible?'inherit':'hidden';
					me._menu_responsive_small.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_responsive_small.style.opacity == 0.0) { me._menu_responsive_small.style.visibility="hidden"; } }, 505);
					me._menu_responsive_small.style.opacity=0;
				}
			}
		}
		me._menu_responsive_small.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs=basePath + 'images/image_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 114px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._menu_responsive_small.appendChild(me._image_11);
		el=me._svg_220=document.createElement('div');
		els=me._svg_220__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDMyOS4yNjkzMyAzMjkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSIiIGQ9Im0xOTQuODAwNzgxID'+
			'E2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3'+
			'NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zy'+
			'IgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_220__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_220.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._svg_220.ggUpdatePosition=function (useTransition) {
		}
		me._menu_responsive_small.appendChild(me._svg_220);
		el=me._node_scroller1=document.createElement('div');
		els=me._node_scroller1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 167px;';
		hs+='left : 0px;';
		hs+='margin-top : -83.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 362px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller1.ggScrollByX = function(diffX) {
			if(!me._node_scroller1.ggHorScrollVisible || diffX == 0 || me._node_scroller1.ggHPercentVisible >= 1.0) return;
			me._node_scroller1.ggScrollPosX = (me._node_scroller1__horScrollFg.offsetLeft + diffX);
			me._node_scroller1.ggScrollPosX = Math.max(me._node_scroller1.ggScrollPosX, 0);
			me._node_scroller1.ggScrollPosX = Math.min(me._node_scroller1.ggScrollPosX, me._node_scroller1__horScrollBg.offsetWidth - me._node_scroller1__horScrollFg.offsetWidth);
			me._node_scroller1__horScrollFg.style.left = me._node_scroller1.ggScrollPosX + 'px';
			me._node_scroller1__content.style.left = -(Math.round(me._node_scroller1.ggScrollPosX / me._node_scroller1.ggHPercentVisible)) + me._node_scroller1.ggContentLeftOffset + 'px';
			me._node_scroller1.ggScrollPosXPercent = (me._node_scroller1__horScrollFg.offsetLeft / me._node_scroller1__horScrollBg.offsetWidth);
		}
		me._node_scroller1.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller1.ggHorScrollVisible || diffX == 0 || me._node_scroller1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller1.ggScrollPosX >= me._node_scroller1__horScrollBg.offsetWidth - me._node_scroller1__horScrollFg.offsetWidth)) {
					me._node_scroller1.ggScrollPosX = Math.min(me._node_scroller1.ggScrollPosX, me._node_scroller1__horScrollBg.offsetWidth - me._node_scroller1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller1.ggScrollPosX <= 0)) {
					me._node_scroller1.ggScrollPosX = Math.max(me._node_scroller1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller1__horScrollFg.style.left = me._node_scroller1.ggScrollPosX + 'px';
			me._node_scroller1__content.style.left = -(Math.round(me._node_scroller1.ggScrollPosX / me._node_scroller1.ggHPercentVisible)) + me._node_scroller1.ggContentLeftOffset + 'px';
			me._node_scroller1.ggScrollPosXPercent = (me._node_scroller1__horScrollFg.offsetLeft / me._node_scroller1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller1.ggScrollByY = function(diffY) {
			if(!me._node_scroller1.ggVertScrollVisible || diffY == 0 || me._node_scroller1.ggVPercentVisible >= 1.0) return;
			me._node_scroller1.ggScrollPosY = (me._node_scroller1__vertScrollFg.offsetTop + diffY);
			me._node_scroller1.ggScrollPosY = Math.max(me._node_scroller1.ggScrollPosY, 0);
			me._node_scroller1.ggScrollPosY = Math.min(me._node_scroller1.ggScrollPosY, me._node_scroller1__vertScrollBg.offsetHeight - me._node_scroller1__vertScrollFg.offsetHeight);
			me._node_scroller1__vertScrollFg.style.top = me._node_scroller1.ggScrollPosY + 'px';
			me._node_scroller1__content.style.top = -(Math.round(me._node_scroller1.ggScrollPosY / me._node_scroller1.ggVPercentVisible)) + me._node_scroller1.ggContentTopOffset + 'px';
			me._node_scroller1.ggScrollPosYPercent = (me._node_scroller1__vertScrollFg.offsetTop / me._node_scroller1__vertScrollBg.offsetHeight);
		}
		me._node_scroller1.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller1.ggVertScrollVisible || diffY == 0 || me._node_scroller1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller1.ggScrollPosY >= me._node_scroller1__vertScrollBg.offsetHeight - me._node_scroller1__vertScrollFg.offsetHeight)) {
					me._node_scroller1.ggScrollPosY = Math.min(me._node_scroller1.ggScrollPosY, me._node_scroller1__vertScrollBg.offsetHeight - me._node_scroller1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller1.ggScrollPosY <= 0)) {
					me._node_scroller1.ggScrollPosY = Math.max(me._node_scroller1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller1__vertScrollFg.style.top = me._node_scroller1.ggScrollPosY + 'px';
			me._node_scroller1__content.style.top = -(Math.round(me._node_scroller1.ggScrollPosY / me._node_scroller1.ggVPercentVisible)) + me._node_scroller1.ggContentTopOffset + 'px';
			me._node_scroller1.ggScrollPosYPercent = (me._node_scroller1__vertScrollFg.offsetTop / me._node_scroller1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller1.ggHPercentVisible);
					me._node_scroller1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller1.offsetWidth - (me._node_scroller1.ggVertScrollVisible ? 4 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller1.offsetWidth - (me._node_scroller1.ggVertScrollVisible ? 4 : 0))) * me._node_scroller1.ggHPercentVisible);
					me._node_scroller1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller1.ggVPercentVisible);
					me._node_scroller1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller1.offsetHeight - (me._node_scroller1.ggHorScrollVisible ? 4 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller1.offsetHeight - (me._node_scroller1.ggHorScrollVisible ? 4 : 0))) * me._node_scroller1.ggVPercentVisible);
					me._node_scroller1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller1.ggDragLastX = t[0].clientX;
			me._node_scroller1.ggDragLastY = t[0].clientY;
			me._node_scroller1__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller1.ggDragInertiaX *= 0.65;
					me._node_scroller1.ggDragInertiaY *= 0.65;
					me._node_scroller1.ggScrollByX(-me._node_scroller1.ggDragInertiaX);
					me._node_scroller1.ggScrollByY(-me._node_scroller1.ggDragInertiaY);
					if (Math.abs(me._node_scroller1.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller1__content.ontouchend = null;
				me._node_scroller1__content.ontouchmove = null;
			}
			me._node_scroller1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._node_scroller1.ggDragLastX;
				var diffY = t[0].clientY - me._node_scroller1.ggDragLastY;
				me._node_scroller1.ggDragInertiaX = diffX;
				me._node_scroller1.ggDragInertiaY = diffY;
				me._node_scroller1.ggDragLastX = t[0].clientX;
				me._node_scroller1.ggDragLastY = t[0].clientY;
				me._node_scroller1.ggScrollByX(-diffX);
				me._node_scroller1.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._node_scroller1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 4px; height: 784px; background-color: rgba(0,0,0,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 4px; height: 784px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller1.ggScrollPosY = 0;
		me._node_scroller1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller1.ggDragInertiaY *= 0.65;
					me._node_scroller1.ggScrollByY(me._node_scroller1.ggDragInertiaY);
					if (Math.abs(me._node_scroller1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller1.ggDragLastY;
				me._node_scroller1.ggDragInertiaY = diffY;
				me._node_scroller1.ggDragLastY = e.clientY;
				me._node_scroller1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller1.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller1.ggDragInertiaY *= 0.65;
					me._node_scroller1.ggScrollByY(me._node_scroller1.ggDragInertiaY);
					if (Math.abs(me._node_scroller1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._node_scroller1.ggDragLastY;
				me._node_scroller1.ggDragInertiaY = diffY;
				me._node_scroller1.ggDragLastY = t[0].clientY;
				me._node_scroller1.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller1.ggScrollHeight;
			if (e.offsetY < me._node_scroller1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller1__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller1.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._node_scroller1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 4px; height: 4px; background-color: rgba(255,38,0,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #1c212a;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 93.3332%;';
		hs+='left : 4px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 370px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 4;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (4/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				me._node_scroller1__vertScrollBg.style.visibility = 'inherit';
				me._node_scroller1__vertScrollFg.style.visibility = 'inherit';
				me._node_scroller1.ggVertScrollVisible = true;
				if(me._node_scroller1.ggVertScrollVisible) {
					me._node_scroller1.ggAvailableWidth = me._node_scroller1.offsetWidth - 4;
					if (me._node_scroller1.ggHorScrollVisible) {
						me._node_scroller1.ggAvailableHeight = me._node_scroller1.offsetHeight - 4;
						me._node_scroller1.ggAvailableHeightWithScale = me._node_scroller1.getBoundingClientRect().height - me._node_scroller1__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller1__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller1.ggAvailableHeight = me._node_scroller1.offsetHeight;
						me._node_scroller1.ggAvailableHeightWithScale = me._node_scroller1.getBoundingClientRect().height;
						me._node_scroller1__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller1__vertScrollBg.style.height = me._node_scroller1.ggAvailableHeight + 'px';
					me._node_scroller1.ggVPercentVisible = contentHeight != 0 ? me._node_scroller1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller1.ggVPercentVisible > 1.0) me._node_scroller1.ggVPercentVisible = 1.0;
					me._node_scroller1.ggScrollHeight =  Math.round(me._node_scroller1__vertScrollBg.offsetHeight * me._node_scroller1.ggVPercentVisible);
					me._node_scroller1__vertScrollFg.style.height = me._node_scroller1.ggScrollHeight + 'px';
					me._node_scroller1.ggScrollPosY = me._node_scroller1.ggScrollPosYPercent * me._node_scroller1.ggAvailableHeight;
					me._node_scroller1.ggScrollPosY = Math.min(me._node_scroller1.ggScrollPosY, me._node_scroller1__vertScrollBg.offsetHeight - me._node_scroller1__vertScrollFg.offsetHeight);
					me._node_scroller1__vertScrollFg.style.top = me._node_scroller1.ggScrollPosY + 'px';
					if (me._node_scroller1.ggVPercentVisible < 1.0) {
						me._node_scroller1__content.style.top = -(Math.round(me._node_scroller1.ggScrollPosY / me._node_scroller1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller1.ggAvailableWidth = me._node_scroller1.offsetWidth;
					me._node_scroller1.ggScrollPosY = 0;
					me._node_scroller1.ggScrollPosYPercent = 0.0;
					me._node_scroller1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller1.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller1.ggVertScrollVisible) {
					me.updateSize(me._node_scroller1);
					me._node_scroller1.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner1=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 356;
		el.ggHeight = 163;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._node_cloner1.ggUpdating == true) return;
			me._node_cloner1.ggUpdating = true;
			var el=me._node_cloner1;
			var curNumCols = 0;
			curNumCols = me._node_cloner1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner1.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner1.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner1.parentNode.classList.contains('ggskin_subelement') && me._node_cloner1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 163px;';
		hs+='left : 7px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 356px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner1.childNodes.length; i++) {
				var child=me._node_cloner1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner1.ggUpdatePosition=function (useTransition) {
				me._node_cloner1.ggUpdate();
		}
		me._node_cloner1.ggNodeChange=function () {
			me._node_cloner1.ggUpdateConditionNodeChange();
		}
		me._node_scroller1__content.appendChild(me._node_cloner1);
		me._menu_responsive_small.appendChild(me._node_scroller1);
		me.divSkin.appendChild(me._menu_responsive_small);
		el=me._menu_responsive_tablets=document.createElement('div');
		el.ggId="menu responsive tablets";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1c212a;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 346px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_responsive_tablets.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_responsive_tablets.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._menu_responsive_tablets.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu_responsive_tablets.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu_responsive_tablets.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._menu_responsive_tablets.ggCurrentLogicStateScaling == 0) {
					me._menu_responsive_tablets.ggParameter.sx = 0;
					me._menu_responsive_tablets.ggParameter.sy = 0;
					me._menu_responsive_tablets.style[domTransform]=parameterToTransform(me._menu_responsive_tablets.ggParameter);
				}
				else if (me._menu_responsive_tablets.ggCurrentLogicStateScaling == 1) {
					me._menu_responsive_tablets.ggParameter.sx = 0;
					me._menu_responsive_tablets.ggParameter.sy = 0;
					me._menu_responsive_tablets.style[domTransform]=parameterToTransform(me._menu_responsive_tablets.ggParameter);
				}
				else {
					me._menu_responsive_tablets.ggParameter.sx = 1;
					me._menu_responsive_tablets.ggParameter.sy = 1;
					me._menu_responsive_tablets.style[domTransform]=parameterToTransform(me._menu_responsive_tablets.ggParameter);
				}
			}
		}
		me._menu_responsive_tablets.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_responsive_tablets.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_responsive_tablets.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_responsive_tablets.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._menu_responsive_tablets.ggCurrentLogicStateAlpha == 0) {
					me._menu_responsive_tablets.style.visibility=me._menu_responsive_tablets.ggVisible?'inherit':'hidden';
					me._menu_responsive_tablets.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_responsive_tablets.style.opacity == 0.0) { me._menu_responsive_tablets.style.visibility="hidden"; } }, 505);
					me._menu_responsive_tablets.style.opacity=0;
				}
			}
		}
		me._menu_responsive_tablets.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._node_scroller0=document.createElement('div');
		els=me._node_scroller0__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 162px;';
		hs+='margin-top : -81px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 50%;';
		hs+='width : 315px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller0.ggScrollByX = function(diffX) {
			if(!me._node_scroller0.ggHorScrollVisible || diffX == 0 || me._node_scroller0.ggHPercentVisible >= 1.0) return;
			me._node_scroller0.ggScrollPosX = (me._node_scroller0__horScrollFg.offsetLeft + diffX);
			me._node_scroller0.ggScrollPosX = Math.max(me._node_scroller0.ggScrollPosX, 0);
			me._node_scroller0.ggScrollPosX = Math.min(me._node_scroller0.ggScrollPosX, me._node_scroller0__horScrollBg.offsetWidth - me._node_scroller0__horScrollFg.offsetWidth);
			me._node_scroller0__horScrollFg.style.left = me._node_scroller0.ggScrollPosX + 'px';
			me._node_scroller0__content.style.left = -(Math.round(me._node_scroller0.ggScrollPosX / me._node_scroller0.ggHPercentVisible)) + me._node_scroller0.ggContentLeftOffset + 'px';
			me._node_scroller0.ggScrollPosXPercent = (me._node_scroller0__horScrollFg.offsetLeft / me._node_scroller0__horScrollBg.offsetWidth);
		}
		me._node_scroller0.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller0.ggHorScrollVisible || diffX == 0 || me._node_scroller0.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller0.ggScrollPosX >= me._node_scroller0__horScrollBg.offsetWidth - me._node_scroller0__horScrollFg.offsetWidth)) {
					me._node_scroller0.ggScrollPosX = Math.min(me._node_scroller0.ggScrollPosX, me._node_scroller0__horScrollBg.offsetWidth - me._node_scroller0__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller0.ggScrollPosX <= 0)) {
					me._node_scroller0.ggScrollPosX = Math.max(me._node_scroller0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller0__horScrollFg.style.left = me._node_scroller0.ggScrollPosX + 'px';
			me._node_scroller0__content.style.left = -(Math.round(me._node_scroller0.ggScrollPosX / me._node_scroller0.ggHPercentVisible)) + me._node_scroller0.ggContentLeftOffset + 'px';
			me._node_scroller0.ggScrollPosXPercent = (me._node_scroller0__horScrollFg.offsetLeft / me._node_scroller0__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller0.ggScrollByY = function(diffY) {
			if(!me._node_scroller0.ggVertScrollVisible || diffY == 0 || me._node_scroller0.ggVPercentVisible >= 1.0) return;
			me._node_scroller0.ggScrollPosY = (me._node_scroller0__vertScrollFg.offsetTop + diffY);
			me._node_scroller0.ggScrollPosY = Math.max(me._node_scroller0.ggScrollPosY, 0);
			me._node_scroller0.ggScrollPosY = Math.min(me._node_scroller0.ggScrollPosY, me._node_scroller0__vertScrollBg.offsetHeight - me._node_scroller0__vertScrollFg.offsetHeight);
			me._node_scroller0__vertScrollFg.style.top = me._node_scroller0.ggScrollPosY + 'px';
			me._node_scroller0__content.style.top = -(Math.round(me._node_scroller0.ggScrollPosY / me._node_scroller0.ggVPercentVisible)) + me._node_scroller0.ggContentTopOffset + 'px';
			me._node_scroller0.ggScrollPosYPercent = (me._node_scroller0__vertScrollFg.offsetTop / me._node_scroller0__vertScrollBg.offsetHeight);
		}
		me._node_scroller0.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller0.ggVertScrollVisible || diffY == 0 || me._node_scroller0.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller0.ggScrollPosY >= me._node_scroller0__vertScrollBg.offsetHeight - me._node_scroller0__vertScrollFg.offsetHeight)) {
					me._node_scroller0.ggScrollPosY = Math.min(me._node_scroller0.ggScrollPosY, me._node_scroller0__vertScrollBg.offsetHeight - me._node_scroller0__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller0.ggScrollPosY <= 0)) {
					me._node_scroller0.ggScrollPosY = Math.max(me._node_scroller0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller0__vertScrollFg.style.top = me._node_scroller0.ggScrollPosY + 'px';
			me._node_scroller0__content.style.top = -(Math.round(me._node_scroller0.ggScrollPosY / me._node_scroller0.ggVPercentVisible)) + me._node_scroller0.ggContentTopOffset + 'px';
			me._node_scroller0.ggScrollPosYPercent = (me._node_scroller0__vertScrollFg.offsetTop / me._node_scroller0__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller0.ggHPercentVisible);
					me._node_scroller0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller0.offsetWidth - (me._node_scroller0.ggVertScrollVisible ? 4 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller0.offsetWidth - (me._node_scroller0.ggVertScrollVisible ? 4 : 0))) * me._node_scroller0.ggHPercentVisible);
					me._node_scroller0.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller0.ggVPercentVisible);
					me._node_scroller0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller0.offsetHeight - (me._node_scroller0.ggHorScrollVisible ? 4 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller0.offsetHeight - (me._node_scroller0.ggHorScrollVisible ? 4 : 0))) * me._node_scroller0.ggVPercentVisible);
					me._node_scroller0.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller0.ggDragLastX = t[0].clientX;
			me._node_scroller0.ggDragLastY = t[0].clientY;
			me._node_scroller0__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller0.ggDragInertiaX *= 0.65;
					me._node_scroller0.ggDragInertiaY *= 0.65;
					me._node_scroller0.ggScrollByX(-me._node_scroller0.ggDragInertiaX);
					me._node_scroller0.ggScrollByY(-me._node_scroller0.ggDragInertiaY);
					if (Math.abs(me._node_scroller0.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller0__content.ontouchend = null;
				me._node_scroller0__content.ontouchmove = null;
			}
			me._node_scroller0__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._node_scroller0.ggDragLastX;
				var diffY = t[0].clientY - me._node_scroller0.ggDragLastY;
				me._node_scroller0.ggDragInertiaX = diffX;
				me._node_scroller0.ggDragInertiaY = diffY;
				me._node_scroller0.ggDragLastX = t[0].clientX;
				me._node_scroller0.ggDragLastY = t[0].clientY;
				me._node_scroller0.ggScrollByX(-diffX);
				me._node_scroller0.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._node_scroller0__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 4px; height: 584px; background-color: rgba(0,0,0,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller0__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 4px; height: 584px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller0.ggScrollPosY = 0;
		me._node_scroller0.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller0.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller0.ggDragInertiaY *= 0.65;
					me._node_scroller0.ggScrollByY(me._node_scroller0.ggDragInertiaY);
					if (Math.abs(me._node_scroller0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller0.ggDragLastY;
				me._node_scroller0.ggDragInertiaY = diffY;
				me._node_scroller0.ggDragLastY = e.clientY;
				me._node_scroller0.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller0.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller0.ggDragInertiaY *= 0.65;
					me._node_scroller0.ggScrollByY(me._node_scroller0.ggDragInertiaY);
					if (Math.abs(me._node_scroller0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._node_scroller0.ggDragLastY;
				me._node_scroller0.ggDragInertiaY = diffY;
				me._node_scroller0.ggDragLastY = t[0].clientY;
				me._node_scroller0.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller0.ggScrollHeight;
			if (e.offsetY < me._node_scroller0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller0.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller0__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller0.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller0.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller0.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller0.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._node_scroller0__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 4px; height: 4px; background-color: rgba(255,38,0,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #1c212a;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 584px;';
		hs+='left : 9px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 328px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller0.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 4;
				if (contentWidth < containerWidth) {
					this.ggContent.style.right = (this.ggVertScrollVisible ? 4 : 0) + 'px';
					this.ggContent.style.left = '';
					this.ggContent.style.marginRight = '0px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 4;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (4/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				me._node_scroller0__vertScrollBg.style.visibility = 'inherit';
				me._node_scroller0__vertScrollFg.style.visibility = 'inherit';
				me._node_scroller0.ggVertScrollVisible = true;
				if(me._node_scroller0.ggVertScrollVisible) {
					me._node_scroller0.ggAvailableWidth = me._node_scroller0.offsetWidth - 4;
					if (me._node_scroller0.ggHorScrollVisible) {
						me._node_scroller0.ggAvailableHeight = me._node_scroller0.offsetHeight - 4;
						me._node_scroller0.ggAvailableHeightWithScale = me._node_scroller0.getBoundingClientRect().height - me._node_scroller0__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller0__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller0.ggAvailableHeight = me._node_scroller0.offsetHeight;
						me._node_scroller0.ggAvailableHeightWithScale = me._node_scroller0.getBoundingClientRect().height;
						me._node_scroller0__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller0__vertScrollBg.style.height = me._node_scroller0.ggAvailableHeight + 'px';
					me._node_scroller0.ggVPercentVisible = contentHeight != 0 ? me._node_scroller0.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller0.ggVPercentVisible > 1.0) me._node_scroller0.ggVPercentVisible = 1.0;
					me._node_scroller0.ggScrollHeight =  Math.round(me._node_scroller0__vertScrollBg.offsetHeight * me._node_scroller0.ggVPercentVisible);
					me._node_scroller0__vertScrollFg.style.height = me._node_scroller0.ggScrollHeight + 'px';
					me._node_scroller0.ggScrollPosY = me._node_scroller0.ggScrollPosYPercent * me._node_scroller0.ggAvailableHeight;
					me._node_scroller0.ggScrollPosY = Math.min(me._node_scroller0.ggScrollPosY, me._node_scroller0__vertScrollBg.offsetHeight - me._node_scroller0__vertScrollFg.offsetHeight);
					me._node_scroller0__vertScrollFg.style.top = me._node_scroller0.ggScrollPosY + 'px';
					if (me._node_scroller0.ggVPercentVisible < 1.0) {
						me._node_scroller0__content.style.top = -(Math.round(me._node_scroller0.ggScrollPosY / me._node_scroller0.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller0.ggAvailableWidth = me._node_scroller0.offsetWidth;
					me._node_scroller0.ggScrollPosY = 0;
					me._node_scroller0.ggScrollPosYPercent = 0.0;
					me._node_scroller0__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller0.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller0.ggVertScrollVisible) {
					me.updateSize(me._node_scroller0);
					me._node_scroller0.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner0=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 312;
		el.ggHeight = 151;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._node_cloner0.ggUpdating == true) return;
			me._node_cloner0.ggUpdating = true;
			var el=me._node_cloner0;
			var curNumCols = 0;
			curNumCols = me._node_cloner0.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner0.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner0.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner0.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner0.parentNode.classList.contains('ggskin_subelement') && me._node_cloner0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 151px;';
		hs+='left : 4px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 312px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner0.childNodes.length; i++) {
				var child=me._node_cloner0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner0.ggUpdatePosition=function (useTransition) {
				me._node_cloner0.ggUpdate();
		}
		me._node_cloner0.ggNodeChange=function () {
			me._node_cloner0.ggUpdateConditionNodeChange();
		}
		me._node_scroller0__content.appendChild(me._node_cloner0);
		me._menu_responsive_tablets.appendChild(me._node_scroller0);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 27px;';
		hs+='left : 114px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._menu_responsive_tablets.appendChild(me._image_10);
		el=me._svg_22=document.createElement('div');
		els=me._svg_22__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDMyOS4yNjkzMyAzMjkiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSIiIGQ9Im0xOTQuODAwNzgxID'+
			'E2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3'+
			'NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zy'+
			'IgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_22__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_22.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._svg_22.ggUpdatePosition=function (useTransition) {
		}
		me._menu_responsive_tablets.appendChild(me._svg_22);
		me.divSkin.appendChild(me._menu_responsive_tablets);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggDy=-31;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -26px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._menu_background.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._menu_background.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._menu_background.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateScaling == 0) {
					me._menu_background.ggParameter.sx = 0;
					me._menu_background.ggParameter.sy = 0;
					me._menu_background.style[domTransform]=parameterToTransform(me._menu_background.ggParameter);
				}
				else {
					me._menu_background.ggParameter.sx = 1;
					me._menu_background.ggParameter.sy = 1;
					me._menu_background.style[domTransform]=parameterToTransform(me._menu_background.ggParameter);
				}
			}
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1c212a;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 17px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 5px 0px 150px 35px #1c212a;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 142px;';
		hs+='margin-top : -71px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 50%;';
		hs+='width : 263px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			me._node_scroller__content.style.left = -(Math.round(me._node_scroller.ggScrollPosX / me._node_scroller.ggHPercentVisible)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			me._node_scroller__content.style.left = -(Math.round(me._node_scroller.ggScrollPosX / me._node_scroller.ggHPercentVisible)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 4 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 4 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 4 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 4 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t[0].clientX;
			me._node_scroller.ggDragLastY = t[0].clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(-me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(-me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
			}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._node_scroller.ggDragLastX;
				var diffY = t[0].clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaX = diffX;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastX = t[0].clientX;
				me._node_scroller.ggDragLastY = t[0].clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 4px; height: 733px; background-color: rgba(0,0,0,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 4px; height: 733px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t[0].clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 4px; height: 4px; background-color: rgba(255,38,0,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 88.3133%;';
		hs+='left : 5px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 277px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 4;
				if (contentWidth < containerWidth) {
					this.ggContent.style.right = (this.ggVertScrollVisible ? 4 : 0) + 'px';
					this.ggContent.style.left = '';
					this.ggContent.style.marginRight = '0px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (this.ggHorScrollVisible) containerHeight -= 4;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (4/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				me._node_scroller__vertScrollBg.style.visibility = 'inherit';
				me._node_scroller__vertScrollFg.style.visibility = 'inherit';
				me._node_scroller.ggVertScrollVisible = true;
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth - 4;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight - 4;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						me._node_scroller__content.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 266;
		el.ggHeight = 115;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._checkmark_tick && me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_image_cloner && me._node_cloner.ggInstances[i]._node_image_cloner.logicBlock_alpha) {
						me._node_cloner.ggInstances[i]._node_image_cloner.logicBlock_alpha();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._checkmark_tick && me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._checkmark_tick && me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._checkmark_tick && me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._checkmark_tick && me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._node_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 115px;';
		hs+='left : -2px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._rectangle_2.appendChild(me._node_scroller);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 69px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._image_1);
		me._menu_background.appendChild(me._rectangle_2);
		el=me._close_menu_left=document.createElement('div');
		el.ggId="close menu left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_menu_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_menu_left.onmouseover=function (e) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._close_menu_left.ggUpdatePosition=function (useTransition) {
		}
		me._menu_background.appendChild(me._close_menu_left);
		me.divSkin.appendChild(me._menu_background);
		el=me._active_openclose=document.createElement('div');
		el.ggId="Active open\/close";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 2;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._active_openclose.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._active_openclose.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._active_openclose.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._active_openclose.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._active_openclose.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._active_openclose.ggCurrentLogicStateScaling == 0) {
					me._active_openclose.ggParameter.sx = 0;
					me._active_openclose.ggParameter.sy = 0;
					me._active_openclose.style[domTransform]=parameterToTransform(me._active_openclose.ggParameter);
				}
				else {
					me._active_openclose.ggParameter.sx = 1;
					me._active_openclose.ggParameter.sy = 1;
					me._active_openclose.style[domTransform]=parameterToTransform(me._active_openclose.ggParameter);
				}
			}
		}
		me._active_openclose.onmouseover=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._active_openclose.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._active_openclose);
		el=me._boxshadow_left=document.createElement('div');
		el.ggId="boxshadow left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 5px 0px 150px 35px #1c212a;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boxshadow_left.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._boxshadow_left.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._boxshadow_left.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._boxshadow_left.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._boxshadow_left.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._boxshadow_left.ggCurrentLogicStateScaling == 0) {
					me._boxshadow_left.ggParameter.sx = 0;
					me._boxshadow_left.ggParameter.sy = 0;
					me._boxshadow_left.style[domTransform]=parameterToTransform(me._boxshadow_left.ggParameter);
				}
				else {
					me._boxshadow_left.ggParameter.sx = 1;
					me._boxshadow_left.ggParameter.sy = 1;
					me._boxshadow_left.style[domTransform]=parameterToTransform(me._boxshadow_left.ggParameter);
				}
			}
		}
		me._boxshadow_left.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._boxshadow_left);
		el=me._logo_destok=document.createElement('div');
		els=me._logo_destok__img=document.createElement('img');
		els.className='ggskin ggskin_logo_destok';
		hs=basePath + 'images/logo_destok.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Logo destok";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 131px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._logo_destok.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo_destok.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo_destok.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo_destok.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo_destok.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._logo_destok.ggCurrentLogicStateScaling == 0) {
					me._logo_destok.ggParameter.sx = 0;
					me._logo_destok.ggParameter.sy = 0;
					me._logo_destok.style[domTransform]=parameterToTransform(me._logo_destok.ggParameter);
				}
				else {
					me._logo_destok.ggParameter.sx = 1;
					me._logo_destok.ggParameter.sy = 1;
					me._logo_destok.style[domTransform]=parameterToTransform(me._logo_destok.ggParameter);
				}
			}
		}
		me._logo_destok.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._logo_destok);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 42px;';
		hs+='left : 634px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : hidden;';
		hs+='width : 118px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.ggNodeChange=function () {
			history.replaceState({}, player.userdata.title, location.href.replace(location.hash,"") + '#' + player.getCurrentNode());
		}
		me.divSkin.appendChild(me._rectangle_3);
		el=me._boton_nextresponsive=document.createElement('div');
		el.ggId="boton next-responsive";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 55px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		hs+='z-index: 2;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_nextresponsive.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._boton_nextresponsive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._boton_nextresponsive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._boton_nextresponsive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._boton_nextresponsive.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._boton_nextresponsive.ggCurrentLogicStateScaling == 0) {
					me._boton_nextresponsive.ggParameter.sx = 0;
					me._boton_nextresponsive.ggParameter.sy = 0;
					me._boton_nextresponsive.style[domTransform]=parameterToTransform(me._boton_nextresponsive.ggParameter);
				}
				else {
					me._boton_nextresponsive.ggParameter.sx = 1;
					me._boton_nextresponsive.ggParameter.sy = 1;
					me._boton_nextresponsive.style[domTransform]=parameterToTransform(me._boton_nextresponsive.ggParameter);
				}
			}
		}
		me._boton_nextresponsive.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_24=document.createElement('div');
		els=me._svg_24__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjU2IiBmaWxsPSIjZmZmZmZmIiBjeD0iMjU2IiBjeT0iMjU2Ii'+
			'B0cmFuc2Zvcm09Im1hdHJpeCgwLjUsMCwwLDAuNSwxMjgsMTI4KSIgc2hhcGU9ImNpcmNsZSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuODAwMDAwMDAwMDAwMDEpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODM3LDAsMCwxMTQuODM3LDAsMjU2czExNC44MzcsMjU2LDI1NiwyNTZzMjU2LTExNC44MzcsMjU2LTI1NlMzOTcuMTYzLDAsMjU2LDB6IE0zMzUuMDgzLDI3MS4wODMgICAgTDIyOC40MTYsMzc3'+
			'Ljc0OWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxYy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjUgICAgTDI4OS44MzUsMjU2bC05MS41ODQtOTEuNTg0Yy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjVzMjEuODI0LTguMzQxLDMwLjE2NSwwbDEwNi42NjcsMTA2LjY2NyAgICBDMzQzLjQyNCwyNDkuMjU5LDM0My40MjQsMjYyLjc0MSwzMzUuMDgzLDI3MS4wODN6IiBjbGFzcz0iIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93'+
			'd3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_24__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_24__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjU2IiBmaWxsPSIjMDAwMDAwIiBjeD0iMjU2IiBjeT0iMjU2Ii'+
			'B0cmFuc2Zvcm09Im1hdHJpeCgwLjY0LDAsMCwwLjY0LDkyLjE2LDkyLjE2KSIgc2hhcGU9ImNpcmNsZSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuODAwMDAwMDAwMDAwMDEpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODM3LDAsMCwxMTQuODM3LDAsMjU2czExNC44MzcsMjU2LDI1NiwyNTZzMjU2LTExNC44MzcsMjU2LTI1NlMzOTcuMTYzLDAsMjU2LDB6IE0zMzUuMDgzLDI3MS4wODMgICAgTDIyOC40'+
			'MTYsMzc3Ljc0OWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxYy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjUgICAgTDI4OS44MzUsMjU2bC05MS41ODQtOTEuNTg0Yy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjVzMjEuODI0LTguMzQxLDMwLjE2NSwwbDEwNi42NjcsMTA2LjY2NyAgICBDMzQzLjQyNCwyNDkuMjU5LDM0My40MjQsMjYyLjc0MSwzMzUuMDgzLDI3MS4wODN6IiBjbGFzcz0iIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Im'+
			'h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0'+
			'dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_24__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 24";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 4px;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_24.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
		}
		me._svg_24.onmouseover=function (e) {
			me._svg_24__img.style.visibility='hidden';
			me._svg_24__imgo.style.visibility='inherit';
		}
		me._svg_24.onmouseout=function (e) {
			me._svg_24__img.style.visibility='inherit';
			me._svg_24__imgo.style.visibility='hidden';
		}
		me._svg_24.ggUpdatePosition=function (useTransition) {
		}
		me._boton_nextresponsive.appendChild(me._svg_24);
		me.divSkin.appendChild(me._boton_nextresponsive);
		el=me._box_shadow_topresponsive=document.createElement('div');
		el.ggId="box shadow top-responsive";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 5px 0px 150px 35px #1c212a;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_shadow_topresponsive.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._box_shadow_topresponsive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._box_shadow_topresponsive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._box_shadow_topresponsive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._box_shadow_topresponsive.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._box_shadow_topresponsive.ggCurrentLogicStateScaling == 0) {
					me._box_shadow_topresponsive.ggParameter.sx = 0;
					me._box_shadow_topresponsive.ggParameter.sy = 0;
					me._box_shadow_topresponsive.style[domTransform]=parameterToTransform(me._box_shadow_topresponsive.ggParameter);
				}
				else {
					me._box_shadow_topresponsive.ggParameter.sx = 1;
					me._box_shadow_topresponsive.ggParameter.sy = 1;
					me._box_shadow_topresponsive.style[domTransform]=parameterToTransform(me._box_shadow_topresponsive.ggParameter);
				}
			}
		}
		me._box_shadow_topresponsive.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._box_shadow_topresponsive);
		el=me._box_shadow_botresponsive=document.createElement('div');
		el.ggId="box shadow bot-responsive";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 5px 0px 150px 35px #1c212a;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_shadow_botresponsive.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._box_shadow_botresponsive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._box_shadow_botresponsive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._box_shadow_botresponsive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._box_shadow_botresponsive.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._box_shadow_botresponsive.ggCurrentLogicStateScaling == 0) {
					me._box_shadow_botresponsive.ggParameter.sx = 0;
					me._box_shadow_botresponsive.ggParameter.sy = 0;
					me._box_shadow_botresponsive.style[domTransform]=parameterToTransform(me._box_shadow_botresponsive.ggParameter);
				}
				else {
					me._box_shadow_botresponsive.ggParameter.sx = 1;
					me._box_shadow_botresponsive.ggParameter.sy = 1;
					me._box_shadow_botresponsive.style[domTransform]=parameterToTransform(me._box_shadow_botresponsive.ggParameter);
				}
			}
		}
		me._box_shadow_botresponsive.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._box_shadow_botresponsive);
		el=me._boton_responsive=document.createElement('div');
		el.ggId="boton responsive";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 19px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:none;';
		hs+='z-index: 2;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_responsive.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._boton_responsive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._boton_responsive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._boton_responsive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._boton_responsive.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._boton_responsive.ggCurrentLogicStateScaling == 0) {
					me._boton_responsive.ggParameter.sx = 0;
					me._boton_responsive.ggParameter.sy = 0;
					me._boton_responsive.style[domTransform]=parameterToTransform(me._boton_responsive.ggParameter);
				}
				else {
					me._boton_responsive.ggParameter.sx = 1;
					me._boton_responsive.ggParameter.sy = 1;
					me._boton_responsive.style[domTransform]=parameterToTransform(me._boton_responsive.ggParameter);
				}
			}
		}
		me._boton_responsive.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._boton_responsive.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDI0MC44MzUgMjQwLjgzNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjAiPgogPGc+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIj4KICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3R5bGU9IiIgZD0iTTEyOS4wMDcsNTcuODE5Yy00LjY4LTQuNjgtMTIuNDk5LTQuNjgtMTcuMTkxLDBMMy41NTUsMTY1LjgwM2MtNC43NCw0Ljc0LTQuNzQsMTIuNDI3LDAsMTcuMTU1ICAgYzQuNzQsNC43NCwxMi40MzksNC43NCwxNy4xNzksMGw5OS42ODMtOTkuNDA2bDk5LjY3MSw5OS40MThjNC43NTIsNC43NCwxMi40MzksNC43NCwxNy4xOTEsMGM0Ljc0LTQuNzQsNC43NC0xMi40MjcsMC0xNy4xNTUgICBMMTI5LjAwNyw1Ny44MTl6IiBjbGFzcz0iIiBpZD0iRXhwYW5kX0xlc3MiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiLz4KICAgPGcv'+
			'PgogICA8Zy8+CiAgIDxnLz4KICAgPGcvPgogICA8Zy8+CiAgIDxnLz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3Zn'+
			'Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 3px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 164px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._boton_responsive.appendChild(me._svg_1);
		el=me._node_next_text=document.createElement('div');
		els=me._node_next_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node next- text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 158px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Geometrica\", sans-serif;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 158px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 6px 0px 6px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node_next_text.ggUpdateText=function() {
			var hs=me.ggUserdata.title+" ";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_next_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_next_text.ggUpdateText();
		});
		el.appendChild(els);
		me._node_next_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_next_text.onclick=function (e) {
			player.setVariableValue('menu_cloner', player.getVariableValue('menu_cloner') + Number("0"));
		}
		me._node_next_text.ggUpdatePosition=function (useTransition) {
		}
		me._boton_responsive.appendChild(me._node_next_text);
		me.divSkin.appendChild(me._boton_responsive);
		el=me._botons_responsive_=document.createElement('div');
		el.ggId="botons responsive ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 217px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		hs+='z-index: 3;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._botons_responsive_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._botons_responsive_.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._botons_responsive_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._botons_responsive_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._botons_responsive_.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._botons_responsive_.ggCurrentLogicStateScaling == 0) {
					me._botons_responsive_.ggParameter.sx = 0;
					me._botons_responsive_.ggParameter.sy = 0;
					me._botons_responsive_.style[domTransform]=parameterToTransform(me._botons_responsive_.ggParameter);
				}
				else {
					me._botons_responsive_.ggParameter.sx = 1;
					me._botons_responsive_.ggParameter.sy = 1;
					me._botons_responsive_.style[domTransform]=parameterToTransform(me._botons_responsive_.ggParameter);
				}
			}
		}
		me._botons_responsive_.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjU2IiBmaWxsPSIjMDAwMDAwIiBjeD0iMjU2IiBjeT0iMjU2Ii'+
			'B0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiIHNoYXBlPSJjaXJjbGUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNTM5OTk5OTk5OTk5OTk5OSwwLDAsMC41Mzk5OTk5OTk5OTk5OTk5LDExNy43NjAwMDAwMDAwMDAwMiwxMTcuNzYwMDAwMDAwMDAwMDIpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSIiIGQ9Ik00MDAsMGMtNjEuNzYsMC0xMTIsNTAuMjQtMTEyLDExMmMwLDU3LjQ3Miw4OS44NTYsMTU5LjI2NCwxMDAuMDk2LDE3MC42ODhjMy4wNCwzLjM2LDcuMzYsNS4zMTIsMTEu'+
			'OTA0LDUuMzEyICAgIHM4Ljg2NC0xLjk1MiwxMS45MDQtNS4zMTJDNDIyLjE0NCwyNzEuMjY0LDUxMiwxNjkuNDcyLDUxMiwxMTJDNTEyLDUwLjI0LDQ2MS43NiwwLDQwMCwweiBNNDAwLDE2MGMtMjYuNDk2LDAtNDgtMjEuNTA0LTQ4LTQ4ICAgIGMwLTI2LjQ5NiwyMS41MDQtNDgsNDgtNDhjMjYuNDk2LDAsNDgsMjEuNTA0LDQ4LDQ4QzQ0OCwxMzguNDk2LDQyNi40OTYsMTYwLDQwMCwxNjB6IiBjbGFzcz0iIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGc+CiAgICA8cGF0aCBmaWxsPS'+
			'IjZmZmZmZmIiBzdHlsZT0iIiBkPSJNMTAuMDQ4LDE4Ny45NjhDNCwxOTAuNCwwLDE5Ni4yODgsMCwyMDIuODQ4VjQ5NmMwLDUuMzEyLDIuNjU2LDEwLjI3Miw3LjA0LDEzLjI0OEM5LjcyOCw1MTEuMDQsMTIuODMyLDUxMiwxNiw1MTIgICAgYzIuMDE2LDAsNC4wMzItMC4zODQsNS45NTItMS4xNTJMMTYwLDQ1NS42MTZWMTI4TDEwLjA0OCwxODcuOTY4eiIgY2xhc3M9IiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3R5bGU9IiIgZD0i'+
			'TTQzNS43MTIsMzA0LjA2NEM0MjYuNjI0LDMxNC4xNzYsNDEzLjYsMzIwLDQwMCwzMjBjLTEzLjYsMC0yNi42MjQtNS44MjQtMzUuNzEyLTE1LjkzNiAgICBjLTMuMjY0LTMuNjE2LTcuNDU2LTguMzg0LTEyLjI4OC0xNC4wNDhWNTEybDE0OS45NTItNTkuOTY4YzYuMDgtMi40LDEwLjA0OC04LjMyLDEwLjA0OC0xNC44NDhWMjAxLjk1MiAgICBDNDg1Ljc5MiwyNDYuMzM2LDQ1MC43NTIsMjg3LjI5Niw0MzUuNzEyLDMwNC4wNjR6IiBjbGFzcz0iIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIC'+
			'AgPGc+CiAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHlsZT0iIiBkPSJNMjY2LjA4LDE1Ny42MzJMMTkyLDEyOHYzMjcuNjE2bDEyOCw1MS4ydi0yNTYuOTZDMjk5LjU1MiwyMjIuMzA0LDI3OC4yMDgsMTg5LjEyLDI2Ni4wOCwxNTcuNjMyeiIgY2xhc3M9IiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3'+
			'LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.onclick=function (e) {
			me._popup_image.ggText=player.getBasePath()+""+player.hotspot.url;
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
			player.setVariableValue('vis_image_popup', true);
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._svg_6);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDQwNy41MSA0MDcuNTEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjAzLjc1NSIgZmlsbD0iIzAwMDAwMCIgY3g9IjIwMy'+
			'43NTUiIGN5PSIyMDMuNzU1IiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiIHNoYXBlPSJjaXJjbGUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNTQsMCwwLDAuNTQsOTMuNzI3Mjk1MjI3MDUwOCw5My43MjcyOTU0NDYzOTU4NykiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPGc+CiAgICAgPHBvbHlnb24gZmlsbD0iI2ZmZmZmZiIgc3R5bGU9IiIgY2xhc3M9IiIgcG9pbnRzPSIxNjcuMTg0LDMwMS40NTMgMjM1LjYyNCwyNjEuMjI0IDE2Ny4xODQsMjIwLjk5NiAgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiLz4KICAgICA8'+
			'cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHlsZT0iIiBkPSJNMzYwLjQ5LDExMi4zMjdINDcuMDJjLTI1Ljk2OSwwLTQ3LjAyLDIxLjA1Mi00Ny4wMiw0Ny4wMnYxOTguNTMxYzAsMjUuOTY5LDIxLjA1Miw0Ny4wMiw0Ny4wMiw0Ny4wMkgzNjAuNDkgICAgIGMyNS45NjksMCw0Ny4wMi0yMS4wNTIsNDcuMDItNDcuMDJWMTU5LjM0N0M0MDcuNTEsMTMzLjM3OCwzODYuNDU4LDExMi4zMjcsMzYwLjQ5LDExMi4zMjd6IE0yNjQuNjI4LDI2NS42NTggICAgIGMtMC45NjEsMS45MjYtMi41MjMsMy40ODctNC40NDgsNC40NDlsLTk5Ljc4OCw1OC41MTRjLTEuNTM0LDEuMDU4LTMuMzYyLDEuNjA2LTUuMjI0LD'+
			'EuNTY3bC00LjcwMi0xLjU2NyAgICAgYy0yLjk1LTEuOTQxLTQuNTY1LTUuMzcxLTQuMTgtOC44ODJWMjAyLjcxYy0wLjM4NS0zLjUxLDEuMjI5LTYuOTQxLDQuMTgtOC44ODJjMy0yLjAyMiw2LjkyNi0yLjAyMiw5LjkyNywwbDk5Ljc4OCw1OC41MTQgICAgIEMyNjUuMDg1LDI1NC43OTEsMjY3LjA3NiwyNjAuNzUyLDI2NC42MjgsMjY1LjY1OHoiIGNsYXNzPSIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiLz4KICAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHlsZT0iIiBkPSJNNTMuODEyLDgwLjk4SDM1NC4yMmM1Ljc3MSwwLDEwLjQ0OS00LjY3OCwxMC40NDktMTAuNDQ5cy00LjY3OC0xMC40'+
			'NDktMTAuNDQ5LTEwLjQ0OUg1My44MTIgICAgIGMtNS43NzEsMC0xMC40NDksNC42NzgtMTAuNDQ5LDEwLjQ0OVM0OC4wNDEsODAuOTgsNTMuODEyLDgwLjk4eiIgY2xhc3M9IiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSIiIGQ9Ik05OC4yMiwyMy41MUgzMDkuMjljNS43NzEsMCwxMC40NDktNC42NzgsMTAuNDQ5LTEwLjQ0OVMzMTUuMDYxLDIuNjEyLDMwOS4yOSwyLjYxMkg5OC4yMiAgICAgYy01Ljc3MSwwLTEwLjQ0OSw0LjY3OC0xMC40NDksMTAuNDQ5UzkyLjQ1LDIzLjUxLDk4LjIyLDIzLjUxeiIgY2xhc3M9IiIgZGF0YS1vcm'+
			'lnaW5hbD0iIzAwMDAwMCIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgog'+
			'IDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC'+
			'9nPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 182px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.setVariableValue('vis_video_file', true);
				player.playPauseSound("popup_video_file","1");
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._svg_2);
		el=me._button_instagram0=document.createElement('div');
		els=me._button_instagram0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._button_instagram0__img.setAttribute('src',basePath + 'images/button_instagram0.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_instagram0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDQ4IiBoZWlnaHQ9IjI4OCIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHdpZHRoPSIyODgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZGVmcyBpZD0iU3ZnanNEZWZzMTA0OSIvPgogPGcgaWQ9IlN2Z2pzRzEwNTAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+CiAgPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGhlaWdodD0iMjg4IiB3aWR0aD0iMjg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJiIj4KICAgICA8Y2lyY2xlIHI9IjY0IiBmaWxsPSJub25lIiBjeD0iNjQiIGN5PSI2NCIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0iYyI+CiAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTEwNC0xNjNIMjRBMjQuMDcsMjQuMDcsMCwwLDAsMC0xMzl2ODBBMjQuMDcsMjQuMDcsMCwwLDAsMjQtMzVoODBhMjQuMDcsMjQuMDcsMCwwLDAsMjQtMjR2LTgwQTI0LjA3LDI0LjA3LDAsMCwwLDEwNC0x'+
			'NjNaTTEyMC01OWExNiwxNiwwLDAsMS0xNiwxNkgyNEExNiwxNiwwLDAsMSw4LTU5di04MGExNiwxNiwwLDAsMSwxNi0xNmg4MGExNiwxNiwwLDAsMSwxNiwxNloiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUiPgogICAgIDxjaXJjbGUgcj0iNSIgZmlsbD0ibm9uZSIgY3g9IjgyIiBjeT0iMjA5Ii8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJnIj4KICAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNNjQtMTE1QTE2LDE2LDAsMCwwLDQ4LTk5LDE2LDE2LDAsMCwwLDY0LTgzLDE2LDE2LDAsMCwwLDgwLTk5LDE2LDE2LDAsMCwwLDY0LTExNVptMCwyNGE4LD'+
			'gsMCwwLDEtOC04LDgsOCwwLDAsMSw4LTgsOCw4LDAsMCwxLDgsOEE4LDgsMCwwLDEsNjQtOTFaIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJoIj4KICAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNODQtNjNINDRBMTYsMTYsMCwwLDEsMjgtNzl2LTQwYTE2LDE2LDAsMCwxLDE2LTE2SDg0YTE2LDE2LDAsMCwxLDE2LDE2djQwQTE2LDE2LDAsMCwxLDg0LTYzWk00NC0xMjdhOCw4LDAsMCwwLTgsOHY0MGE4LDgsMCwwLDAsOCw4SDg0YTgsOCwwLDAsMCw4LTh2LTQwYTgsOCwwLDAsMC04LThaIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJpIj4KICAgICA8'+
			'Y2lyY2xlIHI9IjUiIGZpbGw9Im5vbmUiIGN4PSI4MiIgY3k9Ii0xMTciLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8cmFkaWFsR3JhZGllbnQgcj0iMTM3LjUiIGlkPSJhIiBjeD0iMjcuNSIgY3k9IjEyMS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgPHN0b3AgY2xhc3M9InN0b3BDb2xvcmZmZDY3NiBzdmdTaGFwZSIgb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZkNjc2Ii8+CiAgICAgPHN0b3AgY2xhc3M9InN0b3BDb2xvcmYyYTQ1NCBzdmdTaGFwZSIgb2Zmc2V0PSIuMjUiIHN0b3AtY29sb3I9IiNmMmE0NTQiLz4KICAgICA8c3RvcCBjbGFzcz0ic3RvcENvbG9yZj'+
			'A1YzNjIHN2Z1NoYXBlIiBvZmZzZXQ9Ii4zOCIgc3RvcC1jb2xvcj0iI2YwNWMzYyIvPgogICAgIDxzdG9wIGNsYXNzPSJzdG9wQ29sb3JjMjJmODYgc3ZnU2hhcGUiIG9mZnNldD0iLjciIHN0b3AtY29sb3I9IiNjMjJmODYiLz4KICAgICA8c3RvcCBjbGFzcz0ic3RvcENvbG9yNjY2NmFkIHN2Z1NoYXBlIiBvZmZzZXQ9Ii45NiIgc3RvcC1jb2xvcj0iIzY2NjZhZCIvPgogICAgIDxzdG9wIGNsYXNzPSJzdG9wQ29sb3I1YzZjYjIgc3ZnU2hhcGUiIG9mZnNldD0iLjk5IiBzdG9wLWNvbG9yPSIjNWM2Y2IyIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IHI9IjE0'+
			'OC41IiBpZD0iZCIgeGxpbms6aHJlZj0iI2EiIGN4PSIyNy41IiBjeT0iLTQxLjUiLz4KICAgIDxyYWRpYWxHcmFkaWVudCByPSIxODUuNjMiIGlkPSJmIiB4bGluazpocmVmPSIjYSIgY3g9IjEzLjg3IiBjeT0iMzAzLjM4Ii8+CiAgICA8cmFkaWFsR3JhZGllbnQgcj0iMTg1LjYzIiBpZD0iaiIgeGxpbms6aHJlZj0iI2EiIGN4PSIxMy44NyIgY3k9Ii0yMi42MiIvPgogICA8L2RlZnM+CiAgIDxnIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFwZSIgY2xpcC1wYXRoPSJ1cmwoI2IpIj4KICAgIDxjaXJjbGUgcj0iMTM3LjUiIGZpbGw9InVybCgjYSkiIGN4PSIyNy41IiBjeT'+
			'0iMTIxLjUiLz4KICAgPC9nPgogICA8ZyBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iY29sb3IwMDAgc3ZnU2hhcGUiIGNsaXAtcGF0aD0idXJsKCNjKSI+CiAgICA8Y2lyY2xlIHI9IjE0OC41IiBmaWxsPSJ1cmwoI2QpIiBjeD0iMjcuNSIgY3k9Ii00MS41Ii8+CiAgIDwvZz4KICAgPGcgZmlsbD0iIzAwMDAwMCIgY2xhc3M9ImNvbG9yMDAwIHN2Z1NoYXBlIiBjbGlwLXBhdGg9InVybCgjZSkiPgogICAgPGNpcmNsZSByPSIxODUuNjMiIGZpbGw9InVybCgjZikiIGN4PSIxMy44NyIgY3k9IjMwMy4zOCIvPgogICA8L2c+CiAgIDxnIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFw'+
			'ZSIgY2xpcC1wYXRoPSJ1cmwoI2cpIj4KICAgIDxjaXJjbGUgcj0iMTQ4LjUiIGZpbGw9InVybCgjZCkiIGN4PSIyNy41IiBjeT0iLTQxLjUiLz4KICAgPC9nPgogICA8ZyBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iY29sb3IwMDAgc3ZnU2hhcGUiIGNsaXAtcGF0aD0idXJsKCNoKSI+CiAgICA8Y2lyY2xlIHI9IjE0OC41IiBmaWxsPSJ1cmwoI2QpIiBjeD0iMjcuNSIgY3k9Ii00MS41Ii8+CiAgIDwvZz4KICAgPGcgZmlsbD0iIzAwMDAwMCIgY2xhc3M9ImNvbG9yMDAwIHN2Z1NoYXBlIiBjbGlwLXBhdGg9InVybCgjaSkiPgogICAgPGNpcmNsZSByPSIxODUuNjMiIGZpbGw9InVybCgjaikiIGN4PS'+
			'IxMy44NyIgY3k9Ii0yMi42MiIvPgogICA8L2c+CiAgIDxjaXJjbGUgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9ImNvbG9yZmZmIHN2Z1NoYXBlIiBjeD0iODIiIGN5PSI0NiIvPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNjQsNDhBMTYsMTYsMCwxLDAsODAsNjQsMTYsMTYsMCwwLDAsNjQsNDhabTAsMjRhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsNjQsNzJaIiBjbGFzcz0iY29sb3JmZmYgc3ZnU2hhcGUiLz4KICAgPHJlY3Qgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZpbGw9Im5vbmUiIGNsYXNzPSJjb2xvclN0cm9rZWZmZiBzdmdTdHJva2UiIHJ5'+
			'PSIxMiIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiB4PSIzMiIgeT0iMzIiIHN0cm9rZT0iI2ZmZmZmZiIgcng9IjEyIi8+CiAgPC9zdmc+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_instagram0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_instagram";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 134px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_instagram0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_instagram0.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/minka_pe\/?hl=es-la","");
		}
		me._button_instagram0.onmouseover=function (e) {
			me._button_instagram0__img.style.visibility='hidden';
			me._button_instagram0__imgo.style.visibility='inherit';
		}
		me._button_instagram0.onmouseout=function (e) {
			me._button_instagram0__img.style.visibility='inherit';
			me._button_instagram0__imgo.style.visibility='hidden';
		}
		me._button_instagram0.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._button_instagram0);
		el=me._button_facebook0=document.createElement('div');
		els=me._button_facebook0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU4LjMsMzc3LjZoLTEwYy0xLjIsMC0yLjUsMS42LTIuNSwzLjh2Ni40aDEyLjV2MTIuNWgtMTIuNXYzMC4xaC0xMi41di0zMC4xaC0xMHYtMTIuNWgxMCYjeGQ7JiN4YTsmI3g5O3YtNi4zYzAtOSw2LjctMTYuMywxNS0xNi4zaDEwVjM3Ny42eiIvPgogPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjguMywzNzcuNmgxMHYt'+
			'MTIuNGgtMTBjLTguMywwLTE1LDcuMy0xNSwxNi4zdjYuM2gtMTB2MTIuNWgxMHYzMC4xaDEyLjV2LTMwLjFoMTIuNXYtMTIuNWgtMTIuNXYtNi40JiN4ZDsmI3hhOyYjeDk7Qy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiLz4KPC9zdmc+Cg==';
		me._button_facebook0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgaWQ9IkNhcGFfMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy'+
			'53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8Zz4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzQjU5OTg7IiByPSI1Ni4wOTgiIGN4PSI1Ni4wOTgiIGN5PSI1Ni4wOTgiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTcwLjIwMSw1OC4yOTRoLTEwLjAxdjM2LjY3Mkg0NS4wMjVWNTguMjk0aC03LjIxM1Y0NS40MDZoNy4yMTN2LTguMzQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTUuOTY0LDIuODMz'+
			'LTE1LjMwMywxNS4zMDEtMTUuMzAzTDcxLjU2LDIxLjgxdjEyLjUxaC04LjE1MWMtMS4zMzcsMC0zLjIxNywwLjY2OC0zLjIxNywzLjUxM3Y3LjU4NWgxMS4zMzRMNzAuMjAxLDU4LjI5NHoiLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._button_facebook0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook0.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/MinkaPeru","");
		}
		me._button_facebook0.onmouseover=function (e) {
			me._button_facebook0__img.style.visibility='hidden';
			me._button_facebook0__imgo.style.visibility='inherit';
		}
		me._button_facebook0.onmouseout=function (e) {
			me._button_facebook0__img.style.visibility='inherit';
			me._button_facebook0__imgo.style.visibility='hidden';
		}
		me._button_facebook0.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._button_facebook0);
		el=me._button_twitter0=document.createElement('div');
		els=me._button_twitter0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTUwLDM4NS43bDAsMS42YzAsMTYuMy0xMi40LDM1LjItMzUuMiwzNS4yYy03LDAtMTMuNS0yLjEtMTktNS42YzEsMC4xLDEuOSwwLjIsMi45LDAuMiYjeGQ7JiN4YTsmI3g5O2M1LjgsMCwxMS4xLTIsMTUuNC01LjNjLTUuNC0wLjEtMTAtMy43LTExLjYtOC42YzAuNywwLjEsMS41LDAuMiwyLjMsMC4yYzEuMSwwLDIuMi0wLjEs'+
			'My4yLTAuNGMtNS43LTEuMS05LjktNi4xLTkuOS0xMi4xdi0wLjImI3hkOyYjeGE7JiN4OTtjMS43LDAuOSwzLjYsMS41LDUuNiwxLjZjLTMuMy0yLjItNS41LTYtNS41LTEwLjNjMC0yLjMsMC42LTQuNCwxLjctNi4yYzYuMSw3LjUsMTUuMiwxMi40LDI1LjUsMTIuOWMtMC4yLTAuOS0wLjMtMS45LTAuMy0yLjgmI3hkOyYjeGE7JiN4OTtjMC02LjgsNS41LTEyLjQsMTIuNC0xMi40YzMuNSwwLDYuOCwxLjUsOSwzLjljMi44LTAuNSw1LjUtMS42LDcuOS0zYy0wLjksMi45LTIuOSw1LjMtNS40LDYuOGMyLjUtMC4zLDQuOS0xLDcuMS0xLjkmI3hkOyYjeGE7JiN4OTtDLTE0NS41LDM4MS44LTE0Ny'+
			'42LDM4NC0xNTAsMzg1Ljd6Ii8+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0My45LDM3OS4zYy0yLjIsMS00LjYsMS42LTcuMSwxLjljMi41LTEuNSw0LjUtNCw1LjQtNi44Yy0yLjQsMS40LTUsMi41LTcuOSwzYy0yLjMtMi40LTUuNS0zLjktOS0zLjkmI3hkOyYjeGE7JiN4OTtjLTYuOCwwLTEyLjQsNS41LTEyLjQsMTIuNGMwLDEsMC4xLDEuOSwwLjMsMi44Yy0xMC4zLTAuNS0xOS40LTUuNS0yNS41LTEyLjljLTEuMSwxLjgtMS43LDQtMS43LDYuMmMwLDQuMywyLjIsOC4xLDUuNSwxMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLTAuMS0zLjktMC42LTUuNi0xLjZ2MC4yYzAsNiw0LjMsMTEs'+
			'OS45LDEyLjFjLTEsMC4zLTIuMSwwLjQtMy4yLDAuNGMtMC44LDAtMS42LTAuMS0yLjMtMC4yYzEuNiw0LjksNi4xLDguNSwxMS42LDguNiYjeGQ7JiN4YTsmI3g5O2MtNC4yLDMuMy05LjYsNS4zLTE1LjQsNS4zYy0xLDAtMi0wLjEtMi45LTAuMmM1LjUsMy41LDEyLDUuNiwxOSw1LjZjMjIuNywwLDM1LjItMTguOCwzNS4yLTM1LjJsMC0xLjYmI3hkOyYjeGE7JiN4OTtDLTE0Ny42LDM4NC0xNDUuNSwzODEuOC0xNDMuOSwzNzkuM3oiLz4KPC9zdmc+Cg==';
		me._button_twitter0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEyNi40NDQgMi4yODEgNTg5IDU4OSI+CiA8Y2lyY2xlIHI9IjI5NC41IiBmaWxsPSIjMmRhYWUxIiBjeD0iNDIwLjk0NCIgY3k9IjI5Ni43ODEiLz4KIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MDkuNzczIDE3OS42MzRjLTEzLjg5MSA2LjE2NC0yOC44MTEgMTAuMzMxLTQ0LjQ5OCAxMi4yMDQgMTYuMDEtOS41ODcgMjguMjc1LTI0Ljc3OSAzNC4wNjYtNDIuODZhMTU0Ljc4IDE1NC43OCAwIDAgMS00OS4yMDkgMTguODAxYy0xNC4xMjUtMTUuMDU2LTM0LjI2Ny'+
			'0yNC40NTYtNTYuNTUxLTI0LjQ1Ni00Mi43NzMgMC03Ny40NjIgMzQuNjc1LTc3LjQ2MiA3Ny40NzMgMCA2LjA2NC42ODMgMTEuOTggMS45OTYgMTcuNjYtNjQuMzg5LTMuMjM2LTEyMS40NzQtMzQuMDc5LTE1OS42ODQtODAuOTQ1LTYuNjcyIDExLjQ0Ni0xMC40OTEgMjQuNzU0LTEwLjQ5MSAzOC45NTMgMCAyNi44NzUgMTMuNjc5IDUwLjU4NyAzNC40NjQgNjQuNDc3YTc3LjEyMiA3Ny4xMjIgMCAwIDEtMzUuMDk3LTkuNjg2di45NzljMCAzNy41NCAyNi43MDEgNjguODQyIDYyLjE0NSA3NS45NjEtNi41MTEgMS43ODQtMTMuMzQ0IDIuNzE2LTIwLjQxMyAyLjcxNi00Ljk5OCAwLTkuODQ3LS40'+
			'NzMtMTQuNTg0LTEuMzY0IDkuODU5IDMwLjc2OSAzOC40NzEgNTMuMTY2IDcyLjM2MyA1My43OTktMjYuNTE1IDIwLjc4NS01OS45MjUgMzMuMTc1LTk2LjIxMiAzMy4xNzUtNi4yNSAwLTEyLjQyNy0uMzczLTE4LjQ5MS0xLjEwNCAzNC4yOTEgMjEuOTg4IDc1LjAwNiAzNC44MjQgMTE4Ljc1OSAzNC44MjQgMTQyLjQ5NiAwIDIyMC40MjgtMTE4LjA1MiAyMjAuNDI4LTIyMC40MjggMC0zLjM2MS0uMDc0LTYuNjk3LS4yMzYtMTAuMDIxYTE1Ny44NTUgMTU3Ljg1NSAwIDAgMCAzOC43MDctNDAuMTU4eiIvPgo8L3N2Zz4K';
		me._button_twitter0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter0.onclick=function (e) {
			player.openUrl("https:\/\/twitter.com\/minkaperu?lang=es","");
		}
		me._button_twitter0.onmouseover=function (e) {
			me._button_twitter0__img.style.visibility='hidden';
			me._button_twitter0__imgo.style.visibility='inherit';
		}
		me._button_twitter0.onmouseout=function (e) {
			me._button_twitter0__img.style.visibility='inherit';
			me._button_twitter0__imgo.style.visibility='hidden';
		}
		me._button_twitter0.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._button_twitter0);
		me.divSkin.appendChild(me._botons_responsive_);
		el=me._video_screentint_file=document.createElement('div');
		el.ggId="video_screentint_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='z-index: 15;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_file.style[domTransition]='';
				if (me._video_screentint_file.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_file.style.visibility=(Number(me._video_screentint_file.style.opacity)>0||!me._video_screentint_file.style.opacity)?'inherit':'hidden';
					me._video_screentint_file.ggVisible=true;
				}
				else {
					me._video_screentint_file.style.visibility="hidden";
					me._video_screentint_file.ggVisible=false;
				}
			}
		}
		me._video_screentint_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_screentint_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_screentint_file);
		el=me._mapfloor=document.createElement('div');
		el.ggId="mapFloor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 290px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mapfloor.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mapfloor.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._mapfloor.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._mapfloor.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._mapfloor.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._mapfloor.ggCurrentLogicStateScaling == 0) {
					me._mapfloor.ggParameter.sx = 0;
					me._mapfloor.ggParameter.sy = 0;
					me._mapfloor.style[domTransform]=parameterToTransform(me._mapfloor.ggParameter);
				}
				else {
					me._mapfloor.ggParameter.sx = 1;
					me._mapfloor.ggParameter.sy = 1;
					me._mapfloor.style[domTransform]=parameterToTransform(me._mapfloor.ggParameter);
				}
			}
		}
		me._mapfloor.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan0=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(255,117,244,0);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='z-index: 4;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._floorplan0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('plan_status') == false))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorplan0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorplan0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorplan0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._floorplan0.ggCurrentLogicStateScaling == 0) {
					me._floorplan0.ggParameter.sx = 0.6;
					me._floorplan0.ggParameter.sy = 0.6;
					me._floorplan0.style[domTransform]=parameterToTransform(me._floorplan0.ggParameter);
				}
				else {
					me._floorplan0.ggParameter.sx = 1;
					me._floorplan0.ggParameter.sy = 1;
					me._floorplan0.style[domTransform]=parameterToTransform(me._floorplan0.ggParameter);
				}
			}
		}
		me._floorplan0.onmouseover=function (e) {
			player.setVariableValue('plan_status', true);
		}
		me._floorplan0.onmouseout=function (e) {
			player.setVariableValue('plan_status', false);
		}
		me._floorplan0.ggCurrentLogicStateScaling = -1;
		me._floorplan0.ggUpdateConditionTimer=function () {
			me._floorplan0.ggRadar.update();
		}
		me._floorplan0.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan0.ggNodeChange=function () {
			if (me._floorplan0.ggLastActivMarker) {
				if (me._floorplan0.ggLastActivMarker._div.ggDeactivate) me._floorplan0.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._floorplan0.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._floorplan0.ggLastActivMarker=marker;
			}
			if (!me._floorplan0.ggMapNotLoaded) {
				me._floorplan0.ggCenterNode();
			}
			if (player.getMapType(me._floorplan0.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan0.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan0.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan0.ggLastNodeId = id;
		}
		me._mapfloor.appendChild(me._floorplan0);
		me.divSkin.appendChild(me._mapfloor);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjU2IiBmaWxsPSIjZmZmZmZmIiBjeD0iMjU2IiBjeT0iMjU2IiB0cmFuc2Zvcm'+
			'09Im1hdHJpeCgwLjYxLDAsMCwwLjYxLDk5Ljg0LDk5Ljg0KSIgc2hhcGU9ImNpcmNsZSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuODAwMDAwMDAwMDAwMDEpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODMzLDAsMCwxMTQuODQ0LDAsMjU2czExNC44MzMsMjU2LDI1NiwyNTZzMjU2LTExNC44NDQsMjU2LTI1NlMzOTcuMTY3LDAsMjU2LDB6IE0zNTcuNzcxLDI2NC45NjkgICAgbC0xNDkuMzMzLDk2Yy0x'+
			'Ljc1LDEuMTM1LTMuNzcxLDEuNjk4LTUuNzcxLDEuNjk4Yy0xLjc1LDAtMy41MjEtMC40MzgtNS4xMDQtMS4zMDJDMTk0LjEyNSwzNTkuNDksMTkyLDM1NS45MDYsMTkyLDM1MlYxNjAgICAgYzAtMy45MDYsMi4xMjUtNy40OSw1LjU2My05LjM2NWMzLjM3NS0xLjg1NCw3LjYwNC0xLjc0LDEwLjg3NSwwLjM5NmwxNDkuMzMzLDk2YzMuMDQyLDEuOTU4LDQuODk2LDUuMzQ0LDQuODk2LDguOTY5ICAgIFMzNjAuODEzLDI2My4wMSwzNTcuNzcxLDI2NC45Njl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3Zn'+
			'Ii8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 43px;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 279px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_9.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._svg_9.ggCurrentLogicStateScaling == 0) {
					me._svg_9.ggParameter.sx = 0;
					me._svg_9.ggParameter.sy = 0;
					me._svg_9.style[domTransform]=parameterToTransform(me._svg_9.ggParameter);
				}
				else {
					me._svg_9.ggParameter.sx = 1;
					me._svg_9.ggParameter.sy = 1;
					me._svg_9.style[domTransform]=parameterToTransform(me._svg_9.ggParameter);
				}
			}
		}
		me._svg_9.onclick=function (e) {
			me._svg_7.style[domTransition]='none';
			me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
			me._svg_7.ggVisible=true;
			me._svg_8.style[domTransition]='none';
			me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
			me._svg_8.ggVisible=true;
				player.playSound("Video_prueba","1");
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_9);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjU2IiBmaWxsPSIjMDAwMDAwIiBjeD0iMjU2IiBjeT0iMjU2Ii'+
			'B0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiIHNoYXBlPSJjaXJjbGUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNywwLDAsMC43LDc2LjgwMDAwMDAwMDAwMDAxLDc2LjgwMDAwMDAwMDAwMDAxKSI+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgc3R5bGU9IiIgZD0ibTI1NiAwYy0xMzkuNDg4MjgxIDAtMjU2IDExNi4xNDA2MjUtMjU2IDI1NiAwIDEzOS40ODgyODEgMTE2LjE0MDYyNSAyNTYgMjU2IDI1NiAxMzkuNDg4MjgxIDAgMjU2LTExNi4xNDA2MjUgMjU2LTI1NiAwLTEzOS40ODgyODEtMTE2LjE0MDYyNS0yNTYtMjU2LTI1NnptMTU5LjEwMTU2MiA5Ni45MDIzNDRjODUuNjQ0'+
			'NTMyIDg1LjY0NDUzMSA4OS4wNTQ2ODggMjE3Ljg3MTA5NCAxMC4yNjE3MTkgMzA3LjI0NjA5NGwtNTYuNDYwOTM3LTU2LjQ2MDkzOGMyOS4zNTU0NjgtMjIuMTYwMTU2IDU5LjAxMTcxOC01Mi43NDIxODggODUuMTY0MDYyLTkxLjY4NzUtNDQuNDM3NS02Ni4xNzU3ODEtMTE4LjcwNzAzMS0xMzUtMTk4LjA2NjQwNi0xMzUtMzEuNzY5NTMxIDAtNjEuNDQ1MzEyIDEwLjg3ODkwNi04Ny41MjczNDQgMjYuMjU3ODEybC02MC42MjEwOTQtNjAuNjE3MTg3Yzg5LjM3NS03OC43OTI5NjkgMjIxLjYwMTU2My03NS4zODI4MTMgMzA3LjI1IDEwLjI2MTcxOXptLTExOC41IDE3OC40ODgyODEtNTkuOTkyMT'+
			'g3LTU5Ljk5MjE4N2M1Ljg3NS0yLjgxNjQwNyAxMi40NTMxMjUtNC4zOTg0MzggMTkuMzkwNjI1LTQuMzk4NDM4IDI0LjgxMjUgMCA0NSAyMC4xODc1IDQ1IDQ1IDAgNi45Mzc1LTEuNTgyMDMxIDEzLjUxNTYyNS00LjM5ODQzOCAxOS4zOTA2MjV6bS0yMS4yMTA5MzcgMjEuMjEwOTM3Yy01Ljg3NSAyLjgxNjQwNy0xMi40NTMxMjUgNC4zOTg0MzgtMTkuMzkwNjI1IDQuMzk4NDM4LTI0LjgxMjUgMC00NS0yMC4xODc1LTQ1LTQ1IDAtNi45Mzc1IDEuNTgyMDMxLTEzLjUxNTYyNSA0LjM5ODQzOC0xOS4zOTA2MjV6bS0xOS4zOTA2MjUgMzQuMzk4NDM4YzE1LjI2NTYyNSAwIDI5LjQ2ODc1LTQuNTkz'+
			'NzUgNDEuMzI4MTI1LTEyLjQ1NzAzMWwyNC4xOTE0MDYgMjQuMTg3NWMtMjAuMjQ2MDkzIDEwLjkzMzU5My00Mi40MjU3ODEgMTguMjY5NTMxLTY1LjUxOTUzMSAxOC4yNjk1MzEtNzUuNTMxMjUgMC0xNDEuNTg5ODQ0LTc4LjgwODU5NC0xNjEuNDY0ODQ0LTEwNS4wMTE3MTkgMTEuMDgyMDMyLTE0LjY0NDUzMSAzNi41MzEyNS00NS42Njc5NjkgNzAuMDI3MzQ0LTcwLjIxNDg0M2wyOC44OTQ1MzEgMjguODk4NDM3Yy03Ljg2MzI4MSAxMS44NTkzNzUtMTIuNDU3MDMxIDI2LjA2MjUtMTIuNDU3MDMxIDQxLjMyODEyNSAwIDQxLjM1NTQ2OSAzMy42NDQ1MzEgNzUgNzUgNzV6bTYyLjU0Mjk2OS0zMy'+
			'42NzE4NzVjNy44NjMyODEtMTEuODU5Mzc1IDEyLjQ1NzAzMS0yNi4wNjI1IDEyLjQ1NzAzMS00MS4zMjgxMjUgMC00MS4zNTU0NjktMzMuNjQ0NTMxLTc1LTc1LTc1LTE1LjI2NTYyNSAwLTI5LjQ2ODc1IDQuNTkzNzUtNDEuMzI4MTI1IDEyLjQ1NzAzMWwtMjQuMTkxNDA2LTI0LjE4NzVjMjAuMjQ2MDkzLTEwLjkzMzU5MyA0Mi40MjU3ODEtMTguMjY5NTMxIDY1LjUxOTUzMS0xOC4yNjk1MzEgNzUuNTIzNDM4IDAgMTQxLjU4MjAzMSA3OC43OTY4NzUgMTYxLjQ2NDg0NCAxMDUuMDExNzE5LTExLjA4MjAzMiAxNC42NDQ1MzEtMzYuNTMxMjUgNDUuNjY3OTY5LTcwLjAyNzM0NCA3MC4yMTQ4NDN6'+
			'bS0yMjEuNjQ0NTMxIDExNy43Njk1MzFjLTg1LjY0NDUzMi04NS42NDQ1MzEtODkuMDU0Njg4LTIxNy44NzEwOTQtMTAuMjYxNzE5LTMwNy4yNDYwOTRsNTYuNDYwOTM3IDU2LjQ2MDkzOGMtMjkuMzU1NDY4IDIyLjE2MDE1Ni01OS4wMTE3MTggNTIuNzQyMTg4LTg1LjE2NDA2MiA5MS42ODc1IDQ0LjQzNzUgNjYuMTc1NzgxIDExOC43MDcwMzEgMTM1IDE5OC4wNjY0MDYgMTM1IDMxLjc2OTUzMSAwIDYxLjQ0NTMxMi0xMC44Nzg5MDYgODcuNTI3MzQ0LTI2LjI1NzgxMmw2MC42MjEwOTQgNjAuNjE3MTg3Yy04OS4zNzUgNzguNzkyOTY5LTIyMS42MDE1NjMgNzUuMzgyODEzLTMwNy4yNS0xMC4yNj'+
			'E3MTl6bTAgMCIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 39px;';
		hs+='position : absolute;';
		hs+='right : 146px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_10.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._svg_10.ggCurrentLogicStateScaling == 0) {
					me._svg_10.ggParameter.sx = 0;
					me._svg_10.ggParameter.sy = 0;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
				else {
					me._svg_10.ggParameter.sx = 1;
					me._svg_10.ggParameter.sy = 1;
					me._svg_10.style[domTransform]=parameterToTransform(me._svg_10.ggParameter);
				}
			}
		}
		me._svg_10.onclick=function (e) {
			me._svg_8.style[domTransition]='none';
			me._svg_8.style.visibility='hidden';
			me._svg_8.ggVisible=false;
			me._svg_7.style[domTransition]='none';
			me._svg_7.style.visibility='hidden';
			me._svg_7.ggVisible=false;
				player.stopSound("Video_prueba");
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_10);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDI3MS45NTMgMjcxLjk1MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjAiPgogPGNpcmNsZSByPSIxMzUuOTc2NSIgZmlsbD0iIzAwMDAwMCIgY3g9Ij'+
			'EzNS45NzY1IiBjeT0iMTM1Ljk3NjUiIHNoYXBlPSJjaXJjbGUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNywwLDAsMC43LDQwLjc5MzEwMTUwMTQ2NDg1LDQwLjc5Mjk1MDQzOTQ1MzEzNikiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZD0iTTEzNS45NzcsMjcxLjk1M2M3NS4wOTcsMCwxMzUuOTc3LTYwLjg3OSwxMzUuOTc3LTEzNS45NzdTMjExLjA3NCwwLDEzNS45NzcsMFMwLDYwLjg3OSwwLDEzNS45NzcgICAgUzYwLjg3OSwyNzEuOTUzLDEzNS45NzcsMjcxLjk1M3ogTTEzNS45'+
			'NzcsMjEuNzU2YzYyLjk3OSwwLDExNC4yMiw1MS4yNDEsMTE0LjIyLDExNC4yMnMtNTEuMjQxLDExNC4yMi0xMTQuMjIsMTE0LjIyICAgIHMtMTE0LjIyLTUxLjI0MS0xMTQuMjItMTE0LjIyUzcyLjk5MiwyMS43NTYsMTM1Ljk3NywyMS43NTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIi8+CiAgICA8cGF0aCBzdHlsZT0iIiBmaWxsPSIjZmZmZmZmIiBkPSJNMTEwLjcwNywyMDAuMTE0YzcuNTExLDAsMTMuNTk4LTYuMDg2LDEzLjU5OC0xMy41OThWODMuMTc0YzAtNy41MTEtNi4wODYtMTMuNTk4LTEzLjU5OC0xMy41OTggICAgYy03LjUxMSwwLTEzLjU5OCw2LjA4Ni0xMy41OTgsMTMuNTk4dj'+
			'EwMy4zNDJDOTcuMTA5LDE5NC4wMjgsMTAzLjE5NSwyMDAuMTE0LDExMC43MDcsMjAwLjExNHoiIGRhdGEtb3JpZ2luYWw9IiMwMTAwMDIiLz4KICAgIDxwYXRoIHN0eWxlPSIiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNjUuMDk3LDIwMC4xMTRjNy41MTEsMCwxMy41OTgtNi4wODYsMTMuNTk4LTEzLjU5OFY4My4xNzRjMC03LjUxMS02LjA4Ni0xMy41OTgtMTMuNTk4LTEzLjU5OCAgICBTMTUxLjUsNzUuNjYzLDE1MS41LDgzLjE3NHYxMDMuMzQyQzE1MS41LDE5NC4wMjgsMTU3LjU4NiwyMDAuMTE0LDE2NS4wOTcsMjAwLjExNHoiIGRhdGEtb3JpZ2luYWw9IiMwMTAwMDIiLz4KICAgPC9nPgogIDwv'+
			'Zz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz'+
			'4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 51px;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 240px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_7.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._svg_7.ggCurrentLogicStateScaling == 0) {
					me._svg_7.ggParameter.sx = 0;
					me._svg_7.ggParameter.sy = 0;
					me._svg_7.style[domTransform]=parameterToTransform(me._svg_7.ggParameter);
				}
				else {
					me._svg_7.ggParameter.sx = 1;
					me._svg_7.ggParameter.sy = 1;
					me._svg_7.style[domTransform]=parameterToTransform(me._svg_7.ggParameter);
				}
			}
		}
		me._svg_7.onclick=function (e) {
				player.pauseSound("Video_prueba");
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_7);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDMwLjA1IDMwLjA1IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMCI+CiA8Y2lyY2xlIHI9IjE1LjAyNSIgZmlsbD0iIzAwMDAwMCIgY3g9IjE1LjAyNS'+
			'IgY3k9IjE1LjAyNSIgc2hhcGU9ImNpcmNsZSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNC41MDc1MDAwNTAzNjgyNTQsNC41MDc0OTk4ODU1NTkwODMpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8cGF0aCBzdHlsZT0iIiBmaWxsPSIjZmZmZmZmIiBkPSJNMTguOTkzLDEwLjY4OGgtNy45MzZjLTAuMTksMC0wLjM0NiwwLjE0OS0wLjM0NiwwLjM0MnY4LjAyMmMwLDAuMTg5LDAuMTU1LDAuMzQ0LDAuMzQ2LDAuMzQ0ICAgaDcuOTM2YzAuMTksMCwwLjM0NC0wLjE1NCwwLjM0NC0wLjM0NFYxMS4wM0MxOS4zMzYsMTAuODM4LDE5LjE4'+
			'MywxMC42ODgsMTguOTkzLDEwLjY4OHoiIGRhdGEtb3JpZ2luYWw9IiMwMzAxMDQiLz4KICAgPHBhdGggc3R5bGU9IiIgZmlsbD0iI2ZmZmZmZiIgZD0iTTE1LjAyNiwwQzYuNzI5LDAsMC4wMDEsNi43MjYsMC4wMDEsMTUuMDI1UzYuNzI5LDMwLjA1LDE1LjAyNiwzMC4wNSAgIGM4LjI5OCwwLDE1LjAyMy02LjcyNiwxNS4wMjMtMTUuMDI1UzIzLjMyNCwwLDE1LjAyNiwweiBNMTUuMDI2LDI3LjU0Yy02LjkxMiwwLTEyLjUxNi01LjYwNC0xMi41MTYtMTIuNTE1ICAgYzAtNi45MTQsNS42MDQtMTIuNTE3LDEyLjUxNi0xMi41MTdjNi45MTMsMCwxMi41MTQsNS42MDMsMTIuNTE0LDEyLjUxN0MyNy'+
			'41NCwyMS45MzYsMjEuOTM5LDI3LjU0LDE1LjAyNiwyNy41NHoiIGRhdGEtb3JpZ2luYWw9IiMwMzAxMDQiLz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0'+
			'dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dH'+
			'A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 51px;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 194px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._svg_8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._svg_8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._svg_8.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._svg_8.ggCurrentLogicStateScaling == 0) {
					me._svg_8.ggParameter.sx = 0;
					me._svg_8.ggParameter.sy = 0;
					me._svg_8.style[domTransform]=parameterToTransform(me._svg_8.ggParameter);
				}
				else {
					me._svg_8.ggParameter.sx = 1;
					me._svg_8.ggParameter.sy = 1;
					me._svg_8.style[domTransform]=parameterToTransform(me._svg_8.ggParameter);
				}
			}
		}
		me._svg_8.onclick=function (e) {
				player.stopSound("Video_prueba");
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_8);
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 16px;';
		hs+='height : 37px;';
		hs+='position : absolute;';
		hs+='right : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._buttons_social.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._buttons_social.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._buttons_social.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._buttons_social.ggCurrentLogicStateScaling == 0) {
					me._buttons_social.ggParameter.sx = 0;
					me._buttons_social.ggParameter.sy = 0;
					me._buttons_social.style[domTransform]=parameterToTransform(me._buttons_social.ggParameter);
				}
				else {
					me._buttons_social.ggParameter.sx = 1;
					me._buttons_social.ggParameter.sy = 1;
					me._buttons_social.style[domTransform]=parameterToTransform(me._buttons_social.ggParameter);
				}
			}
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTUwLDM4NS43bDAsMS42YzAsMTYuMy0xMi40LDM1LjItMzUuMiwzNS4yYy03LDAtMTMuNS0yLjEtMTktNS42YzEsMC4xLDEuOSwwLjIsMi45LDAuMiYjeGQ7JiN4YTsmI3g5O2M1LjgsMCwxMS4xLTIsMTUuNC01LjNjLTUuNC0wLjEtMTAtMy43LTExLjYtOC42YzAuNywwLjEsMS41LDAuMiwyLjMsMC4yYzEuMSwwLDIuMi0wLjEs'+
			'My4yLTAuNGMtNS43LTEuMS05LjktNi4xLTkuOS0xMi4xdi0wLjImI3hkOyYjeGE7JiN4OTtjMS43LDAuOSwzLjYsMS41LDUuNiwxLjZjLTMuMy0yLjItNS41LTYtNS41LTEwLjNjMC0yLjMsMC42LTQuNCwxLjctNi4yYzYuMSw3LjUsMTUuMiwxMi40LDI1LjUsMTIuOWMtMC4yLTAuOS0wLjMtMS45LTAuMy0yLjgmI3hkOyYjeGE7JiN4OTtjMC02LjgsNS41LTEyLjQsMTIuNC0xMi40YzMuNSwwLDYuOCwxLjUsOSwzLjljMi44LTAuNSw1LjUtMS42LDcuOS0zYy0wLjksMi45LTIuOSw1LjMtNS40LDYuOGMyLjUtMC4zLDQuOS0xLDcuMS0xLjkmI3hkOyYjeGE7JiN4OTtDLTE0NS41LDM4MS44LTE0Ny'+
			'42LDM4NC0xNTAsMzg1Ljd6Ii8+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0My45LDM3OS4zYy0yLjIsMS00LjYsMS42LTcuMSwxLjljMi41LTEuNSw0LjUtNCw1LjQtNi44Yy0yLjQsMS40LTUsMi41LTcuOSwzYy0yLjMtMi40LTUuNS0zLjktOS0zLjkmI3hkOyYjeGE7JiN4OTtjLTYuOCwwLTEyLjQsNS41LTEyLjQsMTIuNGMwLDEsMC4xLDEuOSwwLjMsMi44Yy0xMC4zLTAuNS0xOS40LTUuNS0yNS41LTEyLjljLTEuMSwxLjgtMS43LDQtMS43LDYuMmMwLDQuMywyLjIsOC4xLDUuNSwxMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLTAuMS0zLjktMC42LTUuNi0xLjZ2MC4yYzAsNiw0LjMsMTEs'+
			'OS45LDEyLjFjLTEsMC4zLTIuMSwwLjQtMy4yLDAuNGMtMC44LDAtMS42LTAuMS0yLjMtMC4yYzEuNiw0LjksNi4xLDguNSwxMS42LDguNiYjeGQ7JiN4YTsmI3g5O2MtNC4yLDMuMy05LjYsNS4zLTE1LjQsNS4zYy0xLDAtMi0wLjEtMi45LTAuMmM1LjUsMy41LDEyLDUuNiwxOSw1LjZjMjIuNywwLDM1LjItMTguOCwzNS4yLTM1LjJsMC0xLjYmI3hkOyYjeGE7JiN4OTtDLTE0Ny42LDM4NC0xNDUuNSwzODEuOC0xNDMuOSwzNzkuM3oiLz4KPC9zdmc+Cg==';
		me._button_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEyNi40NDQgMi4yODEgNTg5IDU4OSI+CiA8Y2lyY2xlIHI9IjI5NC41IiBmaWxsPSIjMmRhYWUxIiBjeD0iNDIwLjk0NCIgY3k9IjI5Ni43ODEiLz4KIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MDkuNzczIDE3OS42MzRjLTEzLjg5MSA2LjE2NC0yOC44MTEgMTAuMzMxLTQ0LjQ5OCAxMi4yMDQgMTYuMDEtOS41ODcgMjguMjc1LTI0Ljc3OSAzNC4wNjYtNDIuODZhMTU0Ljc4IDE1NC43OCAwIDAgMS00OS4yMDkgMTguODAxYy0xNC4xMjUtMTUuMDU2LTM0LjI2Ny'+
			'0yNC40NTYtNTYuNTUxLTI0LjQ1Ni00Mi43NzMgMC03Ny40NjIgMzQuNjc1LTc3LjQ2MiA3Ny40NzMgMCA2LjA2NC42ODMgMTEuOTggMS45OTYgMTcuNjYtNjQuMzg5LTMuMjM2LTEyMS40NzQtMzQuMDc5LTE1OS42ODQtODAuOTQ1LTYuNjcyIDExLjQ0Ni0xMC40OTEgMjQuNzU0LTEwLjQ5MSAzOC45NTMgMCAyNi44NzUgMTMuNjc5IDUwLjU4NyAzNC40NjQgNjQuNDc3YTc3LjEyMiA3Ny4xMjIgMCAwIDEtMzUuMDk3LTkuNjg2di45NzljMCAzNy41NCAyNi43MDEgNjguODQyIDYyLjE0NSA3NS45NjEtNi41MTEgMS43ODQtMTMuMzQ0IDIuNzE2LTIwLjQxMyAyLjcxNi00Ljk5OCAwLTkuODQ3LS40'+
			'NzMtMTQuNTg0LTEuMzY0IDkuODU5IDMwLjc2OSAzOC40NzEgNTMuMTY2IDcyLjM2MyA1My43OTktMjYuNTE1IDIwLjc4NS01OS45MjUgMzMuMTc1LTk2LjIxMiAzMy4xNzUtNi4yNSAwLTEyLjQyNy0uMzczLTE4LjQ5MS0xLjEwNCAzNC4yOTEgMjEuOTg4IDc1LjAwNiAzNC44MjQgMTE4Ljc1OSAzNC44MjQgMTQyLjQ5NiAwIDIyMC40MjgtMTE4LjA1MiAyMjAuNDI4LTIyMC40MjggMC0zLjM2MS0uMDc0LTYuNjk3LS4yMzYtMTAuMDIxYTE1Ny44NTUgMTU3Ljg1NSAwIDAgMCAzOC43MDctNDAuMTU4eiIvPgo8L3N2Zz4K';
		me._button_twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter.onclick=function (e) {
			player.openUrl("https:\/\/twitter.com\/minkaperu?lang=es","");
		}
		me._button_twitter.onmouseover=function (e) {
			me._button_twitter__img.style.visibility='hidden';
			me._button_twitter__imgo.style.visibility='inherit';
		}
		me._button_twitter.onmouseout=function (e) {
			me._button_twitter__img.style.visibility='inherit';
			me._button_twitter__imgo.style.visibility='hidden';
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_twitter);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU4LjMsMzc3LjZoLTEwYy0xLjIsMC0yLjUsMS42LTIuNSwzLjh2Ni40aDEyLjV2MTIuNWgtMTIuNXYzMC4xaC0xMi41di0zMC4xaC0xMHYtMTIuNWgxMCYjeGQ7JiN4YTsmI3g5O3YtNi4zYzAtOSw2LjctMTYuMywxNS0xNi4zaDEwVjM3Ny42eiIvPgogPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjguMywzNzcuNmgxMHYt'+
			'MTIuNGgtMTBjLTguMywwLTE1LDcuMy0xNSwxNi4zdjYuM2gtMTB2MTIuNWgxMHYzMC4xaDEyLjV2LTMwLjFoMTIuNXYtMTIuNWgtMTIuNXYtNi40JiN4ZDsmI3hhOyYjeDk7Qy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiLz4KPC9zdmc+Cg==';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSc/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgaWQ9IkNhcGFfMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy'+
			'53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8Zz4KICA8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzQjU5OTg7IiByPSI1Ni4wOTgiIGN4PSI1Ni4wOTgiIGN5PSI1Ni4wOTgiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTcwLjIwMSw1OC4yOTRoLTEwLjAxdjM2LjY3Mkg0NS4wMjVWNTguMjk0aC03LjIxM1Y0NS40MDZoNy4yMTN2LTguMzQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTUuOTY0LDIuODMz'+
			'LTE1LjMwMywxNS4zMDEtMTUuMzAzTDcxLjU2LDIxLjgxdjEyLjUxaC04LjE1MWMtMS4zMzcsMC0zLjIxNywwLjY2OC0zLjIxNywzLjUxM3Y3LjU4NWgxMS4zMzRMNzAuMjAxLDU4LjI5NHoiLz4KIDwvZz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KIDxnLz4KPC9zdmc+Cg==';
		me._button_facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/MinkaPeru","");
		}
		me._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.style.visibility='hidden';
			me._button_facebook__imgo.style.visibility='inherit';
		}
		me._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.style.visibility='inherit';
			me._button_facebook__imgo.style.visibility='hidden';
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_facebook);
		el=me._button_instagram=document.createElement('div');
		els=me._button_instagram__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._button_instagram__img.setAttribute('src',basePath + 'images/button_instagram.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_instagram__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDQ4IiBoZWlnaHQ9IjI4OCIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHdpZHRoPSIyODgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZGVmcyBpZD0iU3ZnanNEZWZzMTA0OSIvPgogPGcgaWQ9IlN2Z2pzRzEwNTAiIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+CiAgPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIGhlaWdodD0iMjg4IiB3aWR0aD0iMjg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj'+
			'AwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJiIj4KICAgICA8Y2lyY2xlIHI9IjY0IiBmaWxsPSJub25lIiBjeD0iNjQiIGN5PSI2NCIvPgogICAgPC9jbGlwUGF0aD4KICAgIDxjbGlwUGF0aCBpZD0iYyI+CiAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTEwNC0xNjNIMjRBMjQuMDcsMjQuMDcsMCwwLDAsMC0xMzl2ODBBMjQuMDcsMjQuMDcsMCwwLDAsMjQtMzVoODBhMjQuMDcsMjQuMDcsMCwwLDAsMjQtMjR2LTgwQTI0LjA3LDI0LjA3LDAsMCwwLDEwNC0x'+
			'NjNaTTEyMC01OWExNiwxNiwwLDAsMS0xNiwxNkgyNEExNiwxNiwwLDAsMSw4LTU5di04MGExNiwxNiwwLDAsMSwxNi0xNmg4MGExNiwxNiwwLDAsMSwxNiwxNloiLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGggaWQ9ImUiPgogICAgIDxjaXJjbGUgcj0iNSIgZmlsbD0ibm9uZSIgY3g9IjgyIiBjeT0iMjA5Ii8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJnIj4KICAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNNjQtMTE1QTE2LDE2LDAsMCwwLDQ4LTk5LDE2LDE2LDAsMCwwLDY0LTgzLDE2LDE2LDAsMCwwLDgwLTk5LDE2LDE2LDAsMCwwLDY0LTExNVptMCwyNGE4LD'+
			'gsMCwwLDEtOC04LDgsOCwwLDAsMSw4LTgsOCw4LDAsMCwxLDgsOEE4LDgsMCwwLDEsNjQtOTFaIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJoIj4KICAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNODQtNjNINDRBMTYsMTYsMCwwLDEsMjgtNzl2LTQwYTE2LDE2LDAsMCwxLDE2LTE2SDg0YTE2LDE2LDAsMCwxLDE2LDE2djQwQTE2LDE2LDAsMCwxLDg0LTYzWk00NC0xMjdhOCw4LDAsMCwwLTgsOHY0MGE4LDgsMCwwLDAsOCw4SDg0YTgsOCwwLDAsMCw4LTh2LTQwYTgsOCwwLDAsMC04LThaIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoIGlkPSJpIj4KICAgICA8'+
			'Y2lyY2xlIHI9IjUiIGZpbGw9Im5vbmUiIGN4PSI4MiIgY3k9Ii0xMTciLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8cmFkaWFsR3JhZGllbnQgcj0iMTM3LjUiIGlkPSJhIiBjeD0iMjcuNSIgY3k9IjEyMS41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgPHN0b3AgY2xhc3M9InN0b3BDb2xvcmZmZDY3NiBzdmdTaGFwZSIgb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZkNjc2Ii8+CiAgICAgPHN0b3AgY2xhc3M9InN0b3BDb2xvcmYyYTQ1NCBzdmdTaGFwZSIgb2Zmc2V0PSIuMjUiIHN0b3AtY29sb3I9IiNmMmE0NTQiLz4KICAgICA8c3RvcCBjbGFzcz0ic3RvcENvbG9yZj'+
			'A1YzNjIHN2Z1NoYXBlIiBvZmZzZXQ9Ii4zOCIgc3RvcC1jb2xvcj0iI2YwNWMzYyIvPgogICAgIDxzdG9wIGNsYXNzPSJzdG9wQ29sb3JjMjJmODYgc3ZnU2hhcGUiIG9mZnNldD0iLjciIHN0b3AtY29sb3I9IiNjMjJmODYiLz4KICAgICA8c3RvcCBjbGFzcz0ic3RvcENvbG9yNjY2NmFkIHN2Z1NoYXBlIiBvZmZzZXQ9Ii45NiIgc3RvcC1jb2xvcj0iIzY2NjZhZCIvPgogICAgIDxzdG9wIGNsYXNzPSJzdG9wQ29sb3I1YzZjYjIgc3ZnU2hhcGUiIG9mZnNldD0iLjk5IiBzdG9wLWNvbG9yPSIjNWM2Y2IyIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPHJhZGlhbEdyYWRpZW50IHI9IjE0'+
			'OC41IiBpZD0iZCIgeGxpbms6aHJlZj0iI2EiIGN4PSIyNy41IiBjeT0iLTQxLjUiLz4KICAgIDxyYWRpYWxHcmFkaWVudCByPSIxODUuNjMiIGlkPSJmIiB4bGluazpocmVmPSIjYSIgY3g9IjEzLjg3IiBjeT0iMzAzLjM4Ii8+CiAgICA8cmFkaWFsR3JhZGllbnQgcj0iMTg1LjYzIiBpZD0iaiIgeGxpbms6aHJlZj0iI2EiIGN4PSIxMy44NyIgY3k9Ii0yMi42MiIvPgogICA8L2RlZnM+CiAgIDxnIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFwZSIgY2xpcC1wYXRoPSJ1cmwoI2IpIj4KICAgIDxjaXJjbGUgcj0iMTM3LjUiIGZpbGw9InVybCgjYSkiIGN4PSIyNy41IiBjeT'+
			'0iMTIxLjUiLz4KICAgPC9nPgogICA8ZyBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iY29sb3IwMDAgc3ZnU2hhcGUiIGNsaXAtcGF0aD0idXJsKCNjKSI+CiAgICA8Y2lyY2xlIHI9IjE0OC41IiBmaWxsPSJ1cmwoI2QpIiBjeD0iMjcuNSIgY3k9Ii00MS41Ii8+CiAgIDwvZz4KICAgPGcgZmlsbD0iIzAwMDAwMCIgY2xhc3M9ImNvbG9yMDAwIHN2Z1NoYXBlIiBjbGlwLXBhdGg9InVybCgjZSkiPgogICAgPGNpcmNsZSByPSIxODUuNjMiIGZpbGw9InVybCgjZikiIGN4PSIxMy44NyIgY3k9IjMwMy4zOCIvPgogICA8L2c+CiAgIDxnIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFw'+
			'ZSIgY2xpcC1wYXRoPSJ1cmwoI2cpIj4KICAgIDxjaXJjbGUgcj0iMTQ4LjUiIGZpbGw9InVybCgjZCkiIGN4PSIyNy41IiBjeT0iLTQxLjUiLz4KICAgPC9nPgogICA8ZyBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iY29sb3IwMDAgc3ZnU2hhcGUiIGNsaXAtcGF0aD0idXJsKCNoKSI+CiAgICA8Y2lyY2xlIHI9IjE0OC41IiBmaWxsPSJ1cmwoI2QpIiBjeD0iMjcuNSIgY3k9Ii00MS41Ii8+CiAgIDwvZz4KICAgPGcgZmlsbD0iIzAwMDAwMCIgY2xhc3M9ImNvbG9yMDAwIHN2Z1NoYXBlIiBjbGlwLXBhdGg9InVybCgjaSkiPgogICAgPGNpcmNsZSByPSIxODUuNjMiIGZpbGw9InVybCgjaikiIGN4PS'+
			'IxMy44NyIgY3k9Ii0yMi42MiIvPgogICA8L2c+CiAgIDxjaXJjbGUgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9ImNvbG9yZmZmIHN2Z1NoYXBlIiBjeD0iODIiIGN5PSI0NiIvPgogICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNNjQsNDhBMTYsMTYsMCwxLDAsODAsNjQsMTYsMTYsMCwwLDAsNjQsNDhabTAsMjRhOCw4LDAsMSwxLDgtOEE4LDgsMCwwLDEsNjQsNzJaIiBjbGFzcz0iY29sb3JmZmYgc3ZnU2hhcGUiLz4KICAgPHJlY3Qgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGZpbGw9Im5vbmUiIGNsYXNzPSJjb2xvclN0cm9rZWZmZiBzdmdTdHJva2UiIHJ5'+
			'PSIxMiIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiB4PSIzMiIgeT0iMzIiIHN0cm9rZT0iI2ZmZmZmZiIgcng9IjEyIi8+CiAgPC9zdmc+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_instagram__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_instagram";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_instagram.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_instagram.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/minka_pe\/?hl=es-la","");
		}
		me._button_instagram.onmouseover=function (e) {
			me._button_instagram__img.style.visibility='hidden';
			me._button_instagram__imgo.style.visibility='inherit';
		}
		me._button_instagram.onmouseout=function (e) {
			me._button_instagram__img.style.visibility='inherit';
			me._button_instagram__imgo.style.visibility='hidden';
		}
		me._button_instagram.ggUpdatePosition=function (useTransition) {
		}
		me._buttons_social.appendChild(me._button_instagram);
		me.divSkin.appendChild(me._buttons_social);
		el=me._boton_next=document.createElement('div');
		els=me._boton_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMCI+CiA8Y2lyY2xlIHI9IjMyIiBmaWxsPSIjMDAwMDAwIiBjeD0iMzIiIGN5PSIzMiIgc2hhcG'+
			'U9ImNpcmNsZSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAgLjk5Mi0uMTgz'+
			'IDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgY2xhc3M9IiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMCI+CiA8Y2lyY2xlIHI9IjMyIiBmaWxsPSIjZmZmZmZmIiBjeD0iMzIiIGN5PSIzMiIgc2hhcG'+
			'U9ImNpcmNsZSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAgLjk5Mi0uMTgz'+
			'IDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next";
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 26px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._boton_next.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._boton_next.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._boton_next.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._boton_next.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._boton_next.ggCurrentLogicStateScaling == 0) {
					me._boton_next.ggParameter.sx = 0;
					me._boton_next.ggParameter.sy = 0;
					me._boton_next.style[domTransform]=parameterToTransform(me._boton_next.ggParameter);
				}
				else {
					me._boton_next.ggParameter.sx = 1;
					me._boton_next.ggParameter.sy = 1;
					me._boton_next.style[domTransform]=parameterToTransform(me._boton_next.ggParameter);
				}
			}
		}
		me._boton_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
		}
		me._boton_next.onmouseover=function (e) {
			me._boton_next__img.style.visibility='hidden';
			me._boton_next__imgo.style.visibility='inherit';
		}
		me._boton_next.onmouseout=function (e) {
			me._boton_next__img.style.visibility='inherit';
			me._boton_next__imgo.style.visibility='hidden';
		}
		me._boton_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._boton_next);
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style[domTransition]='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgYmVnaW49IjAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9Ij'+
			'MiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBiZWdpbj0iMC4xMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgYmVn'+
			'aW49IjAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjM3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgYmVnaW49IjAuNjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBiZWdpbj0iMC43NXMiIHJlcGVhdENvdW50PS'+
			'JpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgYmVnaW49IjAuODc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5l'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIGhlaWdodD0iNTEyIiB3aWR0aD0iNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMCIgdmlld0JveD0iMCAwIDUxMS43NiA1MTEuNzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwIj4KIDxjaXJjbGUgcj0iMjU1Ljg4IiBmaWxsPSIjZjkyNjI2IiBjeD0iMjU1Ljg4IiBjeT0iMj'+
			'U1Ljg4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgsMCwwLDAuOCw1MS4xNzYwMDA5NzY1NjI0OCw1MS4xNzYwMDA5NzY1NjI0OCkiIHNoYXBlPSJjaXJjbGUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNywwLDAsMC43LDc2Ljc2NDA3NDcwNzAzMTI2LDc2Ljc2MzgxMTQ5MjkxOTkzKSI+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBzdHlsZT0iIiBkPSJNNDM2Ljg5Niw3NC44NjljLTk5Ljg0LTk5LjgxOS0yNjIuMjA4LTk5LjgxOS0zNjIuMDQ4LDBjLTk5Ljc5Nyw5OS44MTktOTkuNzk3LDI2Mi4yMjksMCwz'+
			'NjIuMDQ4ICAgIGM0OS45Miw0OS44OTksMTE1LjQ3Nyw3NC44MzcsMTgxLjAzNSw3NC44MzdzMTMxLjA5My0yNC45MzksMTgxLjAxMy03NC44MzdDNTM2LjcxNSwzMzcuMDk5LDUzNi43MTUsMTc0LjY4OCw0MzYuODk2LDc0Ljg2OXogICAgIE0zNjEuNDYxLDMzMS4zMTdjOC4zNDEsOC4zNDEsOC4zNDEsMjEuODI0LDAsMzAuMTY1Yy00LjE2LDQuMTYtOS42MjEsNi4yNTEtMTUuMDgzLDYuMjUxYy01LjQ2MSwwLTEwLjkyMy0yLjA5MS0xNS4wODMtNi4yNTEgICAgbC03NS40MTMtNzUuNDM1bC03NS4zOTIsNzUuNDEzYy00LjE4MSw0LjE2LTkuNjQzLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC'+
			'0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxICAgIGMtOC4zNDEtOC4zNDEtOC4zNDEtMjEuODQ1LDAtMzAuMTY1bDc1LjM5Mi03NS40MTNsLTc1LjQxMy03NS40MTNjLTguMzQxLTguMzQxLTguMzQxLTIxLjg0NSwwLTMwLjE2NSAgICBjOC4zMi04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDBsNzUuNDEzLDc1LjQxM2w3NS40MTMtNzUuNDEzYzguMzQxLTguMzQxLDIxLjgyNC04LjM0MSwzMC4xNjUsMCAgICBjOC4zNDEsOC4zMiw4LjM0MSwyMS44MjQsMCwzMC4xNjVsLTc1LjQxMyw3NS40MTNMMzYxLjQ2MSwzMzEuMzE3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9n'+
			'PgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPg'+
			'ogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;z-index: 8;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="image_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : -6px;';
		hs+='top : -37px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close.style[domTransition]='';
				if (me._image_popup_close.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close.style.visibility=(Number(me._image_popup_close.style.opacity)>0||!me._image_popup_close.style.opacity)?'inherit':'hidden';
					me._image_popup_close.ggVisible=true;
				}
				else {
					me._image_popup_close.style.visibility="hidden";
					me._image_popup_close.ggVisible=false;
				}
			}
		}
		me._image_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._image_popup_close);
		el=me._floorplan=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(255,117,244,0);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='z-index: 4;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan.onmouseover=function (e) {
			player.setVariableValue('plan_status', true);
		}
		me._floorplan.onmouseout=function (e) {
			player.setVariableValue('plan_status', false);
		}
		me._floorplan.ggUpdateConditionTimer=function () {
			me._floorplan.ggRadar.update();
		}
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan.ggNodeChange=function () {
			if (me._floorplan.ggLastActivMarker) {
				if (me._floorplan.ggLastActivMarker._div.ggDeactivate) me._floorplan.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._floorplan.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._floorplan.ggLastActivMarker=marker;
			}
			if (!me._floorplan.ggMapNotLoaded) {
				me._floorplan.ggCenterNode();
			}
			if (player.getMapType(me._floorplan.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan.ggLastNodeId = id;
		}
		me._image_popup.appendChild(me._floorplan);
		me.divSkin.appendChild(me._image_popup);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_2.ggCurrentLogicStateScaling == 0) {
					me._image_2.ggParameter.sx = 0;
					me._image_2.ggParameter.sy = 0;
					me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
				}
				else {
					me._image_2.ggParameter.sx = 1;
					me._image_2.ggParameter.sy = 1;
					me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
				}
			}
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_2);
		el=me._scroll_name_left=document.createElement('div');
		el.ggId="scroll name left";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68.9157%;';
		hs+='left : -23px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47.3077%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scroll_name_left.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._scroll_name_left.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._scroll_name_left.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._scroll_name_left.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._scroll_name_left.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._scroll_name_left.ggCurrentLogicStateScaling == 0) {
					me._scroll_name_left.ggParameter.sx = 0;
					me._scroll_name_left.ggParameter.sy = 0;
					me._scroll_name_left.style[domTransform]=parameterToTransform(me._scroll_name_left.ggParameter);
				}
				else {
					me._scroll_name_left.ggParameter.sx = 1;
					me._scroll_name_left.ggParameter.sy = 1;
					me._scroll_name_left.style[domTransform]=parameterToTransform(me._scroll_name_left.ggParameter);
				}
			}
		}
		me._scroll_name_left.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._node20=document.createElement('div');
		els=me._node20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node20";
		el.ggDy=6.2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 12.4%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node20.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node20.ggUpdateText();
		player.addListener('changenode', function() {
			me._node20.ggUpdateText();
		});
		el.appendChild(els);
		me._node20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node20.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node20.ggCurrentLogicStateScaling == 0) {
					me._node20.ggParameter.sx = 0;
					me._node20.ggParameter.sy = 0;
					me._node20.style[domTransform]=parameterToTransform(me._node20.ggParameter);
				}
				else {
					me._node20.ggParameter.sx = 1;
					me._node20.ggParameter.sy = 1;
					me._node20.style[domTransform]=parameterToTransform(me._node20.ggParameter);
				}
			}
		}
		me._node20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node20.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node20.ggCurrentLogicStateVisible == 0) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 1) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 2) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 3) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 4) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 5) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 6) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 7) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 8) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 9) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 10) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 11) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 12) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 13) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 14) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 15) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 16) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 17) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else if (me._node20.ggCurrentLogicStateVisible == 18) {
					me._node20.style.visibility="hidden";
					me._node20.ggVisible=false;
				}
				else {
					me._node20.style.visibility=(Number(me._node20.style.opacity)>0||!me._node20.style.opacity)?'inherit':'hidden';
					me._node20.ggVisible=true;
				}
			}
		}
		me._node20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node20);
		el=me._node19=document.createElement('div');
		els=me._node19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node19";
		el.ggDy=14.24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 12%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.2683%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node19.ggUpdateText=function() {
			var hs=me.ggUserdata.title+" ";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node19.ggUpdateText();
		player.addListener('changenode', function() {
			me._node19.ggUpdateText();
		});
		el.appendChild(els);
		me._node19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node19.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node19.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node19.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node19.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node19.ggCurrentLogicStateScaling == 0) {
					me._node19.ggParameter.sx = 0;
					me._node19.ggParameter.sy = 0;
					me._node19.style[domTransform]=parameterToTransform(me._node19.ggParameter);
				}
				else {
					me._node19.ggParameter.sx = 1;
					me._node19.ggParameter.sy = 1;
					me._node19.style[domTransform]=parameterToTransform(me._node19.ggParameter);
				}
			}
		}
		me._node19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node19.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node19.ggCurrentLogicStateVisible == 0) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 1) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 2) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 3) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 4) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 5) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 6) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 7) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 8) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 9) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 10) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 11) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 12) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 13) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 14) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 15) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 16) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 17) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else if (me._node19.ggCurrentLogicStateVisible == 18) {
					me._node19.style.visibility="hidden";
					me._node19.ggVisible=false;
				}
				else {
					me._node19.style.visibility=(Number(me._node19.style.opacity)>0||!me._node19.style.opacity)?'inherit':'hidden';
					me._node19.ggVisible=true;
				}
			}
		}
		me._node19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node19);
		el=me._node18=document.createElement('div');
		els=me._node18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node18";
		el.ggDy=10.39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 12.19%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node18.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node18.ggUpdateText();
		player.addListener('changenode', function() {
			me._node18.ggUpdateText();
		});
		el.appendChild(els);
		me._node18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node18.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node18.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node18.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node18.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node18.ggCurrentLogicStateScaling == 0) {
					me._node18.ggParameter.sx = 0;
					me._node18.ggParameter.sy = 0;
					me._node18.style[domTransform]=parameterToTransform(me._node18.ggParameter);
				}
				else {
					me._node18.ggParameter.sx = 1;
					me._node18.ggParameter.sy = 1;
					me._node18.style[domTransform]=parameterToTransform(me._node18.ggParameter);
				}
			}
		}
		me._node18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node18.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node18.ggCurrentLogicStateVisible == 0) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 1) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 2) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 3) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 4) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 5) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 6) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 7) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 8) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 9) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 10) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 11) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 12) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 13) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 14) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 15) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 16) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 17) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else if (me._node18.ggCurrentLogicStateVisible == 18) {
					me._node18.style.visibility="hidden";
					me._node18.ggVisible=false;
				}
				else {
					me._node18.style.visibility=(Number(me._node18.style.opacity)>0||!me._node18.style.opacity)?'inherit':'hidden';
					me._node18.ggVisible=true;
				}
			}
		}
		me._node18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node18);
		el=me._node17=document.createElement('div');
		els=me._node17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node17";
		el.ggDy=2.17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.99%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node17.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node17.ggUpdateText();
		player.addListener('changenode', function() {
			me._node17.ggUpdateText();
		});
		el.appendChild(els);
		me._node17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node17.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node17.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node17.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node17.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node17.ggCurrentLogicStateScaling == 0) {
					me._node17.ggParameter.sx = 0;
					me._node17.ggParameter.sy = 0;
					me._node17.style[domTransform]=parameterToTransform(me._node17.ggParameter);
				}
				else {
					me._node17.ggParameter.sx = 1;
					me._node17.ggParameter.sy = 1;
					me._node17.style[domTransform]=parameterToTransform(me._node17.ggParameter);
				}
			}
		}
		me._node17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node17.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node17.ggCurrentLogicStateVisible == 0) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 1) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 2) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 3) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 4) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 5) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 6) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 7) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 8) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 9) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 10) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 11) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 12) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 13) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 14) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 15) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 16) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 17) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else if (me._node17.ggCurrentLogicStateVisible == 18) {
					me._node17.style.visibility="hidden";
					me._node17.ggVisible=false;
				}
				else {
					me._node17.style.visibility=(Number(me._node17.style.opacity)>0||!me._node17.style.opacity)?'inherit':'hidden';
					me._node17.ggVisible=true;
				}
			}
		}
		me._node17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node17);
		el=me._node16=document.createElement('div');
		els=me._node16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node16";
		el.ggDy=18.35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node16.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node16.ggUpdateText();
		player.addListener('changenode', function() {
			me._node16.ggUpdateText();
		});
		el.appendChild(els);
		me._node16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node16.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node16.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node16.ggCurrentLogicStateScaling == 0) {
					me._node16.ggParameter.sx = 0;
					me._node16.ggParameter.sy = 0;
					me._node16.style[domTransform]=parameterToTransform(me._node16.ggParameter);
				}
				else {
					me._node16.ggParameter.sx = 1;
					me._node16.ggParameter.sy = 1;
					me._node16.style[domTransform]=parameterToTransform(me._node16.ggParameter);
				}
			}
		}
		me._node16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node16.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node16.ggCurrentLogicStateVisible == 0) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 1) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 2) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 3) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 4) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 5) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 6) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 7) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 8) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 9) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 10) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 11) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 12) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 13) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 14) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 15) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 16) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 17) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else if (me._node16.ggCurrentLogicStateVisible == 18) {
					me._node16.style.visibility="hidden";
					me._node16.ggVisible=false;
				}
				else {
					me._node16.style.visibility=(Number(me._node16.style.opacity)>0||!me._node16.style.opacity)?'inherit':'hidden';
					me._node16.ggVisible=true;
				}
			}
		}
		me._node16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node16);
		el=me._node15=document.createElement('div');
		els=me._node15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node15";
		el.ggDy=-19.32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 12.08%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node15.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node15.ggUpdateText();
		player.addListener('changenode', function() {
			me._node15.ggUpdateText();
		});
		el.appendChild(els);
		me._node15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node15.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node15.ggCurrentLogicStateScaling == 0) {
					me._node15.ggParameter.sx = 0;
					me._node15.ggParameter.sy = 0;
					me._node15.style[domTransform]=parameterToTransform(me._node15.ggParameter);
				}
				else {
					me._node15.ggParameter.sx = 1;
					me._node15.ggParameter.sy = 1;
					me._node15.style[domTransform]=parameterToTransform(me._node15.ggParameter);
				}
			}
		}
		me._node15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node15.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node15.ggCurrentLogicStateVisible == 0) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 1) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 2) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 3) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 4) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 5) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 6) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 7) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 8) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 9) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 10) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 11) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 12) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 13) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 14) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 15) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 16) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 17) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else if (me._node15.ggCurrentLogicStateVisible == 18) {
					me._node15.style.visibility="hidden";
					me._node15.ggVisible=false;
				}
				else {
					me._node15.style.visibility=(Number(me._node15.style.opacity)>0||!me._node15.style.opacity)?'inherit':'hidden';
					me._node15.ggVisible=true;
				}
			}
		}
		me._node15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node15);
		el=me._node14=document.createElement('div');
		els=me._node14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node14";
		el.ggDy=-1.43;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.68%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node14.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node14.ggUpdateText();
		player.addListener('changenode', function() {
			me._node14.ggUpdateText();
		});
		el.appendChild(els);
		me._node14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node14.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node14.ggCurrentLogicStateScaling == 0) {
					me._node14.ggParameter.sx = 0;
					me._node14.ggParameter.sy = 0;
					me._node14.style[domTransform]=parameterToTransform(me._node14.ggParameter);
				}
				else {
					me._node14.ggParameter.sx = 1;
					me._node14.ggParameter.sy = 1;
					me._node14.style[domTransform]=parameterToTransform(me._node14.ggParameter);
				}
			}
		}
		me._node14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node14.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node14.ggCurrentLogicStateVisible == 0) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 1) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 2) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 3) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 4) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 5) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 6) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 7) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 8) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 9) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 10) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 11) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 12) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 13) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 14) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 15) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 16) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 17) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else if (me._node14.ggCurrentLogicStateVisible == 18) {
					me._node14.style.visibility="hidden";
					me._node14.ggVisible=false;
				}
				else {
					me._node14.style.visibility=(Number(me._node14.style.opacity)>0||!me._node14.style.opacity)?'inherit':'hidden';
					me._node14.ggVisible=true;
				}
			}
		}
		me._node14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node14);
		el=me._node13=document.createElement('div');
		els=me._node13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node13";
		el.ggDy=-5.57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.68%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node13.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node13.ggUpdateText();
		player.addListener('changenode', function() {
			me._node13.ggUpdateText();
		});
		el.appendChild(els);
		me._node13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node13.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node13.ggCurrentLogicStateScaling == 0) {
					me._node13.ggParameter.sx = 0;
					me._node13.ggParameter.sy = 0;
					me._node13.style[domTransform]=parameterToTransform(me._node13.ggParameter);
				}
				else {
					me._node13.ggParameter.sx = 1;
					me._node13.ggParameter.sy = 1;
					me._node13.style[domTransform]=parameterToTransform(me._node13.ggParameter);
				}
			}
		}
		me._node13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node13.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node13.ggCurrentLogicStateVisible == 0) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 1) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 2) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 3) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 4) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 5) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 6) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 7) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 8) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 9) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 10) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 11) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 12) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 13) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 14) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 15) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 16) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 17) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else if (me._node13.ggCurrentLogicStateVisible == 18) {
					me._node13.style.visibility="hidden";
					me._node13.ggVisible=false;
				}
				else {
					me._node13.style.visibility=(Number(me._node13.style.opacity)>0||!me._node13.style.opacity)?'inherit':'hidden';
					me._node13.ggVisible=true;
				}
			}
		}
		me._node13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node13);
		el=me._node12=document.createElement('div');
		els=me._node12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node12";
		el.ggDy=-10.24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.59%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node12.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node12.ggUpdateText();
		player.addListener('changenode', function() {
			me._node12.ggUpdateText();
		});
		el.appendChild(els);
		me._node12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node12.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node12.ggCurrentLogicStateScaling == 0) {
					me._node12.ggParameter.sx = 0;
					me._node12.ggParameter.sy = 0;
					me._node12.style[domTransform]=parameterToTransform(me._node12.ggParameter);
				}
				else {
					me._node12.ggParameter.sx = 1;
					me._node12.ggParameter.sy = 1;
					me._node12.style[domTransform]=parameterToTransform(me._node12.ggParameter);
				}
			}
		}
		me._node12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node12.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node12.ggCurrentLogicStateVisible == 0) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 1) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 2) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 3) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 4) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 5) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 6) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 7) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 8) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 9) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 10) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 11) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 12) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 13) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 14) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 15) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 16) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 17) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else if (me._node12.ggCurrentLogicStateVisible == 18) {
					me._node12.style.visibility="hidden";
					me._node12.ggVisible=false;
				}
				else {
					me._node12.style.visibility=(Number(me._node12.style.opacity)>0||!me._node12.style.opacity)?'inherit':'hidden';
					me._node12.ggVisible=true;
				}
			}
		}
		me._node12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node12);
		el=me._node11=document.createElement('div');
		els=me._node11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node11";
		el.ggDy=-14.77;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 12.4%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node11.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node11.ggUpdateText();
		player.addListener('changenode', function() {
			me._node11.ggUpdateText();
		});
		el.appendChild(els);
		me._node11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node11.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node11.ggCurrentLogicStateScaling == 0) {
					me._node11.ggParameter.sx = 0;
					me._node11.ggParameter.sy = 0;
					me._node11.style[domTransform]=parameterToTransform(me._node11.ggParameter);
				}
				else {
					me._node11.ggParameter.sx = 1;
					me._node11.ggParameter.sy = 1;
					me._node11.style[domTransform]=parameterToTransform(me._node11.ggParameter);
				}
			}
		}
		me._node11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node11.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node11.ggCurrentLogicStateVisible == 0) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 1) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 2) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 3) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 4) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 5) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 6) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 7) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 8) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 9) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 10) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 11) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 12) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 13) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 14) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 15) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 16) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 17) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else if (me._node11.ggCurrentLogicStateVisible == 18) {
					me._node11.style.visibility="hidden";
					me._node11.ggVisible=false;
				}
				else {
					me._node11.style.visibility=(Number(me._node11.style.opacity)>0||!me._node11.style.opacity)?'inherit':'hidden';
					me._node11.ggVisible=true;
				}
			}
		}
		me._node11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node11);
		el=me._node10=document.createElement('div');
		els=me._node10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node10";
		el.ggDy=-23.41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node10.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node10.ggUpdateText();
		player.addListener('changenode', function() {
			me._node10.ggUpdateText();
		});
		el.appendChild(els);
		me._node10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node10.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node10.ggCurrentLogicStateScaling == 0) {
					me._node10.ggParameter.sx = 0;
					me._node10.ggParameter.sy = 0;
					me._node10.style[domTransform]=parameterToTransform(me._node10.ggParameter);
				}
				else {
					me._node10.ggParameter.sx = 1;
					me._node10.ggParameter.sy = 1;
					me._node10.style[domTransform]=parameterToTransform(me._node10.ggParameter);
				}
			}
		}
		me._node10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node10.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node10.ggCurrentLogicStateVisible == 0) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 1) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 2) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 3) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 4) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 5) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 6) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 7) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 8) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 9) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 10) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 11) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 12) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 13) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 14) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 15) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 16) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 17) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else if (me._node10.ggCurrentLogicStateVisible == 18) {
					me._node10.style.visibility="hidden";
					me._node10.ggVisible=false;
				}
				else {
					me._node10.style.visibility=(Number(me._node10.style.opacity)>0||!me._node10.style.opacity)?'inherit':'hidden';
					me._node10.ggVisible=true;
				}
			}
		}
		me._node10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node10);
		el=me._node9=document.createElement('div');
		els=me._node9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node9";
		el.ggDy=-27.55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node9.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node9.ggUpdateText();
		player.addListener('changenode', function() {
			me._node9.ggUpdateText();
		});
		el.appendChild(els);
		me._node9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node9.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node9.ggCurrentLogicStateScaling == 0) {
					me._node9.ggParameter.sx = 0;
					me._node9.ggParameter.sy = 0;
					me._node9.style[domTransform]=parameterToTransform(me._node9.ggParameter);
				}
				else {
					me._node9.ggParameter.sx = 1;
					me._node9.ggParameter.sy = 1;
					me._node9.style[domTransform]=parameterToTransform(me._node9.ggParameter);
				}
			}
		}
		me._node9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node9.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node9.ggCurrentLogicStateVisible == 0) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 1) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 2) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 3) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 4) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 5) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 6) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 7) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 8) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 9) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 10) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 11) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 12) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 13) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 14) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 15) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 16) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 17) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else if (me._node9.ggCurrentLogicStateVisible == 18) {
					me._node9.style.visibility="hidden";
					me._node9.ggVisible=false;
				}
				else {
					me._node9.style.visibility=(Number(me._node9.style.opacity)>0||!me._node9.style.opacity)?'inherit':'hidden';
					me._node9.ggVisible=true;
				}
			}
		}
		me._node9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node9);
		el=me._node8=document.createElement('div');
		els=me._node8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node8";
		el.ggDy=-31.71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.405%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node8.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node8.ggUpdateText();
		player.addListener('changenode', function() {
			me._node8.ggUpdateText();
		});
		el.appendChild(els);
		me._node8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node8.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node8.ggCurrentLogicStateScaling == 0) {
					me._node8.ggParameter.sx = 0;
					me._node8.ggParameter.sy = 0;
					me._node8.style[domTransform]=parameterToTransform(me._node8.ggParameter);
				}
				else {
					me._node8.ggParameter.sx = 1;
					me._node8.ggParameter.sy = 1;
					me._node8.style[domTransform]=parameterToTransform(me._node8.ggParameter);
				}
			}
		}
		me._node8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node8.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node8.ggCurrentLogicStateVisible == 0) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 1) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 2) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 3) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 4) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 5) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 6) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 7) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 8) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 9) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 10) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 11) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 12) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 13) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 14) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 15) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 16) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 17) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else if (me._node8.ggCurrentLogicStateVisible == 18) {
					me._node8.style.visibility="hidden";
					me._node8.ggVisible=false;
				}
				else {
					me._node8.style.visibility=(Number(me._node8.style.opacity)>0||!me._node8.style.opacity)?'inherit':'hidden';
					me._node8.ggVisible=true;
				}
			}
		}
		me._node8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node8);
		el=me._node7=document.createElement('div');
		els=me._node7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node7";
		el.ggDy=-36.36;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.1667%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node7.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node7.ggUpdateText();
		player.addListener('changenode', function() {
			me._node7.ggUpdateText();
		});
		el.appendChild(els);
		me._node7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node7.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node7.ggCurrentLogicStateScaling == 0) {
					me._node7.ggParameter.sx = 0;
					me._node7.ggParameter.sy = 0;
					me._node7.style[domTransform]=parameterToTransform(me._node7.ggParameter);
				}
				else {
					me._node7.ggParameter.sx = 1;
					me._node7.ggParameter.sy = 1;
					me._node7.style[domTransform]=parameterToTransform(me._node7.ggParameter);
				}
			}
		}
		me._node7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node7.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node7.ggCurrentLogicStateVisible == 0) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 1) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 2) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 3) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 4) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 5) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 6) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 7) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 8) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 9) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 10) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 11) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 12) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 13) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 14) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 15) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 16) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 17) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else if (me._node7.ggCurrentLogicStateVisible == 18) {
					me._node7.style.visibility="hidden";
					me._node7.ggVisible=false;
				}
				else {
					me._node7.style.visibility=(Number(me._node7.style.opacity)>0||!me._node7.style.opacity)?'inherit':'hidden';
					me._node7.ggVisible=true;
				}
			}
		}
		me._node7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node7);
		el=me._node6=document.createElement('div');
		els=me._node6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node6";
		el.ggDy=22.59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node6.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node6.ggUpdateText();
		player.addListener('changenode', function() {
			me._node6.ggUpdateText();
		});
		el.appendChild(els);
		me._node6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node6.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node6.ggCurrentLogicStateScaling == 0) {
					me._node6.ggParameter.sx = 0;
					me._node6.ggParameter.sy = 0;
					me._node6.style[domTransform]=parameterToTransform(me._node6.ggParameter);
				}
				else {
					me._node6.ggParameter.sx = 1;
					me._node6.ggParameter.sy = 1;
					me._node6.style[domTransform]=parameterToTransform(me._node6.ggParameter);
				}
			}
		}
		me._node6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node6.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node6.ggCurrentLogicStateVisible == 0) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 1) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 2) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 3) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 4) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 5) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 6) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 7) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 8) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 9) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 10) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 11) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 12) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 13) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 14) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 15) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 16) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 17) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else if (me._node6.ggCurrentLogicStateVisible == 18) {
					me._node6.style.visibility="hidden";
					me._node6.ggVisible=false;
				}
				else {
					me._node6.style.visibility=(Number(me._node6.style.opacity)>0||!me._node6.style.opacity)?'inherit':'hidden';
					me._node6.ggVisible=true;
				}
			}
		}
		me._node6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node6);
		el=me._node5=document.createElement('div');
		els=me._node5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node5";
		el.ggDy=-40.23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node5.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node5.ggUpdateText();
		player.addListener('changenode', function() {
			me._node5.ggUpdateText();
		});
		el.appendChild(els);
		me._node5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node5.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node5.ggCurrentLogicStateScaling == 0) {
					me._node5.ggParameter.sx = 0;
					me._node5.ggParameter.sy = 0;
					me._node5.style[domTransform]=parameterToTransform(me._node5.ggParameter);
				}
				else {
					me._node5.ggParameter.sx = 1;
					me._node5.ggParameter.sy = 1;
					me._node5.style[domTransform]=parameterToTransform(me._node5.ggParameter);
				}
			}
		}
		me._node5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node5.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node5.ggCurrentLogicStateVisible == 0) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 1) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 2) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 3) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 4) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 5) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 6) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 7) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 8) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 9) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 10) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 11) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 12) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 13) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 14) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 15) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 16) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 17) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else if (me._node5.ggCurrentLogicStateVisible == 18) {
					me._node5.style.visibility="hidden";
					me._node5.ggVisible=false;
				}
				else {
					me._node5.style.visibility=(Number(me._node5.style.opacity)>0||!me._node5.style.opacity)?'inherit':'hidden';
					me._node5.ggVisible=true;
				}
			}
		}
		me._node5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node5);
		el=me._node4=document.createElement('div');
		els=me._node4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node4";
		el.ggDy=35.16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node4.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node4.ggUpdateText();
		player.addListener('changenode', function() {
			me._node4.ggUpdateText();
		});
		el.appendChild(els);
		me._node4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node4.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node4.ggCurrentLogicStateScaling == 0) {
					me._node4.ggParameter.sx = 0;
					me._node4.ggParameter.sy = 0;
					me._node4.style[domTransform]=parameterToTransform(me._node4.ggParameter);
				}
				else {
					me._node4.ggParameter.sx = 1;
					me._node4.ggParameter.sy = 1;
					me._node4.style[domTransform]=parameterToTransform(me._node4.ggParameter);
				}
			}
		}
		me._node4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node4.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node4.ggCurrentLogicStateVisible == 0) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 1) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 2) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 3) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 4) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 5) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 6) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 7) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 8) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 9) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 10) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 11) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 12) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 13) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 14) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 15) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 16) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 17) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else if (me._node4.ggCurrentLogicStateVisible == 18) {
					me._node4.style.visibility="hidden";
					me._node4.ggVisible=false;
				}
				else {
					me._node4.style.visibility=(Number(me._node4.style.opacity)>0||!me._node4.style.opacity)?'inherit':'hidden';
					me._node4.ggVisible=true;
				}
			}
		}
		me._node4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node4);
		el=me._node3=document.createElement('div');
		els=me._node3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node3";
		el.ggDy=30.8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.5139%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node3.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node3.ggUpdateText();
		player.addListener('changenode', function() {
			me._node3.ggUpdateText();
		});
		el.appendChild(els);
		me._node3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node3.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node3.ggCurrentLogicStateScaling == 0) {
					me._node3.ggParameter.sx = 0;
					me._node3.ggParameter.sy = 0;
					me._node3.style[domTransform]=parameterToTransform(me._node3.ggParameter);
				}
				else {
					me._node3.ggParameter.sx = 1;
					me._node3.ggParameter.sy = 1;
					me._node3.style[domTransform]=parameterToTransform(me._node3.ggParameter);
				}
			}
		}
		me._node3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node3.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node3.ggCurrentLogicStateVisible == 0) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 1) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 2) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 3) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 4) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 5) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 6) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 7) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 8) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 9) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 10) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 11) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 12) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 13) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 14) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 15) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 16) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 17) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else if (me._node3.ggCurrentLogicStateVisible == 18) {
					me._node3.style.visibility="hidden";
					me._node3.ggVisible=false;
				}
				else {
					me._node3.style.visibility=(Number(me._node3.style.opacity)>0||!me._node3.style.opacity)?'inherit':'hidden';
					me._node3.ggVisible=true;
				}
			}
		}
		me._node3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node3);
		el=me._node2=document.createElement('div');
		els=me._node2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node2";
		el.ggDy=26.69;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.88%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.4715%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node2.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node2.ggUpdateText();
		player.addListener('changenode', function() {
			me._node2.ggUpdateText();
		});
		el.appendChild(els);
		me._node2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node2.ggCurrentLogicStateScaling == 0) {
					me._node2.ggParameter.sx = 0;
					me._node2.ggParameter.sy = 0;
					me._node2.style[domTransform]=parameterToTransform(me._node2.ggParameter);
				}
				else {
					me._node2.ggParameter.sx = 1;
					me._node2.ggParameter.sy = 1;
					me._node2.style[domTransform]=parameterToTransform(me._node2.ggParameter);
				}
			}
		}
		me._node2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node2.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node2.ggCurrentLogicStateVisible == 0) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 1) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 2) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 3) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 4) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 5) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 6) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 7) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 8) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 9) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 10) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 11) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 12) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 13) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 14) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 15) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 16) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 17) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else if (me._node2.ggCurrentLogicStateVisible == 18) {
					me._node2.style.visibility="hidden";
					me._node2.ggVisible=false;
				}
				else {
					me._node2.style.visibility=(Number(me._node2.style.opacity)>0||!me._node2.style.opacity)?'inherit':'hidden';
					me._node2.ggVisible=true;
				}
			}
		}
		me._node2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node2);
		el=me._node1=document.createElement('div');
		els=me._node1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node1";
		el.ggDy=-44.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 4%;';
		hs+='left : 11.76%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79.2223%;';
		hs+='pointer-events:auto;';
		hs+='font-family: Geometrica; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node1.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node1.ggUpdateText();
		player.addListener('changenode', function() {
			me._node1.ggUpdateText();
		});
		el.appendChild(els);
		me._node1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node1.ggCurrentLogicStateScaling == 0) {
					me._node1.ggParameter.sx = 0;
					me._node1.ggParameter.sy = 0;
					me._node1.style[domTransform]=parameterToTransform(me._node1.ggParameter);
				}
				else {
					me._node1.ggParameter.sx = 1;
					me._node1.ggParameter.sy = 1;
					me._node1.style[domTransform]=parameterToTransform(me._node1.ggParameter);
				}
			}
		}
		me._node1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node1.ggCurrentLogicStateVisible == 0) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 1) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 2) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 3) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 4) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 5) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 6) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 7) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 8) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 9) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 10) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 11) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 12) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 13) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 14) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 15) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 16) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 17) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else if (me._node1.ggCurrentLogicStateVisible == 18) {
					me._node1.style.visibility="hidden";
					me._node1.ggVisible=false;
				}
				else {
					me._node1.style.visibility=(Number(me._node1.style.opacity)>0||!me._node1.style.opacity)?'inherit':'hidden';
					me._node1.ggVisible=true;
				}
			}
		}
		me._node1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node1);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 211px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 376px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 9 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 9 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 9 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 9 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t[0].clientX;
			me._scrollarea_1.ggDragLastY = t[0].clientY;
			me._scrollarea_1__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByX(-me._scrollarea_1.ggDragInertiaX);
					me._scrollarea_1.ggScrollByY(-me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._scrollarea_1__content.ontouchend = null;
				me._scrollarea_1__content.ontouchmove = null;
			}
			me._scrollarea_1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_1.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastX = t[0].clientX;
				me._scrollarea_1.ggDragLastY = t[0].clientY;
				me._scrollarea_1.ggScrollByX(-diffX);
				me._scrollarea_1.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 9px; height: 507px; background-color: rgba(255,255,255,0.00392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 9px; height: 507px; background-color: rgba(254,188,72,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t[0].clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 9px; height: 9px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDy=-6.81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 88.6363%;';
		hs+='left : 8.53%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 2%;';
		hs+='pointer-events:auto;';
		hs+='z-index: 2;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._scrollarea_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._scrollarea_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._scrollarea_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._scrollarea_1.ggCurrentLogicStateScaling == 0) {
					me._scrollarea_1.ggParameter.sx = 0;
					me._scrollarea_1.ggParameter.sy = 0;
					me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
					me._scrollarea_1.ggUpdatePosition();
				}
				else {
					me._scrollarea_1.ggParameter.sx = 1;
					me._scrollarea_1.ggParameter.sy = 1;
					me._scrollarea_1.style[domTransform]=parameterToTransform(me._scrollarea_1.ggParameter);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth - 9;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight - 9;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					me.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._cloner_1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 173;
		el.ggHeight = 210;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._cloner_1.ggHeight) + 'px';
				parameter.left=(column * me._cloner_1.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 210px;';
		hs+='left : 17px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
				me._cloner_1.ggUpdate();
		}
		me._cloner_1.ggNodeChange=function () {
			me._cloner_1.ggUpdateConditionNodeChange();
		}
		me._scrollarea_1__content.appendChild(me._cloner_1);
		me._scroll_name_left.appendChild(me._scrollarea_1);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDy=-4.81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88.8111%;';
		hs+='left : 9.05%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._rectangle_5);
		me.divSkin.appendChild(me._scroll_name_left);
		el=me._loading_1=document.createElement('div');
		el.ggId="loading 1";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading_1.onclick=function (e) {
			me._loading_1.style[domTransition]='none';
			me._loading_1.style.visibility='hidden';
			me._loading_1.ggVisible=false;
		}
		me._loading_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading_1.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 229px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading_1.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading_1.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading_1);
		el=me._box_shadow_bot=document.createElement('div');
		el.ggId="box shadow bot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -19px;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : -5px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_shadow_bot.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._box_shadow_bot.onmouseover=function (e) {
			me.elementMouseOver['box_shadow_bot']=true;
		}
		me._box_shadow_bot.onmouseout=function (e) {
			me.elementMouseOver['box_shadow_bot']=false;
		}
		me._box_shadow_bot.ontouchend=function (e) {
			me.elementMouseOver['box_shadow_bot']=false;
		}
		me._box_shadow_bot.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._box_shadow_bot);
		el=me._box_shadow_top=document.createElement('div');
		el.ggId="box shadow top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : -21px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_shadow_top.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._box_shadow_top.onmouseover=function (e) {
			me.elementMouseOver['box_shadow_top']=true;
		}
		me._box_shadow_top.onmouseout=function (e) {
			me.elementMouseOver['box_shadow_top']=false;
		}
		me._box_shadow_top.ontouchend=function (e) {
			me.elementMouseOver['box_shadow_top']=false;
		}
		me._box_shadow_top.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._box_shadow_top);
		el=me._close_menu=document.createElement('div');
		el.ggId="close menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 265px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_menu.style[domTransition]='';
				if (me._close_menu.ggCurrentLogicStateVisible == 0) {
					me._close_menu.style.visibility="hidden";
					me._close_menu.ggVisible=false;
				}
				else {
					me._close_menu.style.visibility=(Number(me._close_menu.style.opacity)>0||!me._close_menu.style.opacity)?'inherit':'hidden';
					me._close_menu.ggVisible=true;
				}
			}
		}
		me._close_menu.onmouseout=function (e) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._close_menu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close_menu);
		el=me._node_next=document.createElement('div');
		el.ggId="node next";
		el.ggDy=-1.83;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 97px;';
		hs+='position : absolute;';
		hs+='right : 1.15%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 297px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_next.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_next.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1024))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._node_next.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._node_next.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._node_next.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._node_next.ggCurrentLogicStateScaling == 0) {
					me._node_next.ggParameter.sx = 0;
					me._node_next.ggParameter.sy = 0;
					me._node_next.style[domTransform]=parameterToTransform(me._node_next.ggParameter);
				}
				else {
					me._node_next.ggParameter.sx = 1;
					me._node_next.ggParameter.sy = 1;
					me._node_next.style[domTransform]=parameterToTransform(me._node_next.ggParameter);
				}
			}
		}
		me._node_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._texto_node_3=document.createElement('div');
		els=me._texto_node_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mercado ";
		el.appendChild(els);
		me._texto_node_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_3.style[domTransition]='';
				if (me._texto_node_3.ggCurrentLogicStateVisible == 0) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 1) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 2) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 3) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 4) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 5) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 6) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 7) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 8) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 9) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 10) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 11) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 12) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 13) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 14) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 15) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 16) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 17) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else if (me._texto_node_3.ggCurrentLogicStateVisible == 18) {
					me._texto_node_3.style.visibility="hidden";
					me._texto_node_3.ggVisible=false;
				}
				else {
					me._texto_node_3.style.visibility=(Number(me._texto_node_3.style.opacity)>0||!me._texto_node_3.style.opacity)?'inherit':'hidden';
					me._texto_node_3.ggVisible=true;
				}
			}
		}
		me._texto_node_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_3);
		el=me._texto_node_2=document.createElement('div');
		els=me._texto_node_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mercado ";
		el.appendChild(els);
		me._texto_node_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_2.style[domTransition]='';
				if (me._texto_node_2.ggCurrentLogicStateVisible == 0) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 1) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 2) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 3) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 4) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 5) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 6) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 7) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 8) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 9) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 10) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 11) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 12) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 13) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 14) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 15) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 16) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 17) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else if (me._texto_node_2.ggCurrentLogicStateVisible == 18) {
					me._texto_node_2.style.visibility="hidden";
					me._texto_node_2.ggVisible=false;
				}
				else {
					me._texto_node_2.style.visibility=(Number(me._texto_node_2.style.opacity)>0||!me._texto_node_2.style.opacity)?'inherit':'hidden';
					me._texto_node_2.ggVisible=true;
				}
			}
		}
		me._texto_node_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_2);
		el=me._texto_node_1=document.createElement('div');
		els=me._texto_node_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mercado ";
		el.appendChild(els);
		me._texto_node_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_1.style[domTransition]='';
				if (me._texto_node_1.ggCurrentLogicStateVisible == 0) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 1) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 2) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 3) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 4) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 5) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 6) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 7) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 8) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 9) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 10) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 11) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 12) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 13) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 14) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 15) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 16) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 17) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else if (me._texto_node_1.ggCurrentLogicStateVisible == 18) {
					me._texto_node_1.style.visibility="hidden";
					me._texto_node_1.ggVisible=false;
				}
				else {
					me._texto_node_1.style.visibility=(Number(me._texto_node_1.style.opacity)>0||!me._texto_node_1.style.opacity)?'inherit':'hidden';
					me._texto_node_1.ggVisible=true;
				}
			}
		}
		me._texto_node_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_1);
		el=me._texto_node_5=document.createElement('div');
		els=me._texto_node_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mercado ";
		el.appendChild(els);
		me._texto_node_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_5.style[domTransition]='';
				if (me._texto_node_5.ggCurrentLogicStateVisible == 0) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 1) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 2) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 3) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 4) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 5) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 6) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 7) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 8) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 9) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 10) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 11) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 12) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 13) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 14) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 15) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 16) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 17) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else if (me._texto_node_5.ggCurrentLogicStateVisible == 18) {
					me._texto_node_5.style.visibility="hidden";
					me._texto_node_5.ggVisible=false;
				}
				else {
					me._texto_node_5.style.visibility=(Number(me._texto_node_5.style.opacity)>0||!me._texto_node_5.style.opacity)?'inherit':'hidden';
					me._texto_node_5.ggVisible=true;
				}
			}
		}
		me._texto_node_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_5);
		el=me._texto_node_17=document.createElement('div');
		els=me._texto_node_17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 17";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mercado ";
		el.appendChild(els);
		me._texto_node_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_17.style[domTransition]='';
				if (me._texto_node_17.ggCurrentLogicStateVisible == 0) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 1) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 2) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 3) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 4) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 5) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 6) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 7) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 8) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 9) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 10) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 11) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 12) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 13) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 14) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 15) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 16) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 17) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else if (me._texto_node_17.ggCurrentLogicStateVisible == 18) {
					me._texto_node_17.style.visibility="hidden";
					me._texto_node_17.ggVisible=false;
				}
				else {
					me._texto_node_17.style.visibility=(Number(me._texto_node_17.style.opacity)>0||!me._texto_node_17.style.opacity)?'inherit':'hidden';
					me._texto_node_17.ggVisible=true;
				}
			}
		}
		me._texto_node_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_17);
		el=me._texto_node_20=document.createElement('div');
		els=me._texto_node_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 20";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Paradero de Buses";
		el.appendChild(els);
		me._texto_node_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_20.style[domTransition]='';
				if (me._texto_node_20.ggCurrentLogicStateVisible == 0) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 1) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 2) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 3) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 4) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 5) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 6) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 7) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 8) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 9) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 10) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 11) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 12) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 13) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 14) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 15) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 16) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 17) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else if (me._texto_node_20.ggCurrentLogicStateVisible == 18) {
					me._texto_node_20.style.visibility="hidden";
					me._texto_node_20.ggVisible=false;
				}
				else {
					me._texto_node_20.style.visibility=(Number(me._texto_node_20.style.opacity)>0||!me._texto_node_20.style.opacity)?'inherit':'hidden';
					me._texto_node_20.ggVisible=true;
				}
			}
		}
		me._texto_node_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_20);
		el=me._texto_node_19=document.createElement('div');
		els=me._texto_node_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 19";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Patio de comidas";
		el.appendChild(els);
		me._texto_node_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_19.style[domTransition]='';
				if (me._texto_node_19.ggCurrentLogicStateVisible == 0) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 1) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 2) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 3) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 4) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 5) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 6) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 7) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 8) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 9) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 10) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 11) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 12) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 13) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 14) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 15) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 16) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 17) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else if (me._texto_node_19.ggCurrentLogicStateVisible == 18) {
					me._texto_node_19.style.visibility="hidden";
					me._texto_node_19.ggVisible=false;
				}
				else {
					me._texto_node_19.style.visibility=(Number(me._texto_node_19.style.opacity)>0||!me._texto_node_19.style.opacity)?'inherit':'hidden';
					me._texto_node_19.ggVisible=true;
				}
			}
		}
		me._texto_node_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_19);
		el=me._texto_node_22=document.createElement('div');
		els=me._texto_node_22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 22";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Plaza outlet ";
		el.appendChild(els);
		me._texto_node_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_22.style[domTransition]='';
				if (me._texto_node_22.ggCurrentLogicStateVisible == 0) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 1) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 2) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 3) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 4) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 5) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 6) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 7) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 8) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 9) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 10) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 11) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 12) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 13) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 14) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 15) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 16) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 17) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else if (me._texto_node_22.ggCurrentLogicStateVisible == 18) {
					me._texto_node_22.style.visibility="hidden";
					me._texto_node_22.ggVisible=false;
				}
				else {
					me._texto_node_22.style.visibility=(Number(me._texto_node_22.style.opacity)>0||!me._texto_node_22.style.opacity)?'inherit':'hidden';
					me._texto_node_22.ggVisible=true;
				}
			}
		}
		me._texto_node_22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_22);
		el=me._texto_node_18=document.createElement('div');
		els=me._texto_node_18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 18";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Plaza outlet";
		el.appendChild(els);
		me._texto_node_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_18.style[domTransition]='';
				if (me._texto_node_18.ggCurrentLogicStateVisible == 0) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 1) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 2) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 3) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 4) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 5) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 6) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 7) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 8) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 9) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 10) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 11) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 12) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 13) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 14) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 15) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 16) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 17) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else if (me._texto_node_18.ggCurrentLogicStateVisible == 18) {
					me._texto_node_18.style.visibility="hidden";
					me._texto_node_18.ggVisible=false;
				}
				else {
					me._texto_node_18.style.visibility=(Number(me._texto_node_18.style.opacity)>0||!me._texto_node_18.style.opacity)?'inherit':'hidden';
					me._texto_node_18.ggVisible=true;
				}
			}
		}
		me._texto_node_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_18);
		el=me._texto_node_15=document.createElement('div');
		els=me._texto_node_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 15";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Plaza outlet";
		el.appendChild(els);
		me._texto_node_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_15.style[domTransition]='';
				if (me._texto_node_15.ggCurrentLogicStateVisible == 0) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 1) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 2) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 3) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 4) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 5) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 6) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 7) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 8) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 9) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 10) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 11) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 12) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 13) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 14) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 15) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 16) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 17) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else if (me._texto_node_15.ggCurrentLogicStateVisible == 18) {
					me._texto_node_15.style.visibility="hidden";
					me._texto_node_15.ggVisible=false;
				}
				else {
					me._texto_node_15.style.visibility=(Number(me._texto_node_15.style.opacity)>0||!me._texto_node_15.style.opacity)?'inherit':'hidden';
					me._texto_node_15.ggVisible=true;
				}
			}
		}
		me._texto_node_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_15);
		el=me._texto_node_14=document.createElement('div');
		els=me._texto_node_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Plaza outlet";
		el.appendChild(els);
		me._texto_node_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_14.style[domTransition]='';
				if (me._texto_node_14.ggCurrentLogicStateVisible == 0) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 1) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 2) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 3) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 4) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 5) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 6) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 7) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 8) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 9) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 10) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 11) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 12) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 13) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 14) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 15) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 16) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 17) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else if (me._texto_node_14.ggCurrentLogicStateVisible == 18) {
					me._texto_node_14.style.visibility="hidden";
					me._texto_node_14.ggVisible=false;
				}
				else {
					me._texto_node_14.style.visibility=(Number(me._texto_node_14.style.opacity)>0||!me._texto_node_14.style.opacity)?'inherit':'hidden';
					me._texto_node_14.ggVisible=true;
				}
			}
		}
		me._texto_node_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_14);
		el=me._texto_node_13=document.createElement('div');
		els=me._texto_node_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Plaza outlet";
		el.appendChild(els);
		me._texto_node_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_13.style[domTransition]='';
				if (me._texto_node_13.ggCurrentLogicStateVisible == 0) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 1) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 2) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 3) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 4) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 5) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 6) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 7) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 8) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 9) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 10) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 11) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 12) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 13) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 14) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 15) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 16) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 17) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else if (me._texto_node_13.ggCurrentLogicStateVisible == 18) {
					me._texto_node_13.style.visibility="hidden";
					me._texto_node_13.ggVisible=false;
				}
				else {
					me._texto_node_13.style.visibility=(Number(me._texto_node_13.style.opacity)>0||!me._texto_node_13.style.opacity)?'inherit':'hidden';
					me._texto_node_13.ggVisible=true;
				}
			}
		}
		me._texto_node_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_13);
		el=me._texto_node_11=document.createElement('div');
		els=me._texto_node_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Plaza outlet";
		el.appendChild(els);
		me._texto_node_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_11.style[domTransition]='';
				if (me._texto_node_11.ggCurrentLogicStateVisible == 0) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 1) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 2) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 3) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 4) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 5) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 6) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 7) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 8) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 9) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 10) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 11) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 12) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 13) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 14) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 15) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 16) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 17) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else if (me._texto_node_11.ggCurrentLogicStateVisible == 18) {
					me._texto_node_11.style.visibility="hidden";
					me._texto_node_11.ggVisible=false;
				}
				else {
					me._texto_node_11.style.visibility=(Number(me._texto_node_11.style.opacity)>0||!me._texto_node_11.style.opacity)?'inherit':'hidden';
					me._texto_node_11.ggVisible=true;
				}
			}
		}
		me._texto_node_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_11);
		el=me._texto_node_16=document.createElement('div');
		els=me._texto_node_16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 16";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Zona financiera";
		el.appendChild(els);
		me._texto_node_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_16.style[domTransition]='';
				if (me._texto_node_16.ggCurrentLogicStateVisible == 0) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 1) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 2) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 3) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 4) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 5) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 6) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 7) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 8) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 9) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 10) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 11) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 12) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 13) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 14) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 15) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 16) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 17) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else if (me._texto_node_16.ggCurrentLogicStateVisible == 18) {
					me._texto_node_16.style.visibility="hidden";
					me._texto_node_16.ggVisible=false;
				}
				else {
					me._texto_node_16.style.visibility=(Number(me._texto_node_16.style.opacity)>0||!me._texto_node_16.style.opacity)?'inherit':'hidden';
					me._texto_node_16.ggVisible=true;
				}
			}
		}
		me._texto_node_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_16);
		el=me._texto_node_10=document.createElement('div');
		els=me._texto_node_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 10";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Puerta 2";
		el.appendChild(els);
		me._texto_node_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_10.style[domTransition]='';
				if (me._texto_node_10.ggCurrentLogicStateVisible == 0) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 1) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 2) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 3) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 4) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 5) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 6) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 7) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 8) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 9) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 10) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 11) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 12) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 13) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 14) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 15) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 16) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 17) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else if (me._texto_node_10.ggCurrentLogicStateVisible == 18) {
					me._texto_node_10.style.visibility="hidden";
					me._texto_node_10.ggVisible=false;
				}
				else {
					me._texto_node_10.style.visibility=(Number(me._texto_node_10.style.opacity)>0||!me._texto_node_10.style.opacity)?'inherit':'hidden';
					me._texto_node_10.ggVisible=true;
				}
			}
		}
		me._texto_node_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_10);
		el=me._texto_node_9=document.createElement('div');
		els=me._texto_node_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cine y Gimnasio";
		el.appendChild(els);
		me._texto_node_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_9.style[domTransition]='';
				if (me._texto_node_9.ggCurrentLogicStateVisible == 0) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 1) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 2) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 3) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 4) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 5) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 6) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 7) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 8) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 9) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 10) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 11) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 12) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 13) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 14) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 15) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 16) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 17) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else if (me._texto_node_9.ggCurrentLogicStateVisible == 18) {
					me._texto_node_9.style.visibility="hidden";
					me._texto_node_9.ggVisible=false;
				}
				else {
					me._texto_node_9.style.visibility=(Number(me._texto_node_9.style.opacity)>0||!me._texto_node_9.style.opacity)?'inherit':'hidden';
					me._texto_node_9.ggVisible=true;
				}
			}
		}
		me._texto_node_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_9);
		el=me._texto_node_7=document.createElement('div');
		els=me._texto_node_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="El faro";
		el.appendChild(els);
		me._texto_node_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_7.style[domTransition]='';
				if (me._texto_node_7.ggCurrentLogicStateVisible == 0) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 1) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 2) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 3) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 4) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 5) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 6) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 7) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 8) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 9) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 10) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 11) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 12) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 13) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 14) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 15) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 16) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 17) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else if (me._texto_node_7.ggCurrentLogicStateVisible == 18) {
					me._texto_node_7.style.visibility="hidden";
					me._texto_node_7.ggVisible=false;
				}
				else {
					me._texto_node_7.style.visibility=(Number(me._texto_node_7.style.opacity)>0||!me._texto_node_7.style.opacity)?'inherit':'hidden';
					me._texto_node_7.ggVisible=true;
				}
			}
		}
		me._texto_node_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_7);
		el=me._texto_node_6=document.createElement('div');
		els=me._texto_node_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Boulevard metro";
		el.appendChild(els);
		me._texto_node_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_6.style[domTransition]='';
				if (me._texto_node_6.ggCurrentLogicStateVisible == 0) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 1) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 2) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 3) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 4) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 5) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 6) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 7) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 8) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 9) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 10) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 11) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 12) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 13) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 14) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 15) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 16) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 17) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else if (me._texto_node_6.ggCurrentLogicStateVisible == 18) {
					me._texto_node_6.style.visibility="hidden";
					me._texto_node_6.ggVisible=false;
				}
				else {
					me._texto_node_6.style.visibility=(Number(me._texto_node_6.style.opacity)>0||!me._texto_node_6.style.opacity)?'inherit':'hidden';
					me._texto_node_6.ggVisible=true;
				}
			}
		}
		me._texto_node_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_6);
		el=me._texto_node_4=document.createElement('div');
		els=me._texto_node_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cl\xednica";
		el.appendChild(els);
		me._texto_node_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node3"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_4.style[domTransition]='';
				if (me._texto_node_4.ggCurrentLogicStateVisible == 0) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 1) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 2) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 3) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 4) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 5) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 6) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 7) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 8) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 9) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 10) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 11) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 12) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 13) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 14) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 15) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 16) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 17) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else if (me._texto_node_4.ggCurrentLogicStateVisible == 18) {
					me._texto_node_4.style.visibility="hidden";
					me._texto_node_4.ggVisible=false;
				}
				else {
					me._texto_node_4.style.visibility=(Number(me._texto_node_4.style.opacity)>0||!me._texto_node_4.style.opacity)?'inherit':'hidden';
					me._texto_node_4.ggVisible=true;
				}
			}
		}
		me._texto_node_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_4);
		el=me._texto_node_8=document.createElement('div');
		els=me._texto_node_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node 8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: \"Geometrica\", sans-serif; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Pileta";
		el.appendChild(els);
		me._texto_node_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node8"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getCurrentNode() == "node4"))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getCurrentNode() == "node6"))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getCurrentNode() == "node7"))
			)
			{
				newLogicStateVisible = 3;
			}
			else if (
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 4;
			}
			else if (
				((player.getCurrentNode() == "node10"))
			)
			{
				newLogicStateVisible = 5;
			}
			else if (
				((player.getCurrentNode() == "node16"))
			)
			{
				newLogicStateVisible = 6;
			}
			else if (
				((player.getCurrentNode() == "node11"))
			)
			{
				newLogicStateVisible = 7;
			}
			else if (
				((player.getCurrentNode() == "node13"))
			)
			{
				newLogicStateVisible = 8;
			}
			else if (
				((player.getCurrentNode() == "node14"))
			)
			{
				newLogicStateVisible = 9;
			}
			else if (
				((player.getCurrentNode() == "node15"))
			)
			{
				newLogicStateVisible = 10;
			}
			else if (
				((player.getCurrentNode() == "node18"))
			)
			{
				newLogicStateVisible = 11;
			}
			else if (
				((player.getCurrentNode() == "node22"))
			)
			{
				newLogicStateVisible = 12;
			}
			else if (
				((player.getCurrentNode() == "node19"))
			)
			{
				newLogicStateVisible = 13;
			}
			else if (
				((player.getCurrentNode() == "node20"))
			)
			{
				newLogicStateVisible = 14;
			}
			else if (
				((player.getCurrentNode() == "node17"))
			)
			{
				newLogicStateVisible = 15;
			}
			else if (
				((player.getCurrentNode() == "node5"))
			)
			{
				newLogicStateVisible = 16;
			}
			else if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 17;
			}
			else if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 18;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._texto_node_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._texto_node_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._texto_node_8.style[domTransition]='';
				if (me._texto_node_8.ggCurrentLogicStateVisible == 0) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 1) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 2) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 3) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 4) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 5) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 6) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 7) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 8) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 9) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 10) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 11) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 12) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 13) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 14) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 15) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 16) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 17) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else if (me._texto_node_8.ggCurrentLogicStateVisible == 18) {
					me._texto_node_8.style.visibility="hidden";
					me._texto_node_8.ggVisible=false;
				}
				else {
					me._texto_node_8.style.visibility=(Number(me._texto_node_8.style.opacity)>0||!me._texto_node_8.style.opacity)?'inherit':'hidden';
					me._texto_node_8.ggVisible=true;
				}
			}
		}
		me._texto_node_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_next.appendChild(me._texto_node_8);
		me.divSkin.appendChild(me._node_next);
		me._floorplan0.ggMarkerInstances=[];
		me._floorplan0.ggMapId = 'FloorPlan01';
		me._floorplan0.ggLastNodeId=null;
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_changenode = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_tt && me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_configloaded = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_tt && me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_active && me._floorplan0.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_normal && me._floorplan0.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_tt && me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_active && me._floorplan0.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_normal && me._floorplan0.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_hastouch = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_tt && me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_activehotspotchanged = function(){
			if(me._floorplan0.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan0.ggMarkerInstances.length; i++) {
					if (me._floorplan0.ggMarkerInstances[i]._map_pin_tt && me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._floorplan0.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan0.ggMarkerArray=[];
		me._floorplan0.ggGoogleMarkerArray=[];
		me._floorplan0.ggLastZoom = -1;
		me._floorplan0.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._floorplan0.ggRadar.update=function() {
			var radar=me._floorplan0.ggRadar;
			var map=me._floorplan0.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan0.ggMapId);
				pan -= me._floorplan0.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan0.ggFilteredIds.length > 0 && me._floorplan0.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.390625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ff0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._floorplan0.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._floorplan0.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._floorplan0.ggInitMap=function(keepZoom) {
			me._floorplan0.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._floorplan0.ggMapId);
			var mapDetails = player.getMapDetails(me._floorplan0.ggMapId);
			if (mapType == 'file') {
				me._floorplan0.style.backgroundColor = mapDetails['bgcolor'];
				me._floorplan0.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._floorplan0.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan0.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._floorplan0.ggLastZoom == -1) me._floorplan0.ggLastZoom = 2;
				var initZoom = keepZoom ? me._floorplan0.ggLastZoom : 2;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._floorplan0.ggMap = L.map(me._floorplan0, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan0.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan0.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._floorplan0.ggMap);
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._floorplan0.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._floorplan0.ggMap);
				}
			} else if (mapType == 'file') {
				if (me._floorplan0.ggLastZoom == -1) me._floorplan0.ggLastZoom = 7;
				var initZoom = keepZoom ? me._floorplan0.ggLastZoom : 9;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					zoomControls: true,
					attributionControl: false
				};
				me._floorplan0.ggMap = L.map(me._floorplan0, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._floorplan0.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._floorplan0.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._floorplan0.ggMap);
				me._floorplan0.ggMap.on('move zoom', function() {
					me._floorplan0.ggCheckBounds(mapDetails);
				});
				me._floorplan0.ggCheckBounds(mapDetails);
			}
		}
		me._floorplan0.ggClearMap=function() {
		if (me._floorplan0.ggMap) me._floorplan0.ggMap.remove();
		me._floorplan0.ggMap = null;
		me._floorplan0.ggClearMapMarkers();
		me._floorplan0.ggMapNotLoaded = true;
		}
		me._floorplan0.ggClearMapMarkers=function() {
			me._floorplan0.ggLastActivMarker = null;
			var id,marker;
			var markers=me._floorplan0.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._floorplan0.ggMap);
				}
			}
			me._floorplan0.ggMarkerArray=[];
			me._floorplan0.ggMarkerInstances=[];
			me._floorplan0.ggLastActivMarker = null;
		}
		me._floorplan0.ggCenterNode=function() {
			if (!me._floorplan0.ggMap) return;
			var gps;
			if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan0.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._floorplan0.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._floorplan0.ggFitBounds=function(force) {
			if (me._floorplan0.ggMarkerBounds.isValid()) {
				if (me._floorplan0.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._floorplan0.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._floorplan0.ggMap.zoomOut(1, {animate: false});
					me._floorplan0.ggMap.fitBounds(me._floorplan0.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
							me._floorplan0.ggMap.setZoom(2);
						} else {
							me._floorplan0.ggMap.setZoom(7 + 2);
						}
					}
				} else {
					me._floorplan0.ggMap.setView(me._floorplan0.ggMarkerBounds.getCenter(), me._floorplan0.ggMap.getZoom());
					if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
						if (force) {
						me._floorplan0.ggMap.setZoom(18);
						} else {
							me._floorplan0.ggMap.setZoom(2);
						}
					} else {
						if (force) {
						me._floorplan0.ggMap.setZoom(7);
						} else {
							me._floorplan0.ggMap.setZoom(7 + 2);
						}
					}
				}
			}
		}
		me._floorplan0.ggInitMapMarkers=function(updateMapBounds) {
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					this._div = div;
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._div.style.left = -12 + 'px';
					this._div.style.top = -41 + 'px';
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._floorplan0.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan0.ggFilteredIds = [];
			if (me._floorplan0.ggFilter != '') {
				var filter = me._floorplan0.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan0.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan0.ggFilteredIds.length > 0) ids = me._floorplan0.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._floorplan0.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lat'] == b['lat']) return a['lng'] - b['lng']; else return b['lat'] - a['lat']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			var marker;
			var markerLocation;
			me._floorplan0.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._floorplan0.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._floorplan0.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._floorplan0.ggMap);
					me._floorplan0.ggMarkerArray[id]=marker;
					me._floorplan0.ggMarkerInstances.push(div);
					me._floorplan0.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._floorplan0.ggMarkerBounds.isValid() && updateMapBounds) {
				me._floorplan0.ggFitBounds(false);
			}
			skin.updateSize(me._floorplan0);
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_changenode();
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_configloaded();
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_active();
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_hastouch();
		me._floorplan0.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._floorplan0.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			if (me._floorplan0.ggMap) {
				me._floorplan0.ggLastZoom = me._floorplan0.ggMap.getZoom();
			}
			me._floorplan0.ggMapId = mapId;
			me._floorplan0.ggClearMap();
			me._floorplan0.ggInitMap(true);
			me._floorplan0.ggInitMapMarkers(false);
		var mapDetails = player.getMapDetails(me._floorplan0.ggMapId);
		me._floorplan0.ggCheckBounds(mapDetails);
		}
		me._floorplan0.ggInCheckBounds=false;
		me._floorplan0.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				var mapWidthInDeg = tileInDeg * (tmpWidth / 256);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				var mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				var mapWidthInDeg = mapHeightInDeg * mapAR;
			}
			if (me._floorplan0.ggInCheckBounds) return;
			me._floorplan0.ggInCheckBounds = true;
			var mapCenter = me._floorplan0.ggMap.getCenter();
			var currentZoom = me._floorplan0.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._floorplan0.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._floorplan0.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			if (mapWidthInDeg < me._floorplan0.clientWidth * pixelInDeg) {
				x = mapWidthInDeg / 2;
			} else {
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			}
			if (mapHeightInDeg < me._floorplan0.clientHeight * pixelInDeg) {
				y = -mapHeightInDeg / 2;
			} else {
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			}
			var newCenter = L.latLng(y, x);
			me._floorplan0.ggMap.setView(newCenter, me._floorplan0.ggMap.getZoom(), {animate: false});
			me._floorplan0.ggInCheckBounds = false;
		}
		me._floorplan.ggMarkerInstances=[];
		me._floorplan.ggMapId = 'FloorPlan01';
		me._floorplan.ggLastNodeId=null;
		me._floorplan.callChildLogicBlocksHotspot_map_pin_changenode = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_tt && me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan.callChildLogicBlocksHotspot_map_pin_configloaded = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_tt && me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_active && me._floorplan.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._floorplan.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._floorplan.ggMarkerInstances[i]._map_pin_normal && me._floorplan.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._floorplan.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_tt && me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_active && me._floorplan.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._floorplan.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._floorplan.ggMarkerInstances[i]._map_pin_normal && me._floorplan.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._floorplan.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan.callChildLogicBlocksHotspot_map_pin_hastouch = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_tt && me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._floorplan.callChildLogicBlocksHotspot_map_pin_activehotspotchanged = function(){
			if(me._floorplan.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._floorplan.ggMarkerInstances.length; i++) {
					if (me._floorplan.ggMarkerInstances[i]._map_pin_tt && me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._floorplan.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._floorplan.ggMarkerArray=[];
		me._floorplan.ggGoogleMarkerArray=[];
		me._floorplan.ggLastZoom = -1;
		me._floorplan.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._floorplan.ggRadar.update=function() {
			var radar=me._floorplan.ggRadar;
			var map=me._floorplan.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._floorplan.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan.ggMapId);
				pan -= me._floorplan.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan.ggFilteredIds.length > 0 && me._floorplan.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.390625;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#ff0000',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#ff0000',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._floorplan.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._floorplan.ggInitMap=function(keepZoom) {
			me._floorplan.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._floorplan.ggMapId);
			var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
			if (mapType == 'file') {
				me._floorplan.style.backgroundColor = mapDetails['bgcolor'];
				me._floorplan.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._floorplan.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._floorplan.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._floorplan.ggLastZoom == -1) me._floorplan.ggLastZoom = 2;
				var initZoom = keepZoom ? me._floorplan.ggLastZoom : 2;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._floorplan.ggMap = L.map(me._floorplan, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._floorplan.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._floorplan.ggMap);
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._floorplan.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._floorplan.ggMap);
				}
			} else if (mapType == 'file') {
				if (me._floorplan.ggLastZoom == -1) me._floorplan.ggLastZoom = 7;
				var initZoom = keepZoom ? me._floorplan.ggLastZoom : 9;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					zoomControls: true,
					attributionControl: false
				};
				me._floorplan.ggMap = L.map(me._floorplan, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._floorplan.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._floorplan.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._floorplan.ggMap);
				me._floorplan.ggMap.on('move zoom', function() {
					me._floorplan.ggCheckBounds(mapDetails);
				});
				me._floorplan.ggCheckBounds(mapDetails);
			}
		}
		me._floorplan.ggClearMap=function() {
		if (me._floorplan.ggMap) me._floorplan.ggMap.remove();
		me._floorplan.ggMap = null;
		me._floorplan.ggClearMapMarkers();
		me._floorplan.ggMapNotLoaded = true;
		}
		me._floorplan.ggClearMapMarkers=function() {
			me._floorplan.ggLastActivMarker = null;
			var id,marker;
			var markers=me._floorplan.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._floorplan.ggMap);
				}
			}
			me._floorplan.ggMarkerArray=[];
			me._floorplan.ggMarkerInstances=[];
			me._floorplan.ggLastActivMarker = null;
		}
		me._floorplan.ggCenterNode=function() {
			if (!me._floorplan.ggMap) return;
			var gps;
			if (player.getMapType(me._floorplan.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._floorplan.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._floorplan.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._floorplan.ggFitBounds=function(force) {
			if (me._floorplan.ggMarkerBounds.isValid()) {
				if (me._floorplan.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._floorplan.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._floorplan.ggMap.zoomOut(1, {animate: false});
					me._floorplan.ggMap.fitBounds(me._floorplan.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._floorplan.ggMapId) == 'web') {
							me._floorplan.ggMap.setZoom(2);
						} else {
							me._floorplan.ggMap.setZoom(7 + 2);
						}
					}
				} else {
					me._floorplan.ggMap.setView(me._floorplan.ggMarkerBounds.getCenter(), me._floorplan.ggMap.getZoom());
					if (player.getMapType(me._floorplan.ggMapId) == 'web') {
						if (force) {
						me._floorplan.ggMap.setZoom(18);
						} else {
							me._floorplan.ggMap.setZoom(2);
						}
					} else {
						if (force) {
						me._floorplan.ggMap.setZoom(7);
						} else {
							me._floorplan.ggMap.setZoom(7 + 2);
						}
					}
				}
			}
		}
		me._floorplan.ggInitMapMarkers=function(updateMapBounds) {
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					this._div = div;
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._div.style.left = -12 + 'px';
					this._div.style.top = -41 + 'px';
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._floorplan.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan.ggFilteredIds = [];
			if (me._floorplan.ggFilter != '') {
				var filter = me._floorplan.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan.ggFilteredIds.length > 0) ids = me._floorplan.ggFilteredIds;
			}
			var nodeSortObjs = [];
			for (var i=0; i<ids.length;i++) {
				var gps;
				if (player.getMapType(me._floorplan.ggMapId) == 'web') {
					gps=player.getNodeLatLng(ids[i]);
				} else {
					gps=player.getNodeMapCoords(ids[i], me._floorplan.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					var nodeSortObj = {};
					nodeSortObj['id'] = ids[i];
					nodeSortObj['lat'] = gps[0];
					nodeSortObj['lng'] = gps[1];
					nodeSortObjs.push(nodeSortObj);
				}
			}
			nodeSortObjs.sort(function(a, b){if (a['lat'] == b['lat']) return a['lng'] - b['lng']; else return b['lat'] - a['lat']});
			ids = [];
			for (var i=0; i<nodeSortObjs.length;i++) {
				ids.push(nodeSortObjs[i]['id']);
			}
			var marker;
			var markerLocation;
			me._floorplan.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._floorplan.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._floorplan.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._floorplan.ggMap);
					me._floorplan.ggMarkerArray[id]=marker;
					me._floorplan.ggMarkerInstances.push(div);
					me._floorplan.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._floorplan.ggMarkerBounds.isValid() && updateMapBounds) {
				me._floorplan.ggFitBounds(false);
			}
			skin.updateSize(me._floorplan);
		me._floorplan.callChildLogicBlocksHotspot_map_pin_changenode();
		me._floorplan.callChildLogicBlocksHotspot_map_pin_configloaded();
		me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._floorplan.callChildLogicBlocksHotspot_map_pin_active();
		me._floorplan.callChildLogicBlocksHotspot_map_pin_hastouch();
		me._floorplan.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._floorplan.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			if (me._floorplan.ggMap) {
				me._floorplan.ggLastZoom = me._floorplan.ggMap.getZoom();
			}
			me._floorplan.ggMapId = mapId;
			me._floorplan.ggClearMap();
			me._floorplan.ggInitMap(true);
			me._floorplan.ggInitMapMarkers(false);
		var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
		me._floorplan.ggCheckBounds(mapDetails);
		}
		me._floorplan.ggInCheckBounds=false;
		me._floorplan.ggCheckBounds=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				var mapWidthInDeg = tileInDeg * (tmpWidth / 256);
			var mapHeightInDeg = mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				var mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				var mapWidthInDeg = mapHeightInDeg * mapAR;
			}
			if (me._floorplan.ggInCheckBounds) return;
			me._floorplan.ggInCheckBounds = true;
			var mapCenter = me._floorplan.ggMap.getCenter();
			var currentZoom = me._floorplan.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._floorplan.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._floorplan.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			if (mapWidthInDeg < me._floorplan.clientWidth * pixelInDeg) {
				x = mapWidthInDeg / 2;
			} else {
			if (x > mapWidthInDeg - xOffset) x = mapWidthInDeg - xOffset;
			if (x < xOffset) x = xOffset;
			}
			if (mapHeightInDeg < me._floorplan.clientHeight * pixelInDeg) {
				y = -mapHeightInDeg / 2;
			} else {
			if (y < -mapHeightInDeg + yOffset) y = -mapHeightInDeg + yOffset;
			if (y > -yOffset) y = -yOffset;
			}
			var newCenter = L.latLng(y, x);
			me._floorplan.ggMap.setView(newCenter, me._floorplan.ggMap.getZoom(), {animate: false});
			me._floorplan.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner1.ggUpdate();
			me._node_cloner0.ggUpdate();
			me._node_cloner.ggUpdate();
			me._floorplan0.ggClearMap();
			me._floorplan0.ggInitMap(false);
			me._floorplan0.ggInitMapMarkers(true);
			me._floorplan.ggClearMap();
			me._floorplan.ggInitMap(false);
			me._floorplan.ggInitMapMarkers(true);
			me._cloner_1.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller1.ggUpdatePosition();
			me._node_scroller0.ggUpdatePosition();
			me._node_scroller.ggUpdatePosition();
			me._scrollarea_1.ggUpdatePosition();
			me._loading_1.style[domTransition]='none';
			me._loading_1.style.visibility='hidden';
			me._loading_1.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading_1.style[domTransition]='none';
				me._loading_1.style.visibility=(Number(me._loading_1.style.opacity)>0||!me._loading_1.style.opacity)?'inherit':'hidden';
				me._loading_1.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._floorplan0.ggUpdateConditionTimer();
		me._floorplan.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me.elementMouseOver['box_shadow_bot']) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		if (me.elementMouseOver['box_shadow_top']) {
			player.setVariableValue('vis_thumbnail_menu', false);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-708;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 919px;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAJW0lEQVR4nO2da6xdRRXHf0OhaClI5GGDiFhL21tr21jSChRTjQEh8R2+GhOUl/jBWINRYySgwdi0SLExhhDqC1MDGkD0qgWUAqHUqGBf5mILFrC0KZQrbbm95e+HObfc1HPac+6ZWWv2ufuXTPqhN+sxa87svdfMrAn0KILjgJnAHGA2cBbwTmAKcCIwGZjU+PO9wH+BQeAF4FngGWAD8Hdgc4BhS/utCN4GpELRl/nAxcBi4HzeCHC37AUeAR4C+gP8JZHcmm4RvE9ws+AZgYzaNsFywTxv/8clguMFnxOsNwx6q/aE4HLBRO9+6XkEkwRLBM8VEPjD23bBl5XusVMzguAYwWWNqdc70O0MhCsEE7z7rScQzGtMs96B7bStE8z17r/KIpgouElwoI'+
			'BgjrUNCb6t+Ela0y6CswWPFhDAVO0JwTTvfq0Ego8K9hQQtNTtZcGl3v1bNIKvCA4WEKxcbVjwJe9+Lg5BECwrIEBW7Vb1UBa2KxQ/8X5UQFCs2w8Fx3j3vzuKaVzvYHi1ld7974rgxgKC4N2u946DC4LPFND5pbTLveLg8iIiOA94EDjeQ3+B7AcWB3jcWrH5ABCcStxkcYa17sLZDswNsNtSqcdb6Erq4DfjTOA2byOyorhu7v28Lb191jImZo+AxtS/ifhvTWt2A30BXrRQZvkIWEYd/HZ4K7DUSpnJDCBYCDxmpa8FTwP9wFpgM3Hn7yuN/zuJuGu4D1hE3Fg61cHGEQS8P8A6RxvSIXjI6Xk6LPi54g7hTuwNggsEdzZkeNj+QK54mCK4xKkD+wUzEtjfJ/ijkw8XpYiBK7L/9e8VfD6DH1cJ9hn7sia1H6YI'+
			'Fhh32IuCczP7s9PYp/m5/MmO4KfGwZ9p4FOf8SBYldunLAhOVpyOLTppb85ffhPfFsrucfCq4ldKtRBcY/grSf7Mb8O/q3vZv64R/Mmoc37v6OMaIx//4OXjmBCcIpv9/MNK8KnXhZ+zZJMnGBKcnMOHXKngS4FjM8kezeoAWwz0NCXARuAuA1XHkWlLea4B8MFMcg9nhZGeI3GrkZ7FRnq6RzBgMC0OqICt1Ypp460G/m7OYX/yGUCxBMu7U8ttQn8AGeg5Ig0b+g1UTRecklpojkfAnAwym7HWSE87PGygI5Chb3MMgPdmkNmMTUZ62iHL9NyE2akF5hgAVp9l/zbS0w7PGulJnurOMQDOyiCzGYNGetrhlaP/SRLekVpgjgFwZgaZNZHkfZtjACR/U23BiUZ62sFqsea01AJzDIDJGWQ2I/l02AVWj70TUgvMMQ'+
			'DenEFmM2YZ6WmHPiM9yX9cOQaA1VbzRUZ62uFCIz3J+zZHsKyKKl9cSiqYuI3cgqHUAnMMgAMZZDZjKh1u987EImIVcgsqMQBeyiCzFdca6mrFFw11JT85nGMAmJxpa3CZ7F7A/g/F1OynDVXuSi0wxwDYkUFmKyYAtxjqO0Tj2b8C2/OVyfs2h/FPZ5B5JD4suMpYJ8AXsN+kkbxvcwyAf2aQeTSWCxZYKVMscWN2gncUyfs2xwDwWKZ9E/Abi/cBwXuAe/Gpb7TRQWdnKB4Ied1gi1SztlPxKHou384T7HLy7aDKWv9ojWCTUydJ8cTO1Yn9CYJrBfsd/XoqpU9ZURmlX9cowXqBYLbgwQL8qU5VUcGnCugwKU6bvxAsUgdpY8Vf/IWC1SqnevnHcsQqSy5d8BZgJ2XdlLGVeIzsYeIevm28savoJGI6t4+4sHMR'+
			'cLa5ha15DTg1xMstk5JtMUXwW+AjueSPM+4J8PEcgnNmsX6WUfZ4485cgnPOAJOJ9/Ba7RDqVQaBKSFeX5ucbDNA43n1k1zyxxF35Ao+ZN5QofhStSG3nh5GwKyQ8eBJ1pWsENPCv8upo8e5P2fwweCXqVi7Z52Frh5kYe5qodnXsgOsB+7PracHuc+iVKxVreA5wF+pb8lql9eBc0Pss6yYBCTAk9RfBJ3wY4vgg+19AW8nbmiYZKWzouwHZgSjE8dmU3KA5yijpk/p3GwVfDB+M1csdTaA3QHSqvESMM3y4ijTl7IALwPfsdRZMW6wvjXM49q4icS9bRaFpKrENmBmiEu/Zph/loV4vOmb1norwNesgw9+N4cGYpLDrMJ34fwNmB/i978pLomZRm29JR66C2WJR/DdUdzL773Xzrvd5xkD1wWaxnLxk9gUli6Rg8'+
			'C8AP/wMsA1N99YLh7PKeJVnsGHApZox3GKeB8x5eta8NJ9da6RIv6+tx0OLPcOPhQwAwAonnkbAE73tsWIXcSU7x5vQ9xnAIAQd76OpxTxDSUEHwqZAQAUTxFtBKZ525KZrcTr4c2zfs0oYgYACLG62De87TDgq6UEvzgahzIfLSA5k6utU0GzbpEIPlBAoHK1D3n3byUQ3FtAsFK3e7z7tRlFTkeKN2M8Re+kiA8Cc0M8JVUUxbwEjqZxGuYObzsScnuJwYdCZwAAwRnEFHHyGvnG7AOmB9jubUgzipwBAAI8Dyz3tiMBS0sNPhQ8AwAjNQYGgLd52zJGdhJTvlaXSnVMsTMAHKoxcKO3HV1wfcnBh8JnAGAkRbwBOMfblg75FzHlm7zGf0qKngHgUIr46952jIHrSg9+pRA8UkAyp932uCowu1YKxTq9XjWIO20l'+
			'XWjVOwh+XUBwj9Z+5d1PPYtghuBAAUFu1YZV1n2GR6X4l8DRBNgC3O5txxG4LVShpv8oKveiorhvcIDyaue/CpwTYnHMylCpGQAgxFvJSkwRL61a8CuLYLLghQKe+SNth+xuEK8BEFxTQOBHWtIbSmraQHCsYGMBwd+isu5FGD+ojJtJPundD+MawVrH4D+mCn5J9RSChfJLEV/g7X8NILjbIfh3eftd00AwXTBkGPwDcry1vKYJgpWGA+AH3v7WHIbgdMEeg+APCqZ4+5uKyqWCW9FIES8zUPW9AP8x0FPTKYITBM9n/PXvUHmLUDWjEVyZcQBc4e1fzVEQTBBsyBD8zeqds4q9jeATGQZAlqtbazIheCBh8P/s7U9NhwgWKF2K+Hxvf2rGgOCXCYK/2tuPmjEimCp4rYvgD6l6R9JqRiNY0cUAuMXb/pouEZymsa'+
			'WIB1XdY+k1o9HYkkNXettdkxDBqg6CX/Lhk5qxoFiE8jrF41utAj8s+JZ6aJGs5jAaXwbfFawX7G609YKbBO/yts+a/wFxlTsupNY1awAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=0.75;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAANHElEQVR4nO2dfXBcV3mHn/defexeSQnBZoZ2aGDCTItbh3YKQ3AaUgOdpmTo1JLidsoMGYbymcYEaq0soMFRQiHSru0UpyFRAiVNC1PW0qomISRtqSExkI8OJEDspOSzBIoNdhxJu7Kle9/+ITkIW3JW0vm4d+Vnxv9o1u/v1T0/nT3nvedDaFD0fe9rnvjZWa8JA32tomsRzgZeCbwc6ADagWj241VgHBgD/SnIM4o+HWjww2mSh9oPt+2XPf3Tfn4Tu4jvBEyhINXu3tcFJBclKusFzueXDbxcqgp7A9iTJMldbaPb/ttQXO9k3gATXYXfF+VShE7gbEeyT4NUkkRvbR8tfs+RphUyaQB926bWaj73ToEPAK/znM6Dgt6YC9tuk3L/Mc+5LJpMGU'+
			'DfvjWqNVcvQ/gI8Ou+8zmBZ0F25I/lPyu391d9J1MvmTCAbt0a1B6udiMUmRnIpZlnFa6Owqc+J+Vy7DuZFyP1BhjfUPi9IOBm4PW+c1kkDyQavLe9MvCQ70RORWoNoBu3ttTiiatBNgNNvvNZIlMKxWj1katkaGjKdzLzkUoD1Db0vUqD+IvAOt+5GOLBIAz/Mle+9ke+EzmR1BlgorvnT0nkn0U4w3cuhjmiwjvahotf9Z3IXALfCcyl2t1bEJXRBmx8gDNF2V3tLHzEdyJzSUUPoCC17sI2lFQ9HGsI/5AfLm4SUP+peEa3bg0mf1C7UVXf6zsXlwjclDs3ukz6+xOfeXgfXdcerm5HWFGND6Dw/tr3qwlwmc88vI4BJjp7P4lwhc8cPPPBic5Cv88EvH0F1DoLl6pwqy/9NCHoe/Ijpc/50fZAtbNnHSL/BbT6'+
			'0E8hk4iuj4ZL97kWdm6A59++eXVTS/AQ6XuZ45sfT4XTv3tmecchl6LOxwBNLcENnG78+XhFc9x0i2tRpwaodfX8FbDRpWbG6Kx1Fd7lUtDZV8Bs178PWO1KM6McilXXdFRKB1yIOesBmlpkO6cbvx5eGgolV2JOeoBqd895qHzbld4CPA56FyL3KvH+OGl9puNlv3geYOzgqjPC4OjZosEakAuAi4BzPOaqJPLGaHTwfttCbiqBKgP4afwY5cuEwfXRroFvneJzv5j9913giwpS6yqcD3I56EYgdJLtLxECvRZ4i30hy0xs2Pw2CQLnr0BVuTtskg/lyoOPLifO0c7eNTG6E+GtpnKrlyDgotyu4t02Naz3ABIEW2xrnEBNVa9oq5RuNhGstTK4D/ijic7eD4joDiBnIm49JAlbAKsGsNoDVDf0voFAXVa3DqrIxW'+
			'3Dgw/aCD77+9yBw8GsJsnrbW5EsTsLCPRDVuP/KgdDSS601fgA0ejg/aHKhcDPbWmcRBBYfYbWeoDDGz78ktag+SdA3pbGHGoqYrXx5zI7q9mDm6+Dar42+Wty587nbQS31gO0BC3vwE3jo6pXuGp8gGi4dJ8Kf+NKrppr/Qtbwa0ZQMBa0nNR+HdTA77F0DZc/CzwdSdiIn9uK7QVAzzf+dFVoOfbiH0CcRjKJgc68xKGySbA+u4fgT88vOHDL7ER24oBmiW+GBdFJuXLy53nL4fW8rZHUBl2INXcGjRdbCOwFQMkJG+2EfdkdKcbnYWRUK93oiPBehtxrRhAkAttxD2Bx/OV0ncc6JyS3K7ivcBTtnU0USvP1LgBxjcWXg682nTck9G7UrKuXgXuciD0mzNjK7MYN0CT8lrTMedF5F4nOvWgco8DFWmW2PizNW6A'+
			'JJFzTcecVydmnwudekg03u9CR9G1pmMaN4AIv2U65nwk0vS/LnTqIWluecaNkr7GdETzg0BNnBzU1NHUMuZCpx7ax8etlGlPRn7DdEQLswB5hfmYp5nB/LM1bgAF4yPV+RibPtbhQqcextvbHW1n15eZjmihB9B28zFPJtBp493hUgmmjrk6n7DNdEAbXwFO3gAGgf62C516CEJZ40jK+B+XjUqgo6XmcoEbnTpQeZMjJePP1kZjuTpU+SJNwwEXIDqzjNwFxk8itWEAV8ehnTOzdNsvk5cULsDd4ZWZMMBhCzEXQC53pzU/muByPYLxncM2BoFO9rTNoBuPdva6GoCdxFhnz1qg26Gk8cWo5kvB6M9MxzwF4bToZxzqvYCChMhOXO6wFow/W/OFIOFx0zFPhcxu2nCpCVDr7v1rhPVORRPzz9a8exN9zHjMF0FEd1'+
			'Q39L7BlV61s2cdqs528B5HRYw/WwvzysDHa9ocgd7hYjww1r3ldxD5Ch7ONwqC5BHjMU0HrOmxB/CzUmd1LPrNanfPebYEqp0960JNvoGj9x0nkOSOBca3iBk3wFmj1z0H+FqpuxqVPRPdhQ+aDDp7IdXlsyeb+Wh8BB6R3YPGX4FbWbotIveoml+8UCc5UW6odhUuCcNkU2t527K6zbHOnrU1ZCeq6w3ltyQUrCw7s2IATfhaCo5/fUscB9+vdhXKaHB9vjKwt95FpAoyeUnhgtkiTzcpOFVdka/ZiGulln5o45Yzc3FyEGi2EX+JPClwNyr3JBrvj6XlqeOrisZq42eETbwyCGUNKm9S+GPgVX7T/RWO5sNotZT7x00HtvYypdZVuFPhT2zFX2HsjkaKf2YjsL2uTfRfrMVeaah+yVZoawbIBW2joMa7rBXIWH6q'+
			'bbet4Pa2h5f7x0FusxV/BfEFmxdRWh3dhio7ScH2rQyjoSQ32BSwaoDWyuA+ETvTl5WBfLV1eJvVXUfW57cJfILTvcDSSLjatoR1A8yc3SOpuisvEwi3uzgq1kmFK5HkY4DX27EyRqLEn3Ah5MQA7cOlh1X19IygThT+qW14+3ddaDmrcUtT/HHA2nSmgZiUMNjqSsyZAaLyjmfTcKZP6lGui8oDjrabO37LdTSZvpaZY9lPMz+Hp5qmiy4FnRrgrNHrnkP0Uy41M4VyTcPfGpYP2q4HtyuHM8JT+clJq1W/+XBuACn3HwN1MsXJFMLH5M6dR13Lelnpkh8pfQlwdrhz6hG+l18b/asPaS8GEFBRenxopxER6fF1jby3tW75SvEbAqdLxMgd+V2D/+lL3etix0ClB3fnCaSRONakz2cCXg3QWhncp6zcErEqt3ZUSj'+
			'/wmYP35c4SxleyMkvENUniq3wn4d0AUXnHs4r+ve88XKOwI/q37d5PO/VuAIBoOvg04PBgCe/8/GgYDPpOAlJiANk9OIawckrEqte8tDxwxHcakBIDAORXHbkB9Ee+83DAk/nJozf5TuI4qTGADA1Ngfyt7zysI9rno+S7EN7P2ZvL7K3de4F1vnOxxAP5keJ5abjp5Dip6QHg+PUrfgsjNhHVvjQ1PqTMAAD5kW3fRLjddx4W+Eq+UnJz0eQiSJ0BAEKSAo1VIo5jCT7qO4n5SKUBWoe37Rf4gu88TCEin+8YHvih7zzmI5UGAEimZSsw4TsPA9RU7e/wWSqpNUDb7sGfKOzwncdyUaQUjQz+2HceC5FaAwBEYTQA5o9HdcjBqFZzfqDkYki1AaTcP47IJ33nsVRU6Zc7dzq6UWxppNoAAPlVz90E/I/vPJbAE1FT'+
			'dLPvJF6M1BtAhoamUD7uO4/FI1tmVkCnm1SVgk9FtatnL4j3G0Lq5P78SPGNaav6zUfqe4AXmFlFnPoHCoAGm7PQ+JAhA0SV0rcRrJ2WZZDRqDKQnpvNX4TMGAAgCGQL6S4Rx2GYZGq8kikD5MqDjwp83nceCyFwy3IPp3ZNpgwAMK16JZCam8PnMJEw1e87icWSOQN0VEoHVNNXIlak1DZy3U9957FYMmcAgKgpKgL/5zuPORyIarXtvpNYCpk0gJT7xxW5xncex1HhqrSXfBcikwYAiA7lhxR8XFB1AvJYtOrILb6zWCqZNYDs6Z8WTcMq4qRvZkVzNslMKXghql2Fe4E/8CT/nfxI8fysVP3mI7M9wAuIbsZfA/RkufGhAQwQDZfuA0adC4uORCPFvc51DZN5AwAEGvcBLr+Hp8MkSMH4Y/k0hAFyle2PAQ5H4j'+
			'rUWhlMwQxk+TSEAQBi1atUcTAX1/EkTE8NYrk0jAE6KqUDgaj1apyIFNvLxTRVIZdFwxgAINdGCcRmPf5AbkpS9x5iOTSUAeS20oSSWHsjp3CljQucfdJQBgCIwqdvUcX8O3nl0ehQlNq1CEul4Qwg5XJMIMZX5Si6Rfb0p3k10pLIfCl4Iapdha8DbzYSTLknqhQvNBIrZTRcD/ACifRhqkwbBg17aEXDGmDmyjUdNhCqHO0a+JaBOKmkYQ0AIDRtAZazO2cqkCzuSqqfhjZAfuTaJ0CHlhHixtxwMYv7EuumoQ0AEIfNVy+tRKzjyXTz35nPKF00vAE6yp8+iGjvYv+fQk/77k9l+WyCumjYaeCJTHQVbhW4tJ7PKvqPbSOld9vOKQ00fA9wnGik+C5U+oD4FB+LFemPzm17j6u8fLNieoDj1Lr6zlHi9wNvBc6Z'+
			'/fEToP8hITfly6UnPabnnP8Hx8jz+HD/Q0oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
				else {
					me._map_pin_tt.ggDx=0;
					me._map_pin_tt.ggDy=38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin.appendChild(me._map_pin_tt);
	};
	function SkinCloner_node_cloner1_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 356px; height: 163px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner1=document.createElement('div');
		els=me._node_image_cloner1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner1_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 344px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner1.onclick=function (e) {
			if (
				(
					((me._node_image_cloner1.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._node_image_cloner1.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title1=document.createElement('div');
		els=me._node_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text text_minka";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 22px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 262px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.0784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 16px 2px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner1.appendChild(me._node_title1);
		me.__div.appendChild(me._node_image_cloner1);
	};
	function SkinCloner_node_cloner0_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 312px; height: 151px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner0=document.createElement('div');
		els=me._node_image_cloner0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 303px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner0.onclick=function (e) {
			if (
				(
					((me._node_image_cloner0.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._node_image_cloner0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._node_title0=document.createElement('div');
		els=me._node_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text text_minka";
		el.ggType='text';
		hs ='';
		hs+='bottom : 11px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 262px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.0784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 16px 2px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image_cloner0.appendChild(me._node_title0);
		me.__div.appendChild(me._node_image_cloner0);
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 173px; height: 210px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 350px;';
		hs+='position : absolute;';
		hs+='top : -291px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 10px;';
		hs+='height: 10px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._text_5);
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 266px; height: 115px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 119px;';
		hs+='left : -1px;';
		hs+='opacity : 0.40002;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 264px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_image_cloner.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_image_cloner.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_image_cloner.style[domTransition]='opacity 0s';
				if (me._node_image_cloner.ggCurrentLogicStateAlpha == 0) {
					me._node_image_cloner.style.visibility=me._node_image_cloner.ggVisible?'inherit':'hidden';
					me._node_image_cloner.style.opacity=1;
				}
				else {
					me._node_image_cloner.style.visibility=me._node_image_cloner.ggVisible?'inherit':'hidden';
					me._node_image_cloner.style.opacity=0.40002;
				}
			}
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
			player.setVariableValue('vis_thumbnail_menu', false);
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._checkmark_tick.logicBlock_alpha();
			me._node_image_cloner.logicBlock_alpha();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._node_image_cloner.logicBlock_alpha();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._node_image_cloner.logicBlock_alpha();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text text_minka";
		el.ggType='text';
		hs ='';
		hs+='bottom : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 262px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 262px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.0784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 16px 2px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_title);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy'+
			'8xLjAvIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0zNzIyIC0yNjA2IDMyIDMyIiB4PSIwcHgiIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMz'+
			'Y2LTAuNTA0LTEuODgsMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxp'+
			'bmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgZD0iJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUx'+
			'OS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2'+
			'tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiBkPSJNLTM2OTkuOTYtMjU4My44MzcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2'+
			'LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='opacity : 0.80008;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['node_image_cloner'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=0.80008;
				}
			}
		}
		me._checkmark_tick.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._node_image_cloner.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._node_image_cloner);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._menu_responsive_small.logicBlock_scaling();
	me._menu_responsive_tablets.logicBlock_scaling();
	me._menu_background.logicBlock_scaling();
	me._active_openclose.logicBlock_scaling();
	me._boxshadow_left.logicBlock_scaling();
	me._logo_destok.logicBlock_scaling();
	me._boton_nextresponsive.logicBlock_scaling();
	me._box_shadow_topresponsive.logicBlock_scaling();
	me._box_shadow_botresponsive.logicBlock_scaling();
	me._boton_responsive.logicBlock_scaling();
	me._botons_responsive_.logicBlock_scaling();
	me._mapfloor.logicBlock_scaling();
	me._svg_9.logicBlock_scaling();
	me._svg_10.logicBlock_scaling();
	me._svg_7.logicBlock_scaling();
	me._svg_8.logicBlock_scaling();
	me._buttons_social.logicBlock_scaling();
	me._boton_next.logicBlock_scaling();
	me._image_2.logicBlock_scaling();
	me._scroll_name_left.logicBlock_scaling();
	me._node20.logicBlock_scaling();
	me._node19.logicBlock_scaling();
	me._node18.logicBlock_scaling();
	me._node17.logicBlock_scaling();
	me._node16.logicBlock_scaling();
	me._node15.logicBlock_scaling();
	me._node14.logicBlock_scaling();
	me._node13.logicBlock_scaling();
	me._node12.logicBlock_scaling();
	me._node11.logicBlock_scaling();
	me._node10.logicBlock_scaling();
	me._node9.logicBlock_scaling();
	me._node8.logicBlock_scaling();
	me._node7.logicBlock_scaling();
	me._node6.logicBlock_scaling();
	me._node5.logicBlock_scaling();
	me._node4.logicBlock_scaling();
	me._node3.logicBlock_scaling();
	me._node2.logicBlock_scaling();
	me._node1.logicBlock_scaling();
	me._scrollarea_1.logicBlock_scaling();
	me._close_menu.logicBlock_visible();
	me._node_next.logicBlock_scaling();
	me._menu_responsive_small.logicBlock_alpha();
	me._menu_responsive_tablets.logicBlock_alpha();
	me._menu_background.logicBlock_alpha();
	me._video_screentint_file.logicBlock_visible();
	me._floorplan0.logicBlock_scaling();
	me._screentint_image.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._image_popup_close.logicBlock_visible();
	me._node20.logicBlock_visible();
	me._node19.logicBlock_visible();
	me._node18.logicBlock_visible();
	me._node17.logicBlock_visible();
	me._node16.logicBlock_visible();
	me._node15.logicBlock_visible();
	me._node14.logicBlock_visible();
	me._node13.logicBlock_visible();
	me._node12.logicBlock_visible();
	me._node11.logicBlock_visible();
	me._node10.logicBlock_visible();
	me._node9.logicBlock_visible();
	me._node8.logicBlock_visible();
	me._node7.logicBlock_visible();
	me._node6.logicBlock_visible();
	me._node5.logicBlock_visible();
	me._node4.logicBlock_visible();
	me._node3.logicBlock_visible();
	me._node2.logicBlock_visible();
	me._node1.logicBlock_visible();
	me._texto_node_3.logicBlock_visible();
	me._texto_node_2.logicBlock_visible();
	me._texto_node_1.logicBlock_visible();
	me._texto_node_5.logicBlock_visible();
	me._texto_node_17.logicBlock_visible();
	me._texto_node_20.logicBlock_visible();
	me._texto_node_19.logicBlock_visible();
	me._texto_node_22.logicBlock_visible();
	me._texto_node_18.logicBlock_visible();
	me._texto_node_15.logicBlock_visible();
	me._texto_node_14.logicBlock_visible();
	me._texto_node_13.logicBlock_visible();
	me._texto_node_11.logicBlock_visible();
	me._texto_node_16.logicBlock_visible();
	me._texto_node_10.logicBlock_visible();
	me._texto_node_9.logicBlock_visible();
	me._texto_node_7.logicBlock_visible();
	me._texto_node_6.logicBlock_visible();
	me._texto_node_4.logicBlock_visible();
	me._texto_node_8.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._menu_responsive_small.logicBlock_scaling();me._menu_responsive_tablets.logicBlock_scaling();me._menu_background.logicBlock_scaling();me._active_openclose.logicBlock_scaling();me._boxshadow_left.logicBlock_scaling();me._logo_destok.logicBlock_scaling();me._boton_nextresponsive.logicBlock_scaling();me._box_shadow_topresponsive.logicBlock_scaling();me._box_shadow_botresponsive.logicBlock_scaling();me._boton_responsive.logicBlock_scaling();me._botons_responsive_.logicBlock_scaling();me._mapfloor.logicBlock_scaling();me._svg_9.logicBlock_scaling();me._svg_10.logicBlock_scaling();me._svg_7.logicBlock_scaling();me._svg_8.logicBlock_scaling();me._buttons_social.logicBlock_scaling();me._boton_next.logicBlock_scaling();me._image_2.logicBlock_scaling();me._scroll_name_left.logicBlock_scaling();me._node20.logicBlock_scaling();me._node19.logicBlock_scaling();me._node18.logicBlock_scaling();me._node17.logicBlock_scaling();me._node16.logicBlock_scaling();me._node15.logicBlock_scaling();me._node14.logicBlock_scaling();me._node13.logicBlock_scaling();me._node12.logicBlock_scaling();me._node11.logicBlock_scaling();me._node10.logicBlock_scaling();me._node9.logicBlock_scaling();me._node8.logicBlock_scaling();me._node7.logicBlock_scaling();me._node6.logicBlock_scaling();me._node5.logicBlock_scaling();me._node4.logicBlock_scaling();me._node3.logicBlock_scaling();me._node2.logicBlock_scaling();me._node1.logicBlock_scaling();me._scrollarea_1.logicBlock_scaling();me._close_menu.logicBlock_visible();me._node_next.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me._menu_responsive_small.logicBlock_alpha();me._menu_responsive_tablets.logicBlock_alpha();me._menu_background.logicBlock_alpha();me._video_screentint_file.logicBlock_visible();me._floorplan0.logicBlock_scaling();me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible();me._node20.logicBlock_visible();me._node19.logicBlock_visible();me._node18.logicBlock_visible();me._node17.logicBlock_visible();me._node16.logicBlock_visible();me._node15.logicBlock_visible();me._node14.logicBlock_visible();me._node13.logicBlock_visible();me._node12.logicBlock_visible();me._node11.logicBlock_visible();me._node10.logicBlock_visible();me._node9.logicBlock_visible();me._node8.logicBlock_visible();me._node7.logicBlock_visible();me._node6.logicBlock_visible();me._node5.logicBlock_visible();me._node4.logicBlock_visible();me._node3.logicBlock_visible();me._node2.logicBlock_visible();me._node1.logicBlock_visible();me._texto_node_3.logicBlock_visible();me._texto_node_2.logicBlock_visible();me._texto_node_1.logicBlock_visible();me._texto_node_5.logicBlock_visible();me._texto_node_17.logicBlock_visible();me._texto_node_20.logicBlock_visible();me._texto_node_19.logicBlock_visible();me._texto_node_22.logicBlock_visible();me._texto_node_18.logicBlock_visible();me._texto_node_15.logicBlock_visible();me._texto_node_14.logicBlock_visible();me._texto_node_13.logicBlock_visible();me._texto_node_11.logicBlock_visible();me._texto_node_16.logicBlock_visible();me._texto_node_10.logicBlock_visible();me._texto_node_9.logicBlock_visible();me._texto_node_7.logicBlock_visible();me._texto_node_6.logicBlock_visible();me._texto_node_4.logicBlock_visible();me._texto_node_8.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._menu_responsive_small.logicBlock_alpha();me._menu_responsive_tablets.logicBlock_alpha();me._menu_background.logicBlock_alpha(); });
	player.addListener('varchanged_vis_video_file', function(args) { me._video_screentint_file.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('varchanged_plan_status', function(args) { me._floorplan0.logicBlock_scaling(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('changenode', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_changenode();me._floorplan.callChildLogicBlocksHotspot_map_pin_changenode(); });
	player.addListener('configloaded', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_configloaded();me._floorplan.callChildLogicBlocksHotspot_map_pin_configloaded(); });
	player.addListener('mouseover', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_mouseover();me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('mouseover', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_mouseover();me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('changenode', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_active();me._floorplan.callChildLogicBlocksHotspot_map_pin_active(); });
	player.addListener('hastouch', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_hastouch();me._floorplan.callChildLogicBlocksHotspot_map_pin_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me._floorplan0.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();me._floorplan.callChildLogicBlocksHotspot_map_pin_activehotspotchanged(); });
	me.skinTimerEvent();
};
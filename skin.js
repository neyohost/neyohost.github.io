// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: customizacion_ny.ggsk
// Generated 2021-09-09T08:31:54

function pano2vrSkin(player,base) {
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, false);
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
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if (me._video_1__vid) {
				me._video_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_1.ggVideoNotLoaded ==false && me._video_1.ggDeactivate) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('video');
			me._video_1__vid.className='ggskin ggskin_video';
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('autoplay', '');
			me._video_1__vid.setAttribute('controls', '');
			me._video_1__vid.setAttribute('loop', '');
			me._video_1__source=document.createElement('source');
			me._video_1__source.setAttribute('src', media);
			me._video_1__vid.setAttribute('playsinline', 'playsinline');
			me._video_1__vid.setAttribute('style', ';');
			me._video_1__vid.appendChild(me._video_1__source);
			me._video_1.appendChild(me._video_1__vid);
			var videoEl = player.registerVideoElement('Video 1', me._video_1__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._video_1.ggVideoSource = media;
		}
		el.ggId="Video 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 200px;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_1.ggIsActive=function() {
			if (me._video_1__vid != null) {
				return (me._video_1__vid.paused == false && me._video_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_1);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggDy=53;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(5,4,49,0.501961);';
		hs+='border : 0px solid #2d11cf;';
		hs+='cursor : default;';
		hs+='height : 118.167%;';
		hs+='left : -3px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 339px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 2;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
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
		hs+='height : 441px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 320px;';
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
				} else if (posX + width > me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 1 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.offsetWidth - (me._node_scroller.ggVertScrollVisible ? 1 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 1 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.offsetHeight - (me._node_scroller.ggHorScrollVisible ? 1 : 0))) * me._node_scroller.ggVPercentVisible);
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
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 1px; height: 846px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1px; height: 846px; background-color: rgba(255,17,17,0.25098); pointer-events: auto;');
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
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 1px; height: 1px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 7px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 323px;';
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
		me._node_scroller.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight - 1) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.offsetWidth - 1;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.offsetHeight - 1;
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
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
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
		el.ggWidth = 318;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
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
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
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
		hs+='height : 128px;';
		hs+='left : 3px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 318px;';
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
		me._menu_background.appendChild(me._node_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_menu_open';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA0ElEQVR4nO3YsQ3CMBRF0WtK6KhhhqzBNqwSBoGWrMEO1HSkNQUU6GM6iAT/nvLFhW1ZjvVAkiRJUkalFdZa10APbID5pDP6vBEYgG0p5Rw/vmxArXUFnIDl9+c2qQvQxU2YNQbu+L/Fw31NfQxbJ+DK7x/7d8ZSyuI5aJ2AVFobcJx8FtMZYuAlGEc9BnTAgfsv5NeNwJ7G4iVJUm72ATFI/xTGPsA+IBX7gBikvwTtAyRJUhb2ATFI/xTGPsA+IBX7gBikvwTtAyRJkiRlcAMWC2CaN2t8nwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='19px';
					me._menu_open.style.top='100px';
				}
			}
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 33px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 326px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 3;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 326px;';
		hs+='height: auto;';
		hs+='border: 0px solid #fefefe;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Terrenos Finca Bonita";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 662px;';
		hs+='left : 316px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.onmouseout=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._rectangle_1);
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px; background-color: #28bbfd;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 188px;';
		hs+='height: 61px;';
		hs+='background: #28bbfd;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 21px 22px 21px 22px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Tannua";
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_21.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['text_21'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._text_21.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._text_21.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._text_21__text.style[domTransition]='background-color 0s';
				if (me._text_21.ggCurrentLogicStateBackgroundColor == 0) {
					me._text_21__text.style.backgroundColor="rgba(0,145,234,1)";
				}
				else {
					me._text_21__text.style.backgroundColor="rgba(40,187,253,1)";
				}
			}
		}
		me._text_21.onclick=function (e) {
			player.openUrl("https:\/\/www.tannua.com\/","");
		}
		me._text_21.onmouseover=function (e) {
			me.elementMouseOver['text_21']=true;
			me._text_21.logicBlock_backgroundcolor();
		}
		me._text_21.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_21__text)
					return;
				}
			}
			me.elementMouseOver['text_21']=false;
			me._text_21.logicBlock_backgroundcolor();
		}
		me._text_21.ontouchend=function (e) {
			me.elementMouseOver['text_21']=false;
			me._text_21.logicBlock_backgroundcolor();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_21);
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='position : absolute;';
		hs+='right : 255px;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 188px;';
		hs+='height: 61px;';
		hs+='background: #05dc5d;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 21px 22px 21px 22px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Visita nuestra web";
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_20.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['text_20'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._text_20.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._text_20.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._text_20__text.style[domTransition]='background-color 0s';
				if (me._text_20.ggCurrentLogicStateBackgroundColor == 0) {
					me._text_20__text.style.backgroundColor="rgba(3,158,41,1)";
				}
				else {
					me._text_20__text.style.backgroundColor="rgba(5,220,93,1)";
				}
			}
		}
		me._text_20.onclick=function (e) {
			player.openUrl("https:\/\/www.youtube.com\/","");
		}
		me._text_20.onmouseover=function (e) {
			me.elementMouseOver['text_20']=true;
			me._text_20.logicBlock_backgroundcolor();
		}
		me._text_20.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_20__text)
					return;
				}
			}
			me.elementMouseOver['text_20']=false;
			me._text_20.logicBlock_backgroundcolor();
		}
		me._text_20.ontouchend=function (e) {
			me.elementMouseOver['text_20']=false;
			me._text_20.logicBlock_backgroundcolor();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_20);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='position : absolute;';
		hs+='right : 452px;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 188px;';
		hs+='height: auto;';
		hs+='background: #febc48;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 21px 22px 21px 22px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Acerca de nosotros";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['text_2'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._text_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._text_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._text_2__text.style[domTransition]='background-color 0s';
				if (me._text_2.ggCurrentLogicStateBackgroundColor == 0) {
					me._text_2__text.style.backgroundColor="rgba(230,154,0,1)";
				}
				else {
					me._text_2__text.style.backgroundColor="rgba(254,188,72,1)";
				}
			}
		}
		me._text_2.onclick=function (e) {
			player.openUrl("https:\/\/www.youtube.com\/","");
		}
		me._text_2.onmouseover=function (e) {
			me.elementMouseOver['text_2']=true;
			me._text_2.logicBlock_backgroundcolor();
		}
		me._text_2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_2__text)
					return;
				}
			}
			me.elementMouseOver['text_2']=false;
			me._text_2.logicBlock_backgroundcolor();
		}
		me._text_2.ontouchend=function (e) {
			me.elementMouseOver['text_2']=false;
			me._text_2.logicBlock_backgroundcolor();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_2);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._svg_1__img.ggOverSrc=hs;
		el.ggId="Svg 1";
		el.ggDy=-51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
		}
		me._svg_1.onmouseover=function (e) {
			me._svg_1__img.src=me._svg_1__img.ggOverSrc;
		}
		me._svg_1.onmouseout=function (e) {
			me._svg_1__img.src=me._svg_1__img.ggNormalSrc;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._svg_1);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 52px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 191px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 5px 5px 5px black;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 191px;';
		hs+='height: 74px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 19px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_3.ggUpdateText();
		});
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_3.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._text_3);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg_2';
		hs=basePath + 'images/svg_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 36px;';
		hs+='cursor : pointer;';
		hs+='height : 67px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","$(bwd)");
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._svg_2);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 104px;';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 211px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 15px; background-color: #050431;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 211px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 15px 16px 15px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var hs="Continua a "+me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_4.ggUpdateText();
		});
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
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
		me.divSkin.appendChild(me._text_4);
		el=me._scrollarea_10=document.createElement('div');
		els=me._scrollarea_10__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 358px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 179px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_10.ggScrollByX = function(diffX) {
			if(!me._scrollarea_10.ggHorScrollVisible || diffX == 0 || me._scrollarea_10.ggHPercentVisible >= 1.0) return;
			me._scrollarea_10.ggScrollPosX = (me._scrollarea_10__horScrollFg.offsetLeft + diffX);
			me._scrollarea_10.ggScrollPosX = Math.max(me._scrollarea_10.ggScrollPosX, 0);
			me._scrollarea_10.ggScrollPosX = Math.min(me._scrollarea_10.ggScrollPosX, me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth);
			me._scrollarea_10__horScrollFg.style.left = me._scrollarea_10.ggScrollPosX + 'px';
			me._scrollarea_10__content.style.left = -(Math.round(me._scrollarea_10.ggScrollPosX / me._scrollarea_10.ggHPercentVisible)) + me._scrollarea_10.ggContentLeftOffset + 'px';
			me._scrollarea_10.ggScrollPosXPercent = (me._scrollarea_10__horScrollFg.offsetLeft / me._scrollarea_10__horScrollBg.offsetWidth);
		}
		me._scrollarea_10.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_10.ggHorScrollVisible || diffX == 0 || me._scrollarea_10.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_10.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_10.ggScrollPosX >= me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth)) {
					me._scrollarea_10.ggScrollPosX = Math.min(me._scrollarea_10.ggScrollPosX, me._scrollarea_10__horScrollBg.offsetWidth - me._scrollarea_10__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_10.ggScrollPosX <= 0)) {
					me._scrollarea_10.ggScrollPosX = Math.max(me._scrollarea_10.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_10__horScrollFg.style.left = me._scrollarea_10.ggScrollPosX + 'px';
			me._scrollarea_10__content.style.left = -(Math.round(me._scrollarea_10.ggScrollPosX / me._scrollarea_10.ggHPercentVisible)) + me._scrollarea_10.ggContentLeftOffset + 'px';
			me._scrollarea_10.ggScrollPosXPercent = (me._scrollarea_10__horScrollFg.offsetLeft / me._scrollarea_10__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_10.ggScrollByY = function(diffY) {
			if(!me._scrollarea_10.ggVertScrollVisible || diffY == 0 || me._scrollarea_10.ggVPercentVisible >= 1.0) return;
			me._scrollarea_10.ggScrollPosY = (me._scrollarea_10__vertScrollFg.offsetTop + diffY);
			me._scrollarea_10.ggScrollPosY = Math.max(me._scrollarea_10.ggScrollPosY, 0);
			me._scrollarea_10.ggScrollPosY = Math.min(me._scrollarea_10.ggScrollPosY, me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
			me._scrollarea_10__vertScrollFg.style.top = me._scrollarea_10.ggScrollPosY + 'px';
			me._scrollarea_10__content.style.top = -(Math.round(me._scrollarea_10.ggScrollPosY / me._scrollarea_10.ggVPercentVisible)) + me._scrollarea_10.ggContentTopOffset + 'px';
			me._scrollarea_10.ggScrollPosYPercent = (me._scrollarea_10__vertScrollFg.offsetTop / me._scrollarea_10__vertScrollBg.offsetHeight);
		}
		me._scrollarea_10.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_10.ggVertScrollVisible || diffY == 0 || me._scrollarea_10.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_10.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_10.ggScrollPosY >= me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight)) {
					me._scrollarea_10.ggScrollPosY = Math.min(me._scrollarea_10.ggScrollPosY, me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_10.ggScrollPosY <= 0)) {
					me._scrollarea_10.ggScrollPosY = Math.max(me._scrollarea_10.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_10__vertScrollFg.style.top = me._scrollarea_10.ggScrollPosY + 'px';
			me._scrollarea_10__content.style.top = -(Math.round(me._scrollarea_10.ggScrollPosY / me._scrollarea_10.ggVPercentVisible)) + me._scrollarea_10.ggContentTopOffset + 'px';
			me._scrollarea_10.ggScrollPosYPercent = (me._scrollarea_10__vertScrollFg.offsetTop / me._scrollarea_10__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_10.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_10.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_10.ggHPercentVisible);
					me._scrollarea_10.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_10.offsetWidth - (me._scrollarea_10.ggVertScrollVisible ? 9 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_10.offsetWidth - (me._scrollarea_10.ggVertScrollVisible ? 9 : 0))) * me._scrollarea_10.ggHPercentVisible);
					me._scrollarea_10.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_10.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_10.ggVPercentVisible);
					me._scrollarea_10.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_10.offsetHeight - (me._scrollarea_10.ggHorScrollVisible ? 9 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_10.offsetHeight - (me._scrollarea_10.ggHorScrollVisible ? 9 : 0))) * me._scrollarea_10.ggVPercentVisible);
					me._scrollarea_10.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_10.ggDragLastX = t[0].clientX;
			me._scrollarea_10.ggDragLastY = t[0].clientY;
			me._scrollarea_10__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_10.ggDragInertiaX *= 0.65;
					me._scrollarea_10.ggDragInertiaY *= 0.65;
					me._scrollarea_10.ggScrollByX(-me._scrollarea_10.ggDragInertiaX);
					me._scrollarea_10.ggScrollByY(-me._scrollarea_10.ggDragInertiaY);
					if (Math.abs(me._scrollarea_10.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_10.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._scrollarea_10__content.ontouchend = null;
				me._scrollarea_10__content.ontouchmove = null;
			}
			me._scrollarea_10__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_10.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_10.ggDragLastY;
				me._scrollarea_10.ggDragInertiaX = diffX;
				me._scrollarea_10.ggDragInertiaY = diffY;
				me._scrollarea_10.ggDragLastX = t[0].clientX;
				me._scrollarea_10.ggDragLastY = t[0].clientY;
				me._scrollarea_10.ggScrollByX(-diffX);
				me._scrollarea_10.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_10__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 9px; height: 438px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_10__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 9px; height: 438px; background-color: rgba(254,188,72,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_10.ggScrollPosY = 0;
		me._scrollarea_10.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_10.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_10.ggDragInertiaY *= 0.65;
					me._scrollarea_10.ggScrollByY(me._scrollarea_10.ggDragInertiaY);
					if (Math.abs(me._scrollarea_10.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_10.ggDragLastY;
				me._scrollarea_10.ggDragInertiaY = diffY;
				me._scrollarea_10.ggDragLastY = e.clientY;
				me._scrollarea_10.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_10.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_10.ggDragInertiaY *= 0.65;
					me._scrollarea_10.ggScrollByY(me._scrollarea_10.ggDragInertiaY);
					if (Math.abs(me._scrollarea_10.ggDragInertiaY) < 1.0) {
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
				var diffY = t[0].clientY - me._scrollarea_10.ggDragLastY;
				me._scrollarea_10.ggDragInertiaY = diffY;
				me._scrollarea_10.ggDragLastY = t[0].clientY;
				me._scrollarea_10.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_10.ggScrollHeight;
			if (e.offsetY < me._scrollarea_10.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_10.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_10__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_10.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_10.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_10.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_10.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_10__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 9px; height: 9px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDy=-77;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 438px;';
		hs+='left : 46px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._scrollarea_10.ggUpdatePosition=function (useTransition) {
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
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_10.ggScrollPosY / me._scrollarea_10.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_10__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_10__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_10.ggVertScrollVisible = true;
				if(me._scrollarea_10.ggVertScrollVisible) {
					me._scrollarea_10.ggAvailableWidth = me._scrollarea_10.offsetWidth - 9;
					if (me._scrollarea_10.ggHorScrollVisible) {
						me._scrollarea_10.ggAvailableHeight = me._scrollarea_10.offsetHeight - 9;
						me._scrollarea_10.ggAvailableHeightWithScale = me._scrollarea_10.getBoundingClientRect().height - me._scrollarea_10__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_10__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_10.ggAvailableHeight = me._scrollarea_10.offsetHeight;
						me._scrollarea_10.ggAvailableHeightWithScale = me._scrollarea_10.getBoundingClientRect().height;
						me._scrollarea_10__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_10__vertScrollBg.style.height = me._scrollarea_10.ggAvailableHeight + 'px';
					me._scrollarea_10.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_10.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_10.ggVPercentVisible > 1.0) me._scrollarea_10.ggVPercentVisible = 1.0;
					me._scrollarea_10.ggScrollHeight =  Math.round(me._scrollarea_10__vertScrollBg.offsetHeight * me._scrollarea_10.ggVPercentVisible);
					me._scrollarea_10__vertScrollFg.style.height = me._scrollarea_10.ggScrollHeight + 'px';
					me._scrollarea_10.ggScrollPosY = me._scrollarea_10.ggScrollPosYPercent * me._scrollarea_10.ggAvailableHeight;
					me._scrollarea_10.ggScrollPosY = Math.min(me._scrollarea_10.ggScrollPosY, me._scrollarea_10__vertScrollBg.offsetHeight - me._scrollarea_10__vertScrollFg.offsetHeight);
					me._scrollarea_10__vertScrollFg.style.top = me._scrollarea_10.ggScrollPosY + 'px';
					if (me._scrollarea_10.ggVPercentVisible < 1.0) {
						me._scrollarea_10__content.style.top = -(Math.round(me._scrollarea_10.ggScrollPosY / me._scrollarea_10.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_10.ggAvailableWidth = me._scrollarea_10.offsetWidth;
					me._scrollarea_10.ggScrollPosY = 0;
					me._scrollarea_10.ggScrollPosYPercent = 0.0;
					me._scrollarea_10__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_10__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_10.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_10.ggVertScrollVisible) {
					me.updateSize(me._scrollarea_10);
					me._scrollarea_10.ggUpdatePosition();
				}
			}
		}
		el=me._cloner_10=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 173;
		el.ggHeight = 352;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._cloner_10.ggUpdating == true) return;
			me._cloner_10.ggUpdating = true;
			var el=me._cloner_10;
			var curNumCols = 0;
			curNumCols = me._cloner_10.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_10.ggUpdating = false;
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
				parameter.top=(row * me._cloner_10.ggHeight) + 'px';
				parameter.left=(column * me._cloner_10.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_10_Class(nodeId, me, el, parameter);
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
			me._cloner_10.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_10.parentNode.classList.contains('ggskin_subelement') && me._cloner_10.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_10.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 352px;';
		hs+='left : 7px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cloner_10.ggIsActive=function() {
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
		me._cloner_10.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_10.childNodes.length; i++) {
				var child=me._cloner_10.childNodes[i];
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
		me._cloner_10.ggUpdatePosition=function (useTransition) {
				me._cloner_10.ggUpdate();
		}
		me._cloner_10.ggNodeChange=function () {
			me._cloner_10.ggUpdateConditionNodeChange();
		}
		me._scrollarea_10__content.appendChild(me._cloner_10);
		me.divSkin.appendChild(me._scrollarea_10);
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
		hs+='height : 163px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 193px;';
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
				} else if (posX + width > me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
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
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 0px; height: 144px; background-color: rgba(230,196,198,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 0px; height: 144px; background-color: rgba(192,0,3,1); pointer-events: auto;');
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
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDy=-102;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 144px;';
		hs+='left : 13px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
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
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.offsetWidth - 0;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight - 0;
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
		el.ggWidth = 154;
		el.ggHeight = 122;
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
		hs+='height : 122px;';
		hs+='left : 40px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
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
		me.divSkin.appendChild(me._scrollarea_1);
		el=me._buttons_social0=document.createElement('div');
		el.ggId="buttons_social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social0.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_twitter0=document.createElement('div');
		els=me._button_twitter0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTUwLDM4NS43bDAsMS42YzAsMTYuMy0xMi40LDM1LjItMzUuMiwzNS4yYy03LDAtMTMuNS0yLjEtMTktNS42YzEsMC4xLDEuOSwwLjIsMi45LDAuMiYjeGQ7JiN4YTsmI3g5O2M1LjgsMCwxMS4xLTIsMTUuNC01LjNjLTUuNC0wLjEtMTAtMy43LTExLjYtOC42YzAuNywwLjEsMS41LDAuMiwyLjMsMC4yYzEuMSwwLDIuMi0wLjEsMy4yLTAuNGMtNS43LTEu'+
			'MS05LjktNi4xLTkuOS0xMi4xdi0wLjImI3hkOyYjeGE7JiN4OTtjMS43LDAuOSwzLjYsMS41LDUuNiwxLjZjLTMuMy0yLjItNS41LTYtNS41LTEwLjNjMC0yLjMsMC42LTQuNCwxLjctNi4yYzYuMSw3LjUsMTUuMiwxMi40LDI1LjUsMTIuOWMtMC4yLTAuOS0wLjMtMS45LTAuMy0yLjgmI3hkOyYjeGE7JiN4OTtjMC02LjgsNS41LTEyLjQsMTIuNC0xMi40YzMuNSwwLDYuOCwxLjUsOSwzLjljMi44LTAuNSw1LjUtMS42LDcuOS0zYy0wLjksMi45LTIuOSw1LjMtNS40LDYuOGMyLjUtMC4zLDQuOS0xLDcuMS0xLjkmI3hkOyYjeGE7JiN4OTtDLTE0NS41LDM4MS44LTE0Ny42LDM4NC0xNTAsMzg1Lj'+
			'd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8cGF0aCBkPSJNLTE0My45LDM3OS4zYy0yLjIsMS00LjYsMS42LTcuMSwxLjljMi41LTEuNSw0LjUtNCw1LjQtNi44Yy0yLjQsMS40LTUsMi41LTcuOSwzYy0yLjMtMi40LTUuNS0zLjktOS0zLjkmI3hkOyYjeGE7JiN4OTtjLTYuOCwwLTEyLjQsNS41LTEyLjQsMTIuNGMwLDEsMC4xLDEuOSwwLjMsMi44Yy0xMC4zLTAuNS0xOS40LTUuNS0yNS41LTEyLjljLTEuMSwxLjgtMS43LDQtMS43LDYuMmMwLDQuMywyLjIsOC4xLDUuNSwxMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLTAuMS0zLjktMC42LTUuNi0xLjZ2MC4yYzAsNiw0LjMsMTEsOS45LDEyLjFjLTEsMC4z'+
			'LTIuMSwwLjQtMy4yLDAuNGMtMC44LDAtMS42LTAuMS0yLjMtMC4yYzEuNiw0LjksNi4xLDguNSwxMS42LDguNiYjeGQ7JiN4YTsmI3g5O2MtNC4yLDMuMy05LjYsNS4zLTE1LjQsNS4zYy0xLDAtMi0wLjEtMi45LTAuMmM1LjUsMy41LDEyLDUuNiwxOSw1LjZjMjIuNywwLDM1LjItMTguOCwzNS4yLTM1LjJsMC0xLjYmI3hkOyYjeGE7JiN4OTtDLTE0Ny42LDM4NC0xNDUuNSwzODEuOC0xNDMuOSwzNzkuM3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==';
		me._button_twitter0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7IE0tMTQ3LjYsMzg0LjVsMCwxLjhjMCwxOC0xMy43LDM4LjctMzguNywzOC43Yy03LjcsMC0xNC44LTIuMy0yMC45LTYuMWMxLjEsMC4xLDIuMSwwLjIsMy4yLDAuMmM2LjQsMCwxMi4yLTIuMiwxNi45LTUuOCYjeGQ7JiN4YTsmI3g5O2MtNi0wLjEtMTEtNC0xMi43LTkuNWMwLjgsMC4yLDEuNywwLjIsMi41LDAuMmMxLjIsMCwyLjQtMC4yLDMuNi0wLjVjLTYuMi0xLjItMTAuOS02Ljct'+
			'MTAuOS0xMy4zVjM5MGMxLjgsMSwzLjksMS42LDYuMiwxLjcmI3hkOyYjeGE7JiN4OTtjLTMuNy0yLjQtNi4xLTYuNi02LjEtMTEuM2MwLTIuNSwwLjctNC44LDEuOC02LjhjNi43LDguMiwxNi43LDEzLjYsMjgsMTQuMmMtMC4yLTEtMC4zLTIuMS0wLjMtMy4xYzAtNy41LDYuMS0xMy42LDEzLjYtMTMuNiYjeGQ7JiN4YTsmI3g5O2MzLjksMCw3LjQsMS42LDkuOSw0LjNjMy4xLTAuNiw2LTEuNyw4LjYtMy4zYy0xLDMuMi0zLjIsNS44LTYsNy41YzIuNy0wLjMsNS40LTEuMSw3LjgtMi4xQy0xNDIuNywzODAuMi0xNDUsMzgyLjYtMTQ3LjYsMzg0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8cGF0aC'+
			'BkPSJNLTE0MC45LDM3Ny41Yy0yLjQsMS4xLTUuMSwxLjgtNy44LDIuMWMyLjgtMS43LDUtNC40LDYtNy41Yy0yLjYsMS42LTUuNSwyLjctOC42LDMuMyYjeGQ7JiN4YTsmI3g5O2MtMi41LTIuNi02LTQuMy05LjktNC4zYy03LjUsMC0xMy42LDYuMS0xMy42LDEzLjZjMCwxLjEsMC4xLDIuMSwwLjMsMy4xYy0xMS4zLTAuNi0yMS4zLTYtMjgtMTQuMmMtMS4yLDItMS44LDQuNC0xLjgsNi44JiN4ZDsmI3hhOyYjeDk7YzAsNC43LDIuNCw4LjksNi4xLDExLjNjLTIuMi0wLjEtNC4zLTAuNy02LjItMS43djAuMmMwLDYuNiw0LjcsMTIuMSwxMC45LDEzLjNjLTEuMiwwLjMtMi4zLDAuNS0zLjYsMC41'+
			'Yy0wLjksMC0xLjctMC4xLTIuNS0wLjImI3hkOyYjeGE7JiN4OTtjMS43LDUuNCw2LjcsOS4zLDEyLjcsOS41Yy00LjcsMy42LTEwLjUsNS44LTE2LjksNS44Yy0xLjEsMC0yLjItMC4xLTMuMi0wLjJjNiwzLjksMTMuMiw2LjEsMjAuOSw2LjFjMjUsMCwzOC43LTIwLjcsMzguNy0zOC43JiN4ZDsmI3hhOyYjeDk7bDAtMS44Qy0xNDUsMzgyLjYtMTQyLjcsMzgwLjItMTQwLjksMzc3LjV6IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=';
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
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
			window.open('http://twitter.com/share?url=' + location.href);
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
		me._buttons_social0.appendChild(me._button_twitter0);
		el=me._button_facebook0=document.createElement('div');
		els=me._button_facebook0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU4LjMsMzc3LjZoLTEwYy0xLjIsMC0yLjUsMS42LTIuNSwzLjh2Ni40aDEyLjV2MTIuNWgtMTIuNXYzMC4xaC0xMi41di0zMC4xaC0xMHYtMTIuNWgxMCYjeGQ7JiN4YTsmI3g5O3YtNi4zYzAtOSw2LjctMTYuMywxNS0xNi4zaDEwVjM3Ny42eiIgZmlsbD0iIzAwMDAwMCIvPgogPHBhdGggZD0iTS0xNjguMywzNzcuNmgxMHYtMTIuNGgtMTBjLTguMyww'+
			'LTE1LDcuMy0xNSwxNi4zdjYuM2gtMTB2MTIuNWgxMHYzMC4xaDEyLjV2LTMwLjFoMTIuNXYtMTIuNWgtMTIuNXYtNi40JiN4ZDsmI3hhOyYjeDk7Qy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==';
		me._button_facebook0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU2LjUsMzc1LjYmI3hkOyYjeGE7JiN4OTtoLTExYy0xLjMsMC0yLjgsMS44LTIuOCw0LjF2N2gxMy44djEzLjdoLTEzLjh2MzMuMmgtMTMuOHYtMzMuMmgtMTF2LTEzLjdoMTF2LTYuOWMwLTkuOSw3LjQtMTcuOSwxNi41LTE3LjloMTFWMzc1LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8cGF0aCBkPSJNLTE2Ny41LDM3NS42aDExdi0xMy42aC0xMWMtOS4xLDAtMTYuNSw4LTE2LjUsMTcuOXY2LjloLTExdjEz'+
			'LjdoMTF2MzMuMmgxMy44di0zMy4yaDEzLjh2LTEzLjdoLTEzLjh2LTcmI3hkOyYjeGE7JiN4OTtDLTE3MC4zLDM3Ny4zLTE2OC44LDM3NS42LTE2Ny41LDM3NS42eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K';
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
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
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
		me._buttons_social0.appendChild(me._button_facebook0);
		me.divSkin.appendChild(me._buttons_social0);
		el=me._buttons_social=document.createElement('div');
		el.ggId="buttons_social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._buttons_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._buttons_social.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTUwLDM4NS43bDAsMS42YzAsMTYuMy0xMi40LDM1LjItMzUuMiwzNS4yYy03LDAtMTMuNS0yLjEtMTktNS42YzEsMC4xLDEuOSwwLjIsMi45LDAuMiYjeGQ7JiN4YTsmI3g5O2M1LjgsMCwxMS4xLTIsMTUuNC01LjNjLTUuNC0wLjEtMTAtMy43LTExLjYtOC42YzAuNywwLjEsMS41LDAuMiwyLjMsMC4yYzEuMSwwLDIuMi0wLjEsMy4yLTAuNGMtNS43LTEu'+
			'MS05LjktNi4xLTkuOS0xMi4xdi0wLjImI3hkOyYjeGE7JiN4OTtjMS43LDAuOSwzLjYsMS41LDUuNiwxLjZjLTMuMy0yLjItNS41LTYtNS41LTEwLjNjMC0yLjMsMC42LTQuNCwxLjctNi4yYzYuMSw3LjUsMTUuMiwxMi40LDI1LjUsMTIuOWMtMC4yLTAuOS0wLjMtMS45LTAuMy0yLjgmI3hkOyYjeGE7JiN4OTtjMC02LjgsNS41LTEyLjQsMTIuNC0xMi40YzMuNSwwLDYuOCwxLjUsOSwzLjljMi44LTAuNSw1LjUtMS42LDcuOS0zYy0wLjksMi45LTIuOSw1LjMtNS40LDYuOGMyLjUtMC4zLDQuOS0xLDcuMS0xLjkmI3hkOyYjeGE7JiN4OTtDLTE0NS41LDM4MS44LTE0Ny42LDM4NC0xNTAsMzg1Lj'+
			'd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8cGF0aCBkPSJNLTE0My45LDM3OS4zYy0yLjIsMS00LjYsMS42LTcuMSwxLjljMi41LTEuNSw0LjUtNCw1LjQtNi44Yy0yLjQsMS40LTUsMi41LTcuOSwzYy0yLjMtMi40LTUuNS0zLjktOS0zLjkmI3hkOyYjeGE7JiN4OTtjLTYuOCwwLTEyLjQsNS41LTEyLjQsMTIuNGMwLDEsMC4xLDEuOSwwLjMsMi44Yy0xMC4zLTAuNS0xOS40LTUuNS0yNS41LTEyLjljLTEuMSwxLjgtMS43LDQtMS43LDYuMmMwLDQuMywyLjIsOC4xLDUuNSwxMC4zJiN4ZDsmI3hhOyYjeDk7Yy0yLTAuMS0zLjktMC42LTUuNi0xLjZ2MC4yYzAsNiw0LjMsMTEsOS45LDEyLjFjLTEsMC4z'+
			'LTIuMSwwLjQtMy4yLDAuNGMtMC44LDAtMS42LTAuMS0yLjMtMC4yYzEuNiw0LjksNi4xLDguNSwxMS42LDguNiYjeGQ7JiN4YTsmI3g5O2MtNC4yLDMuMy05LjYsNS4zLTE1LjQsNS4zYy0xLDAtMi0wLjEtMi45LTAuMmM1LjUsMy41LDEyLDUuNiwxOSw1LjZjMjIuNywwLDM1LjItMTguOCwzNS4yLTM1LjJsMC0xLjYmI3hkOyYjeGE7JiN4OTtDLTE0Ny42LDM4NC0xNDUuNSwzODEuOC0xNDMuOSwzNzkuM3oiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==';
		me._button_twitter__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7IE0tMTQ3LjYsMzg0LjVsMCwxLjhjMCwxOC0xMy43LDM4LjctMzguNywzOC43Yy03LjcsMC0xNC44LTIuMy0yMC45LTYuMWMxLjEsMC4xLDIuMSwwLjIsMy4yLDAuMmM2LjQsMCwxMi4yLTIuMiwxNi45LTUuOCYjeGQ7JiN4YTsmI3g5O2MtNi0wLjEtMTEtNC0xMi43LTkuNWMwLjgsMC4yLDEuNywwLjIsMi41LDAuMmMxLjIsMCwyLjQtMC4yLDMuNi0wLjVjLTYuMi0xLjItMTAuOS02Ljct'+
			'MTAuOS0xMy4zVjM5MGMxLjgsMSwzLjksMS42LDYuMiwxLjcmI3hkOyYjeGE7JiN4OTtjLTMuNy0yLjQtNi4xLTYuNi02LjEtMTEuM2MwLTIuNSwwLjctNC44LDEuOC02LjhjNi43LDguMiwxNi43LDEzLjYsMjgsMTQuMmMtMC4yLTEtMC4zLTIuMS0wLjMtMy4xYzAtNy41LDYuMS0xMy42LDEzLjYtMTMuNiYjeGQ7JiN4YTsmI3g5O2MzLjksMCw3LjQsMS42LDkuOSw0LjNjMy4xLTAuNiw2LTEuNyw4LjYtMy4zYy0xLDMuMi0zLjIsNS44LTYsNy41YzIuNy0wLjMsNS40LTEuMSw3LjgtMi4xQy0xNDIuNywzODAuMi0xNDUsMzgyLjYtMTQ3LjYsMzg0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8cGF0aC'+
			'BkPSJNLTE0MC45LDM3Ny41Yy0yLjQsMS4xLTUuMSwxLjgtNy44LDIuMWMyLjgtMS43LDUtNC40LDYtNy41Yy0yLjYsMS42LTUuNSwyLjctOC42LDMuMyYjeGQ7JiN4YTsmI3g5O2MtMi41LTIuNi02LTQuMy05LjktNC4zYy03LjUsMC0xMy42LDYuMS0xMy42LDEzLjZjMCwxLjEsMC4xLDIuMSwwLjMsMy4xYy0xMS4zLTAuNi0yMS4zLTYtMjgtMTQuMmMtMS4yLDItMS44LDQuNC0xLjgsNi44JiN4ZDsmI3hhOyYjeDk7YzAsNC43LDIuNCw4LjksNi4xLDExLjNjLTIuMi0wLjEtNC4zLTAuNy02LjItMS43djAuMmMwLDYuNiw0LjcsMTIuMSwxMC45LDEzLjNjLTEuMiwwLjMtMi4zLDAuNS0zLjYsMC41'+
			'Yy0wLjksMC0xLjctMC4xLTIuNS0wLjImI3hkOyYjeGE7JiN4OTtjMS43LDUuNCw2LjcsOS4zLDEyLjcsOS41Yy00LjcsMy42LTEwLjUsNS44LTE2LjksNS44Yy0xLjEsMC0yLjItMC4xLTMuMi0wLjJjNiwzLjksMTMuMiw2LjEsMjAuOSw2LjFjMjUsMCwzOC43LTIwLjcsMzguNy0zOC43JiN4ZDsmI3hhOyYjeDk7bDAtMS44Qy0xNDUsMzgyLjYtMTQyLjcsMzgwLjItMTQwLjksMzc3LjV6IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=';
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
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
			window.open('http://twitter.com/share?url=' + location.href);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU4LjMsMzc3LjZoLTEwYy0xLjIsMC0yLjUsMS42LTIuNSwzLjh2Ni40aDEyLjV2MTIuNWgtMTIuNXYzMC4xaC0xMi41di0zMC4xaC0xMHYtMTIuNWgxMCYjeGQ7JiN4YTsmI3g5O3YtNi4zYzAtOSw2LjctMTYuMywxNS0xNi4zaDEwVjM3Ny42eiIgZmlsbD0iIzAwMDAwMCIvPgogPHBhdGggZD0iTS0xNjguMywzNzcuNmgxMHYtMTIuNGgtMTBjLTguMyww'+
			'LTE1LDcuMy0xNSwxNi4zdjYuM2gtMTB2MTIuNWgxMHYzMC4xaDEyLjV2LTMwLjFoMTIuNXYtMTIuNWgtMTIuNXYtNi40JiN4ZDsmI3hhOyYjeDk7Qy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8cGF0aCBkPS'+
			'JNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU2LjUsMzc1LjYmI3hkOyYjeGE7JiN4OTtoLTExYy0xLjMsMC0yLjgsMS44LTIuOCw0LjF2N2gxMy44djEzLjdoLTEzLjh2MzMuMmgtMTMuOHYtMzMuMmgtMTF2LTEzLjdoMTF2LTYuOWMwLTkuOSw3LjQtMTcuOSwxNi41LTE3LjloMTFWMzc1LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8cGF0aCBkPSJNLTE2Ny41LDM3NS42aDExdi0xMy42aC0xMWMtOS4xLDAtMTYuNSw4LTE2LjUsMTcuOXY2LjloLTExdjEz'+
			'LjdoMTF2MzMuMmgxMy44di0zMy4yaDEzLjh2LTEzLjdoLTEzLjh2LTcmI3hkOyYjeGE7JiN4OTtDLTE3MC4zLDM3Ny4zLTE2OC44LDM3NS42LTE2Ny41LDM3NS42eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K';
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
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
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
		me.divSkin.appendChild(me._buttons_social);
		me._video_1.ggInitMedia('media/Synthesia JAKOB.mp4');
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner.ggUpdate();
			me._cloner_10.ggUpdate();
			me._cloner_1.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
			me._scrollarea_10.ggUpdatePosition();
			me._scrollarea_1.ggUpdatePosition();
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
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinCloner_cloner_10_Class(nodeId, parentScope,ggParent,parameter) {
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
		me.__div.setAttribute('style','position: absolute;width: 173px; height: 352px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._text_50=document.createElement('div');
		els=me._text_50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 102px;';
		hs+='height: 22px;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._text_50.ggIsActive=function() {
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
		me._text_50.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._text_50);
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
		me.__div.setAttribute('style','position: absolute;width: 154px; height: 122px; visibility: inherit; overflow: visible;');
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
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 73px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: black 0.2em 0.2em 0.3em';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 135px;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 11px 2px 11px 2px;';
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
		me.__div.setAttribute('style','position: absolute;width: 318px; height: 128px; visibility: inherit; overflow: visible;');
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
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 123px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 314px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 26px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 315px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
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
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "")) || 
				((player.getVariableValue('opt_thumbnail_menu_tooltip') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
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
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=16;
		el.ggDy=332;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
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
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
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
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._menu_background.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	player.addListener('changenode', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	me.skinTimerEvent();
};
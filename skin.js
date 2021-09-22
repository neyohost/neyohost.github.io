// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: minka-custom.ggsk
// Generated 2021-09-21T19:08:00

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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAiCAYAAAB83WotAAAGtklEQVR4nO3bf4xcVRXA8c9dCv0hRaxFtrpilYKsShQbqNSouBoaJqaJTbREqqt1iD8gNAgY1ChqFFGRQqK2hUGz4B/+QQSCnVpjNoAJVgUtlrD2h8TqErZYsJpSTAtc/3gzzex23n37Yzq7Kfv9b+65573z3jvz7jnnnhdMcWJP18n4Ni7GPOzA2tA/uH5SDasRK2bhMrx+hOh5/DSU7Wi/VRkxxjHNn3GU7GgJsadrDu7H2xuGz8S62NO1MPQPXjsphg3nCnw3R3YhFrfRlgnRMdkGFPA5wx2hkS/Gnq4z2mlMDq9NyF7dNitawFR3hgsTsoCedhnycmCqO8PsAvmstljxMmGqO8PvJyifZgxMdWf4AfbmyO4L/YNb2mnMsc6UdobQPzgkiwu2Ng'+
			'xH9OFjk2LUMcyUTi0h9A9uwzm1zOFUbA/9g/+aZLOOSaa8M9QJ/YM7sXOy7TiWaeoMQ7rn4CK8D6fL8uVZeA5/wS/xq04DL47Qq6d7y3EOTsJBPIPd+C02dhrYdzQupojY62zZdZ2L0zCzJnoaA3gAm0Of5ybDvokQqxbiQ1iCRZhtUyC794/hQWwKJQfyjhEafwzpnolrcSVeWXD+v2FNp4GNNd1344d4R4HeAdyK6zoN/LdgrtjTtQBvbiLaFvoHnynSh9irR1bSftcopv8HP8YNoU+xfRU3Y02OeHcoW1igPwvnyY/fDuGhUNa0thyrzsfXpWsydfbjNnwrlDw7UnjYGYZ0d+E+xQ9zJN+RRfzfN7aAdDdKnQYez5sQe7o6ZXsRc5uI92BR6B/cn6vf6zjcjMvHYFedf2JF6PNwatJEnCFWHC8rty8tsGVxKPvT'+
			'MN2qE2TZ1niu7VmsDiX3Ng52wJDuufi1sTsCfKlm1FgzkzfgN0O6X5eYc5bmjkAWTC7KU4y9An5mfDeLbOPpwdhryTj1R8PXFDvCJvy5cSBWzcFm47+2ebgnVl3ROFh/gN9D9zgPPBEWyJaMo8E1sp3OiTAbd8dep7TAnmHEivPx5YJpe7G6cYmIVR24Cxe0wIxbYtUl9R8dQ7pPw6UtOPB4KQ3pHs1aPmpiry7ZOtoKFuCbLToWiBUn4k7Fb9NLQ9nQiLErZUFwq9gQq96oZswqHNfCg4+HT7T4eJcr3tcYC6tb/HZYK8vSUvwklN3TOBCrTtE6J6/zCtxIllq+v2DyDmyQvbLOxOfxqgKd57FOlobOxafwzsT8Vu8+FlUn98n+mbswBx/EBxLzT8AK2X2YELFiOcoF057QPCi9DCcW6D4uS/33yhxuBYWO/OFYdc'+
			'YM6VjhSSxprAsM6b6bdISNj9RTzprOrXgEb8uZ37K+hNhrkSO7jhr5O5aGPk81jN0Qe12l9g/J4QITdIZYcSpuL5j2Ej4eypplSasSeodkjTYbQmlYjHG1LOXvTegGrOyQbsC4a2SBqNPAI3g0obOn0RFqOgdxR0KnY0h30dtmtLylQH7dCEeocxO2J/TeOn6TDlPB/II514eyh0YOxqou6aVlTShZ3+gIEEr2y97M9zZXO0xPh3RPwD9yxncndEYGPHWeLDCmqMg1WlKpKvQ3Gwx9oqxKN97jJokVn5FVCFM8LD9YTTljfSlvSs1Bri4499lF0exLOeNj67TMyC2DtpiZBfKnE7I9Cdm4g+xYMV96CSKLs1aFskM58s6E7qZQyn1WIJTsItmcO39Kb2EfDUKfgwnxiwnZRFiiOPC7KZSTy1RIyP49SjvyekMwxfsZ'+
			'jiG2K36b9saKkxPy1D5JbiW2TqwKCtLZaWdoA6FslyzVTtEli/rzeCIhWx6rSUeCZbISfi7TztA+rpFes+GSWPHRHNljsriiGSdhfa1UfQS1YtWPigycdoY2EcoOyOoERXHJulg5MnMJJS/INq3yWIlqrDqrPhCrOmLVRdiCNxXZOO0MbSSU/VHxPsc83B4rTQPG2wp0l2EgVu2KVVvwFKpG4QhMO8NkcL3sn5pimexrspFsNrrPA06XZTCvGYth087QZkLZC7KNuaLWuhtjZXiHV6149FmS6fG4mXaGSSCU7cRVBdNm485YGd6nGkq2mljLwS/yBNPOMEmEsg3YWDDtXHzlCN2SO/BJY39DfEHW2tiUaWeYXD6toCqIr8aK80YOhpI+WSPt70Zxnn24OJSsTU2agW8k5HmBzs8N/8qpkbyNqr8WnKtZ+/wgbknoNP'+
			'uYZkvBeVLcn5D9L2f8gYTOER3IjYSyPbFipezTghSL8Ycj9EsexdJY9V5ZD8d7ZO0Ax9fs3SZbFtaH0uH7u1XO/fk//dGir9SKPaMAAAAASUVORK5CYII=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxnPgogIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Im0xOT'+
			'QuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4'+
			'NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
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
		hs+='height : 168px;';
		hs+='left : 0px;';
		hs+='margin-top : -84px;';
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
		hs+='left : 2px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 44px;';
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
		hs+='top : 6px;';
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
		hs+='top : 46px;';
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAiCAYAAAB83WotAAAGtklEQVR4nO3bf4xcVRXA8c9dCv0hRaxFtrpilYKsShQbqNSouBoaJqaJTbREqqt1iD8gNAgY1ChqFFGRQqK2hUGz4B/+QQSCnVpjNoAJVgUtlrD2h8TqErZYsJpSTAtc/3gzzex23n37Yzq7Kfv9b+65573z3jvz7jnnnhdMcWJP18n4Ni7GPOzA2tA/uH5SDasRK2bhMrx+hOh5/DSU7Wi/VRkxxjHNn3GU7GgJsadrDu7H2xuGz8S62NO1MPQPXjsphg3nCnw3R3YhFrfRlgnRMdkGFPA5wx2hkS/Gnq4z2mlMDq9NyF7dNitawFR3hgsTsoCedhnycmCqO8PsAvmstljxMmGqO8PvJyifZgxMdWf4AfbmyO4L/YNb2mnMsc6UdobQPzgkiwu2Ng'+
			'xH9OFjk2LUMcyUTi0h9A9uwzm1zOFUbA/9g/+aZLOOSaa8M9QJ/YM7sXOy7TiWaeoMQ7rn4CK8D6fL8uVZeA5/wS/xq04DL47Qq6d7y3EOTsJBPIPd+C02dhrYdzQupojY62zZdZ2L0zCzJnoaA3gAm0Of5ybDvokQqxbiQ1iCRZhtUyC794/hQWwKJQfyjhEafwzpnolrcSVeWXD+v2FNp4GNNd1344d4R4HeAdyK6zoN/LdgrtjTtQBvbiLaFvoHnynSh9irR1bSftcopv8HP8YNoU+xfRU3Y02OeHcoW1igPwvnyY/fDuGhUNa0thyrzsfXpWsydfbjNnwrlDw7UnjYGYZ0d+E+xQ9zJN+RRfzfN7aAdDdKnQYez5sQe7o6ZXsRc5uI92BR6B/cn6vf6zjcjMvHYFedf2JF6PNwatJEnCFWHC8rty8tsGVxKPvT'+
			'MN2qE2TZ1niu7VmsDiX3Ng52wJDuufi1sTsCfKlm1FgzkzfgN0O6X5eYc5bmjkAWTC7KU4y9An5mfDeLbOPpwdhryTj1R8PXFDvCJvy5cSBWzcFm47+2ebgnVl3ROFh/gN9D9zgPPBEWyJaMo8E1sp3OiTAbd8dep7TAnmHEivPx5YJpe7G6cYmIVR24Cxe0wIxbYtUl9R8dQ7pPw6UtOPB4KQ3pHs1aPmpiry7ZOtoKFuCbLToWiBUn4k7Fb9NLQ9nQiLErZUFwq9gQq96oZswqHNfCg4+HT7T4eJcr3tcYC6tb/HZYK8vSUvwklN3TOBCrTtE6J6/zCtxIllq+v2DyDmyQvbLOxOfxqgKd57FOlobOxafwzsT8Vu8+FlUn98n+mbswBx/EBxLzT8AK2X2YELFiOcoF057QPCi9DCcW6D4uS/33yhxuBYWO/OFYdc'+
			'YM6VjhSSxprAsM6b6bdISNj9RTzprOrXgEb8uZ37K+hNhrkSO7jhr5O5aGPk81jN0Qe12l9g/J4QITdIZYcSpuL5j2Ej4eypplSasSeodkjTYbQmlYjHG1LOXvTegGrOyQbsC4a2SBqNPAI3g0obOn0RFqOgdxR0KnY0h30dtmtLylQH7dCEeocxO2J/TeOn6TDlPB/II514eyh0YOxqou6aVlTShZ3+gIEEr2y97M9zZXO0xPh3RPwD9yxncndEYGPHWeLDCmqMg1WlKpKvQ3Gwx9oqxKN97jJokVn5FVCFM8LD9YTTljfSlvSs1Bri4499lF0exLOeNj67TMyC2DtpiZBfKnE7I9Cdm4g+xYMV96CSKLs1aFskM58s6E7qZQyn1WIJTsItmcO39Kb2EfDUKfgwnxiwnZRFiiOPC7KZSTy1RIyP49SjvyekMwxfsZ'+
			'jiG2K36b9saKkxPy1D5JbiW2TqwKCtLZaWdoA6FslyzVTtEli/rzeCIhWx6rSUeCZbISfi7TztA+rpFes+GSWPHRHNljsriiGSdhfa1UfQS1YtWPigycdoY2EcoOyOoERXHJulg5MnMJJS/INq3yWIlqrDqrPhCrOmLVRdiCNxXZOO0MbSSU/VHxPsc83B4rTQPG2wp0l2EgVu2KVVvwFKpG4QhMO8NkcL3sn5pimexrspFsNrrPA06XZTCvGYth087QZkLZC7KNuaLWuhtjZXiHV6149FmS6fG4mXaGSSCU7cRVBdNm485YGd6nGkq2mljLwS/yBNPOMEmEsg3YWDDtXHzlCN2SO/BJY39DfEHW2tiUaWeYXD6toCqIr8aK80YOhpI+WSPt70Zxnn24OJSsTU2agW8k5HmBzs8N/8qpkbyNqr8WnKtZ+/wgbknoNP'+
			'uYZkvBeVLcn5D9L2f8gYTOER3IjYSyPbFipezTghSL8Ycj9EsexdJY9V5ZD8d7ZO0Ax9fs3SZbFtaH0uH7u1XO/fk//dGir9SKPaMAAAAASUVORK5CYII=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzI5LjI2OTMzIDMyOSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxnPgogIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Im0xOT'+
			'QuODAwNzgxIDE2NC43Njk1MzEgMTI4LjIxMDkzOC0xMjguMjE0ODQzYzguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjMtOC4zMzk4NDQtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwbC0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQtMTI4LjIxMDkzNy0xMjguMjE0ODQ0Yy04LjM0Mzc1LTguMzM5ODQ0LTIxLjgyNDIxOS04LjMzOTg0NC0zMC4xNjQwNjMgMC04LjM0Mzc1IDguMzM5ODQ0LTguMzQzNzUgMjEuODI0MjE5IDAgMzAuMTY0MDYzbDEyOC4yMTA5MzggMTI4LjIxNDg0My0xMjguMjEwOTM4IDEyOC4yMTQ4NDRjLTguMzQzNzUgOC4zMzk4'+
			'NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjMgNC4xNTYyNSA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc1LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1bDEyOC4yMTA5MzctMTI4LjIxNDg0NCAxMjguMjE0ODQ0IDEyOC4yMTQ4NDRjNC4xNjAxNTYgNC4xNjAxNTYgOS42MjEwOTQgNi4yNSAxNS4wODIwMzIgNi4yNSA1LjQ2MDkzNyAwIDEwLjkyMTg3NC0yLjA4OTg0NCAxNS4wODIwMzEtNi4yNSA4LjM0Mzc1LTguMzM5ODQ0IDguMzQzNzUtMjEuODI0MjE5IDAtMzAuMTY0MDYzem0wIDAiIGZpbGw9IiNmZmZmZmYiIHhtbG5zPSJodH'+
			'RwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
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
		hs+='left : 16px;';
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
			me._node_cloner.callChildLogicBlocks_mouseover();
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAiCAYAAAB83WotAAAGtklEQVR4nO3bf4xcVRXA8c9dCv0hRaxFtrpilYKsShQbqNSouBoaJqaJTbREqqt1iD8gNAgY1ChqFFGRQqK2hUGz4B/+QQSCnVpjNoAJVgUtlrD2h8TqErZYsJpSTAtc/3gzzex23n37Yzq7Kfv9b+65573z3jvz7jnnnhdMcWJP18n4Ni7GPOzA2tA/uH5SDasRK2bhMrx+hOh5/DSU7Wi/VRkxxjHNn3GU7GgJsadrDu7H2xuGz8S62NO1MPQPXjsphg3nCnw3R3YhFrfRlgnRMdkGFPA5wx2hkS/Gnq4z2mlMDq9NyF7dNitawFR3hgsTsoCedhnycmCqO8PsAvmstljxMmGqO8PvJyifZgxMdWf4AfbmyO4L/YNb2mnMsc6UdobQPzgkiwu2Ng'+
			'xH9OFjk2LUMcyUTi0h9A9uwzm1zOFUbA/9g/+aZLOOSaa8M9QJ/YM7sXOy7TiWaeoMQ7rn4CK8D6fL8uVZeA5/wS/xq04DL47Qq6d7y3EOTsJBPIPd+C02dhrYdzQupojY62zZdZ2L0zCzJnoaA3gAm0Of5ybDvokQqxbiQ1iCRZhtUyC794/hQWwKJQfyjhEafwzpnolrcSVeWXD+v2FNp4GNNd1344d4R4HeAdyK6zoN/LdgrtjTtQBvbiLaFvoHnynSh9irR1bSftcopv8HP8YNoU+xfRU3Y02OeHcoW1igPwvnyY/fDuGhUNa0thyrzsfXpWsydfbjNnwrlDw7UnjYGYZ0d+E+xQ9zJN+RRfzfN7aAdDdKnQYez5sQe7o6ZXsRc5uI92BR6B/cn6vf6zjcjMvHYFedf2JF6PNwatJEnCFWHC8rty8tsGVxKPvT'+
			'MN2qE2TZ1niu7VmsDiX3Ng52wJDuufi1sTsCfKlm1FgzkzfgN0O6X5eYc5bmjkAWTC7KU4y9An5mfDeLbOPpwdhryTj1R8PXFDvCJvy5cSBWzcFm47+2ebgnVl3ROFh/gN9D9zgPPBEWyJaMo8E1sp3OiTAbd8dep7TAnmHEivPx5YJpe7G6cYmIVR24Cxe0wIxbYtUl9R8dQ7pPw6UtOPB4KQ3pHs1aPmpiry7ZOtoKFuCbLToWiBUn4k7Fb9NLQ9nQiLErZUFwq9gQq96oZswqHNfCg4+HT7T4eJcr3tcYC6tb/HZYK8vSUvwklN3TOBCrTtE6J6/zCtxIllq+v2DyDmyQvbLOxOfxqgKd57FOlobOxafwzsT8Vu8+FlUn98n+mbswBx/EBxLzT8AK2X2YELFiOcoF057QPCi9DCcW6D4uS/33yhxuBYWO/OFYdc'+
			'YM6VjhSSxprAsM6b6bdISNj9RTzprOrXgEb8uZ37K+hNhrkSO7jhr5O5aGPk81jN0Qe12l9g/J4QITdIZYcSpuL5j2Ej4eypplSasSeodkjTYbQmlYjHG1LOXvTegGrOyQbsC4a2SBqNPAI3g0obOn0RFqOgdxR0KnY0h30dtmtLylQH7dCEeocxO2J/TeOn6TDlPB/II514eyh0YOxqou6aVlTShZ3+gIEEr2y97M9zZXO0xPh3RPwD9yxncndEYGPHWeLDCmqMg1WlKpKvQ3Gwx9oqxKN97jJokVn5FVCFM8LD9YTTljfSlvSs1Bri4499lF0exLOeNj67TMyC2DtpiZBfKnE7I9Cdm4g+xYMV96CSKLs1aFskM58s6E7qZQyn1WIJTsItmcO39Kb2EfDUKfgwnxiwnZRFiiOPC7KZSTy1RIyP49SjvyekMwxfsZ'+
			'jiG2K36b9saKkxPy1D5JbiW2TqwKCtLZaWdoA6FslyzVTtEli/rzeCIhWx6rSUeCZbISfi7TztA+rpFes+GSWPHRHNljsriiGSdhfa1UfQS1YtWPigycdoY2EcoOyOoERXHJulg5MnMJJS/INq3yWIlqrDqrPhCrOmLVRdiCNxXZOO0MbSSU/VHxPsc83B4rTQPG2wp0l2EgVu2KVVvwFKpG4QhMO8NkcL3sn5pimexrspFsNrrPA06XZTCvGYth087QZkLZC7KNuaLWuhtjZXiHV6149FmS6fG4mXaGSSCU7cRVBdNm485YGd6nGkq2mljLwS/yBNPOMEmEsg3YWDDtXHzlCN2SO/BJY39DfEHW2tiUaWeYXD6toCqIr8aK80YOhpI+WSPt70Zxnn24OJSsTU2agW8k5HmBzs8N/8qpkbyNqr8WnKtZ+/wgbknoNP'+
			'uYZkvBeVLcn5D9L2f8gYTOER3IjYSyPbFipezTghSL8Ycj9EsexdJY9V5ZD8d7ZO0Ax9fs3SZbFtaH0uH7u1XO/fk//dGir9SKPaMAAAAASUVORK5CYII=';
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
		hs+='left : 98px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
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
		me.divSkin.appendChild(me._menu_background);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 254px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 2;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.logicBlock_scaling = function() {
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
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 0;
					me._rectangle_1.ggParameter.sy = 0;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.onmouseover=function (e) {
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAiCAYAAAB83WotAAAGtklEQVR4nO3bf4xcVRXA8c9dCv0hRaxFtrpilYKsShQbqNSouBoaJqaJTbREqqt1iD8gNAgY1ChqFFGRQqK2hUGz4B/+QQSCnVpjNoAJVgUtlrD2h8TqErZYsJpSTAtc/3gzzex23n37Yzq7Kfv9b+65573z3jvz7jnnnhdMcWJP18n4Ni7GPOzA2tA/uH5SDasRK2bhMrx+hOh5/DSU7Wi/VRkxxjHNn3GU7GgJsadrDu7H2xuGz8S62NO1MPQPXjsphg3nCnw3R3YhFrfRlgnRMdkGFPA5wx2hkS/Gnq4z2mlMDq9NyF7dNitawFR3hgsTsoCedhnycmCqO8PsAvmstljxMmGqO8PvJyifZgxMdWf4AfbmyO4L/YNb2mnMsc6UdobQPzgkiwu2Ng'+
			'xH9OFjk2LUMcyUTi0h9A9uwzm1zOFUbA/9g/+aZLOOSaa8M9QJ/YM7sXOy7TiWaeoMQ7rn4CK8D6fL8uVZeA5/wS/xq04DL47Qq6d7y3EOTsJBPIPd+C02dhrYdzQupojY62zZdZ2L0zCzJnoaA3gAm0Of5ybDvokQqxbiQ1iCRZhtUyC794/hQWwKJQfyjhEafwzpnolrcSVeWXD+v2FNp4GNNd1344d4R4HeAdyK6zoN/LdgrtjTtQBvbiLaFvoHnynSh9irR1bSftcopv8HP8YNoU+xfRU3Y02OeHcoW1igPwvnyY/fDuGhUNa0thyrzsfXpWsydfbjNnwrlDw7UnjYGYZ0d+E+xQ9zJN+RRfzfN7aAdDdKnQYez5sQe7o6ZXsRc5uI92BR6B/cn6vf6zjcjMvHYFedf2JF6PNwatJEnCFWHC8rty8tsGVxKPvT'+
			'MN2qE2TZ1niu7VmsDiX3Ng52wJDuufi1sTsCfKlm1FgzkzfgN0O6X5eYc5bmjkAWTC7KU4y9An5mfDeLbOPpwdhryTj1R8PXFDvCJvy5cSBWzcFm47+2ebgnVl3ROFh/gN9D9zgPPBEWyJaMo8E1sp3OiTAbd8dep7TAnmHEivPx5YJpe7G6cYmIVR24Cxe0wIxbYtUl9R8dQ7pPw6UtOPB4KQ3pHs1aPmpiry7ZOtoKFuCbLToWiBUn4k7Fb9NLQ9nQiLErZUFwq9gQq96oZswqHNfCg4+HT7T4eJcr3tcYC6tb/HZYK8vSUvwklN3TOBCrTtE6J6/zCtxIllq+v2DyDmyQvbLOxOfxqgKd57FOlobOxafwzsT8Vu8+FlUn98n+mbswBx/EBxLzT8AK2X2YELFiOcoF057QPCi9DCcW6D4uS/33yhxuBYWO/OFYdc'+
			'YM6VjhSSxprAsM6b6bdISNj9RTzprOrXgEb8uZ37K+hNhrkSO7jhr5O5aGPk81jN0Qe12l9g/J4QITdIZYcSpuL5j2Ej4eypplSasSeodkjTYbQmlYjHG1LOXvTegGrOyQbsC4a2SBqNPAI3g0obOn0RFqOgdxR0KnY0h30dtmtLylQH7dCEeocxO2J/TeOn6TDlPB/II514eyh0YOxqou6aVlTShZ3+gIEEr2y97M9zZXO0xPh3RPwD9yxncndEYGPHWeLDCmqMg1WlKpKvQ3Gwx9oqxKN97jJokVn5FVCFM8LD9YTTljfSlvSs1Bri4499lF0exLOeNj67TMyC2DtpiZBfKnE7I9Cdm4g+xYMV96CSKLs1aFskM58s6E7qZQyn1WIJTsItmcO39Kb2EfDUKfgwnxiwnZRFiiOPC7KZSTy1RIyP49SjvyekMwxfsZ'+
			'jiG2K36b9saKkxPy1D5JbiW2TqwKCtLZaWdoA6FslyzVTtEli/rzeCIhWx6rSUeCZbISfi7TztA+rpFes+GSWPHRHNljsriiGSdhfa1UfQS1YtWPigycdoY2EcoOyOoERXHJulg5MnMJJS/INq3yWIlqrDqrPhCrOmLVRdiCNxXZOO0MbSSU/VHxPsc83B4rTQPG2wp0l2EgVu2KVVvwFKpG4QhMO8NkcL3sn5pimexrspFsNrrPA06XZTCvGYth087QZkLZC7KNuaLWuhtjZXiHV6149FmS6fG4mXaGSSCU7cRVBdNm485YGd6nGkq2mljLwS/yBNPOMEmEsg3YWDDtXHzlCN2SO/BJY39DfEHW2tiUaWeYXD6toCqIr8aK80YOhpI+WSPt70Zxnn24OJSsTU2agW8k5HmBzs8N/8qpkbyNqr8WnKtZ+/wgbknoNP'+
			'uYZkvBeVLcn5D9L2f8gYTOER3IjYSyPbFipezTghSL8Ycj9EsexdJY9V5ZD8d7ZO0Ax9fs3SZbFtaH0uH7u1XO/fk//dGir9SKPaMAAAAASUVORK5CYII=';
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
		hs+='left : 89px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
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
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 46px;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:none;';
		hs+='z-index: 5;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.logicBlock_scaling = function() {
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
			if (me._button_fullscreen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_fullscreen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_fullscreen.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._button_fullscreen.ggCurrentLogicStateScaling == 0) {
					me._button_fullscreen.ggParameter.sx = 0;
					me._button_fullscreen.ggParameter.sy = 0;
					me._button_fullscreen.style[domTransform]=parameterToTransform(me._button_fullscreen.ggParameter);
				}
				else {
					me._button_fullscreen.ggParameter.sx = 1;
					me._button_fullscreen.ggParameter.sy = 1;
					me._button_fullscreen.style[domTransform]=parameterToTransform(me._button_fullscreen.ggParameter);
				}
			}
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzMi4xIiB4PSItMjA2LjIiIHk9IjM5NyIgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSIyMi4yIi8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4z'+
			'LDEuOS00LjIsNC4yLTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4zLDAuNC'+
			'0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4z'+
			'LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiLz4KICAgPH'+
			'BhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzNS43IiB4PSItMjA5LjYiIHk9IjM5NyIgZmlsbD0iIzAwMDAwMCIgaGVpZ2h0PSIyNC42Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3Yt'+
			'MjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUuOC0xNy4xYzAuMS0wLjQsMC'+
			'40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01'+
			'LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 3;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
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
		me._button_image_normalscreen.logicBlock_scaling = function() {
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
			if (me._button_image_normalscreen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_image_normalscreen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_image_normalscreen.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._button_image_normalscreen.ggCurrentLogicStateScaling == 0) {
					me._button_image_normalscreen.ggParameter.sx = 0;
					me._button_image_normalscreen.ggParameter.sy = 0;
					me._button_image_normalscreen.style[domTransform]=parameterToTransform(me._button_image_normalscreen.ggParameter);
				}
				else {
					me._button_image_normalscreen.ggParameter.sx = 1;
					me._button_image_normalscreen.ggParameter.sy = 1;
					me._button_image_normalscreen.style[domTransform]=parameterToTransform(me._button_image_normalscreen.ggParameter);
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAu'+
			'M2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLj'+
			'MsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQs'+
			'Mi4xbDEuNCwxLjljMC41LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuNyw0MjQuNmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43YzIuMywwLDQuMiwxLjksNC4yLDQuMnY0Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzOC'+
			'40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00'+
			'LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi'+
			'42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwy'+
			'LjRsMS41LDIuMWMwLjUsMC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOS4xLDQyNy42aC03MS44Yy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTUxLjhjMC0yLjYsMi4xLTQuNyw0LjctNC43aDcxLjhjMi42LDAsNC43LDIuMSw0LjcsNC43djUxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM0LjQsNDI1Lj'+
			'UtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 3;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
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
		me._button_image_fullscreen.logicBlock_scaling = function() {
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
			if (me._button_image_fullscreen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_image_fullscreen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_image_fullscreen.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._button_image_fullscreen.ggCurrentLogicStateScaling == 0) {
					me._button_image_fullscreen.ggParameter.sx = 0;
					me._button_image_fullscreen.ggParameter.sy = 0;
					me._button_image_fullscreen.style[domTransform]=parameterToTransform(me._button_image_fullscreen.ggParameter);
				}
				else {
					me._button_image_fullscreen.ggParameter.sx = 1;
					me._button_image_fullscreen.ggParameter.sy = 1;
					me._button_image_fullscreen.style[domTransform]=parameterToTransform(me._button_image_fullscreen.ggParameter);
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaW'+
			'xsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOGMtMzEsMC01Ni4yLDI1LjEtNTYuMiw1Ni4yYzAsMzEuMSwyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjImI3hkOyYjeGE7JiN4OTtDLTExOC44LDM2NS45LTE0NCwzNDAuOC0xNzUsMzQwLjh6IE0tMTU4LjMsMzc3LjZoLTEwYy0xLjIsMC0yLjUsMS42LTIuNSwzLjh2Ni40aDEyLjV2MTIuNWgtMTIuNXYzMC4xaC0xMi41di0zMC4xaC0xMHYtMTIuNWgxMCYjeGQ7JiN4YTsmI3g5O3YtNi4zYzAtOSw2LjctMTYuMywxNS0xNi4zaDEwVjM3Ny42eiIvPgogPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjguMywzNzcuNmgxMHYt'+
			'MTIuNGgtMTBjLTguMywwLTE1LDcuMy0xNSwxNi4zdjYuM2gtMTB2MTIuNWgxMHYzMC4xaDEyLjV2LTMwLjFoMTIuNXYtMTIuNWgtMTIuNXYtNi40JiN4ZDsmI3hhOyYjeDk7Qy0xNzAuOCwzNzkuMi0xNjkuNSwzNzcuNi0xNjguMywzNzcuNnoiLz4KPC9zdmc+Cg==';
		me._button_facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaW'+
			'xsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNSwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNSwzMzQuNi0xNzUsMzM0LjZ6IE0tMTU2LjUsMzc1LjYmI3hkOyYjeGE7JiN4OTtoLTExYy0xLjMsMC0yLjgsMS44LTIuOCw0LjF2N2gxMy44djEzLjdoLTEzLjh2MzMuMmgtMTMuOHYtMzMuMmgtMTF2LTEzLjdoMTF2LTYuOWMwLTkuOSw3LjQtMTcuOSwxNi41LTE3LjloMTFWMzc1LjZ6Ii8+CiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2Ny41LDM3NS42aDExdi0xMy42aC0xMWMtOS4xLDAtMTYuNSw4LTE2LjUs'+
			'MTcuOXY2LjloLTExdjEzLjdoMTF2MzMuMmgxMy44di0zMy4yaDEzLjh2LTEzLjdoLTEzLjh2LTcmI3hkOyYjeGE7JiN4OTtDLTE3MC4zLDM3Ny4zLTE2OC44LDM3NS42LTE2Ny41LDM3NS42eiIvPgo8L3N2Zz4K';
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
		hs+='bottom : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 3;';
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
		me._button_facebook.logicBlock_scaling = function() {
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
			if (me._button_facebook.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_facebook.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_facebook.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._button_facebook.ggCurrentLogicStateScaling == 0) {
					me._button_facebook.ggParameter.sx = 0;
					me._button_facebook.ggParameter.sy = 0;
					me._button_facebook.style[domTransform]=parameterToTransform(me._button_facebook.ggParameter);
				}
				else {
					me._button_facebook.ggParameter.sx = 1;
					me._button_facebook.ggParameter.sy = 1;
					me._button_facebook.style[domTransform]=parameterToTransform(me._button_facebook.ggParameter);
				}
			}
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
		me._button_fullscreen.appendChild(me._button_facebook);
		me.divSkin.appendChild(me._button_fullscreen);
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
		el=me._mapfloor=document.createElement('div');
		el.ggId="mapFloor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 274px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 332px;';
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
		hs+='height : 94.2446%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 11px;';
		hs+='visibility : inherit;';
		hs+='width : 93.7294%;';
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
		me._floorplan.logicBlock_scaling = function() {
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
			if (me._floorplan.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorplan.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorplan.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._floorplan.ggCurrentLogicStateScaling == 0) {
					me._floorplan.ggParameter.sx = 0.35;
					me._floorplan.ggParameter.sy = 0.35;
					me._floorplan.style[domTransform]=parameterToTransform(me._floorplan.ggParameter);
				}
				else {
					me._floorplan.ggParameter.sx = 1;
					me._floorplan.ggParameter.sy = 1;
					me._floorplan.style[domTransform]=parameterToTransform(me._floorplan.ggParameter);
				}
			}
		}
		me._floorplan.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('plan_status') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorplan.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorplan.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorplan.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._floorplan.ggCurrentLogicStateAlpha == 0) {
					me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
					if (me._floorplan.ggMapNotLoaded) {
						me._floorplan.ggInitMap(false);
						me._floorplan.ggInitMapMarkers(true);
					}
					me._floorplan.style.opacity=0.65;
				}
				else {
					me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
					if (me._floorplan.ggMapNotLoaded) {
						me._floorplan.ggInitMap(false);
						me._floorplan.ggInitMapMarkers(true);
					}
					me._floorplan.style.opacity=1;
				}
			}
		}
		me._floorplan.onmouseover=function (e) {
			player.setVariableValue('plan_status', true);
		}
		me._floorplan.onmouseout=function (e) {
			player.setVariableValue('plan_status', false);
		}
		me._floorplan.ggCurrentLogicStateScaling = -1;
		me._floorplan.ggCurrentLogicStateAlpha = -1;
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
		me._mapfloor.appendChild(me._floorplan);
		me.divSkin.appendChild(me._mapfloor);
		el=me._node_next=document.createElement('div');
		el.ggId="node next";
		el.ggDy=-65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 97px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._node_next_text0=document.createElement('div');
		els=me._node_next_text0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node next- text";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='position : absolute;';
		hs+='right : 61px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 5; font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
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
		hs+='font-size: 19px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 22px 1px 22px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node_next_text0.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_next_text0.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_next_text0.ggUpdateText();
		});
		el.appendChild(els);
		me._node_next_text0.ggIsActive=function() {
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
		me._node_next_text0.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._node_next_text0);
		el=me._boton_next1=document.createElement('div');
		els=me._boton_next1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next1.ggIsActive=function() {
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
		me._boton_next1.logicBlock_visible = function() {
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
			if (me._boton_next1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next1.style[domTransition]='';
				if (me._boton_next1.ggCurrentLogicStateVisible == 0) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 1) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 2) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 3) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 4) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 5) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 6) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 7) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 8) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 9) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 10) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 11) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 12) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 13) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 14) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 15) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 16) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 17) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else if (me._boton_next1.ggCurrentLogicStateVisible == 18) {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
				else {
					me._boton_next1.style.visibility="hidden";
					me._boton_next1.ggVisible=false;
				}
			}
		}
		me._boton_next1.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 1");
				player.playSound("Video 2","1");
		}
		me._boton_next1.onmouseover=function (e) {
			me._boton_next1__img.style.visibility='hidden';
			me._boton_next1__imgo.style.visibility='inherit';
		}
		me._boton_next1.onmouseout=function (e) {
			me._boton_next1__img.style.visibility='inherit';
			me._boton_next1__imgo.style.visibility='hidden';
		}
		me._boton_next1.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next1);
		el=me._boton_next2=document.createElement('div');
		els=me._boton_next2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next2.ggIsActive=function() {
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
		me._boton_next2.logicBlock_visible = function() {
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
			if (me._boton_next2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next2.style[domTransition]='';
				if (me._boton_next2.ggCurrentLogicStateVisible == 0) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 1) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 2) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 3) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 4) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 5) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 6) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 7) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 8) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 9) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 10) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 11) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 12) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 13) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 14) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 15) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 16) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 17) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else if (me._boton_next2.ggCurrentLogicStateVisible == 18) {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
				else {
					me._boton_next2.style.visibility="hidden";
					me._boton_next2.ggVisible=false;
				}
			}
		}
		me._boton_next2.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 2");
				player.playSound("Video 3","1");
		}
		me._boton_next2.onmouseover=function (e) {
			me._boton_next2__img.style.visibility='hidden';
			me._boton_next2__imgo.style.visibility='inherit';
		}
		me._boton_next2.onmouseout=function (e) {
			me._boton_next2__img.style.visibility='inherit';
			me._boton_next2__imgo.style.visibility='hidden';
		}
		me._boton_next2.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next2);
		el=me._boton_next3=document.createElement('div');
		els=me._boton_next3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next3.ggIsActive=function() {
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
		me._boton_next3.logicBlock_visible = function() {
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
			if (me._boton_next3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next3.style[domTransition]='';
				if (me._boton_next3.ggCurrentLogicStateVisible == 0) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 1) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 2) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 3) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 4) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 5) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 6) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 7) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 8) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 9) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 10) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 11) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 12) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 13) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 14) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 15) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 16) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 17) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else if (me._boton_next3.ggCurrentLogicStateVisible == 18) {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
				else {
					me._boton_next3.style.visibility="hidden";
					me._boton_next3.ggVisible=false;
				}
			}
		}
		me._boton_next3.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 3");
				player.playSound("Video 4","1");
		}
		me._boton_next3.onmouseover=function (e) {
			me._boton_next3__img.style.visibility='hidden';
			me._boton_next3__imgo.style.visibility='inherit';
		}
		me._boton_next3.onmouseout=function (e) {
			me._boton_next3__img.style.visibility='inherit';
			me._boton_next3__imgo.style.visibility='hidden';
		}
		me._boton_next3.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next3);
		el=me._boton_next4=document.createElement('div');
		els=me._boton_next4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next4.ggIsActive=function() {
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
		me._boton_next4.logicBlock_visible = function() {
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
			if (me._boton_next4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next4.style[domTransition]='';
				if (me._boton_next4.ggCurrentLogicStateVisible == 0) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 1) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 2) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 3) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 4) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 5) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 6) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 7) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 8) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 9) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 10) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 11) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 12) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 13) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 14) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 15) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 16) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 17) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else if (me._boton_next4.ggCurrentLogicStateVisible == 18) {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
				else {
					me._boton_next4.style.visibility="hidden";
					me._boton_next4.ggVisible=false;
				}
			}
		}
		me._boton_next4.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 4");
				player.playSound("Video 5","1");
		}
		me._boton_next4.onmouseover=function (e) {
			me._boton_next4__img.style.visibility='hidden';
			me._boton_next4__imgo.style.visibility='inherit';
		}
		me._boton_next4.onmouseout=function (e) {
			me._boton_next4__img.style.visibility='inherit';
			me._boton_next4__imgo.style.visibility='hidden';
		}
		me._boton_next4.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next4);
		el=me._boton_next5=document.createElement('div');
		els=me._boton_next5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next5.ggIsActive=function() {
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
		me._boton_next5.logicBlock_visible = function() {
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
			if (me._boton_next5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next5.style[domTransition]='';
				if (me._boton_next5.ggCurrentLogicStateVisible == 0) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 1) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 2) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 3) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 4) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 5) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 6) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 7) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 8) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 9) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 10) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 11) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 12) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 13) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 14) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 15) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 16) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 17) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else if (me._boton_next5.ggCurrentLogicStateVisible == 18) {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
				else {
					me._boton_next5.style.visibility="hidden";
					me._boton_next5.ggVisible=false;
				}
			}
		}
		me._boton_next5.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 5");
				player.playSound("Video 6","1");
		}
		me._boton_next5.onmouseover=function (e) {
			me._boton_next5__img.style.visibility='hidden';
			me._boton_next5__imgo.style.visibility='inherit';
		}
		me._boton_next5.onmouseout=function (e) {
			me._boton_next5__img.style.visibility='inherit';
			me._boton_next5__imgo.style.visibility='hidden';
		}
		me._boton_next5.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next5);
		el=me._boton_next6=document.createElement('div');
		els=me._boton_next6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next6__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next6.ggIsActive=function() {
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
		me._boton_next6.logicBlock_visible = function() {
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
			if (me._boton_next6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next6.style[domTransition]='';
				if (me._boton_next6.ggCurrentLogicStateVisible == 0) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 1) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 2) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 3) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 4) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 5) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 6) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 7) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 8) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 9) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 10) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 11) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 12) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 13) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 14) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 15) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 16) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 17) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else if (me._boton_next6.ggCurrentLogicStateVisible == 18) {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
				else {
					me._boton_next6.style.visibility="hidden";
					me._boton_next6.ggVisible=false;
				}
			}
		}
		me._boton_next6.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 6");
				player.playSound("Video 7","1");
		}
		me._boton_next6.onmouseover=function (e) {
			me._boton_next6__img.style.visibility='hidden';
			me._boton_next6__imgo.style.visibility='inherit';
		}
		me._boton_next6.onmouseout=function (e) {
			me._boton_next6__img.style.visibility='inherit';
			me._boton_next6__imgo.style.visibility='hidden';
		}
		me._boton_next6.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next6);
		el=me._boton_next7=document.createElement('div');
		els=me._boton_next7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next7__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next7__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next7.ggIsActive=function() {
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
		me._boton_next7.logicBlock_visible = function() {
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
			if (me._boton_next7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next7.style[domTransition]='';
				if (me._boton_next7.ggCurrentLogicStateVisible == 0) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 1) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 2) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 3) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 4) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 5) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 6) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 7) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 8) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 9) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 10) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 11) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 12) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 13) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 14) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 15) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 16) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 17) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else if (me._boton_next7.ggCurrentLogicStateVisible == 18) {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
				else {
					me._boton_next7.style.visibility="hidden";
					me._boton_next7.ggVisible=false;
				}
			}
		}
		me._boton_next7.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 7");
				player.playSound("Video 8","1");
		}
		me._boton_next7.onmouseover=function (e) {
			me._boton_next7__img.style.visibility='hidden';
			me._boton_next7__imgo.style.visibility='inherit';
		}
		me._boton_next7.onmouseout=function (e) {
			me._boton_next7__img.style.visibility='inherit';
			me._boton_next7__imgo.style.visibility='hidden';
		}
		me._boton_next7.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next7);
		el=me._boton_next8=document.createElement('div');
		els=me._boton_next8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next8__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next8__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next8.ggIsActive=function() {
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
		me._boton_next8.logicBlock_visible = function() {
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
			if (me._boton_next8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next8.style[domTransition]='';
				if (me._boton_next8.ggCurrentLogicStateVisible == 0) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 1) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 2) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 3) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 4) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 5) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 6) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 7) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 8) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 9) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 10) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 11) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 12) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 13) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 14) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 15) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 16) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 17) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else if (me._boton_next8.ggCurrentLogicStateVisible == 18) {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
				else {
					me._boton_next8.style.visibility="hidden";
					me._boton_next8.ggVisible=false;
				}
			}
		}
		me._boton_next8.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 8");
				player.playSound("Video 9","1");
		}
		me._boton_next8.onmouseover=function (e) {
			me._boton_next8__img.style.visibility='hidden';
			me._boton_next8__imgo.style.visibility='inherit';
		}
		me._boton_next8.onmouseout=function (e) {
			me._boton_next8__img.style.visibility='inherit';
			me._boton_next8__imgo.style.visibility='hidden';
		}
		me._boton_next8.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next8);
		el=me._boton_next9=document.createElement('div');
		els=me._boton_next9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next9__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next9__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next9.ggIsActive=function() {
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
		me._boton_next9.logicBlock_visible = function() {
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
			if (me._boton_next9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next9.style[domTransition]='';
				if (me._boton_next9.ggCurrentLogicStateVisible == 0) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 1) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 2) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 3) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 4) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 5) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 6) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 7) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 8) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 9) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 10) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 11) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 12) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 13) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 14) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 15) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 16) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 17) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else if (me._boton_next9.ggCurrentLogicStateVisible == 18) {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
				else {
					me._boton_next9.style.visibility="hidden";
					me._boton_next9.ggVisible=false;
				}
			}
		}
		me._boton_next9.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 9");
				player.playSound("Video 10","1");
		}
		me._boton_next9.onmouseover=function (e) {
			me._boton_next9__img.style.visibility='hidden';
			me._boton_next9__imgo.style.visibility='inherit';
		}
		me._boton_next9.onmouseout=function (e) {
			me._boton_next9__img.style.visibility='inherit';
			me._boton_next9__imgo.style.visibility='hidden';
		}
		me._boton_next9.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next9);
		el=me._boton_next10=document.createElement('div');
		els=me._boton_next10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next10__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next10__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-10";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next10.ggIsActive=function() {
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
		me._boton_next10.logicBlock_visible = function() {
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
			if (me._boton_next10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next10.style[domTransition]='';
				if (me._boton_next10.ggCurrentLogicStateVisible == 0) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 1) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 2) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 3) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 4) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 5) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 6) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 7) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 8) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 9) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 10) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 11) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 12) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 13) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 14) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 15) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 16) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 17) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else if (me._boton_next10.ggCurrentLogicStateVisible == 18) {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
				else {
					me._boton_next10.style.visibility="hidden";
					me._boton_next10.ggVisible=false;
				}
			}
		}
		me._boton_next10.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 10");
				player.playSound("Video 11","1");
		}
		me._boton_next10.onmouseover=function (e) {
			me._boton_next10__img.style.visibility='hidden';
			me._boton_next10__imgo.style.visibility='inherit';
		}
		me._boton_next10.onmouseout=function (e) {
			me._boton_next10__img.style.visibility='inherit';
			me._boton_next10__imgo.style.visibility='hidden';
		}
		me._boton_next10.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next10);
		el=me._boton_next11=document.createElement('div');
		els=me._boton_next11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next11__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next11__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-11";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next11.ggIsActive=function() {
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
		me._boton_next11.logicBlock_visible = function() {
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
			if (me._boton_next11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next11.style[domTransition]='';
				if (me._boton_next11.ggCurrentLogicStateVisible == 0) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 1) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 2) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 3) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 4) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 5) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 6) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 7) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 8) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 9) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 10) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 11) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 12) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 13) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 14) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 15) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 16) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 17) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else if (me._boton_next11.ggCurrentLogicStateVisible == 18) {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
				else {
					me._boton_next11.style.visibility="hidden";
					me._boton_next11.ggVisible=false;
				}
			}
		}
		me._boton_next11.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 11");
				player.playSound("Video 12","1");
		}
		me._boton_next11.onmouseover=function (e) {
			me._boton_next11__img.style.visibility='hidden';
			me._boton_next11__imgo.style.visibility='inherit';
		}
		me._boton_next11.onmouseout=function (e) {
			me._boton_next11__img.style.visibility='inherit';
			me._boton_next11__imgo.style.visibility='hidden';
		}
		me._boton_next11.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next11);
		el=me._boton_next12=document.createElement('div');
		els=me._boton_next12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next12__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next12__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-12";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next12.ggIsActive=function() {
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
		me._boton_next12.logicBlock_visible = function() {
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
			if (me._boton_next12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next12.style[domTransition]='';
				if (me._boton_next12.ggCurrentLogicStateVisible == 0) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 1) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 2) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 3) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 4) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 5) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 6) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 7) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 8) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 9) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 10) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 11) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 12) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 13) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 14) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 15) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 16) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 17) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else if (me._boton_next12.ggCurrentLogicStateVisible == 18) {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
				else {
					me._boton_next12.style.visibility="hidden";
					me._boton_next12.ggVisible=false;
				}
			}
		}
		me._boton_next12.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 12");
				player.playSound("Video 13","1");
		}
		me._boton_next12.onmouseover=function (e) {
			me._boton_next12__img.style.visibility='hidden';
			me._boton_next12__imgo.style.visibility='inherit';
		}
		me._boton_next12.onmouseout=function (e) {
			me._boton_next12__img.style.visibility='inherit';
			me._boton_next12__imgo.style.visibility='hidden';
		}
		me._boton_next12.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next12);
		el=me._boton_next13=document.createElement('div');
		els=me._boton_next13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next13__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next13__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-13";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next13.ggIsActive=function() {
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
		me._boton_next13.logicBlock_visible = function() {
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
			if (me._boton_next13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next13.style[domTransition]='';
				if (me._boton_next13.ggCurrentLogicStateVisible == 0) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 1) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 2) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 3) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 4) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 5) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 6) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 7) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 8) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 9) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 10) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 11) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 12) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 13) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 14) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 15) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 16) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 17) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else if (me._boton_next13.ggCurrentLogicStateVisible == 18) {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
				else {
					me._boton_next13.style.visibility="hidden";
					me._boton_next13.ggVisible=false;
				}
			}
		}
		me._boton_next13.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 13");
				player.playSound("Video 14","1");
		}
		me._boton_next13.onmouseover=function (e) {
			me._boton_next13__img.style.visibility='hidden';
			me._boton_next13__imgo.style.visibility='inherit';
		}
		me._boton_next13.onmouseout=function (e) {
			me._boton_next13__img.style.visibility='inherit';
			me._boton_next13__imgo.style.visibility='hidden';
		}
		me._boton_next13.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next13);
		el=me._boton_next14=document.createElement('div');
		els=me._boton_next14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next14__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next14__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next14.ggIsActive=function() {
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
		me._boton_next14.logicBlock_visible = function() {
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
			if (me._boton_next14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next14.style[domTransition]='';
				if (me._boton_next14.ggCurrentLogicStateVisible == 0) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 1) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 2) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 3) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 4) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 5) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 6) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 7) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 8) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 9) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 10) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 11) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 12) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 13) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 14) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 15) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 16) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 17) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else if (me._boton_next14.ggCurrentLogicStateVisible == 18) {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
				else {
					me._boton_next14.style.visibility="hidden";
					me._boton_next14.ggVisible=false;
				}
			}
		}
		me._boton_next14.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 14");
				player.playSound("Video 15","1");
		}
		me._boton_next14.onmouseover=function (e) {
			me._boton_next14__img.style.visibility='hidden';
			me._boton_next14__imgo.style.visibility='inherit';
		}
		me._boton_next14.onmouseout=function (e) {
			me._boton_next14__img.style.visibility='inherit';
			me._boton_next14__imgo.style.visibility='hidden';
		}
		me._boton_next14.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next14);
		el=me._boton_next15=document.createElement('div');
		els=me._boton_next15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next15__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next15__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-15";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next15.ggIsActive=function() {
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
		me._boton_next15.logicBlock_visible = function() {
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
			if (me._boton_next15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next15.style[domTransition]='';
				if (me._boton_next15.ggCurrentLogicStateVisible == 0) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 1) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 2) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 3) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 4) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 5) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 6) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 7) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 8) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 9) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 10) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 11) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 12) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 13) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 14) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 15) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 16) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 17) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else if (me._boton_next15.ggCurrentLogicStateVisible == 18) {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
				else {
					me._boton_next15.style.visibility="hidden";
					me._boton_next15.ggVisible=false;
				}
			}
		}
		me._boton_next15.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 15");
				player.playSound("Video 16","1");
		}
		me._boton_next15.onmouseover=function (e) {
			me._boton_next15__img.style.visibility='hidden';
			me._boton_next15__imgo.style.visibility='inherit';
		}
		me._boton_next15.onmouseout=function (e) {
			me._boton_next15__img.style.visibility='inherit';
			me._boton_next15__imgo.style.visibility='hidden';
		}
		me._boton_next15.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next15);
		el=me._boton_next16=document.createElement('div');
		els=me._boton_next16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next16__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next16__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next16__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-16";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next16.ggIsActive=function() {
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
		me._boton_next16.logicBlock_visible = function() {
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
			if (me._boton_next16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next16.style[domTransition]='';
				if (me._boton_next16.ggCurrentLogicStateVisible == 0) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 1) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 2) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 3) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 4) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 5) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 6) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 7) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 8) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 9) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 10) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 11) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 12) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 13) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 14) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 15) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 16) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 17) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else if (me._boton_next16.ggCurrentLogicStateVisible == 18) {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
				else {
					me._boton_next16.style.visibility="hidden";
					me._boton_next16.ggVisible=false;
				}
			}
		}
		me._boton_next16.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 16");
				player.playSound("Video 17","1");
		}
		me._boton_next16.onmouseover=function (e) {
			me._boton_next16__img.style.visibility='hidden';
			me._boton_next16__imgo.style.visibility='inherit';
		}
		me._boton_next16.onmouseout=function (e) {
			me._boton_next16__img.style.visibility='inherit';
			me._boton_next16__imgo.style.visibility='hidden';
		}
		me._boton_next16.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next16);
		el=me._boton_next17=document.createElement('div');
		els=me._boton_next17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next17__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next17__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next17__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-17";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next17.ggIsActive=function() {
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
		me._boton_next17.logicBlock_visible = function() {
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
			if (me._boton_next17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next17.style[domTransition]='';
				if (me._boton_next17.ggCurrentLogicStateVisible == 0) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 1) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 2) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 3) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 4) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 5) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 6) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 7) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 8) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 9) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 10) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 11) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 12) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 13) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 14) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 15) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 16) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 17) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else if (me._boton_next17.ggCurrentLogicStateVisible == 18) {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
				else {
					me._boton_next17.style.visibility="hidden";
					me._boton_next17.ggVisible=false;
				}
			}
		}
		me._boton_next17.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 17");
				player.playSound("Video 18","1");
		}
		me._boton_next17.onmouseover=function (e) {
			me._boton_next17__img.style.visibility='hidden';
			me._boton_next17__imgo.style.visibility='inherit';
		}
		me._boton_next17.onmouseout=function (e) {
			me._boton_next17__img.style.visibility='inherit';
			me._boton_next17__imgo.style.visibility='hidden';
		}
		me._boton_next17.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next17);
		el=me._boton_next18=document.createElement('div');
		els=me._boton_next18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next18__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next18__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-18";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next18.ggIsActive=function() {
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
		me._boton_next18.logicBlock_visible = function() {
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
			if (me._boton_next18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next18.style[domTransition]='';
				if (me._boton_next18.ggCurrentLogicStateVisible == 0) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 1) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 2) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 3) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 4) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 5) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 6) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 7) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 8) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 9) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 10) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 11) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 12) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 13) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 14) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 15) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 16) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 17) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else if (me._boton_next18.ggCurrentLogicStateVisible == 18) {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
				else {
					me._boton_next18.style.visibility="hidden";
					me._boton_next18.ggVisible=false;
				}
			}
		}
		me._boton_next18.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 18");
				player.playSound("Video 19","1");
		}
		me._boton_next18.onmouseover=function (e) {
			me._boton_next18__img.style.visibility='hidden';
			me._boton_next18__imgo.style.visibility='inherit';
		}
		me._boton_next18.onmouseout=function (e) {
			me._boton_next18__img.style.visibility='inherit';
			me._boton_next18__imgo.style.visibility='hidden';
		}
		me._boton_next18.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next18);
		el=me._boton_next19=document.createElement('div');
		els=me._boton_next19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next19__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next19__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-19";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next19.ggIsActive=function() {
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
		me._boton_next19.logicBlock_visible = function() {
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
			if (me._boton_next19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next19.style[domTransition]='';
				if (me._boton_next19.ggCurrentLogicStateVisible == 0) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 1) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 2) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 3) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 4) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 5) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 6) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 7) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 8) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 9) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 10) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 11) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 12) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 13) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 14) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 15) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 16) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 17) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else if (me._boton_next19.ggCurrentLogicStateVisible == 18) {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
				else {
					me._boton_next19.style.visibility="hidden";
					me._boton_next19.ggVisible=false;
				}
			}
		}
		me._boton_next19.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 19");
				player.playSound("Video 20","1");
		}
		me._boton_next19.onmouseover=function (e) {
			me._boton_next19__img.style.visibility='hidden';
			me._boton_next19__imgo.style.visibility='inherit';
		}
		me._boton_next19.onmouseout=function (e) {
			me._boton_next19__img.style.visibility='inherit';
			me._boton_next19__imgo.style.visibility='hidden';
		}
		me._boton_next19.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next19);
		el=me._boton_next20=document.createElement('div');
		els=me._boton_next20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next20__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next20__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-20";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next20.ggIsActive=function() {
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
		me._boton_next20.logicBlock_visible = function() {
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
			if (me._boton_next20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next20.style[domTransition]='';
				if (me._boton_next20.ggCurrentLogicStateVisible == 0) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 1) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 2) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 3) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 4) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 5) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 6) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 7) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 8) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 9) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 10) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 11) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 12) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 13) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 14) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 15) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 16) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 17) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else if (me._boton_next20.ggCurrentLogicStateVisible == 18) {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
				else {
					me._boton_next20.style.visibility="hidden";
					me._boton_next20.ggVisible=false;
				}
			}
		}
		me._boton_next20.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 20");
				player.playSound("Video 21","1");
		}
		me._boton_next20.onmouseover=function (e) {
			me._boton_next20__img.style.visibility='hidden';
			me._boton_next20__imgo.style.visibility='inherit';
		}
		me._boton_next20.onmouseout=function (e) {
			me._boton_next20__img.style.visibility='inherit';
			me._boton_next20__imgo.style.visibility='hidden';
		}
		me._boton_next20.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next20);
		el=me._boton_next21=document.createElement('div');
		els=me._boton_next21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next21__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next21__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next21__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next-21";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='opacity: 0.8;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._boton_next21.ggIsActive=function() {
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
		me._boton_next21.logicBlock_visible = function() {
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
			if (me._boton_next21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._boton_next21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._boton_next21.style[domTransition]='';
				if (me._boton_next21.ggCurrentLogicStateVisible == 0) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 1) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 2) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 3) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 4) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 5) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 6) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 7) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 8) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 9) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 10) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 11) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 12) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 13) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 14) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 15) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 16) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 17) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else if (me._boton_next21.ggCurrentLogicStateVisible == 18) {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
				else {
					me._boton_next21.style.visibility="hidden";
					me._boton_next21.ggVisible=false;
				}
			}
		}
		me._boton_next21.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","$(fwd)");
				player.stopSound("Video 21");
				player.playSound("Video 1","1");
		}
		me._boton_next21.onmouseover=function (e) {
			me._boton_next21__img.style.visibility='hidden';
			me._boton_next21__imgo.style.visibility='inherit';
		}
		me._boton_next21.onmouseout=function (e) {
			me._boton_next21__img.style.visibility='inherit';
			me._boton_next21__imgo.style.visibility='hidden';
		}
		me._boton_next21.ggUpdatePosition=function (useTransition) {
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
		me._node_next.appendChild(me._boton_next21);
		me.divSkin.appendChild(me._node_next);
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
		hs+='right : 22px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxjaXJjbGUgc2hhcGU9ImNpcmNsZSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41LDAsMC'+
			'wwLjUsMTI4LDEyOCkiIGZpbGw9IiNmZmZmZmYiIHI9IjI1NiIgY3k9IjI1NiIgY3g9IjI1NiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuODAwMDAwMDAwMDAwMDEpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODM3LDAsMCwxMTQuODM3LDAsMjU2czExNC44MzcsMjU2LDI1NiwyNTZzMjU2LTExNC44MzcsMjU2LTI1NlMzOTcuMTYzLDAsMjU2LDB6IE0zMzUuMDgzLDI3MS4wODMgICAgTDIy'+
			'OC40MTYsMzc3Ljc0OWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxYy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjUgICAgTDI4OS44MzUsMjU2bC05MS41ODQtOTEuNTg0Yy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjVzMjEuODI0LTguMzQxLDMwLjE2NSwwbDEwNi42NjcsMTA2LjY2NyAgICBDMzQzLjQyNCwyNDkuMjU5LDM0My40MjQsMjYyLjc0MSwzMzUuMDgzLDI3MS4wODN6IiBmaWxsPSIjMDAwMDAwIiBjbGFzcz0iIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93'+
			'd3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_24__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_24__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxjaXJjbGUgc2hhcGU9ImNpcmNsZSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42NCwwLD'+
			'AsMC42NCw5Mi4xNiw5Mi4xNikiIGZpbGw9IiMwMDAwMDAiIHI9IjI1NiIgY3k9IjI1NiIgY3g9IjI1NiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuODAwMDAwMDAwMDAwMDEpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODM3LDAsMCwxMTQuODM3LDAsMjU2czExNC44MzcsMjU2LDI1NiwyNTZzMjU2LTExNC44MzcsMjU2LTI1NlMzOTcuMTYzLDAsMjU2LDB6IE0zMzUuMDgzLDI3MS4wODMg'+
			'ICAgTDIyOC40MTYsMzc3Ljc0OWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxYy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjUgICAgTDI4OS44MzUsMjU2bC05MS41ODQtOTEuNTg0Yy04LjM0MS04LjM0MS04LjM0MS0yMS44MjQsMC0zMC4xNjVzMjEuODI0LTguMzQxLDMwLjE2NSwwbDEwNi42NjcsMTA2LjY2NyAgICBDMzQzLjQyNCwyNDkuMjU5LDM0My40MjQsMjYyLjc0MSwzMzUuMDgzLDI3MS4wODN6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Im'+
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
		hs+='top : -21px;';
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
		hs+='bottom : -19px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQwLjgzNSAyNDAuODM1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeT0iMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiPgogPGc+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIj4KICAgPHBhdGggaWQ9IkV4cGFuZF9MZXNzIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJNMTI5LjAwNyw1Ny44MTljLTQuNjgtNC42OC0xMi40OTktNC42OC0xNy4xOTEsMEwzLjU1NSwxNjUuODAzYy00Ljc0LDQuNzQtNC43NCwxMi40MjcsMCwxNy4xNTUgICBjNC43NCw0Ljc0LDEyLjQzOSw0Ljc0LDE3LjE3OSwwbDk5LjY4My05OS40MDZsOTkuNjcxLDk5LjQxOGM0Ljc1Miw0Ljc0LDEyLjQzOSw0Ljc0LDE3LjE5MSwwYzQuNzQtNC43NCw0Ljc0LTEyLjQyNywwLTE3LjE1NSAgIEwxMjkuMDA3LDU3LjgxOXoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiLz4KICAgPGcv'+
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
		hs+='bottom : 11px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 167px;';
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
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 158px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace;';
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
		hs+='font-size: 25px;';
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
		el=me._scroll_name_left=document.createElement('div');
		el.ggId="scroll name left";
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 512px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 197px;';
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
		el.ggDy=218;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node20);
		el=me._node19=document.createElement('div');
		els=me._node19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node19";
		el.ggDy=196;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._node19.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node19);
		el=me._node18=document.createElement('div');
		els=me._node18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node18";
		el.ggDy=174;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node18);
		el=me._node17=document.createElement('div');
		els=me._node17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node17";
		el.ggDy=152;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node17);
		el=me._node16=document.createElement('div');
		els=me._node16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node16";
		el.ggDy=130;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node16);
		el=me._node15=document.createElement('div');
		els=me._node15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node15";
		el.ggDy=108;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node15);
		el=me._node14=document.createElement('div');
		els=me._node14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node14";
		el.ggDy=86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node14);
		el=me._node13=document.createElement('div');
		els=me._node13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node13";
		el.ggDy=64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node13);
		el=me._node12=document.createElement('div');
		els=me._node12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node12";
		el.ggDy=42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node12);
		el=me._node11=document.createElement('div');
		els=me._node11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node11";
		el.ggDy=14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node11);
		el=me._node10=document.createElement('div');
		els=me._node10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node10";
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node10);
		el=me._node9=document.createElement('div');
		els=me._node9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node9";
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node9);
		el=me._node8=document.createElement('div');
		els=me._node8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node8";
		el.ggDy=-52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node8);
		el=me._node7=document.createElement('div');
		els=me._node7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node7";
		el.ggDy=-75;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node7);
		el=me._node6=document.createElement('div');
		els=me._node6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node6";
		el.ggDy=-96;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node6);
		el=me._node5=document.createElement('div');
		els=me._node5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node5";
		el.ggDy=-118;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node5);
		el=me._node4=document.createElement('div');
		els=me._node4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node4";
		el.ggDy=-140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node4);
		el=me._node3=document.createElement('div');
		els=me._node3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node3";
		el.ggDy=-165;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node3);
		el=me._node2=document.createElement('div');
		els=me._node2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node2";
		el.ggDy=-187;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._node2);
		el=me._node1=document.createElement('div');
		els=me._node1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node1";
		el.ggDy=-219;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 58px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
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
		hs+='height : 213px;';
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
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 9px; height: 512px; background-color: rgba(255,255,255,0.00392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 9px; height: 512px; background-color: rgba(254,188,72,1); pointer-events: auto;');
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
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 512px;';
		hs+='left : 26px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
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
		hs+='top : 4px;';
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
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 510px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
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
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._scroll_name_left.appendChild(me._rectangle_5);
		me.divSkin.appendChild(me._scroll_name_left);
		el=me._botons_responsive_=document.createElement('div');
		el.ggId="botons responsive ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 93px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 53px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxjaXJjbGUgc2hhcGU9ImNpcmNsZSIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMS'+
			'wwLDApIiBmaWxsPSIjMDAwMDAwIiByPSIyNTYiIGN5PSIyNTYiIGN4PSIyNTYiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNTM5OTk5OTk5OTk5OTk5OSwwLDAsMC41Mzk5OTk5OTk5OTk5OTk5LDExNy43NjAwMDAwMDAwMDAwMiwxMTcuNzYwMDAwMDAwMDAwMDIpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik00MDAsMGMtNjEuNzYsMC0xMTIsNTAuMjQtMTEyLDExMmMwLDU3LjQ3Miw4OS44NTYsMTU5LjI2NCwxMDAuMDk2LDE3MC42ODhjMy4wNCwzLjM2LDcuMzYs'+
			'NS4zMTIsMTEuOTA0LDUuMzEyICAgIHM4Ljg2NC0xLjk1MiwxMS45MDQtNS4zMTJDNDIyLjE0NCwyNzEuMjY0LDUxMiwxNjkuNDcyLDUxMiwxMTJDNTEyLDUwLjI0LDQ2MS43NiwwLDQwMCwweiBNNDAwLDE2MGMtMjYuNDk2LDAtNDgtMjEuNTA0LTQ4LTQ4ICAgIGMwLTI2LjQ5NiwyMS41MDQtNDgsNDgtNDhjMjYuNDk2LDAsNDgsMjEuNTA0LDQ4LDQ4QzQ0OCwxMzguNDk2LDQyNi40OTYsMTYwLDQwMCwxNjB6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgPGc+CiAgICA8cGF0aCBkYXRhLW'+
			'9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJNMTAuMDQ4LDE4Ny45NjhDNCwxOTAuNCwwLDE5Ni4yODgsMCwyMDIuODQ4VjQ5NmMwLDUuMzEyLDIuNjU2LDEwLjI3Miw3LjA0LDEzLjI0OEM5LjcyOCw1MTEuMDQsMTIuODMyLDUxMiwxNiw1MTIgICAgYzIuMDE2LDAsNC4wMzItMC4zODQsNS45NTItMS4xNTJMMTYwLDQ1NS42MTZWMTI4TDEwLjA0OCwxODcuOTY4eiIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9IiIvPgogICA8L2c+CiAgPC9nPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5'+
			'bGU9IiIgZD0iTTQzNS43MTIsMzA0LjA2NEM0MjYuNjI0LDMxNC4xNzYsNDEzLjYsMzIwLDQwMCwzMjBjLTEzLjYsMC0yNi42MjQtNS44MjQtMzUuNzEyLTE1LjkzNiAgICBjLTMuMjY0LTMuNjE2LTcuNDU2LTguMzg0LTEyLjI4OC0xNC4wNDhWNTEybDE0OS45NTItNTkuOTY4YzYuMDgtMi40LDEwLjA0OC04LjMyLDEwLjA0OC0xNC44NDhWMjAxLjk1MiAgICBDNDg1Ljc5MiwyNDYuMzM2LDQ1MC43NTIsMjg3LjI5Niw0MzUuNzEyLDMwNC4wNjR6IiBmaWxsPSIjZmZmZmZmIiBjbGFzcz0iIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIC'+
			'AgPGc+CiAgICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJNMjY2LjA4LDE1Ny42MzJMMTkyLDEyOHYzMjcuNjE2bDEyOCw1MS4ydi0yNTYuOTZDMjk5LjU1MiwyMjIuMzA0LDI3OC4yMDgsMTg5LjEyLDI2Ni4wOCwxNTcuNjMyeiIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9IiIvPgogICA8L2c+CiAgPC9nPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3'+
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
		hs+='right : 10px;';
		hs+='top : 53px;';
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
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._svg_6);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDA3LjUxIDQwNy41MSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxjaXJjbGUgc2hhcGU9ImNpcmNsZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS'+
			'wwLDAsMSwwLDApIiBmaWxsPSIjMDAwMDAwIiByPSIyMDMuNzU1IiBjeT0iMjAzLjc1NSIgY3g9IjIwMy43NTUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNTQsMCwwLDAuNTQsOTMuNzI3Mjk1MjI3MDUwOCw5My43MjcyOTU0NDYzOTU4NykiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPGc+CiAgICAgPHBvbHlnb24gcG9pbnRzPSIxNjcuMTg0LDMwMS40NTMgMjM1LjYyNCwyNjEuMjI0IDE2Ny4xODQsMjIwLjk5NiAgICAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiLz4KICAgICA8'+
			'cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJNMzYwLjQ5LDExMi4zMjdINDcuMDJjLTI1Ljk2OSwwLTQ3LjAyLDIxLjA1Mi00Ny4wMiw0Ny4wMnYxOTguNTMxYzAsMjUuOTY5LDIxLjA1Miw0Ny4wMiw0Ny4wMiw0Ny4wMkgzNjAuNDkgICAgIGMyNS45NjksMCw0Ny4wMi0yMS4wNTIsNDcuMDItNDcuMDJWMTU5LjM0N0M0MDcuNTEsMTMzLjM3OCwzODYuNDU4LDExMi4zMjcsMzYwLjQ5LDExMi4zMjd6IE0yNjQuNjI4LDI2NS42NTggICAgIGMtMC45NjEsMS45MjYtMi41MjMsMy40ODctNC40NDgsNC40NDlsLTk5Ljc4OCw1OC41MTRjLTEuNTM0LDEuMDU4LTMuMzYyLDEuNj'+
			'A2LTUuMjI0LDEuNTY3bC00LjcwMi0xLjU2NyAgICAgYy0yLjk1LTEuOTQxLTQuNTY1LTUuMzcxLTQuMTgtOC44ODJWMjAyLjcxYy0wLjM4NS0zLjUxLDEuMjI5LTYuOTQxLDQuMTgtOC44ODJjMy0yLjAyMiw2LjkyNi0yLjAyMiw5LjkyNywwbDk5Ljc4OCw1OC41MTQgICAgIEMyNjUuMDg1LDI1NC43OTEsMjY3LjA3NiwyNjAuNzUyLDI2NC42MjgsMjY1LjY1OHoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiLz4KICAgICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJNNTMuODEyLDgwLjk4SDM1NC4yMmM1Ljc3MSwwLDEwLjQ0OS00LjY3OCwxMC40NDktMTAuNDQ5cy00'+
			'LjY3OC0xMC40NDktMTAuNDQ5LTEwLjQ0OUg1My44MTIgICAgIGMtNS43NzEsMC0xMC40NDksNC42NzgtMTAuNDQ5LDEwLjQ0OVM0OC4wNDEsODAuOTgsNTMuODEyLDgwLjk4eiIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9IiIvPgogICAgIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik05OC4yMiwyMy41MUgzMDkuMjljNS43NzEsMCwxMC40NDktNC42NzgsMTAuNDQ5LTEwLjQ0OVMzMTUuMDYxLDIuNjEyLDMwOS4yOSwyLjYxMkg5OC4yMiAgICAgYy01Ljc3MSwwLTEwLjQ0OSw0LjY3OC0xMC40NDksMTAuNDQ5UzkyLjQ1LDIzLjUxLDk4LjIyLDIzLjUxeiIgZmlsbD0iI2'+
			'ZmZmZmZiIgY2xhc3M9IiIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgog'+
			'IDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC'+
			'9nPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
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
			me._popup_video_file.ggInitMedia(player.getBasePath()+""+player.hotspot.url);
			player.setVariableValue('vis_video_file', true);
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._popup_video_file.ggApiPlayer.getPlayerState() == 1) {
							me._popup_video_file.ggApiPlayer.pauseVideo();
						} else {
							me._popup_video_file.ggApiPlayer.playVideo();
						}
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					var promise = me._popup_video_file.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._popup_video_file.ggApiPlayer.play();
						} else {
							me._popup_video_file.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("popup_video_file","1");
			}
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._botons_responsive_.appendChild(me._svg_2);
		me.divSkin.appendChild(me._botons_responsive_);
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 41px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 4;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__logo_responsive_1=document.createElement('div');
		els=me.__logo_responsive_1__img=document.createElement('img');
		els.className='ggskin ggskin__logo_responsive_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAiCAYAAAB83WotAAAGtklEQVR4nO3bf4xcVRXA8c9dCv0hRaxFtrpilYKsShQbqNSouBoaJqaJTbREqqt1iD8gNAgY1ChqFFGRQqK2hUGz4B/+QQSCnVpjNoAJVgUtlrD2h8TqErZYsJpSTAtc/3gzzex23n37Yzq7Kfv9b+65573z3jvz7jnnnhdMcWJP18n4Ni7GPOzA2tA/uH5SDasRK2bhMrx+hOh5/DSU7Wi/VRkxxjHNn3GU7GgJsadrDu7H2xuGz8S62NO1MPQPXjsphg3nCnw3R3YhFrfRlgnRMdkGFPA5wx2hkS/Gnq4z2mlMDq9NyF7dNitawFR3hgsTsoCedhnycmCqO8PsAvmstljxMmGqO8PvJyifZgxMdWf4AfbmyO4L/YNb2mnMsc6UdobQPzgkiwu2Ng'+
			'xH9OFjk2LUMcyUTi0h9A9uwzm1zOFUbA/9g/+aZLOOSaa8M9QJ/YM7sXOy7TiWaeoMQ7rn4CK8D6fL8uVZeA5/wS/xq04DL47Qq6d7y3EOTsJBPIPd+C02dhrYdzQupojY62zZdZ2L0zCzJnoaA3gAm0Of5ybDvokQqxbiQ1iCRZhtUyC794/hQWwKJQfyjhEafwzpnolrcSVeWXD+v2FNp4GNNd1344d4R4HeAdyK6zoN/LdgrtjTtQBvbiLaFvoHnynSh9irR1bSftcopv8HP8YNoU+xfRU3Y02OeHcoW1igPwvnyY/fDuGhUNa0thyrzsfXpWsydfbjNnwrlDw7UnjYGYZ0d+E+xQ9zJN+RRfzfN7aAdDdKnQYez5sQe7o6ZXsRc5uI92BR6B/cn6vf6zjcjMvHYFedf2JF6PNwatJEnCFWHC8rty8tsGVxKPvT'+
			'MN2qE2TZ1niu7VmsDiX3Ng52wJDuufi1sTsCfKlm1FgzkzfgN0O6X5eYc5bmjkAWTC7KU4y9An5mfDeLbOPpwdhryTj1R8PXFDvCJvy5cSBWzcFm47+2ebgnVl3ROFh/gN9D9zgPPBEWyJaMo8E1sp3OiTAbd8dep7TAnmHEivPx5YJpe7G6cYmIVR24Cxe0wIxbYtUl9R8dQ7pPw6UtOPB4KQ3pHs1aPmpiry7ZOtoKFuCbLToWiBUn4k7Fb9NLQ9nQiLErZUFwq9gQq96oZswqHNfCg4+HT7T4eJcr3tcYC6tb/HZYK8vSUvwklN3TOBCrTtE6J6/zCtxIllq+v2DyDmyQvbLOxOfxqgKd57FOlobOxafwzsT8Vu8+FlUn98n+mbswBx/EBxLzT8AK2X2YELFiOcoF057QPCi9DCcW6D4uS/33yhxuBYWO/OFYdc'+
			'YM6VjhSSxprAsM6b6bdISNj9RTzprOrXgEb8uZ37K+hNhrkSO7jhr5O5aGPk81jN0Qe12l9g/J4QITdIZYcSpuL5j2Ej4eypplSasSeodkjTYbQmlYjHG1LOXvTegGrOyQbsC4a2SBqNPAI3g0obOn0RFqOgdxR0KnY0h30dtmtLylQH7dCEeocxO2J/TeOn6TDlPB/II514eyh0YOxqou6aVlTShZ3+gIEEr2y97M9zZXO0xPh3RPwD9yxncndEYGPHWeLDCmqMg1WlKpKvQ3Gwx9oqxKN97jJokVn5FVCFM8LD9YTTljfSlvSs1Bri4499lF0exLOeNj67TMyC2DtpiZBfKnE7I9Cdm4g+xYMV96CSKLs1aFskM58s6E7qZQyn1WIJTsItmcO39Kb2EfDUKfgwnxiwnZRFiiOPC7KZSTy1RIyP49SjvyekMwxfsZ'+
			'jiG2K36b9saKkxPy1D5JbiW2TqwKCtLZaWdoA6FslyzVTtEli/rzeCIhWx6rSUeCZbISfi7TztA+rpFes+GSWPHRHNljsriiGSdhfa1UfQS1YtWPigycdoY2EcoOyOoERXHJulg5MnMJJS/INq3yWIlqrDqrPhCrOmLVRdiCNxXZOO0MbSSU/VHxPsc83B4rTQPG2wp0l2EgVu2KVVvwFKpG4QhMO8NkcL3sn5pimexrspFsNrrPA06XZTCvGYth087QZkLZC7KNuaLWuhtjZXiHV6149FmS6fG4mXaGSSCU7cRVBdNm485YGd6nGkq2mljLwS/yBNPOMEmEsg3YWDDtXHzlCN2SO/BJY39DfEHW2tiUaWeYXD6toCqIr8aK80YOhpI+WSPt70Zxnn24OJSsTU2agW8k5HmBzs8N/8qpkbyNqr8WnKtZ+/wgbknoNP'+
			'uYZkvBeVLcn5D9L2f8gYTOER3IjYSyPbFipezTghSL8Ycj9EsexdJY9V5ZD8d7ZO0Ax9fs3SZbFtaH0uH7u1XO/fk//dGir9SKPaMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId=" logo responsive - 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__logo_responsive_1.ggIsActive=function() {
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
		me.__logo_responsive_1.logicBlock_scaling = function() {
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
			if (me.__logo_responsive_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__logo_responsive_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__logo_responsive_1.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me.__logo_responsive_1.ggCurrentLogicStateScaling == 0) {
					me.__logo_responsive_1.ggParameter.sx = 0;
					me.__logo_responsive_1.ggParameter.sy = 0;
					me.__logo_responsive_1.style[domTransform]=parameterToTransform(me.__logo_responsive_1.ggParameter);
				}
				else {
					me.__logo_responsive_1.ggParameter.sx = 1;
					me.__logo_responsive_1.ggParameter.sy = 1;
					me.__logo_responsive_1.style[domTransform]=parameterToTransform(me.__logo_responsive_1.ggParameter);
				}
			}
		}
		me.__logo_responsive_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__logo_responsive_1);
		me.divSkin.appendChild(me._rectangle_4);
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
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
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
		hs+='z-index: 16;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
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
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0id2hpdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGJlZ2luPSIwIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgY3k9IjMiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgYmVnaW49IjAuMTI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGJlZ2luPSIwLjI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAw'+
			'LjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiBjeT0iMyIgcj0iMCIgY3g9IjE2Ij4KICA8YW5pbWF0ZSBiZWdpbj0iMC4zNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZW'+
			'Zpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGJlZ2luPSIwLjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIGN5PSIzIiByPSIwIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIGJlZ2luPSIwLjYyNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgY3k9IjMiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgYmVnaW49IjAuNzVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40ID'+
			'AuOCIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIGJlZ2luPSIwLjg3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiIGN4PSIxNiI+CiAgPGFuaW1hdGUgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
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
		me._loading_video_file.ggIsActive=function() {
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
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
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
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_file.ggVideoNotLoaded ==false && me._popup_video_file.ggDeactivate) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('controls', '');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
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
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		hs+='z-index: 16;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
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
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
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
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#ffffff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function() {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState) {
					var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
		}
		me._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgd2lkdGg9IjMycHgiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5'+
			'LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LD'+
			'AsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5O2MtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOW'+
			'MwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3omI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7IE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2'+
			'wwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgd2lkdGg9IjMycHgiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjM3LTAuMjE0LDAuODI2'+
			'LTAuMjE0LDEuMTk2LDBsMCwwbDkuOTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPgogIDxwYXRoIG'+
			'Q9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBj'+
			'MS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZS'+
			'gtMTYsLTE2KSIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLjgyMiwwLjU5OC0xLjAzNmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bC05Ljk3OCw1Ljc2'+
			'MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+CiAgPHBhdGggZD0iTTMuNSwxNkwzLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLj'+
			'UsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAs'+
			'MGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
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
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgd2lkdGg9IjMycHgiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoME'+
			'M1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzEyLjk2OSwyMS42OTMsMTIuNDMzLDIxLjE1OCwxMi40MzMsMjAuNDk4TDEyLjQzMywyMC40OTh6Ii8+CiAgIDxwYXRoIGQ9Ik0xNy4xNzUsMjAuNDk4di04Ljk5NWMwLTAu'+
			'NjYxLDAuNTM1LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2LDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OT'+
			'YsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1MywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMxLTEuODMyLDIuOTYtNC4zNTIsMi45Ni03LjE0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEu'+
			'MzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwaDBDNS44OTQsMTguNzk1LDcuMDIyLDIxLjMxNCw4Ljg1MywyMy4xNDZMOC44NTMsMjMuMTQ2eiIvPgogIDxnPgogICA8cGF0aCBkPSJNMTIuNDMzLDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NjEsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Ji'+
			'N4OTtjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8'+
			'L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+Cjxzdmcgd2lkdGg9IjMycHgiIHg9IjBweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAs'+
			'MEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3'+
			'hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40'+
			'OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxNy43MSwyMS42OTMsMTcuMTc1LDIxLjE1OCwxNy4xNzUsMjAuNDk4TDE3LjE3NSwyMC40OTh6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdG'+
			'UoLTE2LC0xNikiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEz'+
			'LDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMy'+
			'wyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUmI3hkOyYjeGE7'+
			'JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxNy43MSwyMS42OTMsMTcuMTc1LDIxLjE1OCwxNy4xNzUsMjAuNDk4TDE3LjE3NSwyMC40OTh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
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
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_close_file=document.createElement('div');
		els=me._video_popup_close_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'E5OTkveGxpbmsiIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIzMnB4IiB4PSIwcHgiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'E5OTkveGxpbmsiIHk9IjBweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_popup_close_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		hs+='z-index: 16;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_file.logicBlock_visible = function() {
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
			if (me._video_popup_close_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_file.style[domTransition]='';
				if (me._video_popup_close_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_file.style.visibility=(Number(me._video_popup_close_file.style.opacity)>0||!me._video_popup_close_file.style.opacity)?'inherit':'hidden';
					me._video_popup_close_file.ggVisible=true;
				}
				else {
					me._video_popup_close_file.style.visibility="hidden";
					me._video_popup_close_file.ggVisible=false;
				}
			}
		}
		me._video_popup_close_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_popup_close_file.onmouseover=function (e) {
			me._video_popup_close_file__img.style.visibility='hidden';
			me._video_popup_close_file__imgo.style.visibility='inherit';
		}
		me._video_popup_close_file.onmouseout=function (e) {
			me._video_popup_close_file__img.style.visibility='inherit';
			me._video_popup_close_file__imgo.style.visibility='hidden';
		}
		me._video_popup_close_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_popup_close_file);
		el=me._boton_next=document.createElement('div');
		els=me._boton_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._boton_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiNmZmZmZmYiIHI9IjMyIiBjeT0iMz'+
			'IiIGN4PSIzMiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsOS42MDAwMDA1NzIyMDQ1OTMsOS42MDAwODAzOTQ3NDQ4NzUpIj4KICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBkPSJtMzcuMzc5IDEyLjU1MmMtLjc5OS0uNzYxLTIuMDY2LS43MzEtMi44MjcuMDY5LS43NjIuOC0uNzMgMi4wNjYuMDY5IDIuODI4bDE1LjM0MiAxNC41NTFoLTM5Ljk2M2MtMS4xMDQgMC0yIC44OTYtMiAycy44OTYgMiAyIDJoMzkuODk5bC0xNS4yNzggMTQuNTUyYy0uOC43NjItLjgzMSAyLjAyOC0uMDY5IDIuODI4LjM5My40MTIuOTIuNjIgMS40NDguNjIuNDk2IDAg'+
			'Ljk5Mi0uMTgzIDEuMzc5LS41NTJsMTcuNDQ5LTE2LjYyYy43NTYtLjc1NSAxLjE3Mi0xLjc1OSAxLjE3Mi0yLjgyOHMtLjQxNi0yLjA3My0xLjIwNy0yLjg2MnoiIGZpbGw9IiMwMDAwMDAiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPgogPC9nPgo8L3N2Zz4K';
		me._boton_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="boton next";
		el.ggDy=-65;
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
		el=me._video_prueba=document.createElement('div');
		me._video_prueba.seekbars = [];
		me._video_prueba.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_prueba.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_prueba.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_prueba.hasChildNodes()) {
				me._video_prueba.removeChild(me._video_prueba.lastChild);
			}
			if (me._video_prueba__vid) {
				me._video_prueba__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_prueba.ggVideoNotLoaded ==false && me._video_prueba.ggDeactivate) { me._video_prueba.ggDeactivate(); }
				me._video_prueba.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_prueba');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_prueba.ggVideoNotLoaded = false;
			me._video_prueba__vid=document.createElement('video');
			me._video_prueba__vid.className='ggskin ggskin_video';
			me._video_prueba__vid.setAttribute('width', '100%');
			me._video_prueba__vid.setAttribute('height', '100%');
			me._video_prueba__source=document.createElement('source');
			me._video_prueba__source.setAttribute('src', media);
			me._video_prueba__vid.setAttribute('playsinline', 'playsinline');
			me._video_prueba__vid.setAttribute('style', ';');
			me._video_prueba__vid.appendChild(me._video_prueba__source);
			me._video_prueba.appendChild(me._video_prueba__vid);
			var videoEl = player.registerVideoElement('Video_prueba', me._video_prueba__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._video_prueba.ggVideoSource = media;
		}
		el.ggId="Video_prueba";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 113px;';
		hs+='height : 202px;';
		hs+='position : absolute;';
		hs+='right : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 317px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_prueba.ggIsActive=function() {
			if (me._video_prueba__vid != null) {
				return (me._video_prueba__vid.paused == false && me._video_prueba__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_prueba.logicBlock_scaling = function() {
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
			if (me._video_prueba.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._video_prueba.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._video_prueba.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._video_prueba.ggCurrentLogicStateScaling == 0) {
					me._video_prueba.ggParameter.sx = 0;
					me._video_prueba.ggParameter.sy = 0;
					me._video_prueba.style[domTransform]=parameterToTransform(me._video_prueba.ggParameter);
				}
				else {
					me._video_prueba.ggParameter.sx = 1;
					me._video_prueba.ggParameter.sy = 1;
					me._video_prueba.style[domTransform]=parameterToTransform(me._video_prueba.ggParameter);
				}
			}
		}
		me._video_prueba.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsLoading() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_prueba.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_prueba.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_prueba.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._video_prueba.ggCurrentLogicStateVisible == 0) {
					me._video_prueba.style.visibility="hidden";
					me._video_prueba.ggVisible=false;
				}
				else {
					me._video_prueba.style.visibility=(Number(me._video_prueba.style.opacity)>0||!me._video_prueba.style.opacity)?'inherit':'hidden';
					if (me._video_prueba.ggVideoNotLoaded) {
						me._video_prueba.ggInitMedia(me._video_prueba.ggVideoSource);
					}
					me._video_prueba.ggVisible=true;
				}
			}
		}
		me._video_prueba.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_prueba);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxjaXJjbGUgc2hhcGU9ImNpcmNsZSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42MSwwLDAsMC42MSw5OS'+
			'44NCw5OS44NCkiIGZpbGw9IiNmZmZmZmYiIHI9IjI1NiIgY3k9IjI1NiIgY3g9IjI1NiIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuODAwMDAwMDAwMDAwMDEsNzYuODAwMDAwMDAwMDAwMDEpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8Zz4KICAgIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGQ9Ik0yNTYsMEMxMTQuODMzLDAsMCwxMTQuODQ0LDAsMjU2czExNC44MzMsMjU2LDI1NiwyNTZzMjU2LTExNC44NDQsMjU2LTI1NlMzOTcuMTY3LDAsMjU2LDB6IE0zNTcuNzcxLDI2NC45NjkgICAgbC0xNDku'+
			'MzMzLDk2Yy0xLjc1LDEuMTM1LTMuNzcxLDEuNjk4LTUuNzcxLDEuNjk4Yy0xLjc1LDAtMy41MjEtMC40MzgtNS4xMDQtMS4zMDJDMTk0LjEyNSwzNTkuNDksMTkyLDM1NS45MDYsMTkyLDM1MlYxNjAgICAgYzAtMy45MDYsMi4xMjUtNy40OSw1LjU2My05LjM2NWMzLjM3NS0xLjg1NCw3LjYwNC0xLjc0LDEwLjg3NSwwLjM5NmwxNDkuMzMzLDk2YzMuMDQyLDEuOTU4LDQuODk2LDUuMzQ0LDQuODk2LDguOTY5ICAgIFMzNjAuODEzLDI2My4wMSwzNTcuNzcxLDI2NC45Njl6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3Zn'+
			'Ii8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 44px;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 279px;';
		hs+='visibility : inherit;';
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
			if (me._video_prueba.ggVideoNotLoaded) {
				me._video_prueba.ggInitMedia(me._video_prueba.ggVideoSource);
			}
			me._video_prueba.style[domTransition]='none';
			me._video_prueba.style.visibility=(Number(me._video_prueba.style.opacity)>0||!me._video_prueba.style.opacity)?'inherit':'hidden';
			me._video_prueba.ggVisible=true;
			me._svg_7.style[domTransition]='none';
			me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
			me._svg_7.ggVisible=true;
			me._svg_8.style[domTransition]='none';
			me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
			me._svg_8.ggVisible=true;
			if (me._video_prueba.ggApiPlayer) {
				if (me._video_prueba.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_prueba.ggApiPlayer.playVideo();
					};
					if (me._video_prueba.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_prueba.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_prueba.ggApiPlayerType == 'vimeo') {
					me._video_prueba.ggApiPlayer.play();
				}
			} else {
				player.playSound("Video_prueba","1");
			}
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_9);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHk9IjAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MTIiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj4KIDxjaXJjbGUgc2hhcGU9ImNpcmNsZSIgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMS'+
			'wwLDApIiBmaWxsPSIjMDAwMDAwIiByPSIyNTYiIGN5PSIyNTYiIGN4PSIyNTYiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNywwLDAsMC43LDc2LjgwMDAwMDAwMDAwMDAxLDc2LjgwMDAwMDAwMDAwMDAxKSI+CiAgPHBhdGggZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgZD0ibTI1NiAwYy0xMzkuNDg4MjgxIDAtMjU2IDExNi4xNDA2MjUtMjU2IDI1NiAwIDEzOS40ODgyODEgMTE2LjE0MDYyNSAyNTYgMjU2IDI1NiAxMzkuNDg4MjgxIDAgMjU2LTExNi4xNDA2MjUgMjU2LTI1NiAwLTEzOS40ODgyODEtMTE2LjE0MDYyNS0yNTYtMjU2LTI1NnptMTU5LjEwMTU2MiA5Ni45MDIz'+
			'NDRjODUuNjQ0NTMyIDg1LjY0NDUzMSA4OS4wNTQ2ODggMjE3Ljg3MTA5NCAxMC4yNjE3MTkgMzA3LjI0NjA5NGwtNTYuNDYwOTM3LTU2LjQ2MDkzOGMyOS4zNTU0NjgtMjIuMTYwMTU2IDU5LjAxMTcxOC01Mi43NDIxODggODUuMTY0MDYyLTkxLjY4NzUtNDQuNDM3NS02Ni4xNzU3ODEtMTE4LjcwNzAzMS0xMzUtMTk4LjA2NjQwNi0xMzUtMzEuNzY5NTMxIDAtNjEuNDQ1MzEyIDEwLjg3ODkwNi04Ny41MjczNDQgMjYuMjU3ODEybC02MC42MjEwOTQtNjAuNjE3MTg3Yzg5LjM3NS03OC43OTI5NjkgMjIxLjYwMTU2My03NS4zODI4MTMgMzA3LjI1IDEwLjI2MTcxOXptLTExOC41IDE3OC40ODgyOD'+
			'EtNTkuOTkyMTg3LTU5Ljk5MjE4N2M1Ljg3NS0yLjgxNjQwNyAxMi40NTMxMjUtNC4zOTg0MzggMTkuMzkwNjI1LTQuMzk4NDM4IDI0LjgxMjUgMCA0NSAyMC4xODc1IDQ1IDQ1IDAgNi45Mzc1LTEuNTgyMDMxIDEzLjUxNTYyNS00LjM5ODQzOCAxOS4zOTA2MjV6bS0yMS4yMTA5MzcgMjEuMjEwOTM3Yy01Ljg3NSAyLjgxNjQwNy0xMi40NTMxMjUgNC4zOTg0MzgtMTkuMzkwNjI1IDQuMzk4NDM4LTI0LjgxMjUgMC00NS0yMC4xODc1LTQ1LTQ1IDAtNi45Mzc1IDEuNTgyMDMxLTEzLjUxNTYyNSA0LjM5ODQzOC0xOS4zOTA2MjV6bS0xOS4zOTA2MjUgMzQuMzk4NDM4YzE1LjI2NTYyNSAwIDI5LjQ2'+
			'ODc1LTQuNTkzNzUgNDEuMzI4MTI1LTEyLjQ1NzAzMWwyNC4xOTE0MDYgMjQuMTg3NWMtMjAuMjQ2MDkzIDEwLjkzMzU5My00Mi40MjU3ODEgMTguMjY5NTMxLTY1LjUxOTUzMSAxOC4yNjk1MzEtNzUuNTMxMjUgMC0xNDEuNTg5ODQ0LTc4LjgwODU5NC0xNjEuNDY0ODQ0LTEwNS4wMTE3MTkgMTEuMDgyMDMyLTE0LjY0NDUzMSAzNi41MzEyNS00NS42Njc5NjkgNzAuMDI3MzQ0LTcwLjIxNDg0M2wyOC44OTQ1MzEgMjguODk4NDM3Yy03Ljg2MzI4MSAxMS44NTkzNzUtMTIuNDU3MDMxIDI2LjA2MjUtMTIuNDU3MDMxIDQxLjMyODEyNSAwIDQxLjM1NTQ2OSAzMy42NDQ1MzEgNzUgNzUgNzV6bTYyLj'+
			'U0Mjk2OS0zMy42NzE4NzVjNy44NjMyODEtMTEuODU5Mzc1IDEyLjQ1NzAzMS0yNi4wNjI1IDEyLjQ1NzAzMS00MS4zMjgxMjUgMC00MS4zNTU0NjktMzMuNjQ0NTMxLTc1LTc1LTc1LTE1LjI2NTYyNSAwLTI5LjQ2ODc1IDQuNTkzNzUtNDEuMzI4MTI1IDEyLjQ1NzAzMWwtMjQuMTkxNDA2LTI0LjE4NzVjMjAuMjQ2MDkzLTEwLjkzMzU5MyA0Mi40MjU3ODEtMTguMjY5NTMxIDY1LjUxOTUzMS0xOC4yNjk1MzEgNzUuNTIzNDM4IDAgMTQxLjU4MjAzMSA3OC43OTY4NzUgMTYxLjQ2NDg0NCAxMDUuMDExNzE5LTExLjA4MjAzMiAxNC42NDQ1MzEtMzYuNTMxMjUgNDUuNjY3OTY5LTcwLjAyNzM0NCA3'+
			'MC4yMTQ4NDN6bS0yMjEuNjQ0NTMxIDExNy43Njk1MzFjLTg1LjY0NDUzMi04NS42NDQ1MzEtODkuMDU0Njg4LTIxNy44NzEwOTQtMTAuMjYxNzE5LTMwNy4yNDYwOTRsNTYuNDYwOTM3IDU2LjQ2MDkzOGMtMjkuMzU1NDY4IDIyLjE2MDE1Ni01OS4wMTE3MTggNTIuNzQyMTg4LTg1LjE2NDA2MiA5MS42ODc1IDQ0LjQzNzUgNjYuMTc1NzgxIDExOC43MDcwMzEgMTM1IDE5OC4wNjY0MDYgMTM1IDMxLjc2OTUzMSAwIDYxLjQ0NTMxMi0xMC44Nzg5MDYgODcuNTI3MzQ0LTI2LjI1NzgxMmw2MC42MjEwOTQgNjAuNjE3MTg3Yy04OS4zNzUgNzguNzkyOTY5LTIyMS42MDE1NjMgNzUuMzgyODEzLTMwNy'+
			'4yNS0xMC4yNjE3MTl6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 39px;';
		hs+='position : absolute;';
		hs+='right : 146px;';
		hs+='visibility : inherit;';
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
			me._video_prueba.style[domTransition]='none';
			me._video_prueba.style.visibility='hidden';
			me._video_prueba.ggVisible=false;
			me._svg_8.style[domTransition]='none';
			me._svg_8.style.visibility='hidden';
			me._svg_8.ggVisible=false;
			me._svg_7.style[domTransition]='none';
			me._svg_7.style.visibility='hidden';
			me._svg_7.ggVisible=false;
			if (me._video_prueba.ggApiPlayer) {
				if (me._video_prueba.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_prueba.ggApiPlayer.pauseVideo();
						me._video_prueba.ggApiPlayer.seekTo(0);
					};
					if (me._video_prueba.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_prueba.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_prueba.ggApiPlayerType == 'vimeo') {
					me._video_prueba.ggApiPlayer.pause();
					me._video_prueba.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Video_prueba");
			}
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_10);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjcxLjk1MyAyNzEuOTUzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeT0iMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMiIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiPgogPGNpcmNsZSBzaGFwZT0iY2lyY2xlIiBmaWxsPSIjMDAwMDAwIiByPS'+
			'IxMzUuOTc2NSIgY3k9IjEzNS45NzY1IiBjeD0iMTM1Ljk3NjUiLz4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNywwLDAsMC43LDQwLjc5MzEwMTUwMTQ2NDg1LDQwLjc5Mjk1MDQzOTQ1MzEzNikiPgogIDxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxnPgogICAgPHBhdGggZGF0YS1vcmlnaW5hbD0iIzAxMDAwMiIgc3R5bGU9IiIgZD0iTTEzNS45NzcsMjcxLjk1M2M3NS4wOTcsMCwxMzUuOTc3LTYwLjg3OSwxMzUuOTc3LTEzNS45NzdTMjExLjA3NCwwLDEzNS45NzcsMFMwLDYwLjg3OSwwLDEzNS45NzcgICAgUzYwLjg3OSwyNzEuOTUzLDEzNS45NzcsMjcxLjk1'+
			'M3ogTTEzNS45NzcsMjEuNzU2YzYyLjk3OSwwLDExNC4yMiw1MS4yNDEsMTE0LjIyLDExNC4yMnMtNTEuMjQxLDExNC4yMi0xMTQuMjIsMTE0LjIyICAgIHMtMTE0LjIyLTUxLjI0MS0xMTQuMjItMTE0LjIyUzcyLjk5MiwyMS43NTYsMTM1Ljk3NywyMS43NTZ6IiBmaWxsPSIjZmZmZmZmIi8+CiAgICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDEwMDAyIiBzdHlsZT0iIiBkPSJNMTEwLjcwNywyMDAuMTE0YzcuNTExLDAsMTMuNTk4LTYuMDg2LDEzLjU5OC0xMy41OThWODMuMTc0YzAtNy41MTEtNi4wODYtMTMuNTk4LTEzLjU5OC0xMy41OTggICAgYy03LjUxMSwwLTEzLjU5OCw2LjA4Ni0xMy41OT'+
			'gsMTMuNTk4djEwMy4zNDJDOTcuMTA5LDE5NC4wMjgsMTAzLjE5NSwyMDAuMTE0LDExMC43MDcsMjAwLjExNHoiIGZpbGw9IiNmZmZmZmYiLz4KICAgIDxwYXRoIGRhdGEtb3JpZ2luYWw9IiMwMTAwMDIiIHN0eWxlPSIiIGQ9Ik0xNjUuMDk3LDIwMC4xMTRjNy41MTEsMCwxMy41OTgtNi4wODYsMTMuNTk4LTEzLjU5OFY4My4xNzRjMC03LjUxMS02LjA4Ni0xMy41OTgtMTMuNTk4LTEzLjU5OCAgICBTMTUxLjUsNzUuNjYzLDE1MS41LDgzLjE3NHYxMDMuMzQyQzE1MS41LDE5NC4wMjgsMTU3LjU4NiwyMDAuMTE0LDE2NS4wOTcsMjAwLjExNHoiIGZpbGw9IiNmZmZmZmYiLz4KICAgPC9nPgogIDwv'+
			'Zz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz'+
			'4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 51px;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 240px;';
		hs+='visibility : inherit;';
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
		me._svg_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsLoading() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_7.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._svg_7.ggCurrentLogicStateVisible == 0) {
					me._svg_7.style.visibility="hidden";
					me._svg_7.ggVisible=false;
				}
				else {
					me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
					me._svg_7.ggVisible=true;
				}
			}
		}
		me._svg_7.onclick=function (e) {
			if (me._video_prueba.ggApiPlayer) {
				if (me._video_prueba.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_prueba.ggApiPlayer.pauseVideo();
					};
					if (me._video_prueba.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_prueba.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_prueba.ggApiPlayerType == 'vimeo') {
					me._video_prueba.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("Video_prueba");
			}
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_7);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+Cjxzdmcgd2lkdGg9IjUxMiIgeD0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAuMDUgMzAuMDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB5PSIwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+CiA8Y2lyY2xlIHNoYXBlPSJjaXJjbGUiIGZpbGw9IiMwMDAwMDAiIHI9IjE1Lj'+
			'AyNSIgY3k9IjE1LjAyNSIgY3g9IjE1LjAyNSIvPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNC41MDc1MDAwNTAzNjgyNTQsNC41MDc0OTk4ODU1NTkwODMpIj4KICA8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICA8cGF0aCBkYXRhLW9yaWdpbmFsPSIjMDMwMTA0IiBzdHlsZT0iIiBkPSJNMTguOTkzLDEwLjY4OGgtNy45MzZjLTAuMTksMC0wLjM0NiwwLjE0OS0wLjM0NiwwLjM0MnY4LjAyMmMwLDAuMTg5LDAuMTU1LDAuMzQ0LDAuMzQ2LDAuMzQ0ICAgaDcuOTM2YzAuMTksMCwwLjM0NC0wLjE1NCwwLjM0NC0wLjM0NFYxMS4wM0MxOS4zMzYsMTAu'+
			'ODM4LDE5LjE4MywxMC42ODgsMTguOTkzLDEwLjY4OHoiIGZpbGw9IiNmZmZmZmYiLz4KICAgPHBhdGggZGF0YS1vcmlnaW5hbD0iIzAzMDEwNCIgc3R5bGU9IiIgZD0iTTE1LjAyNiwwQzYuNzI5LDAsMC4wMDEsNi43MjYsMC4wMDEsMTUuMDI1UzYuNzI5LDMwLjA1LDE1LjAyNiwzMC4wNSAgIGM4LjI5OCwwLDE1LjAyMy02LjcyNiwxNS4wMjMtMTUuMDI1UzIzLjMyNCwwLDE1LjAyNiwweiBNMTUuMDI2LDI3LjU0Yy02LjkxMiwwLTEyLjUxNi01LjYwNC0xMi41MTYtMTIuNTE1ICAgYzAtNi45MTQsNS42MDQtMTIuNTE3LDEyLjUxNi0xMi41MTdjNi45MTMsMCwxMi41MTQsNS42MDMsMTIuNTE0LD'+
			'EyLjUxN0MyNy41NCwyMS45MzYsMjEuOTM5LDI3LjU0LDE1LjAyNiwyNy41NHoiIGZpbGw9IiNmZmZmZmYiLz4KICA8L2c+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0'+
			'dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiAgPGcgeG1sbnM9Imh0dH'+
			'A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 51px;';
		hs+='height : 38px;';
		hs+='position : absolute;';
		hs+='right : 194px;';
		hs+='visibility : inherit;';
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
		me._svg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsLoading() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_8.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._svg_8.ggCurrentLogicStateVisible == 0) {
					me._svg_8.style.visibility="hidden";
					me._svg_8.ggVisible=false;
				}
				else {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
			}
		}
		me._svg_8.onclick=function (e) {
			if (me._video_prueba.ggApiPlayer) {
				if (me._video_prueba.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_prueba.ggApiPlayer.pauseVideo();
						me._video_prueba.ggApiPlayer.seekTo(0);
					};
					if (me._video_prueba.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_prueba.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_prueba.ggApiPlayerType == 'vimeo') {
					me._video_prueba.ggApiPlayer.pause();
					me._video_prueba.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Video_prueba");
			}
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_8);
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
		me._popup_video_file.ggVideoSource = 'media/video_11.mp4';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._video_prueba.ggInitMedia('media/video_19.IA.mp4');
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner1.ggUpdate();
			me._node_cloner0.ggUpdate();
			me._node_cloner.ggUpdate();
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
		me._floorplan.ggUpdateConditionTimer();
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABdCAYAAAAYPxDcAAALfElEQVR4nO2ceXAUVR7HP697ZnqOBIgIyyEgokJYwIDcgiCCILh4sCKwHiW6uAYURUSpBaVcFhUEFLBERVBXd5H1gpVDEES5FhGM3KtAokiC3IfJXN399o+EhJBM0jPpSULVfKooktfv9/39+lt9vdevI/z+gCRBCZSqLqC6kjAmAgljIpAwJgIJYyKQMCYCCWMikDAmAgljIuCoiqTyaDb6hqUYm1diZu1BnjiCzD2D8CYjUuqgNGmO0rEPjusGoNRvUhUlIipzSGBkrCP05iSM7RtBWkurpHbA9cBEHJ1vinN1xakUY8ycLEIvPYK+eVXMGmpad7Qn56A0aW5fYWUQd2OMjPUEJg5FnjxaYS3hTcY9YR7q9bfaUFnZxPXiq3/+L/yj+9liCoDMO4'+
			't/wlDCH79ui15ZxO2IMbZvJPDYzchQ0H5xRcE9ZRGObrfYr11AXIyRvx4k9/5OcOaE3dKFCG8ynnkbUBpfHRf9uJxKwbkT42oK5J9WoTlPxU3fdmPMHzPQVy+yW7ZU9I3LMbasjou27cYE508B07RbNiKhd1+Mi669xpw9gbFpua2S5WFkrEP+etB2XVuN0bd9BXrYTsnykRI9DqeTrcYYe7+zU64EjuZtcbbtDkIUazf/t832XLYaIw8dKLXdmz6ZlMX7C//VmLGkqIDa9UhZtBPP0NGFbe7Bo7hkRTa1vzyJb8xMUB24B/0Fb/pktIHD8T3xcjF985f9du4GYPfoOvd0qc3hTZ9jHv4ZkZyCL30y4U2fF25LGv8aIAh8lP8062jThaRxs/G/Ow3z+GG8I6dgZO3FmdaN4OL5GAd/JOnZBcX05dnS81YEe41xukpt'+
			'Dn+3jnDGempM/xR9/05yZ4wBQOs7FFfP2whtXI6jdWfCW9ei3TQEfd8OcmeNyy+weRpav6H4334B78OTkUE/gcVvFdMXTqetuwE2GyNqXFLmNmfb60Fzo906nOCy9/A9OQsjOwvhq0HNuWs4M2YgSt2GmNmZhXHGLwdwtOlKaOMKQlvWIFQHMpBXXLxWHTt3A7DbmIZXRNwmTx/n+I2X4n3gr/gen4E8fRyl1qWcGJaGeeQQNd9Yi9ZvGPLUcZQrWxXGKSl1igah4RAyHCqhrVzWzM7dyNe0U0xN7VBqu9b/bpKeeQu18VUFR5XEPJYDgDOtG2qjK1HqNcE8dYzw5lU4W3VC6zUIZ1o3XH0GEypnHkdNvdbO3QBsPmKUVp0RLjcyFCjWLs+eQutzF+6Bw0EP89uMMYS3fU1gyQKSpywEwPj5R/zvTMU8lo1r5QckT/'+
			'0QAH37Jvz/nFlGUhU1rbuduwHEYXTtHz8YY92SEu3CVwO1aSpmdhbmiV8L29UGTRHJtdD37yz2cKjUb4Lw+DCy9pY5xFDbXo9n9ko7dwGIw2S4s++QUo2RuWfQd24u0W6cd6E9HzPnJ0v5HH2GRFegRWwfRDq6D0TUvcxu2dJJTsHR5664SNs/H6M6cA151HbZ0nANehjh8cVFOz5Tm+EQefe0jcuj+jlESh28C3chfDXioh+fyXCnC9dDz8VF+hyuEc/FzRSoiDGmQXjJfIKvTYCzJ0tsdtwwCLVN14rUFhGlaSrO/vfERbswRyxBZnYmeem9CE5NJ/z+SwTffqHUftqjU0G1+cYnBNpjM8vU1TcuJ7dvXfyjeiOPZseUJmpjjJ3/xf/nbpjn3XpFvcali7doj+u+p2MqLBLOO0ehXtuzzD76iveRuWcwMtaT92BX'+
			'zD1bos4T1cXX2LeDwKjeyN/yh/nC48OV/jzO20eUEaSTl94Lc9c3URd3IUrTVDzzNiI0T9l1ZqwnMO52ZN7Z/IYal+B9cz1KGWO5C7FuTDhE3v0dMbP25gf+rhGel5ehNLqq3FDz0AH893cqKjQWHE68c9eitLA2LjJ//oHAEwMxc7IAUJu1wrNgMyiqpXjLp1J46TtFptSsjWf2SkumACgNr0B74hWrqUrFNepFy6YAKI2vxj1rBaJmbQCM/TvR13xoPd5qR/2LD4qKHPEcSoOmlpMAOPoOwznksahiCmNvvhvXH9OjjlPqX47rob8V/h7+7G3rsVY7njtaEAJHr0GWE5yPlj4FR5d+UcWorTqjPflqTPkAHH2HFp4+ZuYey3HW70r+XACEU0Mk1YyuusJsCu5nFqBc3sJa9/pNcD+/COHSYssHIBRQC64rZ09ZDr'+
			'NsjCg4dWQogPH9huiKO5/kFDwzl0W8xRfmq1kb9/T/IFLqxp4LMLdvgIJZv7JmGC/EsjGO7n8o/Dk4/RFk0B9FecURdRrgmbYYkkufIxZuL54XP674SoZwiOCc8YW/qtcNsBxq2RjnnSMLxyZm5h4Ck+4rOSkdBUrTVLwzl0BSrWLtwu3FPfUTlFadYtYGkKEggYlDMfd9n6/rq4HrzpHW67PaUaTULXbLNdYtwT+yd4VG0EqL9nhnr4CCtwvC7cX94seo7XrErAn5zzD+kb3R1y8tSKSgjXsVUbueZQ11woQJk6x2Vpq1Rri9GN+uAUAezyG8eB4y7yxqyw6WLpJm5m6C00djHstB/X1HRO16ONrfgDxyEG3sHNR211su/kLk6eOE351K8O8PIg8XzAAKgTZ2Ns6boxt0xjQfo69aSHDqSGTBnQpAJNXMf1a5bQRK'+
			'09SIsYGn7kDfsAwA57AxaOlTok1fAnPf94SXvYf+2QJk3m9FG5Ivwf3UHBw974haM+aJKjM7k+C0UaUu3FGvbI3adQCO6/qjNG8LjqI3haG3pxCaVzRXE4s5MhTA3L0FY+ta9LWfYGbuLtHH0akP2tOvI+o0iEr7HBWewTO++YLQuy9gZKwvPYHmQbnqGtSW7RGNm6M0aEr4g1eKrfkt05xwCGPXN5gHdmFm7sr/f++2iHdFtV0PXMMnVPiVim1Tm2bmbsKfvoG++kPkqWNRx7vufRrXiEkl2v2PDyh3OZlIqYuzz2Ac/f6EcnXbqHOXqmn7nK9pYO7+lvCGpRhbv0Tu225tSauikLT6VImFAbm3XFbSaNWBmtoetV1P1HY9UNt2t31CLP5L5vUw5v4dGHu/wzy0H5nzE2ZOFvLArmJvLNUON+KZubRk+OZV6Mv+ga'+
			'jbEOXyVNRmLRFNUuP2duAclfqRxTn0Lz8iMOk+MHQA1NZdcE9fgvAmV3YpEan075X09Z8VN6VN1/wxUTUyBarCmE/fKDLlmutwv7QE4U2q7DLKpdKNcfS/F5Jq4eg2APe0xdXSFKiia8zFQOKbyAgkjIlAwpgIJIyJQMKYCCSMiUDCmAgkjIlAwpgIiPK72Ivf758E4tlo46RkltfrHl1+T3u4WI6YnR6PZu8KpHK4GIzJVRQxWAgR+6vPGLgIjJGPappmfZmCTVTJ34+xihB86HZ75ldF7up8xBwMBLQyFvfFl+pqjC6lOaRWLVFyAXElUU2NEc94vd6NVVlBdTTmK7fbNbWqi6huxhwzTWOYEMKo6kKqkzFSCB7w+XyxrXG3mWpjjBC84na7S34aV0VUF2N2aJo2vvxulUd1MObcI3+g/K6VRzUwRj6iadreqq7i'+
			'Qqp0SCAE/3a7PQvK71n5xGU+Rs6Y0RDDSEWIVIS4GinrAj7Aq3fr1kK/Jq2+yMsLuRYu3Cz8eWeAXIQ4gpQ/IOUeVHWPGDPmUDxqs4ptxsgZM3pgGMMRoh8QcTm33rEj+rXtcX3yMcrhw2VJHgGWA/PF2LFf21WnVWwxRk6bNhchHrLSV+/YEXQDx7at0aSYK8aOfTi26mLDnmuMEF2sdlV++QUlJyfaDJb17cKeu5Ki3ICULwHlrkpUsrMt/8lapDwKTENRelWswOix9eIrFy1SOXiwA1KmAS2BVKA5kAKUtRDmN+AksBch9iDlHoTIoFGjLWLw4CoZN1XqWwI5c2YtpPQhhIaUQYTIFY8/bv0jokrk/yUq+ZZuvSwUAAAAAElFTkSuQmCC';
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
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
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
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
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
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
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
					me._map_pin_normal.style.opacity=0.75;
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
		el.className="ggskin ggskin_text ";
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
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
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
		hs+='font-size: 19px;';
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
		el.className="ggskin ggskin_text ";
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
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
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
		hs+='font-size: 19px;';
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
		hs+='opacity : 0.19999;';
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
					me._node_image_cloner.style.opacity=0.19999;
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
			me._node_image_cloner.logicBlock_alpha();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_image_cloner.logicBlock_alpha();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
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
		el.className="ggskin ggskin_text ";
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
		hs+='font-family: monospace; text-shadow: 5px 5px 10px #000000, -5px -5px 10px #000000;';
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
		hs+='font-size: 19px;';
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
	me._rectangle_1.logicBlock_scaling();
	me._boxshadow_left.logicBlock_scaling();
	me._logo_destok.logicBlock_scaling();
	me._button_fullscreen.logicBlock_scaling();
	me._button_image_normalscreen.logicBlock_scaling();
	me._button_image_fullscreen.logicBlock_scaling();
	me._button_facebook.logicBlock_scaling();
	me._mapfloor.logicBlock_scaling();
	me._node_next.logicBlock_scaling();
	me._boton_nextresponsive.logicBlock_scaling();
	me._box_shadow_topresponsive.logicBlock_scaling();
	me._box_shadow_botresponsive.logicBlock_scaling();
	me._boton_responsive.logicBlock_scaling();
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
	me._botons_responsive_.logicBlock_scaling();
	me.__logo_responsive_1.logicBlock_scaling();
	me._video_prueba.logicBlock_scaling();
	me._svg_9.logicBlock_scaling();
	me._svg_10.logicBlock_scaling();
	me._svg_7.logicBlock_scaling();
	me._svg_8.logicBlock_scaling();
	me._video_prueba.logicBlock_visible();
	me._svg_7.logicBlock_visible();
	me._svg_8.logicBlock_visible();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._menu_responsive_small.logicBlock_alpha();
	me._menu_responsive_tablets.logicBlock_alpha();
	me._menu_background.logicBlock_alpha();
	me._floorplan.logicBlock_scaling();
	me._floorplan.logicBlock_alpha();
	me._boton_next1.logicBlock_visible();
	me._boton_next2.logicBlock_visible();
	me._boton_next3.logicBlock_visible();
	me._boton_next4.logicBlock_visible();
	me._boton_next5.logicBlock_visible();
	me._boton_next6.logicBlock_visible();
	me._boton_next7.logicBlock_visible();
	me._boton_next8.logicBlock_visible();
	me._boton_next9.logicBlock_visible();
	me._boton_next10.logicBlock_visible();
	me._boton_next11.logicBlock_visible();
	me._boton_next12.logicBlock_visible();
	me._boton_next13.logicBlock_visible();
	me._boton_next14.logicBlock_visible();
	me._boton_next15.logicBlock_visible();
	me._boton_next16.logicBlock_visible();
	me._boton_next17.logicBlock_visible();
	me._boton_next18.logicBlock_visible();
	me._boton_next19.logicBlock_visible();
	me._boton_next20.logicBlock_visible();
	me._boton_next21.logicBlock_visible();
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
	me._video_screentint_file.logicBlock_visible();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	me._video_popup_close_file.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._menu_responsive_small.logicBlock_scaling();me._menu_responsive_tablets.logicBlock_scaling();me._menu_background.logicBlock_scaling();me._rectangle_1.logicBlock_scaling();me._boxshadow_left.logicBlock_scaling();me._logo_destok.logicBlock_scaling();me._button_fullscreen.logicBlock_scaling();me._button_image_normalscreen.logicBlock_scaling();me._button_image_fullscreen.logicBlock_scaling();me._button_facebook.logicBlock_scaling();me._mapfloor.logicBlock_scaling();me._node_next.logicBlock_scaling();me._boton_nextresponsive.logicBlock_scaling();me._box_shadow_topresponsive.logicBlock_scaling();me._box_shadow_botresponsive.logicBlock_scaling();me._boton_responsive.logicBlock_scaling();me._scroll_name_left.logicBlock_scaling();me._node20.logicBlock_scaling();me._node19.logicBlock_scaling();me._node18.logicBlock_scaling();me._node17.logicBlock_scaling();me._node16.logicBlock_scaling();me._node15.logicBlock_scaling();me._node14.logicBlock_scaling();me._node13.logicBlock_scaling();me._node12.logicBlock_scaling();me._node11.logicBlock_scaling();me._node10.logicBlock_scaling();me._node9.logicBlock_scaling();me._node8.logicBlock_scaling();me._node7.logicBlock_scaling();me._node6.logicBlock_scaling();me._node5.logicBlock_scaling();me._node4.logicBlock_scaling();me._node3.logicBlock_scaling();me._node2.logicBlock_scaling();me._node1.logicBlock_scaling();me._scrollarea_1.logicBlock_scaling();me._botons_responsive_.logicBlock_scaling();me.__logo_responsive_1.logicBlock_scaling();me._video_prueba.logicBlock_scaling();me._svg_9.logicBlock_scaling();me._svg_10.logicBlock_scaling();me._svg_7.logicBlock_scaling();me._svg_8.logicBlock_scaling(); });
	player.addListener('imagesready', function(args) { me._video_prueba.logicBlock_visible();me._svg_7.logicBlock_visible();me._svg_8.logicBlock_visible(); });
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._menu_responsive_small.logicBlock_alpha();me._menu_responsive_tablets.logicBlock_alpha();me._menu_background.logicBlock_alpha();me._floorplan.logicBlock_scaling();me._floorplan.logicBlock_alpha();me._boton_next1.logicBlock_visible();me._boton_next2.logicBlock_visible();me._boton_next3.logicBlock_visible();me._boton_next4.logicBlock_visible();me._boton_next5.logicBlock_visible();me._boton_next6.logicBlock_visible();me._boton_next7.logicBlock_visible();me._boton_next8.logicBlock_visible();me._boton_next9.logicBlock_visible();me._boton_next10.logicBlock_visible();me._boton_next11.logicBlock_visible();me._boton_next12.logicBlock_visible();me._boton_next13.logicBlock_visible();me._boton_next14.logicBlock_visible();me._boton_next15.logicBlock_visible();me._boton_next16.logicBlock_visible();me._boton_next17.logicBlock_visible();me._boton_next18.logicBlock_visible();me._boton_next19.logicBlock_visible();me._boton_next20.logicBlock_visible();me._boton_next21.logicBlock_visible();me._node20.logicBlock_visible();me._node19.logicBlock_visible();me._node18.logicBlock_visible();me._node17.logicBlock_visible();me._node16.logicBlock_visible();me._node15.logicBlock_visible();me._node14.logicBlock_visible();me._node13.logicBlock_visible();me._node12.logicBlock_visible();me._node11.logicBlock_visible();me._node10.logicBlock_visible();me._node9.logicBlock_visible();me._node8.logicBlock_visible();me._node7.logicBlock_visible();me._node6.logicBlock_visible();me._node5.logicBlock_visible();me._node4.logicBlock_visible();me._node3.logicBlock_visible();me._node2.logicBlock_visible();me._node1.logicBlock_visible();me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_close_file.logicBlock_visible();me._video_prueba.logicBlock_visible();me._svg_7.logicBlock_visible();me._svg_8.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._menu_responsive_small.logicBlock_alpha();me._menu_responsive_tablets.logicBlock_alpha();me._menu_background.logicBlock_alpha(); });
	player.addListener('varchanged_vis_video_file', function(args) { me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_close_file.logicBlock_visible(); });
	player.addListener('varchanged_plan_status', function(args) { me._floorplan.logicBlock_scaling();me._floorplan.logicBlock_alpha(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_changenode(); });
	player.addListener('configloaded', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_configloaded(); });
	player.addListener('mouseover', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('mouseover', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('changenode', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_active(); });
	player.addListener('hastouch', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me._floorplan.callChildLogicBlocksHotspot_map_pin_activehotspotchanged(); });
	me.skinTimerEvent();
};
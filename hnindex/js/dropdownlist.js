window.onload = function() {
	var dlList = document.getElementsByClassName("dlList");
	for(var i = 0, j = dlList.length; i < j; i++) {
		var input = document.createElement("input");
		input.id = input.name = dlList[i].id;
		input.type = "hidden";

		var dl = document.createElement("dl");
		try {
			dlList[i].dataset.w3cfuns && (dl.className = dlList[i].dataset.w3cfuns);
		} catch(ex) {
			alert("当前浏览器还不支持dataset属性哦，所以默认颜色咱们用蓝色的啦~");
		}
		dlList.index = i;
		var option = dlList[i].getElementsByTagName("option");
		var len = option.length;
		var dt = null;
		for(var k = 0, m = len - 1; k < len; k++, m--) {
			if(!k) {
				dt = document.createElement("dt");
				var span = document.createElement("span");
				span.innerHTML = option[k].innerHTML;
				var b = document.createElement("b");
				var arrow = document.createElement("i");
				arrow.className = "icon-arrowdown";
				b.appendChild(arrow);
				dt.appendChild(span);
				dt.appendChild(b);
				dl.appendChild(dt);
			} else {
				var dd = document.createElement("dd");
				dd.index = k - 1; //之所以减去1，是因为第一次循环的时候，把索引k也给了dt，也就是if语句体部分，等到真正创建下拉选项的时候，索引其实已经是从1开始了，为了让咱们的索引从0开始计数，所以将其减去1
				dd.val = option[k].value;
				
				
				dd.clsName = "icon-" + option[k].className;
				dd.txt = option[k].innerHTML;
				dd.style.top = k * 3 + "px";
				dd.style.left = k + "px";
				dd.style.width = (300 - k * 2) + "px";
				dd.style.zIndex = m;
var link = $('option');
				dd.onclick = function() {
					var dds = this.parentNode.getElementsByTagName("dd");
					var listbox = this.parentNode.parentNode;
					var dt = listbox.getElementsByTagName("dl")[0].getElementsByTagName("dt")[0];

					var span = dt.getElementsByTagName("span")[0];
					listbox.className = "listbox";
					dt.className = "";
					for(var k = 0, l = len - 2, m = len - 1; k < m; k++, l--) {
						var delay = k * 100;
						dds[k].style.cssText = 'top:' + ((k + 1) * 3 + "px") + '; left:' + (k + 1) + 'px; width:' + (300 - (k + 1) * 2) + 'px; -webkit-transition:all 300ms ease ' + delay + 'ms; -moz-transition:all 300ms ease ' + delay + 'ms; -o-transition:all 300ms ease ' + delay + 'ms; -ms-transition:all 300ms ease ' + delay + 'ms; transition:all 300ms ease ' + delay + 'ms; z-index:' + l + ';';
					}
					dt.className = "icon";
					span.innerHTML = this.txt;
					var icon = document.createElement("i");
					icon.className = this.clsName;
					span.appendChild(icon);
					listbox.getElementsByTagName("input")[0].value = this.val;
					
					console.log(link.eq(0).attr('data-link'));
					window.open(link.eq($(this).index()).attr('data-link'));
				}

				var span = document.createElement("span");;
				span.innerHTML = option[k].innerHTML;
				var icon = document.createElement("i");
				icon.className = "icon-" + option[k].className;
				span.appendChild(icon);
				dd.appendChild(span);
				dl.appendChild(dd);
			}

			var par = dlList[i].parentNode;
			par.appendChild(dl);
			par.appendChild(input);

			dt.onclick = function() {
				var dds = this.parentNode.getElementsByTagName("dd");
				var listbox = this.parentNode.parentNode;
				var delay = 0;
				if(listbox.className == "listbox") {
					listbox.className = "listbox active";
					var deg = 0;
					for(var k = 0, l = len - 2, m = len - 1; k < m; k++, l--) {
						//Math.random() * (上限 - 下限 + 1) + 下限
						deg = parseInt(Math.random() * (5 - -5 + 1) + -5);
						delay = k * 100;
						dds[l].style.cssText = 'top:' + ((l + 1) * 65 + "px") + '; left:0; width:300px; -webkit-transform:rotate(' + deg + 'deg); -webkit-transition:all 300ms ease ' + delay + 'ms; -moz-transform:rotate(' + deg + 'deg); -moz-transition:all 300ms ease ' + delay + 'ms; -o-transform:rotate(' + deg + 'deg); -o-transition:all 300ms ease ' + delay + 'ms; -ms-transform:rotate(' + deg + 'deg); -ms-transition:all 300ms ease ' + delay + 'ms; transform:rotate(' + deg + 'deg); transition:all 300ms ease ' + delay + 'ms; z-index:' + k + ';';
					}
				} else {
					listbox.className = "listbox";
					for(var k = 0, l = len - 2, m = len - 1; k < m; k++, l--) {
						delay = k * 100;
						dds[k].style.cssText = 'top:' + ((k + 1) * 3 + "px") + '; left:' + (k + 1) + 'px; width:' + (300 - (k + 1) * 2) + 'px; -webkit-transition:all 300ms ease ' + delay + 'ms; -moz-transition:all 300ms ease ' + delay + 'ms; -o-transition:all 300ms ease ' + delay + 'ms; -ms-transition:all 300ms ease ' + delay + 'ms; transition:all 300ms ease ' + delay + 'ms; z-index:' + l + ';';
					}
				}
			}
		}
	}

	for(var i = 0, j = dlList.length; i < j; i++) {
		dlList[0].parentNode.removeChild(dlList[0]);
	}
};
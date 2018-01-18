window.onload = function() {
	var pagecont = document.getElementById("pagecont");
	var page = pagecont.getElementsByTagName("div");
	var deg = 0;
	for(var i = 0, j = page.length, len = j - 1; i < j; i++) {

		page[i].index = i;
		page[i].onclick = function() {
			var state = pagecont.dataset.state;
			for(var i = 0; i <= len; i++) {
				if(this.index == len) //判断是不是点击的最后一个元素
				{
					if(!state) {
						pagecont.dataset.state = 1;
						deg = i * 15 - Math.ceil(len / 2 * 15);
					} else {
						delete pagecont.dataset.state;
						deg = 0;
					}
				} else {
					pagecont.dataset.state = 1;
					if(i < this.index) {
						//如果循环的值i < 当前点击元素的索引this.index
						deg = -(this.index - i) * 15;
					} else if(i == this.index) {
						deg = 0;
					} else if(i > this.index) {
						deg = (i - this.index) * 15 + 20;
					}
				}
				page[i].style.cssText = '-webkit-transform:rotate(' + deg + 'deg); -moz-transform:rotate(' + deg + 'deg); -o-transform:rotate(' + deg + 'deg); -ms-transform:rotate(' + deg + 'deg); transform:rotate(' + deg + 'deg);';
				var oP = document.getElementsByClassName("h_click");
				if(page[i].style.transform == 'rotate(0deg)') {
					oP[i].style.cssText = "transform:rotate(0deg)";
					oP[i].style.display = 'block';
					//					page[0].getElementById('ab').style.cssText=page[0].style.cssText; 
					if(i < len) {
						oP[i].onclick = function() {
							var datasrc = this.getAttribute("datasrc");
							window.open(datasrc);
						}
					}

				} else {
					oP[i].style.display = 'none';
				}

			}
		}

	}

};
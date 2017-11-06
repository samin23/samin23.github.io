var slideIndex = 1;
showSlides(slideIndex);
document.getElementById("prev").addEventListener("click", plusSlides1);
document.getElementById("next").addEventListener("click", plusSlides);
function plusSlides1() {
	var n = -1;
  showSlides(slideIndex += n);
}
function plusSlides() {
	var n = 1;
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontsize
document.addEventListener("scroll", function() {
    var scrollHeight = window.pageYOffset;
    document.getElementsByClassName("navbar")[0].style.height = scrollHeight >= 150 ? "5vh" : "";
}, false);
document.addEventListener("scroll", function() {
    var scrollHeight = window.pageYOffset;
    if(scrollHeight >= 150){
			document.getElementById("aa").style.fontSize = "small";
		}
		else {
			document.getElementById("aa").style.fontSize = "";
		}
}, false);
/*used https://www.w3schools.com/howto/howto_css_modal_images.asp*/
document.getElementById("close").addEventListener("click", document.getElementById('myModal').style.display='none');
var modal = document.getElementById('myModal');
	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	document.getElementById("myImg").addEventListener("click", x);
	function x(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
	}
	// Get the <span> element that closes the modal
	var span = document.getElementById("close")[0];
	document.getElementById("close").addEventListener("click", y);
	// When the user clicks on <span> (x), close the modal
	function y() {
		modal.style.display = "none";
	}
	/*for smoothScroll -->https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click*/
	document.getElementById("contact1").addEventListener("click",
	function () {
		let target = document.getElementById('contact')
    s_scroll(target);
	});
	document.getElementById("about1").addEventListener("click",
	function () {
		let target = document.getElementById('about')
    s_scroll(target);
	});
	document.getElementById("Case1").addEventListener("click",
	function () {
		let target = document.getElementById('Case')
    s_scroll(target);
	});
	document.getElementById("Causes1").addEventListener("click",
	function () {
		let target = document.getElementById('Causes')
    s_scroll(target);
	});
	document.getElementById("mission1").addEventListener("click",
	function () {
		let target = document.getElementById('mission')
		s_scroll(target);
		/*let target1 = document.getElementById('mission1')
		document.getElementById("mission1").classList.add('active');*/
	});
	/*http://www.competa.com/blog/add-a-css-class-on-scroll-with-vanilla-javascript/ used as ref but did most on my own */
	window.onscroll = function changeNav(){
		var nav = document.getElementById('contact1').clientHeight;

	    var mission_e = document.getElementById('mission'),
	    mission_height = mission_e.getBoundingClientRect().height,
			t = Math.abs(mission_e.getBoundingClientRect().top);
			var Causes_e = document.getElementById('Causes'),
			Causes_height = Causes_e.getBoundingClientRect().height,
	    Causes_top = Math.abs(Causes_e.getBoundingClientRect().top);

			var Case_e = document.getElementById('Case'),
			case_height = Math.abs(Case_e.getBoundingClientRect().height),
	    case_top = Math.abs(Case_e.getBoundingClientRect().top);

			var about_e = document.getElementById('about'),
			about_height = Math.abs(about_e.getBoundingClientRect().height),
	    about_top = Math.abs(about_e.getBoundingClientRect().top);

			var contact_e = document.getElementById('contact'),
			contact_height = Math.abs(contact_e.getBoundingClientRect().height),
	    contact_top= Math.abs(contact_e.getBoundingClientRect().top);

	    if(t <= mission_height) {
						var navBar1 = document.getElementById('mission1')
						navBar1.className =  ('active');
						var about_1 = document.getElementById('about1')
						about_1.className =  ("");
						var c_1 = document.getElementById('contact1')
						c_1.className =  ("");
						var c2 = document.getElementById('Case1')
						c2.className =  ("");
						var c3 = document.getElementById('Causes1')
						c3.className =  ("");
	    } else if((Causes_top)>nav && (Causes_height+nav)>(Causes_top)){
				var navBar1 = document.getElementById('mission1')
				navBar1.className =  ("");
				var about_1 = document.getElementById('about1')
				about_1.className =  ("");
				var c_1 = document.getElementById('contact1')
				c_1.className =  ("");
				var c2 = document.getElementById('Case1')
				c2.className =  ("");
				var c3 = document.getElementById('Causes1')
				c3.className =  ("active");
			}
			else if(case_top>nav && case_height>case_top-nav){
				var navBar1 = document.getElementById('mission1')
				navBar1.className =  ("");
				var about_1 = document.getElementById('about1')
				about_1.className =  ("");
				var c_1 = document.getElementById('contact1')
				c_1.className =  ("");
				var c2 = document.getElementById('Case1')
				c2.className =  ("active");
				var c3 = document.getElementById('Causes1')
				c3.className =  ("");
			}
			else if(about_top>nav && about_height>about_top-nav){
				var navBar1 = document.getElementById('mission1')
				navBar1.className =  ("");
				var about_1 = document.getElementById('about1')
				about_1.className =  ("active");
				var c_1 = document.getElementById('contact1')
				c_1.className =  ("active");
				var c2 = document.getElementById('Case1')
				c2.className =  ("");
				var c3 = document.getElementById('Causes1')
				c3.className =  ("");
			}
			else if(about_top>nav && about_height>about_top-nav){
				var navBar1 = document.getElementById('mission1')
				navBar1.className =  ("");
				var about_1 = document.getElementById('about1')
				about_1.className =  ("active");
				var c_1 = document.getElementById('contact1')
				c_1.className =  ("");
				var c2 = document.getElementById('Case1')
				c2.className =  ("");
				var c3 = document.getElementById('Causes1')
				c3.className =  ("");
			}
			/*else if((Causes_height >= mission_height) && (Causes_height <= case_height)) {
				console.log(Causes_height);
				console.log(case_height);
				console.log(mission_height);
				var navBar1 = document.getElementById('mission1')
				navBar1.className =  ("");
				var about_1 = document.getElementById('about1')
				about_1.className =  ("");
				var c_1 = document.getElementById('contact1')
				c_1.className =  ("");
				var c2 = document.getElementById('Case1')
				c2.className =  ("active");
				var c3 = document.getElementById('Causes1')
				c3.className =  ("");
	    }*/
	}
	/*for s_Scroll -->https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click*/
	function s_scroll(target) {
			//console.log(target);
		  //var target = document.getElementById('contact')
			var scrollContainer = target;
			do { //find scroll container
					scrollContainer = scrollContainer.parentNode;
					if (!scrollContainer) return;
					scrollContainer.scrollTop += 1;
			} while (scrollContainer.scrollTop == 0);

			var targetY = 0;
			do { //find the top of target relatively to the container
					if (target == scrollContainer) break;
					targetY += target.offsetTop;
			} while (target = target.offsetParent);

			scroll = function(c, a, b, i) {
					i++; if (i > 30) return;
					c.scrollTop = a + (b - a) / 30 * i;
					setTimeout(function(){ scroll(c, a, b, i); }, 20);
			}
			// start scrolling
			scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
	}

(() => {
  // $(function(){
  //   var $dropdown = $('.js-dropdown');
  //   var DURATION = 200; //アニメーションの速さ

  //   function fadeOutMenu(){
  //     $dropdown.removeClass('is-active')
  //       .next('.js-dropdown-menu')
  //       .stop()
  //       .slideUp(DURATION);
  //   }

  //   //表示を切り替える
  //   function toggleMenu(){
  //     var $self = $(this); //thisにはクリックした時の要素が入る
  //     //要素が.is-activeを持っていない場合
  //     if(!$self.hasClass('is-active')){
  //       fadeOutMenu();
  //     }
  //     //クリックした要素を表示させる
  //     $self.toggleClass('is-active')
  //       .next('.js-dropdown-menu')
  //       .stop().slideToggle(DURATION);
  //   }

  //   $dropdown.on('click', toggleMenu);

  // //別の場所をクリックすると閉じる処理
  //   $(document).on('click touchend', function(event) {
  //   if (!$(event.target).closest('body').length) {
  //     // ここに処理;
  //     fadeOutMenu();//関数呼びだし
  //   }
  // });
  //   });
  const targetDiv = document.querySelector(".js-target-div");
  console.log(targetDiv);

  var links = [
    { label: "The museum", bg: "black" },
    { label: "Exhibitions", bg: "black" },
    { label: "What is on", bg: "black" },
    { label: "Plan your visit", bg: "black" },
    { label: "", bg:"white" },
  ];
  var windowHeight = window.innerHeight;
if(windowHeight === 0) windowHeight = 238;
var radius = windowHeight*0.6,
    circle = document.createElement('div'),
    borderSize = radius*0.021;
    totalArea = 48, 
    increment = totalArea/(links.length-1),
    startPoint = 0-(totalArea/2),
    fontSize = radius*0.12,
    linkSize = radius*0.25;

styleCircle();
addCircle();
addLinks();
styleLinks();

function styleCircle() {
  circle.style.border= borderSize+'px solid #fff';
  circle.style.width = radius*2+'px';
  circle.style.height = radius*2+'px';
  circle.style.borderRadius = radius+'px';
  circle.style.position = 'absolute';
  circle.style.top = '-'+radius*0.2+'px';
  circle.style.left = radius*-1+'px';
}

function addCircle() {
  targetDiv.appendChild(circle);
}

function addLinks() {
  for (var i=0, l=links.length; i<l; i++) {
    link = document.createElement('a'),
    hover = document.createElement('span');
    link.href = "#";
    link.dataset.color = links[i].bg;
    link.style.display = 'inline-block';
    link.style.textDecoration = 'none';
    link.style.color = '#fff';
    link.style.position = 'absolute';
    link.style.zIndex = 100;
    link.innerHTML = links[i].label;
    hover.style.position = 'absolute';
    hover.style.display = 'inline-block';
    hover.style.zIndex = 50;
    hover.style.opacity = 0;
    targetDiv.appendChild(link);
    targetDiv.appendChild(hover);
    link.addEventListener('mouseover', linkOver);
    link.addEventListener('mouseout', linkOut);
    links[i].elem = link;
    links[i].hover = hover;
  }
}

function styleLinks() {
  for (var i=0, l=links.length; i<l; i++) {
    var link = links[i].elem, hover = links[i].hover, deg = startPoint+(i*increment);  
    link.style.paddingLeft = radius*1.2+'px';
    link.style.fontSize = fontSize+'px';
    link.style.height = linkSize+'px';
    link.style.lineHeight = linkSize+'px';
    setTransformOrigin(link, '0px '+linkSize*0.5+'px');
    setTransition(link, 'all 0.2s ease-out');
    setTransform(link, 'rotate('+deg+'deg)');
    link.style.left = borderSize+'px';
    link.style.top = (windowHeight/2) - (windowHeight*0.1)+borderSize+'px';

    hover.style.left = borderSize+'px';
    setTransformOrigin(hover, '0px '+linkSize*0.5+'px');
    setTransition(hover, 'all 0.2s ease-out');
    setTransform(hover, 'rotate('+deg+'deg)');
    hover.style.top = (windowHeight*0.4)+borderSize +'px';
    hover.style.width = radius+(borderSize/2)+'px';
    hover.style.height = linkSize+'px';
    hover.style.borderRight = borderSize*2+'px solid #fff';
  
  }
}

window.onresize = function() {
  windowHeight = window.innerHeight;
  radius = windowHeight*0.6,
  borderSize = radius*0.021;  
  fontSize = radius*0.12,
  linkSize = radius*0.25;
  styleCircle();
  styleLinks();
}

function linkOver(e) {
  var thisLink = e.target, thisHover = thisLink.nextSibling;
  thisLink.style.paddingLeft = radius*1.25+'px';
  thisHover.style.opacity = 1;
  targetDiv.style.backgroundColor = thisLink.dataset.color;
}

function linkOut(e) {
  var thisLink = e.target, thisHover = thisLink.nextSibling;
  thisLink.style.paddingLeft = radius*1.2+'px';
  thisHover.style.opacity = 0;
}

function setTransform(element, string) {
  element.style.webkitTransform = string;
  element.style.MozTransform = string;
  element.style.msTransform = string;
  element.style.OTransform = string;
  element.style.transform = string;
}

function setTransformOrigin(element, string) {
  element.style.webkitTransformOrigin = string;
  element.style.MozTransformOrigin = string;
  element.style.msTransformOrigin = string;
  element.style.OTransformOrigin = string;
  element.style.transformOrigin = string;
}

function setTransition(element, string) {
  element.style.webkitTransition = string;
  element.style.MozTransition = string;
  element.style.msTransition = string;
  element.style.OTransition = string;
  element.style.transition = string;
}

})();

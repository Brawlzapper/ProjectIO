$(function() {
  setInterval(function(){articleAnimate();}, 4000)
});



function articleAnimate(){
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1;

  $('.article-thumb').eq(randNum).addClass('.is-on');
    .siblings.removeClass('.is-on');
}

$(window).scroll(function() {
  startArticles();
})

function startArticles() {
  var wScroll = $(window).scrollTop();

  if $('section.articles').offset().top - $(window).height()/2 < wScroll) {

    $('article-thumb').each(function(i) {
      $('article-thumb').eq(i).addClass('is-visible');
    })

  }
}

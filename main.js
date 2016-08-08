var obj	= {
	url:"",
	text:"",
	dom:"text",
	build:function(url){
		return url="[https"+url.split("http")[1]+"|"+obj.text+"]";
	},
	rewriteDom:function(){
		document.getElementById(obj.dom).innerHTML = obj.build(obj.url);
	}
}
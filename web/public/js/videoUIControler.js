/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var myPlayer;
var videos=[];
var viewModel = 1;
var mediaType = "视频";
var type = '';
var playingId = -1; //正在播放记录 modified by khzliu 2014年2月17日14:07:52
var playingFlag = 0; //记录播放状态 modified by khzliu 2014年2月17日14:07:52
var j =1;//初始页号
var videoPlayListId = 0;//初始播放id
var scale_xy = 0.75;
var timer = 3;

function changeSrc(index,videoId,x,y){
    playingId = videoId;//正在播放的视频id
    playingFlag = 0; //更改播放标记
    $("ul#ul_info").find("li").removeClass("ui-btn-active"); ;
    $("li#"+playingId).addClass("ui-btn-active");
    //$("#ul_info").listview("refresh");
    setPriase(playingId);
    myPlayer.pause();
    setPlayerSreen(x,y);
    myPlayer.playList(index);
    $("div.vjs-poster").css("display","block");
    window.scrollTo(0,0);//滚动至最上
    
    //----start-----louxue----
    $("#video_1").hide();
    $("#ad").show();
    clearInterval(timer);//每次进入时，先清洗掉之前的广告时间
    maxtimes = 3;
    timer = setInterval("CountDownS()",1000);
    //----start-----louxue----
   
}
function setPlayerSreen(x,y){
        var totalWidth = $("body").width();
        var xy = y/x;
        if(xy>1||xy<0.5){
            myPlayer.height(scale_xy*totalWidth);
        }else{
            myPlayer.height(xy*totalWidth);
        }
}
//----start-----louxue----
function CountDownS()
{   
	if(maxtimes>=0)
	{   
		minutes = Math.floor(maxtimes/60);   
		seconds = Math.floor(maxtimes%60);   
		msg = "距离广告结束还有 "+seconds+" 秒"; 
		document.all["timer"].innerHTML=msg;     
		--maxtimes;   
	}   
	else
	{   	
		 clearInterval(timer);
		 $("#ad").hide();
		 $("#video_1").show();
         myPlayer.getChild("BigPlayButton").show();
	}   
}  
//----end-----louxue----
/**
 * 得到ajax对象
 */
function getajaxHttp() {
    var xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
        } catch (e) {
            // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器不支持AJAX！");
                return false;
            }
        }
    }
    return xmlHttp;
}
//设置正在播放视频的点赞次数
function setPriase(id){
    var selecter = 'li#'+id;
    var priaseNum = $(selecter).attr('title');
    $("#priaseNum").text(priaseNum);
}
//动态增加点赞次数
function addPriase(type,id){
    var url = '/addPriase-'+type+'-'+id+'.html';
    var xmlhttp=getajaxHttp();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4){
            //HTTP响应已经完全接收才调用
            if(xmlhttp.responseText==0){
                alert("服务器错误！！！");
		window.location.href="http://192.168.5.1/index.jsp";
            }else {
		updatePriase(id);
            }
        }
    };
    xmlhttp.open("POST",url,true);
    xmlhttp.send();
}
function updatePriase(id){
    var selecter = 'li#'+id;
    var priaseNum = $(selecter).attr('title'); //获取点赞的次数
    priaseNum++;
    $(selecter).attr("title",priaseNum);
    $("#priaseNum").text(priaseNum);
}

/**
 * 发送ajax请求
 * url--url
 * methodtype(post/get)
 * con (true(异步)|false(同步))
 * parameter(参数)
 * functionName(回调方法名，不需要引号,这里只有成功的时候才调用)
 * (注意：这方法有二个参数，一个就是xmlhttp,一个就是要处理的对象)
 * obj需要到回调方法中处理的对象
 */
function addClicks(type,id){
    var url = '/addClicks-'+type+'-'+id+'.html';
    var xmlhttp=getajaxHttp();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4){
            //HTTP响应已经完全接收才调用
            if(xmlhttp.responseText==0){
                alert("服务器错误！！！");
		window.location.href="http://www.letu.com/index.html";
            }else {
		updateNumber(id);
            }
        }
    };
    xmlhttp.open("POST",url,true);
    xmlhttp.send();
}


function updateNumber(id){
    var serleter = "li#"+playingId;
    var clickNum = $(serleter).find('span').text();
    var number = parseInt(clickNum);
    $(serleter).find('span').text(number + 1);
}
//增加播放次数
function updateClick()
{
    if(playingFlag == 0)
    {
        addClicks(mediaType,playingId); //modified by khzliu 2014年2月17日14:07:52
        playingFlag = 1;
    }
}
function getAllVideo(){
      jQuery.ajax({
          type: 'POST',
          contentType: 'application/json',
          url: '/listAllVideos-'+type+'.html',
          dataType: 'json',           
          success: function(data){
              var mode = data.videoList;
              if(viewModel === 1){
                  $.each(mode,function(i,video){
                      var filePath = video.type+"/"+video.name;
                      var posterPath = '/public/images/shipinposter.jpg';
                      if(!(video.isfile === 1)){
                          filePath = video.type+"/"+video.name+"/"+video.name;
                          posterPath = "data/视频/"+video.type+"/"+video.name+"/poster.jpg";
                      }
                      videos.push({
                          src : ["data/视频/"+filePath+".mp4"],
                          poster : posterPath,
                          title : video.name
                          }
                      );   
                   });
              }else{
                  $.each(mode,function(i,video){
                      var filePath = video.type+"/"+video.name;
                      var posterPath = 'public/images/shipinposter.jpg';
                      if(!(video.isfile === 1)){
                          filePath = video.type+"/"+video.name+"/"+video.name;
                          posterPath = "data/视频/"+video.type+"/"+video.name+"/poster.jpg";
                      }
                      videos.push({
                          src : ["data/视频/"+filePath+".mp4",],
                          poster : posterPath,
                          title : video.name
                          }
                      ); 
                  });
              }
			  playlistInit();
          },
          error: function(){
              alert("error");
          }               
      });
	  
}

function getVideo(){
    var pageNo = j;
      jQuery.ajax({
          type: 'POST',
          contentType: 'application/json',
          url: '/listMoreVideos-'+type+'-'+pageNo+'.html',
          dataType: 'json',           
          success: function(data){
              var mode = data.pagedVideos.result;     
              if(viewModel === 1){
                  $.each(mode,function(i,video){
                      var iconPath = 'public/images/shipin.png';
                      if(!(video.isfile === 1)){
                          iconPath = "data/视频/"+video.type+"/"+video.name+"/icon.jpg";
                      }
                      $("#ul_info").append(
                          '<li id='+video.id+' title='+video.priase+'><a title="0" onclick="changeSrc('+videoPlayListId+','+video.id+','+video.scaleX+','+video.scaleY+')">'+
                              '<img src="'+iconPath+'">'+
                              '<p class="clickNumbers"><strong><span id='+video.id+'>'+video.clicks+'<span></strong></p>'+
                              '<h2>'+video.name+'</h2>'+
                              '<p>'+video.description+'</p></a>'+
                          '</li>'
                      );
                      videoPlayListId++; //播放列表id自加1    
                   });
              }else{
                  $.each(mode,function(i,video){
                      $("#ul_info").append(
                          '<li id='+video.id+' title='+video.priase+'><a title="0" onclick="changeSrc('+videoPlayListId+','+video.id+','+video.scaleX+','+video.scaleY+')">'+
                              '<h2>'+video.name+'</h2>'+
                              '<span id='+video.id+' class="ui-li-count">'+video.clicks+'</span></a>'+
                          '</li>'
                      );
                      videoPlayListId++; //播放列表id自加1
                  });
              }
              if(data.pagedVideos.currentPageNo>=data.pagedVideos.totalPageCount){
                      $("#more").hide();
              }
              j=j+1;        
              if(playingId === -1){
                  playingId = $("#ul_info li:first").find('span').attr('id'); //获取播放视频id
                  
              }
              $("#ul_info").listview("refresh");       
          },
          error: function(){
              alert("error");
          }               
      });
	  
}
function playlistInit(){
    myPlayer.playList(videos, {
        getVideoSource: function(vid, cb) {
          cb(vid.src, vid.poster);
        }
      });
    changeSrc(0,playingId,4,3);//选中该视频 
}

$(document).ready(function(){
    //初始化视频播放器
    myPlayer = videojs('video_1');

    myPlayer.addChild("BigPlayButton");
    //暂停
     myPlayer.on('pause', function(e) {
          myPlayer.getChild("BigPlayButton").show();

     });
    //播放
    myPlayer.on('loadstart', function(e) {
          myPlayer.getChild("BigPlayButton").hide();
    });
    myPlayer.on('play', function(e) {
         myPlayer.getChild("BigPlayButton").hide();
         updateClick();
    });
   
    //设置播放列表
    getAllVideo();

    $("#more").bind("click",function(){
        getVideo();
        
    });   
    //点击第一次加载
    $("#more").click();
    //点赞pop
    $( '#popupBasic' ).on({
      popupbeforeposition:function() {
          var serleter = "li#"+playingId;
          var flag = $(serleter).find('a').attr("title");
          if(flag === "1"){
              $("div#popupBasic").text("已赞");
          }else{
              addPriase("视频",playingId);
              $(serleter).find("a").attr("title","1");
          }
    },popupafterclose:function() {
         $("div#popupBasic").text("赞+1");
    }
  });
  //自动关闭pop
  setInterval(function(){
        $("#popupBasic").popup("close");
    }, 2000);//两秒后关闭
});
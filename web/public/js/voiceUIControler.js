/* 
 * To change this template, choose Touls | Templates
 * and open the template in the editor.
 */

var myPlayer;
var myVoicelist=[];
var viewModel = 1;
var mediaType = "悦听";
var type = '';
var playingId = -1; //正在播放记录 modified by khzliu 2014年2月17日14:07:52
var playingFlag = 0; //记录播放状态 modified by khzliu 2014年2月17日14:07:52
var j =1;//初始页号
var voicePlayListId = 0;//初始播放id
// Load in the first track
var myAudio;



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
//设置正在播放悦听的点赞次数
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
		window.location.href="http://www.letu.com/index.html";
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
function getVoice(){
    var pageNo = j;
      jQuery.ajax({
          type: 'POST',
          contentType: 'application/json',
          url: '/listMoreVoice-'+type+'-'+pageNo+'.html',
          dataType: 'json',           
          success: function(data){
              var mode = data.pagedVoice.result;     
              if(viewModel === 1){
                  $.each(mode,function(i,voice){
                      var filePath = voice.type+"/"+voice.name;
                      var iconPath = '/public/images/yueting.png';
                      if(!(voice.isfile === 1)){
                          filePath = voice.type+"/"+voice.name+"/"+voice.name;
                          iconPath = "/data/悦听/"+voice.type+"/"+voice.name+"/icon.jpg";
                      }
                      myVoicelist.push({
								title:voice.name,
                                mp3:"/data/悦听/"+filePath+".mp3"
                            });
                      $("#ul_info").append(
                          '<li id='+voice.id+' title='+voice.priase+'><a title="0" onclick="setJPlayer('+voicePlayListId+',\''+voice.name+'\','+voice.id+')">'+
                              '<img src="'+iconPath+'">'+
                              '<p class="clickNumbers"><strong><span id='+voice.id+'>'+voice.clicks+'<span></strong></p>'+
                              '<h2>'+voice.name+'</h2>'+
                              '<p>'+voice.description+'</p></a>'+
                          '</li>'
                      );
                      voicePlayListId++; //播放列表id自加1    
                   });
              }else{
                  $.each(mode,function(i,voice){
                      var filePath = voice.type+"/"+voice.name;
                      if(!(voice.isfile === 1)){
                          filePath = voice.type+"/"+voice.name+"/"+voice.name;
                      }
                      myVoicelist.push({
								title:voice.name,
                                mp3:"/data/悦听/"+filePath+".mp3"
                            });
                      $("#ul_info").append(
                          '<li id='+voice.id+' title='+voice.priase+'><a title="0" onclick="setJPlayer('+voicePlayListId+',\''+voice.name+'\','+voice.id+')">'+
                              '<h2>'+voice.name+'</h2>'+
                              '<span id='+voice.id+' class="clickNumbersSimple">'+voice.clicks+'</span></a>'+
                          '</li>'
                      );
                      voicePlayListId++; //播放列表id自加1
                  });
              }
              if(data.pagedVoice.currentPageNo>=data.pagedVoice.totalPageCount){
                      $("#more").hide();
              }
              j=j+1;

			   myPlaylist.setPlaylist(myVoicelist);//更新播放列表

              if(playingId == -1){
                  playingId = $("#ul_info li:first").find('span').attr('id'); //获取播放悦听id
                  var titleName = $("#ul_info li:first").find('h2').text();
                  setJPlayer(0,titleName,playingId)//选中该悦听
                  
              }
              $("#ul_info").listview("refresh");
			  
          },
          error: function(){
              alert("error");
          }               
      });
}
function setPrecessBar(){
        var totalWidth = $("body").width();
        precessBarWidth = totalWidth - 90; //增加进度条长度 modified by khzliu 2014年2月17日10:30:26
        $("div.jp-progress").css("width",precessBarWidth+"px");
        $("div.jp-time-holder").css("width",precessBarWidth+"px");
}

function setJPlayer(id,vTitle,voiceId){
	$.jPlayer.timeFormat.showHour = true;
    myPlaylist.select(id);
    //设置声音条码
    setPrecessBar();
    $(".jp-title li").text(vTitle);
    $(".jp-title").css("display","inline");
     
    myPlaylist.play();
    //增加点击次数 实现播放次数实时更新 modified by khzliu 2014年2月17日16:09:57
    playingId = voiceId;
    playingFlag = 0;
    $("ul#ul_info").find("li").removeClass("ui-btn-active"); ;
    $("li#"+playingId).addClass("ui-btn-active");
    setPriase(playingId);
}
function playerInit(){
	myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
        }, myVoicelist, {
        playlistOptions: {
        enableRemoveControls: true
        },
        swfPath: "js",
        supplied: "mp3",
        free:true,
        preload: "auto",
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true // Allows the audio poster to go full screen via keyboard
    });
    $.jPlayer.timeFormat.showHour = true;
    $(".jp-title li").text(myVoicelist.name);
    $(".jp-title").css("display","inline");
    //myPlaylist.select(0); 
    //setPrecessBar();
}
$(document).ready(function(){
	
	playerInit();

    
    $("#more").bind("click",function(){
        getVoice();
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
              addPriase("悦听",playingId);
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
    
    

    // Using ".jp-repeat" namespace so we can easily remove this event
    // 增加监听状态，实现播放次数实时更新 modified by khzliu 2014年2月17日16:09:57
    $("#jquery_jplayer_1").bind($.jPlayer.event.play, function(event) { 
        updateClick();
    }); 
});
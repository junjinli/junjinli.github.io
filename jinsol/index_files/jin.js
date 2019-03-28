window.onload=function(){
  var img1 = document.getElementById('img1');
    img1.addEventListener("mouseover",event1);
    count1=0;
    function event1(){
     if(count1 == 0){
       img1.src = "1_1.gif";
       count1 = 1;
     }else{
       img1.src = "index_files/1.gif";
       count1 = 0;
     }
   }
    var img2 = document.getElementById('img2');
      img2.addEventListener("mouseover",event2);
      count2=0;
      function event2(){
       if(count2 == 0){
         img2.src = "index_files/1_2.gif";
         count2 = 1;
       }else{
         img2.src = "index_files/2.gif";
         count2 = 0;
       }
     }
    var img3=document.getElementById('img3');
      img3.addEventListener("mouseover",event3);
    count3=0;
      function event3(){
        if(count3==0){
          img3.src="index_files/1_3.gif";
          count3 = 1;
        }else{
          img3.src="index_files/3.gif";
          count3 = 0;
        }
      }
    var img4=document.getElementById('img4');
      img4.addEventListener("mouseover",event4);
      count4=0;
      function event4(){
        if(count4==0){
          img4.src="index_files/1_4.gif";
          count4 = 1;
        }else{
          img4.src="index_files/4.gif";
          count4 = 0;
        }
      }
    var img5=document.getElementById('img5');
      img5.addEventListener("mouseover",event5);
      count5=0;
      function event5(){
        if(count5==0){
          img5.src="index_files/1_5.gif";
          count5=1;
        }else{
          img5.src="index_files/5.gif";
          count5=0;
        }
      }
    var img6=document.getElementById('img6');
      img6.addEventListener("mouseover",event6);
      count6=0;
      function event6(){
        if(count6==0){
          img6.src="index_files/1_6.gif";
          count6=1;
        }else{
          img6.src="index_files/6.gif";
          count6=0;
        }
      }
    var img7=document.getElementById('img7');
    img7.addEventListener("mouseover", event7);
    count7=0;
    function event7(){
      if(count7==0) {
        img7.src="index_files/1_7.gif";
        count7=1;
      } else {
        img7.src="index_files/7.gif";
        count7=0;
      }
    }
    var img8=document.getElementById('img8');
    img8.addEventListener("mouseover", event8);
    count8=0;
    function event8(){
      if(count8==0) {
        img8.src="index_files/1_8.gif";
        count8=1;
      } else {
        img8.src="index_files/8.gif";
        count8=0;
      }
    }
    var img9=document.getElementById('img9');
    img9.addEventListener("mouseover", event9);
    count9=0;
    function event9(){
      if(count9==0) {
        img9.src="index_files/1_9.gif";
        count9=1;
      } else {
        img9.src="index_files/9.gif";
        count9=0;
      }
    }
}

      // const btn1 = document.querySelector(".btn1");
      // const btn2 = document.querySelector(".btn2");
      // const btn3 = document.querySelector(".btn3");

      // const sections = document.querySelectorAll("section");

      // function resetImages() {
      //   sections.forEach((section) => {
      //     section.classList.remove("clicked");
      //   });
      // }

      // btn1.addEventListener("click", function () {
      //   resetImages();
      //   window.scrollTo({ top: temple.offsetTop, behavior: "smooth" });
      //   temple.classList.add("clicked");
      // });

      // btn2.addEventListener("click", function () {
      //   resetImages();
      //   window.scrollTo({
      //     top: lion.offsetTop,
      //     behavior: "smooth",
      //   });
      //   lion.classList.add("clicked");
      // });

      // btn3.addEventListener("click", function () {
      //   resetImages();
      //   window.scrollTo({ top: bowness.offsetTop, behavior: "smooth" });
      //   bowness.classList.add("clicked");
      // });

     
      // 获取section temple里的h3元素和title容器
      const h3Temple = document.querySelector(".temple h3")
      const titleTemple = document.querySelector(".temple .title")


      //点击事件处理函数
      function toggleClick(){
        if(temple.classList.contains("clicked")){
          temple.classList.remove("clicked");
        } else {
          temple.classList.add("clicked");
        }
      }
      //为section temple里的h3元素和title容器 添加点击事件
      h3Temple.addEventListener("click", toggleClick)
      titleTemple.addEventListener("click", toggleClick)

      

      
      // 获取section lion里的h3元素和title容器
      const h3Lion = document.querySelector(".lion h3")
      const titleLion = document.querySelector(".lion .title")


      //点击事件处理函数
      function toggleClickLion(){
        if(lion.classList.contains("clicked")){
          lion.classList.remove("clicked");
        } else {
          lion.classList.add("clicked");
        }
      }
      //为section lion里的h3元素和title容器 添加点击事件
      h3Lion.addEventListener("click", toggleClickLion)
      titleLion.addEventListener("click", toggleClickLion)





      // 获取section bowness里的h3元素和title容器
      const h3Bowness = document.querySelector(".bowness h3")
      const titleBowness = document.querySelector(".bowness .title")


      //点击事件处理函数
      function toggleClickBowness(){
        if(bowness.classList.contains("clicked")){
          bowness.classList.remove("clicked");
        } else {
          bowness.classList.add("clicked");
        }
      }
      //为section temple里的h3元素和title容器 添加点击事件
      h3Bowness.addEventListener("click", toggleClickBowness)
      titleBowness.addEventListener("click", toggleClickBowness)
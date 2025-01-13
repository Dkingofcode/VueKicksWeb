<script setup lang="jsx">
import kicksLogo from "../../assets/FooterLogo.png";
import FooterLogo from "../../assets/FooterbottomLogo.png";
import Instagram from "../../assets/instagramIcon.png";
import twitter from "../../assets/twitterIcon.png";
import tiktok from "../../assets/tiktokIcon.png";
import facebook from "../../assets/facebookicon.png"

</script>

<template>

<div class="container">
    
    <div class="cover">


        <div class="NewsLetter">
            <article>
                <h1>Join our KicksPlus club & get 15% off</h1>
        <p>Sign up for free! Join the community.</p>

        <input class="email" placeholder="Email address"  /> <button class="submitBtn">submit</button>
    </article>

      <div class="NewsLogo">
        <img class="newsImg" :src="kicksLogo" />
      </div>
    </div>


    <footer>
        <div>
            
            <div class="about">
                <h1>About us</h1>
                <p>We are the biggest hyperstore in the universe.</p>
                <p>We are the biggest hyperstore in the universe.</p>
            </div>

            <div class="categories">
               <h1>Categories</h1>
               <p>Runners</p>
               <p>Sneakers</p>
               <p>Basketball</p>
               <p>Outdoor</p>
               <p>Golf</p>
               <p>Hiking</p>
            </div>

            <div class="company">
               <h1>Company</h1>
               <p>About</p>
               <p>Contact</p>
               <p>Blogs</p>
            </div>
            
            <div class="footerLinks">
                <h1>Follow Us</h1>
                <div>
                    <p><img :src="facebook" /></p>
                   <p><img :src="Instagram" /></p>
                   <p><img :src="tiktok" /></p>
                   <p><img :src="twitter" /></p>
               </div>
            </div>
            
            
        </div>
        
        <div class="footerImg">
           <img class="footerLogo" :src="FooterLogo" />
        </div>

    </footer>
</div>

<div class="rights">
  <p>All rights reserved made by @Oladepo David</p>   
</div>
</div>
 

</template>

<style scoped>

.container{
  background:  rgb(213, 213, 213);
  width: 100%;
}

.cover{
    border: 1px solid #446AD3;
   background-color: #446AD3;
   width: 90%;
   margin: 0 auto;
   border-radius: 20px;


}

.NewsLetter{
    background-color: #446AD3;
    width: 90%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    justify-content: space-between;
}

article{
    width: 400px;
}

article h1{
  padding: 10px 0px;
  color: white;
  font-size: 39px;
}

article p{
    padding: 10px 0px;
    color: white;
}


.email{
    border: 3px solid white;
    padding: 10px 12px;
    border-radius: 10px;
    background: #446AD3;
}

.submitBtn {
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 5px;
}



.newsImg{
  width: 300px;
  height: 100px;
}


.NewsLogo{
    align-items: center;
    display: flex;
}

footer{
    border: 4px solid black;
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    background: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

}

footer > div{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

footer .company {
   
}

footer .categories {

}

footer  .about {

}


footer h1{
    color: Orange;
}

footer p{
    color: white
}

.footerLinks div{
    display: flex;
     justify-content: space-between;
}

.footerLogo{
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.footerImg{
   padding-top: 50px;
   border-bottom-left-radius: 40px;
   border-bottom-right-radius: 40px;
   
}


.rights{
    
    text-align: center;
}

</style>
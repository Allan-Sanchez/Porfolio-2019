<template>
  <Layout class="bg-gray-100">
    <!-- Home -->
    <home-page></home-page>

    <!-- About -->
    <about-page></about-page>

      <!-- Skill and Experience -->
      <skill-page></skill-page>

      <!--Blog  -->
      <blog-page></blog-page>

      <!-- contact -->
      <contact-page></contact-page>
      
  </Layout>
</template>

<script>
import home from "../components/pages/home";
import about from "../components/pages/about";
import skill from "../components/pages/skill";
import blog from "../components/pages/blog";
import contact from "../components/pages/contact";

export default {
  components:{
    homePage:home,
    aboutPage:about,
    skillPage:skill,
    blogPage:blog,
    contactPage:contact
  },
  metaInfo: {
    title: 'Home'
  },
}
</script>


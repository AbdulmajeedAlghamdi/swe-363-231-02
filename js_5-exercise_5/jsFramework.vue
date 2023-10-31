<template>
    <div>
      <header>
        <a href="PersonalBlog-ar.html">العربية</a>
        <h1 class="title">About me:</h1>
        <p class="date">{{ currentDate }}</p>
        <p>This website is about {{ authorName }}</p>
      </header>
  
      <article>
        <p>I am {{ authorName }}, I am from {{ authorLocation }}</p>
        <section class="wmImg">
          <img :src="authorImage" :alt="authorImageAlt" width="133">
          <div class="wm">{{ authorImageWatermark }}</div>
          <p>{{ authorImageDescription }}</p>
        </section>
      </article>
  
      <section>
        <table border="1">
          <thead>
            <tr class="top">
              <th>Hobby</th>
              <th>Rank</th>
              <th>When</th>
              <th>Total hours daily</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hobby in hobbies" :key="hobby.hobby">
              <td>{{ hobby.hobby }}</td>
              <td>{{ hobby.rank }}</td>
              <td>{{ hobby.when }}</td>
              <td>{{ hobby.totalHours }}</td>
            </tr>
          </tbody>
        </table>
        <div id="catImage">
          <h6 style="font-size: 12px; margin-bottom: 0px;">My favorite pet</h6>
          <img :src="catImageUrl" :alt="catImageAlt">
        </div>
      </section>
  
      <nav>
        <img src="navbarIcon.png" width="48px" height="24px">
        <ul>
          <li><a href="Details.html">Details page</a></li>
          <li><a href="contactPage.html">For contact</a></li>
          <li><a href="subpage.html">Short questions</a></li>
          <li><a href="Game.html">mini-game</a></li>
        </ul>
      </nav>
  
      <aside>
        <img :src="scheduleImage" :alt="scheduleImageAlt" width="170px">
        <p>{{ scheduleDescription }}</p>
      </aside>
  
      <footer>
        <p>Copyright © {{ currentYear }} All rights reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDate: '04/10/2023',
        authorName: 'Abdulmajeed Alghamdi',
        authorLocation: 'AlBahah',
        authorImage: '6048562534576929943_120.jpg',
        authorImageAlt: 'A picture of Abdulmajeed',
        authorImageWatermark: 'A A',
        authorImageDescription: "Abdulmajeed's picture",
        hobbies: [
          { hobby: 'Sleeping', rank: '#1', when: 'Every night', totalHours: '5 to 8' },
          { hobby: 'Walking', rank: '#2', when: 'Every morning', totalHours: '30 minutes to 1 hour' },
          { hobby: 'Studying', rank: '#3', when: 'Anytime', totalHours: '2 to 8 hours' }
        ],
        catImageUrl: '',
        catImageAlt: 'Random Cat',
        scheduleImage: '185310.png',
        scheduleImageAlt: "A picture of Abdulmajeed's schedule",
        scheduleDescription: "Abdulmajeed's schedule",
        currentYear: new Date().getFullYear()
      };
    },
    mounted() {
      this.fetchCatImage();
    },
    methods: {
      fetchCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
          .then(response => response.json())
          .then(data => {
            if (data && data.length > 0) {
              this.catImageUrl = data[0].url;
            } else {
              this.catImageUrl = 'Failed to load cat image.';
            }
          })
          .catch(error => {
            this.catImageUrl = 'Error fetching cat image.';
            console.error('Error:', error);
          });
      }
    }
  };
  </script>
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
head, body{
    font-family: 'Playfair Display', serif;
    color: #21243D;
    text-align: center;
}
h1, h2, h3, h4, h5, h6{
font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: 60px; 
margin-bottom: 16px;
padding: 4px;
}

p{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
margin: 9px; 
}
a{
color: black;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
table{
    margin: 0 auto;
}

footer p{
    font-size:12px;
    
}
section img{
    width: 120px;
    height: 120px;
    border-radius: 180px;
}
header a {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    font-size: small;
}
input:hover {
    background-color: skyblue;    
}
input{
    transition: background-color 1s ease;
}

li {
        display: inline-block;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

nav img {
    display:flex;
    transition: opacity 0.3s;
}

nav:hover img {
    display:flex;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

nav:hover ul li:nth-child(1) {
    transition-delay: 0.3s;
    opacity: 1;
}

nav:hover ul li:nth-child(2) {
    transition-delay: 0.6s;
    opacity: 1;
}

nav:hover ul li:nth-child(3) {
    transition-delay: 0.9s;
    opacity: 1;
}
nav:hover ul li:nth-child(4) {
    transition-delay: 1.2s;
    opacity: 1;
}
footer{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}
aside {
    position: absolute;
    bottom: 0;
    right: 0; 
    display: block;
}
.wmImg{
    position: relative;
    display: inline-block;
}

.wm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px; 
    font-size: 18px; 
    color: rgba(255, 255, 255, 0.5);; 
    pointer-events: none; 
    z-index: 1; 
}

.title {
    display: inline-block;
    vertical-align: middle;
    }
.date{
    font-size: 12px;
    display: inline-block;
}
.cat{
    position: absolute;
    top: 0;
    left: 0; 
    font-size: 24px;
    margin-bottom: 5px;
}
.cat img{
    width: 90px;
    height: 90px;
    border-radius: 64px;
}
  </style>
  
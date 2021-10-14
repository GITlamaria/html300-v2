<template>
  <div class="images">
    <b-carousel
    id="movie-carousel"
      v-model="slide"
      indicators
      :interval="4000"
    >

<!-- iterate through the movies array to display the images in the carousel -->
<b-carousel-slide class="movie-slide" v-for="(movie, index) in movies" :key='index'
        :img-src="movie.image"
        :caption="movie.movieTitle"
        :text="movie.rating">
        
      </b-carousel-slide>
    </b-carousel>

    </div>



</template>

<script>


export default {
 
  data() {
    return {
      /* array of objects */
        movies: [
          {
          rating: "#1",
          movieTitle: "Scream (1996)",
          image: [
          require('@/assets/scream1.png'),
          ],
        },
        {
          rating: "#2",
          movieTitle: "It's the Great Pumpkin (1966)",
          image: [
            require('@/assets/pumpkin.png'),
          ],
        },
        {
          rating: "#3",
          movieTitle: "The Addams Family (1991)",
          image: [
            require('@/assets/adams-family.png'),
          ],
        },
        {
          rating: "#4",
          movieTitle: "The Omen (1976)",
          image: [
            require('@/assets/omen.png'),
          ],
        },
        {
          rating: "#5",
          movieTitle: "Hocus Pocus (1993)",
          image: [
            require('@/assets/hocus.png'),
          ],
        },
        
      ],
    }
  }
}
</script>

<style scoped>
#movie-carousel {
  width: 30rem;
  padding: 3rem;
  margin: auto;
}
.images {
  background-color:  #F4831B;
}


</style>
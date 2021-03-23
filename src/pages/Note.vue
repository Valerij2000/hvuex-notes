<template>
  <div>
    <section class="note-section">
      <div class="container mt-5">
        <div class="col-xl-8 offset-xl-2">
            <div class="card mb-3">
          <img class="card-img-top"  />
          <div class="card-body"  v-bind:class="{ generosNote : note.checked }">
            <h5 class="card-title">{{note.title}}</h5>
            <p class="card-text">
              {{note.descr}}
            </p>
            <div class="card-img">
                <img height="350px" width="100%" :src="gallery[getRandomIntInclusive]" alt="">
                
            </div>
            <p class="card-text">
              <small class="text-muted">{{note.time}}</small>
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
export default {
    data() {
        return {
            note: null,
            gallery: null,
        }
    },

    created () {
        let id = this.$route.params.id;
        let note = this.$store.getters.getNoteOnly(id);
        this.note = note;
        // console.log(this.note)

        this.gallery = this.$store.getters.getGalleryImg;
    },

    computed: {
        getRandomIntInclusive() {
            let min = Math.ceil(0);
            let max = Math.floor(this.gallery.length-1);
            return Math.floor(Math.random() * (this.gallery.length - 0 + 1)) + 0; //Максимум и минимум включаются
        },
    },

};
</script>

<style lang="scss"> 

.note-section {
    .generosNote {
    background-color:gold;
}

margin-bottom: 100px;

}


    
</style>
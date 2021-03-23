<template>
  <div>
    <div class="row">
      <div 
      class="col-xl-8 offset-xl-2 mt-5"
       v-for="(note, index) in notes" :key="index" 
       
       >
        
        <div class="card text-center"  v-bind:class="{ generosNote : note.checked }">
          <div class="card-header"><span @click="removeNote(index)">X</span></div>
          <div class="card-body">
            <router-link :to="/note/+note.id"><h5 class="card-title">{{note.title}}</h5></router-link>
            <p class="card-text">
              {{note.descr}}
            </p>
            <strong class="time-strong">{{note.time}}</strong>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            notes: null,
        }
    },


    created () {
        this.notes = this.$store.getters.getNotes;
    },

    methods: {
        removeNote (index) {
            this.notes.splice(index, 1);
        },
    },

};
</script>

<style lang="scss">
    
.time-strong {
    color: dimgrey;
}

.card-title {
    font-weight: 800;
}

span {
    font-weight: 700;
    color: grey;
    
    &:hover {
        color: red;
        cursor: pointer;
    }
}

.generosNote {
    background-color:gold;
}


</style>
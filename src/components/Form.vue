<template>
  <div>
    <div class="row">
      <div class="col-xl-8 offset-xl-2 mt-5">
        <form>
          <div class="mb-3">
            <label class="form-label">Title notes</label>
            <input 
            v-model="note.title"
            type="text" class="form-control" 
            placeholder="Title notes" />
            <div class="form-text">
              We'll never share your title with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea
                v-model="note.descr"
                class="form-control"
                rows="3"
                placeholder="Description"
              ></textarea>
              <p style="color: red;" class="mt-2">{{error}}</p>
            </div>
          </div>
          <div class="mb-3 form-check">
            <input v-model="checked" type="checkbox" class="form-check-input" />
            <label v-if="!checked">Important check</label>
            <label v-else>Generos</label>
            {{checked}}
            
          </div>
          
          <button @click="addNote()" type="button" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            checked: false,
            note: null,
            error: '',
        }
    },

  
  created () {
     this.note = this.$store.getters.getNote;
    //  console.log(this.note)
  },


  computed: {
      
  },

    methods: {
        addNote () {

             if (this.note.title === '' || this.note.descr === '' ) {
                this.error = 'Not Blank!';
                return false;
            } 

            
            

            this.$store.dispatch('addNote', {
                id: this.note.id++,
                title: this.note.title,
                descr: this.note.descr,
                time: new Date().toLocaleTimeString(),
                checked: this.checked,
            });



            this.resetData();
            

        },

       
           
       

        resetData () {
            this.note.title = '';
            this.note.descr = '';
            this.checked = false;
            this.error = '';
        },

       
    },

   

};
</script>


<style lang="scss" scoped>
</style>
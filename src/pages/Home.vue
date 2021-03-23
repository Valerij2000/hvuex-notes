<template>
    <div>
       <section class="notes-section">
           <div class="container">


               <Form />

                <Card />


           </div>
       </section>
    </div>
</template>


<script>

import Form from '@/components/Form.vue'
import Card from '@/components/Card.vue'

export default {
   components: {
       Form, Card
   },
}
</script>

<style lang="scss">

    .notes-section {
        min-height: 700px;
        padding-bottom: 100px;
    }
    
</style>
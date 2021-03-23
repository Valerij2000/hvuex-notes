<template>
    <div>
        <section class="header-section">
          
                <div class="row">
                    <header>
  <div class="bg-dark collapse" id="navbarHeader" style="">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">Valerij Shumkov</h4>
          <p class="text-muted">Complete web - development Vue JS Application.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Route Link</h4>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="link">General Page</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
       <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <strong>Notes list</strong>
      </router-link>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
                </div>
        </section>
    </div>
</template>


<script>
export default {
 
}
</script>


<style lang="scss" scoped>


    strong {
        margin-left: 10px;
    }

    .link {
      color: wheat;
      &:hover {
        color: rgb(0, 255, 179);
      }
    }

</style>
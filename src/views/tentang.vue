<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">Hdinjos</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link active" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">About</a>
            <a class="nav-item btn btn-warning mybtn" href="#">Join Us</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 font-weight-light">
          Get work done <span>faster</span> <br />
          and <span>better</span> with us
        </h1>
        <a class="btn btn-warning mybtn" href="">Our Work</a>
      </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    position: relative;
    z-index: 1;
}

.navbar-brand {
    font-family: Viga;
    font-size: 32px;
}

.jumbotron {
    background-image: url("../assets/img3.jpg");
    background-size: cover;
    height: 540px;
    text-align: center;
    position: relative;
}


</style>
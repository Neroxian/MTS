<template>
  <div class="card">
    <form>
      <div class="mb-3 d-flex justify-content-center">
        <img src="../assets/mkcl-logo.png" alt="logo" width="200">
      </div>
      <div class="mb-4">
        <label for="exampleInputEmail1" class="form-label">Login ID:</label>
        <input type="text" class="form-control" aria-describedby="emailHelp">
        <!-- <div class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password:</label>
        <input type="password" class="form-control">
        <!-- <div class="form-text">We'll never share your email with anyone else.</div> -->
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <div class="text-end"><button type="submit" class="btn btn-danger">Login</button></div>
  </form>
  </div>
</template>

<style scoped>
.card{
  margin: auto;
  width: 50%;
  padding: 2.5rem;
  box-shadow: 0px 0px 9px 2px rgba(0,0,0,0.31);
  -webkit-box-shadow: 0px 0px 9px 2px rgba(0,0,0,0.31);
  -moz-box-shadow: 0px 0px 9px 2px rgba(0,0,0,0.31);
  border-radius: 0.5rem;
}
label{
  /* margin-bottom: 0; */
  font-weight: 600;
}
.logo{
  margin: auto;
}
</style>

<script>
export default {
  name:'Login'
}
</script>
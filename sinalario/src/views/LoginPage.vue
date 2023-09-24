<template>
  <NavBar />
  <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="col-md-10 mx-auto col-lg-5">
      <form class="p-4 p-md-5 border rounded-3 bg-light">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="nome@nome.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="*********"
          />
          <label for="floatingPassword">Senha</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Lembre me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Entrar
        </button>
      </form>
    </div>
  </div>

  <FooterBar />
</template>

<script>
import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LoginPage",
  components: { NavBar, FooterBar },
};
</script>

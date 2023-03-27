<template>
  <section class="stay-edit-main-container">
    <form @submit.prevent="addNewStay" class="stay-edit-container" v-if="loggedInUser">
      <div class="stay-name-editor">
        <h2>
          <input type="text" placeholder="Stay name" v-model="newStay.name" />
        </h2>
        <div class="stay-name-inputs">
          <label><input type="text" placeholder="Enter Country" v-model="newStay.country" /></label>
          <label><input type="text" placeholder="Enter City" v-model="newStay.city" /></label>
          <label><input type="text" placeholder="Enter Address" v-model="newStay.address" /></label>
        </div>
      </div>
      <section class="add-imgs-container">
        <section
          class="add-big-img-upload"
          style="
            background-image: url('undefined');
            background-repeat: no-repeat;
            background-size: cover;
          ">
          <label class=""
            ><p>Upload Image</p>
            <input type="file" hidden=""
          /></label>
        </section>
        <section
          class="add-img-upload"
          style="
            background-image: url('undefined');
            background-repeat: no-repeat;
            background-size: cover;
          ">
          <label class=""
            ><p>Upload Image</p>
            <input type="file" hidden=""
          /></label>
        </section>
        <section
          class="add-img-upload"
          style="
            background-image: url('undefined');
            background-repeat: no-repeat;
            background-size: cover;
          ">
          <label class=""
            ><p>Upload Image</p>
            <input type="file" hidden=""
          /></label>
        </section>
        <section
          class="add-img-upload"
          style="
            background-image: url('undefined');
            background-repeat: no-repeat;
            background-size: cover;
          ">
          <label class=""
            ><p>Upload Image</p>
            <input type="file" hidden=""
          /></label>
        </section>
        <section
          class="add-img-upload"
          style="
            background-image: url('undefined');
            background-repeat: no-repeat;
            background-size: cover;
          ">
          <label class=""
            ><p>Upload Image</p>
            <input type="file" hidden=""
          /></label>
        </section>
      </section>
      <button class="btn-container">Add</button>
    </form>
    <h1 v-if="!loggedInUser">Please Login</h1>
  </section>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      newStay: { name: '', country: '', city: '', address: '' },
    }
  },
  methods: {
    addNewStay(){
        this.$store.dispatch({type: 'addNewStay', newStay: this.newStay})
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  created() {},
  components: {},
}
</script>

<style></style>

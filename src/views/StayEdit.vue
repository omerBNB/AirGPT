<template>
  <section v-if="newStay">
    <form @submit.prevent="addNewStay" class="stay-edit-container" v-if="loggedInUser">
      <div class="stay-name-editor">
        <h2>
          <input class="edit-stay-first-inputs" type="text" placeholder="Stay name" v-model="newStay.name" />
        </h2>
        <div class="stay-name-inputs">
          <label><input class="edit-stay-first-inputs" type="text" placeholder="Enter Country"
              v-model="newStay.loc.country" /></label>
          <label><input class="edit-stay-first-inputs" type="text" placeholder="Enter City"
              v-model="newStay.loc.city" /></label>
          <label><input class="edit-stay-first-inputs" type="text" placeholder="Enter Address"
              v-model="newStay.address" /></label>
        </div>
      </div>
      <section class="add-imgs-container">
        <section class="add-big-img-upload" style="
              background-image: url('undefined');
              background-repeat: no-repeat;
              background-size: cover;
            ">
          <label class="">
            <p @drop.prevent="handleFile" @dragover.prevent>Upload Image</p>
            <input type="file" hidden="" />
          </label>
        </section>
        <section class="add-img-upload" style="
              background-image: url('undefined');
              background-repeat: no-repeat;
              background-size: cover;
            ">
          <label class="">
            <p>Upload Image</p>
            <input type="file" hidden="" />
          </label>
        </section>
        <section class="add-img-upload" style="
              background-image: url('undefined');
              background-repeat: no-repeat;
              background-size: cover;
            ">
          <label class="">
            <p>Upload Image</p>
            <input type="file" hidden="" />
          </label>
        </section>
        <section class="add-img-upload" style="
              background-image: url('undefined');
              background-repeat: no-repeat;
              background-size: cover;
            ">
          <label class="">
            <p>Upload Image</p>
            <input type="file" hidden="" />
          </label>
        </section>
        <section class="add-img-upload" style="
              background-image: url('undefined');
              background-repeat: no-repeat;
              background-size: cover;
            ">
          <label class="">
            <p>Upload Image</p>
            <input type="file" hidden="" />
          </label>
        </section>
      </section>
      <div class="el-upload-dragger"></div>
      <div class="edit-stay-second-inputs">
        <div>
          <label for=""> Capacity: </label>
          <el-input v-model="newStay.capacity" class="w-50 m-2" size="small" placeholder="Please Input" />
        </div>
        <div>
          <label for=""> Bedrooms: </label>
          <el-input v-model="newStay.equipment.bedroomNum" class="w-50 m-2" size="small" placeholder="Please Input" />
        </div>
        <div>
          <label for=""> Bathrooms: </label>
          <el-input v-model="newStay.equipment.bathNum" class="w-50 m-2" size="small" placeholder="Please Input" />
        </div>
      </div>
      <div class="edit-stay-second-inputs">
        <div>
          <label for=""> Labels: </label>
          <el-input v-model="input3" class="w-50 m-2" size="small" placeholder="Please Input" />
        </div>
        <div>
          <label for=""> Property type: </label>
          <el-input v-model="newStay.type" class="w-50 m-2" size="small" placeholder="Please Input" />
        </div>
        <div>
          <label for=""> Price: </label>
          <el-input v-model="newStay.price" class="w-50 m-2" size="small" placeholder="Please Input" />
        </div>
      </div>
      <div class="m-4">
        <el-select class="edit-amaneties-selection" v-model="newStay.amenities" multiple collapse-tags
          placeholder="Select" collapse-tags-tooltip :max-collapse-tags="3">
          <el-option v-for="item in newStay.amenities" :key="item" :label="item" :value="item" />
        </el-select>
      </div>
      <div>
        <label for=""> Description: </label>
        <textarea class="edit-textarea" name="" id="" v-model="newStay.summary" style="width: 100%"></textarea>
      </div>
      <button class="btn-container">Add</button>
    </form>
    <h1 v-if="!loggedInUser">Please Login</h1>
  </section>
</template>
<script>
import { uploadService } from '../services/upload.service'
import { stayService } from '../services/stay.service'
export default {
  name: '',
  data() {
    return {
      newStay: null,
      currUser: null,
    }
  },
  methods: {
    addNewStay() {
      if (!this.currUser.stayList) {
        this.currUser.stayList = []
      }
      const idx = this.currUser.stayList.findIndex((stay) => stay._id === this.newStay._id)
      if (idx > -1) this.currUser.stayList.splice(idx, 1, this.newStay)
      else this.currUser.stayList.push(this.newStay)

      this.$store.dispatch({ type: 'saveStay', newStay: this.newStay })
      this.$store.dispatch({ type: 'updateUser', currUser: this.currUser })
      this.$router.push('/dashboard/listing')
    },
    async handleFile(ev) {
      console.log('ev', ev.type)
      const file = ev.type === 'change' ? ev.target.files[0] : ev.dataTransfer.files[0]

      const { url } = await uploadService.uploadImg(file)
      this.newStay.imgUrl.push(url)
      console.log('this.newStay.imgUrl', this.newStay.imgUrl)
    },
  },
  computed: {
    loggedInUser() {
      this.currUser = JSON.parse(JSON.stringify(this.$store.getters.loggedinUser))
      return this.$store.getters.loggedinUser
    },
    formatPrice() {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(this.newStay.price)
    },
  },
  async created() {
    const { stayId } = this.$route.params
    if (stayId) {
      try {
        this.newStay = await stayService.getById(stayId)
      } catch (err) {
        console.log('err', err)
      }
    } else {
      this.newStay = stayService.getEmptyStay()
    }
  },
  components: {},
}
</script>

<style></style>

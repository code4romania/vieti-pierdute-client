<template>
  <div class="min-h-screen flex flex-col">

    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component
          :is="Component"
        ></component>
        <!-- <div class="my-64" v-else>
          <Spinner />
        </div> -->
      </transition>  
    </router-view>
  
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";

export default {
    name: 'App',
    components: {
      Spinner
    },
    data() {
      return {
        numberDeceased: 0
      }
    },
    mounted() {
      // axios.get(process.env.VUE_APP_LATEST_DATA + "/smallData.json").then((response) => {
      //   this.numberDeceased = response.data.currentDayStats.numberDeceased
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  }
</script>


<style>

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: opacity 0.6s ease;
}

.route-leave-active {
  transition: opacity 0.2s ease;
}

</style>
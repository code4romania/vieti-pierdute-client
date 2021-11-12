<template>
  <div>
    <div v-if="loading" class="my-16">
      <Spinner />
    </div>
    <div v-if="page">
      <div
        v-for="component in page.components"
        v-bind:key="component.id"
      >
        <div class="max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-8 gap-16">
            <div class="col-span-full">
              <div class="p-4 lg:p-8">
                <div class="flex justify-between items-center">
                  <router-link
                    to="/despre"
                    class="inline-block py-3 font-semibold text-base tracking-wide text-gray-600 underline"
                  >
                    Despre proiect
                  </router-link>
                  <a @click="$router.go(-1)" class="cursor-pointer relative w-12 h-12">
                    <span class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-full h-0.5 bg-black rotate-45"></span>
                    <span class="block w-0 h-0 overflow-hidden">Închide</span>
                    <span class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-0.5 h-full bg-black rotate-45"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
<!-- 
  <div class="flex flex-col flex-1 bg-white text-black px-5 py-7 md:py-9 md:px-10 lg:px-20">
    <div class="relative flex-1 max-w-screen-2xl lg:mx-auto">

      <nav id="nav">
        <h2 class="inline-block py-3 mr-6 font-semibold tracking-widest text-gray-600 uppercase underline">Despre proiect</h2>
        <a href="https://code4.ro/ro/doneaza" target="_blank" class="inline-block py-3 mr-6 font-semibold tracking-widest text-gray-600 uppercase">Donează</a>
      </nav>
      <a href="https://code4.ro/ro" class="inline-block my-8 py-2">
        <svg class="fill-current block h-10 w-auto" viewBox="0 0 400 121.9">
          <path d="M48.8,2.5,31.5,5.1,0,61l31.5,55.8,17.3,2.6L15.2,61ZM93,2.5l17.3,2.6L141.8,61l-31.5,55.8L93,119.4,126.6,61Z" fill="#00f"></path><path d="M48.8,2.5,70.9,0V61H15.2Z" fill="#f2f2ff"></path><path d="M48.8,119.4l22.1,2.5V61H15.2Z" fill="#d9d9ff"></path><path d="M93,119.4l-22.1,2.5V61h55.7Z" fill="#b3b3ff"></path><path d="M93,2.5,70.9,0V61h55.7Z" fill="#e6e6ff"></path><path d="M200.2,51.1a51.4,51.4,0,0,1-11.6,1.4,23.1,23.1,0,0,1-8.3-1.2,10.4,10.4,0,0,1-4.9-4.1,19.3,19.3,0,0,1-2.5-6.6,62.2,62.2,0,0,1-.6-9.5c0-8,1.1-13.6,3.4-16.7s6.4-4.8,12.4-4.8a53.8,53.8,0,0,1,12.2,1.7L200,18a70.4,70.4,0,0,0-10-.9c-2.7,0-4.6.4-5.7,1.1s-2,2-2.5,4-.9,5.4-.9,10.2.6,8.1,1.7,10,3.4,2.7,6.7,2.7a67.5,67.5,0,0,0,10.7-.8Zm7.2-26.3q3.3-4.2,10.8-4.2T229,24.8q3.3,4.2,3.3,11.7c0,10.7-4.7,16-14.1,16s-14-5.3-14-16c0-5,1.1-8.9,3.2-11.7Zm6.4,18.6c.8,1.5,2.3,2.2,4.4,2.2s3.7-.7,4.5-2.2a15,15,0,0,0,1.3-6.9,14.3,14.3,0,0,0-1.3-6.8c-.8-1.4-2.3-2.2-4.5-2.2a4.7,4.7,0,0,0-4.4,2.2c-.9,1.4-1.3,3.7-1.3,6.8S212.9,41.9,213.8,43.4ZM264.1,9.1V51.8H256V50.5a16.8,16.8,0,0,1-7.4,2c-4.4,0-7.5-1.2-9.2-3.8s-2.6-6.6-2.6-12.2,1-9.5,3.1-12.1,5.2-3.8,9.5-3.8a33.6,33.6,0,0,1,5.4.6l1.2.3V9.1Zm-9,35.4.9-.2v-16a35.7,35.7,0,0,0-6-.6c-3.3,0-4.9,2.9-4.9,8.8,0,3.1.3,5.4,1.1,6.7a3.6,3.6,0,0,0,3.6,2A20.4,20.4,0,0,0,255.1,44.5Zm24.8-.4a6.1,6.1,0,0,0,4.1,1.3c3.8,0,7.1-.2,10.1-.4l1.7-.2v6a50.9,50.9,0,0,1-12.6,1.8c-4.6,0-8-1.3-10-3.7s-3.1-6.4-3.1-11.9c0-10.9,4.4-16.4,13.4-16.4s13.3,4.6,13.3,13.8l-.6,5.7H278.4a4.9,4.9,0,0,0,1.5,4Zm9-10.3q0-3.6-1.2-5.1c-.7-.9-2.1-1.4-4-1.4s-3.3.5-4.1,1.5-1.2,2.7-1.3,5Zm36.9-5.5V51.8h-8.2V28.3h-3.2v-7h3.2V20c0-4.4.7-7.4,2-9.1s3.6-2.5,7-2.5a34.5,34.5,0,0,1,5.6.6l1.3.2v6.7l-4.5-.2a2.9,2.9,0,0,0-2.5,1,7.1,7.1,0,0,0-.6,3.4v1.2h7.4v7Zm13.6-3.5c2.1-2.8,5.7-4.2,10.7-4.2s8.7,1.4,10.8,4.2,3.3,6.7,3.3,11.7c0,10.7-4.7,16-14.1,16s-14-5.3-14-16q0-7.5,3.3-11.7Zm6.3,18.6c.8,1.5,2.3,2.2,4.4,2.2s3.7-.7,4.5-2.2,1.3-3.8,1.3-6.9-.4-5.4-1.3-6.8-2.3-2.1-4.5-2.1-3.6.7-4.4,2.1-1.3,3.7-1.3,6.8S344.8,41.9,345.7,43.4Zm24.4,8.4V21.3h8.1v3.3a29.4,29.4,0,0,1,9.8-4v8.2a79.4,79.4,0,0,0-8.5,2.2l-1.2.4V51.8ZM182.3,98.9v13.9h-8.4V71.3H190c9.8,0,14.6,4.6,14.6,13.7,0,5.4-2,9.4-6.1,11.9l5.9,15.9h-9.2l-4.8-13.9Zm12.3-9A7.7,7.7,0,0,0,196,85a7,7,0,0,0-1.5-4.7,5.5,5.5,0,0,0-4.5-1.8h-7.7V91.7h7.8a5.5,5.5,0,0,0,4.5-1.8Zm17.5-4.2c2.2-2.7,5.8-4.1,10.8-4.1s8.7,1.4,10.8,4.1,3.2,6.7,3.2,11.8c0,10.7-4.6,16-14,16s-14-5.3-14-16c0-5.1,1.1-9,3.2-11.8Zm6.3,18.7a5,5,0,0,0,4.5,2.2c2.2,0,3.7-.8,4.5-2.2a15,15,0,0,0,1.3-6.9,14.7,14.7,0,0,0-1.3-6.9q-1.2-2.1-4.5-2.1a4.9,4.9,0,0,0-4.5,2.1c-.8,1.5-1.2,3.7-1.2,6.9S217.6,102.9,218.4,104.4Zm32.7,8.4h-8.2V82.3H251V84a15.2,15.2,0,0,1,7.2-2.4c3.3,0,5.8.9,7.6,2.8a23.2,23.2,0,0,1,10.3-2.8c4,0,6.8,1.1,8.4,3.5s2.3,6,2.3,11.2v16.5h-8.2V96.5a14.6,14.6,0,0,0-.8-5.8,3.4,3.4,0,0,0-3.4-1.8,19.9,19.9,0,0,0-4.8.8l-.9.3c.2,3.1.3,5.4.3,7v15.8h-8.2V97.1a19.1,19.1,0,0,0-.8-6.4c-.5-1.2-1.7-1.8-3.5-1.8a15.5,15.5,0,0,0-4.7.8l-.7.3v22.8Zm66.3-21v12.7a4.1,4.1,0,0,0,.5,2,1.8,1.8,0,0,0,1.5.8l-.2,6.2a22.3,22.3,0,0,1-5-.4,12.2,12.2,0,0,1-3.7-1.7,21.1,21.1,0,0,1-9,2.1c-6.3,0-9.5-3.3-9.5-10q0-4.9,2.7-6.9c1.7-1.4,4.4-2.2,8-2.4l6.5-.5V91.8a3.5,3.5,0,0,0-.8-2.6,4.3,4.3,0,0,0-2.8-.7l-11.4.5-.3-5.7a47,47,0,0,1,12.4-1.8c4,0,6.8.9,8.5,2.5s2.6,4.2,2.6,7.8Zm-13.7,8.1c-2.3.2-3.4,1.4-3.4,3.6s1,3.4,3,3.4a19.2,19.2,0,0,0,5-.8l.9-.2V99.4Zm29.7,12.9h-8.2V82.3h8.1V84a15.5,15.5,0,0,1,7.6-2.4q6.2,0,8.4,3.6c1.6,2.4,2.4,6.1,2.4,11v16.6h-8.2V96.5a14.3,14.3,0,0,0-.9-5.8c-.6-1.2-1.9-1.8-3.7-1.8a12.7,12.7,0,0,0-4.8.8l-.7.3Zm25.5-34.4V70.1h8.2v8.3Zm0,34.4V82.3h8.2v30.5Zm39.1-21v12.7a4.1,4.1,0,0,0,.5,2,1.8,1.8,0,0,0,1.5.8l-.2,6.2a22.3,22.3,0,0,1-5-.4,12.7,12.7,0,0,1-3.8-1.7,20.4,20.4,0,0,1-8.9,2.1c-6.3,0-9.5-3.3-9.5-10,0-3.3.9-5.6,2.6-6.9s4.5-2.2,8.1-2.4l6.5-.5V91.8a3.5,3.5,0,0,0-.8-2.6,4.3,4.3,0,0,0-2.8-.7l-11.4.5-.3-5.7a47,47,0,0,1,12.4-1.8c4,0,6.8.9,8.5,2.5s2.6,4.2,2.6,7.8Zm-13.7,8.1c-2.3.2-3.4,1.4-3.4,3.6s1,3.4,2.9,3.4a19.2,19.2,0,0,0,5.1-.8l.9-.2V99.4Z"></path>
        </svg>
      </a>
      <h1 class="mb-12 text-3xl lg:text-5xl font-thin">You may also add links to this text. That if you need to send the user in a simple way to a key page in your platform. However, keep in mind that a link in </h1>
      <div class="lg:pr-96">
        <p class="mb-10 text-xl lg:text-2xl font-thin">I seek the means to fight injustice. To turn fear against those who prey on the fearful. Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended. I'm Batman It's not who I am underneath but what I do that defines me. Accomplice? I'm gonna tell them the whole thing was your idea.</p>
        <p class="mb-10 text-xl lg:text-2xl font-thin">It's not who I am underneath but what I do that defines me. Bats frighten me. It's time my enemies shared my dread. Someone like you. Someone who'll rattle the cages. No guns, no killing. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting. Well, you see... I'm buying this hotel and setting some new rules about the pool area.</p>
      </div>  
      <a href="" class="inline-block mb-2 py-3 text-2xl font-normal underline lg:text-2xl xl:text-3xl lg:mb-4">Politica de Confidentialitate</a><br>
      <a href="" class="inline-block mb-2 py-3 text-2xl font-normal underline lg:text-2xl xl:text-3xl lg:mb-4">Other Link</a>

    </div>
  </div> -->

</template>

<script>
import api from "@/api";
import MadeBy from "@/components/MadeBy.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "About",
  components: {
    MadeBy,
    Spinner
  },
  data: () => ({
    loading: false,
    error: null,
    page: {
      components: []
    }
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchData());
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next();
  },
  mounted() {
    document.body.classList.remove("bg-black", "text-white");
    document.body.classList.add("bg-white", "text-black");
  },
  methods: {
    fetchData() {
      this.error = this.page = null;
      this.loading = true;
      api.getPage("about", (err, page) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.page = page;
        }
      });
    }
  }
}
</script>


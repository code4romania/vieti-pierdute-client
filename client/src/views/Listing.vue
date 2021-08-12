<template>

  <div class="listing flex flex-1 bg-primary text-white px-5 py-7 md:py-9 md:px-10 lg:px-20 lg:py-0">
    <div class="flex flex-col flex-1 max-w-screen-2xl lg:mx-auto">
      <div class="flex flex-1">
        <div class="flex flex-col lg:w-2/6 lg:fixed lg:min-h-screen lg:py-6">
          <div class="flex-1">
            <nav id="nav">
              <router-link to="/about" class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase">Despre Proiect</router-link>
            </nav>
            <router-link class="relative inline-block my-5 py-3 pl-14 text-7xl font-normal" to="/">
              <span class="absolute left-2 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"></span>
              32,465
            </router-link>
            <p class="mb-16 text-2xl font-thin text-white text-opacity-80">This is a content area describing the web purpose and what users will find on it. It is cool to keep it short but explanatory</p>

            <div class="mb-8">
              <button class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest">Galerie</button>
              <button class="inline-block border border-l-0 border-white p-3 text-base leading-4 uppercase font-thin tracking-widest opacity-60">ListĂ</button>
            </div>

            <router-link class="inline-block mb-2 py-3 underline text-2xl font-normal lg:text-xl lg:mb-4" to="/add">Adaugă povestea cuiva drag</router-link>
          </div>
          <MadeBy class="hidden md:block"/>
        </div>
        <div class="lg:relative lg:pl-8 lg:left-1/3 lg:w-2/3">
          <ul class="lg:flex lg:flex-row lg:flex-wrap">
            <li class="lg:w-1/2 py-2">**** *** *********</li>
            <li class="lg:w-1/2 py-2">***** ***********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">**** *** *********</li>
            <li class="lg:w-1/2 py-2">***** ***********</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">********* ****</li>
            <li class="lg:w-1/2 py-2">****** ****</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">***** *** ****</li>
            <li class="lg:w-1/2 py-2">********* ****</li>
            <li class="lg:w-1/2 py-2">****** ****</li>
            <li class="lg:w-1/2 py-2">*** ***** ****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">**** *** *********</li>
            <li class="lg:w-1/2 py-2">***** ***********</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">********* ****</li>
            <li class="lg:w-1/2 py-2">****** ****</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">***** *** ****</li>
            <li class="lg:w-1/2 py-2">********* ****</li>
            <li class="lg:w-1/2 py-2">****** ****</li>
            <li class="lg:w-1/2 py-2">*** ***** ****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">*** ***** ****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">**** *** *********</li>
            <li class="lg:w-1/2 py-2">***** ***********</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">****** ********</li>
            <li class="lg:w-1/2 py-2">*** ****** ******</li>
            <li class="lg:w-1/2 py-2">********* ****</li>
            <li class="lg:w-1/2 py-2">****** ****</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">***** *** ****</li>
            <li class="lg:w-1/2 py-2">********* ****</li>
            <li class="lg:w-1/2 py-2">****** ****</li>
            <li class="lg:w-1/2 py-2">*** ***** ****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
            <li class="lg:w-1/2 py-2">* ***** *******</li>
            <li class="lg:w-1/2 py-2">***** *** *****</li>
            <li class="lg:w-1/2 py-2">***** *****</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import MadeBy from '@/components/MadeBy.vue'
  
    export default {
        name: 'Listing',
        components: {
            MadeBy
        }
    }
</script>


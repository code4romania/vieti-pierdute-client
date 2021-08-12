<template>

  <div class="home flex-1 bg-primary text-white px-5 py-7 md:h-full md:flex md:flex-row md:py-9 md:px-10 lg:px-20">
    <div class="flex-initial max-w-screen-2xl md:w-1/2 md:flex md:flex-col lg:w-7/12 lg:pr-6 xl:pr-8 xl:px-36 lg:mx-auto">
      <div class="md:flex-1">
        <nav id="nav">
          <router-link to="/about" class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase">Despre Proiect</router-link>
        </nav>
        <h1 class="my-5 py-3 text-7xl font-light lg:text-9xl xl:text-10xl">32,465</h1>
        <h2 class="text-5xl py-5 font-light leading-tight lg:text-7xl xl:text-8xl">Vieți pierdute<br> în România</h2>
        <ul class="mt-2 mb-10 lg:mt-8 xl:mt-12">
          <li><router-link class="inline-block mb-2 py-3 text-2xl font-normal lg:text-2xl xl:text-3xl lg:mb-4" to="/listing"><span class="underline">Descoperă toate numele</span><span class="pl-4">&#8594;</span></router-link></li>
          <li><router-link class="inline-block mb-2 py-3 ktext-2xl font-normal underline lg:text-2xl xl:text-3xl lg:mb-4" to="/add">Adaugă povestea cuiva drag</router-link></li>
        </ul>
      </div>
      <MadeBy class="hidden md:block"/>
    </div>
    <div class="flex-initial md:w-1/2 md:self-center lg:w-5/12">
      <p class="text-2xl text-white text-opacity-80 font-normal md:pl-4">This is a content area describing the website’s purpose and what users will find on it. It is important to keep it short but explanatory and to make sure everybody can follow a logical action following this information. You may also add links to this text. That if you need to send the user in a simple way to a key page in your platform. However, keep in mind that a link in this area will be very visible so do not send your user to an irrelevant page. </p>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import MadeBy from '@/components/MadeBy.vue'

  export default {
    name: 'Home',
    components: {
      MadeBy
    }
  }
</script>

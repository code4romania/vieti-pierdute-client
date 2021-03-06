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
          <div class="grid grid-cols-8 lg:gap-16">
            <div class="col-span-full">
              <div class="p-4 lg:p-8">
                <div class="flex justify-between items-center mb-8">
                  <Nav :inverted="false"/>
                  <a
                    @click="$router.go(-1)"
                    class="cursor-pointer relative w-12 h-12"
                  >
                    <span
                      class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-full h-0.5 bg-black rotate-45"
                    ></span>
                    <span class="block w-0 h-0 overflow-hidden">Închide</span>
                    <span
                      class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-0.5 h-full bg-black rotate-45"
                    ></span>
                  </a>
                </div>

                <div class="max-w-6xl mb-32">
                  <div class="relative block w-full leading-tight font-light mt-5 pt-3 mb-8 pb-0 text-2xl lg:text-4xl">
                    {{component.title}}
                  </div>

                  <MadeBy
                    v-if="this.$route.meta.featured"
                    :inverted="false"
                    class="mb-8"
                  />

                  <div class="lg:pr-96 mb-8">
                    <div
                      :class="{ 'text-lg lg:text-2xl': this.$route.meta.featured }"
                      class="content-wrap text-base font-thin"
                    >
                      <Markdown :source="component.content" />
                    </div>
                  </div> 

                  <ul v-if="component.buttons" class="mb-16">
                    <li v-for="button in component.buttons" v-bind:key="button.id">
                      <router-link
                        v-if="button.href"
                        :to="button.href"
                        class="inline-block py-3 text-2xl font-light lg:text-xl xl:text-2xl"
                        ><span class="underline">{{ button.text }}</span></router-link
                      >
                    </li>
                  </ul>

                  <div v-if="this.$route.meta.featured">
                    <div class="mb-4 uppercase text-xs tracking-wider font-sans">Parte din ecosistemul Covid-19</div>
                    <ul>
                      <li class="inline-block mr-8">
                        <a href="https://datelazi.ro/" target="_blank" class="inline-block py-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.7 67" class="h-6">
                            <path d="M93.9 26.9c-1.8-1-3.2-2.3-4.2-4.1-1-1.8-1.5-3.8-1.5-6.1s.5-4.4 1.5-6.1c1-1.8 2.4-3.1 4.2-4.1 1.8-1 3.8-1.5 6.1-1.5 3.1 0 5.7.8 7.7 2.4v2.4c-1.9-1.7-4.4-2.6-7.5-2.6-1.8 0-3.4.4-4.9 1.2-1.4.8-2.6 1.9-3.4 3.3-.8 1.4-1.2 3.1-1.2 5s.4 3.6 1.2 5c.8 1.4 1.9 2.5 3.4 3.3 1.4.8 3 1.2 4.8 1.2 1.6 0 3-.2 4.3-.6 1.3-.4 2.4-1.1 3.5-2.1V26c-1.9 1.7-4.6 2.5-8 2.5-2.2-.1-4.2-.6-6-1.6zM116.1 26.9c-1.8-1-3.2-2.3-4.2-4.1s-1.5-3.8-1.5-6.1.5-4.3 1.5-6.1 2.4-3.1 4.2-4.1 3.8-1.5 6-1.5 4.2.5 6 1.5c1.8 1 3.2 2.4 4.2 4.1s1.5 3.8 1.5 6.1-.5 4.3-1.5 6.1-2.4 3.1-4.2 4.1c-1.8 1-3.8 1.5-6 1.5-2.3 0-4.3-.5-6-1.5zm10.6-1.9c1.4-.8 2.5-1.9 3.3-3.3.8-1.4 1.2-3.1 1.2-5s-.4-3.5-1.2-4.9-1.9-2.5-3.3-3.3c-1.4-.8-3-1.2-4.7-1.2-1.7 0-3.3.4-4.7 1.2-1.4.8-2.5 1.9-3.3 3.3-.8 1.4-1.2 3.1-1.2 5s.4 3.6 1.2 5c.8 1.4 1.9 2.5 3.3 3.3s3 1.2 4.7 1.2c1.7-.2 3.3-.6 4.7-1.3zM134.9 5.5h2.6l7.5 18.9 7.5-18.9h2.6l-8.9 22.4h-2.3l-9-22.4zM159 5.5h2.5v22.4H159V5.5zM166 5.5h6.9c2.4 0 4.5.4 6.2 1.3 1.8.9 3.1 2.2 4.1 3.8.9 1.7 1.4 3.6 1.4 5.9 0 3.7-1.1 6.6-3.2 8.5-2.1 1.9-5.1 2.9-9 2.9H166V5.5zm6.2 20.3c3.4 0 5.9-.8 7.5-2.3 1.6-1.5 2.4-3.8 2.4-6.9 0-2.8-.8-5-2.3-6.6s-3.9-2.4-6.9-2.4h-4.4v18.2h3.7zM187.8 17.4h9.8v2.1h-9.8v-2.1zM205.8 8.2l-5 3.6V9.3l5.2-3.8h2.2v22.4h-2.5V8.2zM215 28v-2.2c.8.3 1.6.4 2.6.4 2.5 0 4.4-.8 5.7-2.3 1.3-1.5 2-3.8 2.2-6.9-.6.9-1.4 1.6-2.5 2s-2.3.7-3.7.7c-1.4 0-2.7-.3-3.8-.9s-2-1.5-2.6-2.6c-.6-1.1-.9-2.4-.9-3.8s.3-2.7 1-3.9 1.6-2 2.7-2.6c1.2-.6 2.6-1 4.2-1 2.5 0 4.4.8 5.9 2.4s2.2 3.9 2.2 7c0 4.5-.9 8-2.6 10.4-1.8 2.4-4.3 3.6-7.7 3.6-1 .1-1.9 0-2.7-.3zm8.9-11.8c1-.9 1.6-2.2 1.6-3.8 0-.9-.2-1.8-.7-2.6-.5-.8-1.1-1.4-1.9-1.9-.8-.5-1.8-.7-2.8-.7-1.6 0-2.9.5-3.9 1.5s-1.5 2.3-1.5 3.9.5 2.9 1.5 3.8c1 .9 2.3 1.4 3.9 1.4 1.5-.2 2.8-.6 3.8-1.6zM88.8 36.7h6.9c2.4 0 4.5.4 6.2 1.3 1.8.9 3.1 2.2 4.1 3.8.9 1.7 1.4 3.6 1.4 5.9 0 3.7-1.1 6.6-3.2 8.5s-5.1 2.9-9 2.9h-6.4V36.7zm6.3 20.2c3.4 0 5.9-.8 7.5-2.3 1.6-1.5 2.4-3.8 2.4-6.9 0-2.8-.8-5-2.3-6.6-1.6-1.6-3.9-2.4-6.9-2.4h-4.4v18.2h3.7zM117.5 36.7h2.3l8.9 22.4h-2.6l-2.4-6h-10.3l-2.4 6h-2.6l9.1-22.4zm5.6 14.3l-4.5-11.4-4.4 11.4h8.9zM134.5 38.8h-7.2v-2.1h16.8v2.1H137v20.3h-2.5V38.8zM147.4 36.7h14.4v2.1h-11.9v8h8.9v2.1h-8.9v8h11.9V59h-14.4V36.7zM177.8 36.7h2.5V57h11.9v2.1h-14.4V36.7zM203.1 36.7h2.3l8.9 22.4h-2.6l-2.4-6H199l-2.4 6H194l9.1-22.4zm5.6 14.3l-4.5-11.4-4.4 11.4h8.9zM229.7 57.3l13.1-18.5H230v-2.1h15.8v1.8l-13 18.5h13.5v2.1h-16.6v-1.8zM250.2 36.7h2.5v22.4h-2.5V36.7z"/>
                            <path d="M88.8 61.7h163.8v2.5H88.8z"/>
                            <circle cx="33.5" cy="33.5" r="33.5" fill="#f5bcd6"/>
                          </svg>
                        </a>
                      </li>
                      <li class="inline-block mr-8">
                        <a href="https://stirioficiale.ro/" target="_blank" class="inline-block py-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.9 40" class="h-6">
                            <path d="M55.7 16a6.7 6.7 0 0 1-2.5-2.5 6.9 6.9 0 0 1-.9-3.6 6.9 6.9 0 0 1 .9-3.6 6.4 6.4 0 0 1 2.5-2.4 7.4 7.4 0 0 1 3.6-.9 6.8 6.8 0 0 1 4.6 1.4v1.4a6.3 6.3 0 0 0-4.4-1.5 5.4 5.4 0 0 0-2.9.7 5.5 5.5 0 0 0-2.1 1.9 7.3 7.3 0 0 0-.7 3 7.3 7.3 0 0 0 .7 3 4.8 4.8 0 0 0 2.1 1.9 5.1 5.1 0 0 0 2.8.7 10.3 10.3 0 0 0 2.6-.3 4.9 4.9 0 0 0 2-1.3v1.5a6.8 6.8 0 0 1-4.7 1.5 7.4 7.4 0 0 1-3.6-.9zm13.2 0a6 6 0 0 1-2.5-2.5 6.9 6.9 0 0 1-.9-3.6 7.1 7.1 0 0 1 .9-3.6 5.8 5.8 0 0 1 2.5-2.4 7.4 7.4 0 0 1 3.6-.9 6.8 6.8 0 0 1 3.5.9 6.4 6.4 0 0 1 2.5 2.4 6.9 6.9 0 0 1 .9 3.6 6.9 6.9 0 0 1-.9 3.6A6 6 0 0 1 76 16a6.8 6.8 0 0 1-3.5.9 6.9 6.9 0 0 1-3.6-.9zm6.3-1.2a5.2 5.2 0 0 0 2-1.9 7.3 7.3 0 0 0 .7-3 6.5 6.5 0 0 0-.7-2.9 6.4 6.4 0 0 0-2-2 5.9 5.9 0 0 0-5.6 0 5.2 5.2 0 0 0-1.9 2 5.6 5.6 0 0 0-.8 3 5.5 5.5 0 0 0 .8 2.9 4.6 4.6 0 0 0 1.9 2 5.3 5.3 0 0 0 2.8.7 6.5 6.5 0 0 0 2.8-.8zm4.9-11.5h1.5l4.5 11.2 4.4-11.2H92l-5.2 13.3h-1.4zm14.3 0h1.4v13.3h-1.4zm4.1 0h4.1a8.4 8.4 0 0 1 3.7.7 5.9 5.9 0 0 1 2.4 2.3 6.5 6.5 0 0 1 .9 3.5 6.5 6.5 0 0 1-1.9 5 7.7 7.7 0 0 1-5.4 1.8h-3.8zm3.7 12a6.1 6.1 0 0 0 4.4-1.4 4.9 4.9 0 0 0 1.5-4 5.7 5.7 0 0 0-1.4-4 5.6 5.6 0 0 0-4.1-1.4H100v10.8zm9.3-5h5.8v1.3h-5.8zm10.6-5.4L119.2 7V5.5l3.1-2.2h1.3v13.3h-1.5V4.9zm5.5 11.7v-1.3a3.6 3.6 0 0 0 1.5.2 4.1 4.1 0 0 0 3.4-1.3 6.7 6.7 0 0 0 1.3-4.1 3.1 3.1 0 0 1-1.5 1.2 6.7 6.7 0 0 1-2.2.4 5.1 5.1 0 0 1-2.2-.5 3.3 3.3 0 0 1-1.5-1.6 4 4 0 0 1-.6-2.2 5 5 0 0 1 .6-2.4 4.6 4.6 0 0 1 1.6-1.5 5.1 5.1 0 0 1 2.5-.6 4.7 4.7 0 0 1 3.5 1.4 5.9 5.9 0 0 1 1.3 4.2 10.9 10.9 0 0 1-1.5 6.2 5.5 5.5 0 0 1-4.6 2.1 2.9 2.9 0 0 1-1.6-.2zm5.3-7a2.8 2.8 0 0 0 .9-2.2 2.9 2.9 0 0 0-.4-1.6 2.9 2.9 0 0 0-1.1-1.1 3.3 3.3 0 0 0-1.7-.4 3.2 3.2 0 0 0-2.3.9 3 3 0 0 0-.9 2.3 2.8 2.8 0 0 0 .9 2.2 3.2 3.2 0 0 0 2.3.9 4.4 4.4 0 0 0 2.3-1zM54.1 35.1l-1.8-.5v-1.4a8.5 8.5 0 0 0 3.9.8 5.2 5.2 0 0 0 2.5-.5 2 2 0 0 0 .8-1.7 2.1 2.1 0 0 0-.3-1.2 3.9 3.9 0 0 0-1-.8l-2.2-1a8.3 8.3 0 0 1-2.7-1.6 3.1 3.1 0 0 1-.8-2.3 2.7 2.7 0 0 1 .5-1.8 3.5 3.5 0 0 1 1.5-1.2 7.7 7.7 0 0 1 4.2-.2l1.7.5v1.4a8.1 8.1 0 0 0-3.4-.8 3.9 3.9 0 0 0-2.3.6 1.8 1.8 0 0 0-.8 1.5 4.2 4.2 0 0 0 .3 1.2l1.1.8a8.5 8.5 0 0 0 1.9.9l2.1 1a4.6 4.6 0 0 1 1.2 1.2 4.9 4.9 0 0 1 .4 1.9 3.1 3.1 0 0 1-1.2 2.6 6 6 0 0 1-3.6.9zm1.9 1.2h1.5L55.8 40h-1.3zM66.3 23H62v-1.2h10V23h-4.3v12.1h-1.5V23zm7.6-1.2h1.5v13.3h-1.5zm4.2 0h5.1a5.1 5.1 0 0 1 3.2.9 3.8 3.8 0 0 1 1 2.9 3.8 3.8 0 0 1-.8 2.4 4.1 4.1 0 0 1-2.4 1.3l3.2 5.7h-1.6l-3.1-5.7h-3.2V35H78V21.8zm4.9 6.3a3.8 3.8 0 0 0 2.2-.6 2.4 2.4 0 0 0 .7-1.9 2.3 2.3 0 0 0-.7-2A3.2 3.2 0 0 0 83 23h-3.4v5.1zm6.8-6.3h1.5v13.3h-1.5zm14.4 12.7a6 6 0 0 1-2.5-2.5 6.9 6.9 0 0 1-.9-3.6 7.4 7.4 0 0 1 .9-3.6 5.8 5.8 0 0 1 2.5-2.4 6.8 6.8 0 0 1 3.5-.9 7.4 7.4 0 0 1 3.6.9 7.2 7.2 0 0 1 2.5 2.4 7.4 7.4 0 0 1 .9 3.6 6.9 6.9 0 0 1-.9 3.6 6.7 6.7 0 0 1-2.5 2.5 7.4 7.4 0 0 1-3.6.9 6.8 6.8 0 0 1-3.5-.9zm6.3-1.2a5.5 5.5 0 0 0 2-2 6.5 6.5 0 0 0 .7-2.9 6.2 6.2 0 0 0-.7-2.9 5.5 5.5 0 0 0-2-2 5.3 5.3 0 0 0-2.8-.7 5.5 5.5 0 0 0-2.8.7 4.6 4.6 0 0 0-1.9 2 5.4 5.4 0 0 0-.7 2.9 5.6 5.6 0 0 0 .7 3 5.2 5.2 0 0 0 1.9 2 6.8 6.8 0 0 0 2.8.7 6.5 6.5 0 0 0 2.8-.8zm6.5-11.5h8.5V23h-7v4.8h5.2V29h-5.2v6.1H117zm10.4 0h1.5v13.3h-1.5zm7.2 12.7a6 6 0 0 1-2.5-2.5 6.9 6.9 0 0 1-.9-3.6 7.1 7.1 0 0 1 .9-3.6 6.4 6.4 0 0 1 2.5-2.4 8 8 0 0 1 8.2.5v1.4a6.4 6.4 0 0 0-4.5-1.5 5.9 5.9 0 0 0-2.9.7 4.8 4.8 0 0 0-2 2 5.4 5.4 0 0 0-.7 2.9 5.6 5.6 0 0 0 .7 3 5.5 5.5 0 0 0 2 2 6.9 6.9 0 0 0 2.9.7 9.3 9.3 0 0 0 2.5-.4 4.5 4.5 0 0 0 2.1-1.2v1.3a6.8 6.8 0 0 1-4.7 1.5 7.3 7.3 0 0 1-3.6-.8zm10.6-12.7h1.5v13.3h-1.5zm9.1 0h1.4l5.2 13.3h-1.5l-1.4-3.6h-6.1l-1.4 3.6H149zm3.3 8.5l-2.6-6.8-2.6 6.8zm5.7-8.5h1.4v12h7.1v1.3h-8.5zm10.1 0h8.5V23h-7.1v4.8h5.3V29h-5.3v4.8h7.1V35h-8.5zM52.7 36.3h1.2v2.1h-1.2z"/>
                            <path d="M58.7 36.3H181.9V38.379999999999995H58.7z"/>
                            <circle cx="19.9" cy="19.9" r="19.9" fill="#05d6c7"/>
                          </svg>
                        </a>
                      </li>
                      <li class="inline-block mr-8">
                        <a href="https://cetrebuiesafac.ro/" target="_blank" class="inline-block py-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 233 40" class="h-6">
                            <path d="M56 16.1a6.4 6.4 0 0 1-2.5-2.4 7.8 7.8 0 0 1-.9-3.7 7.8 7.8 0 0 1 .9-3.7A7.2 7.2 0 0 1 56 3.9a7.8 7.8 0 0 1 3.7-.9 6.9 6.9 0 0 1 4.6 1.5v1.4a6.3 6.3 0 0 0-4.5-1.5 5.9 5.9 0 0 0-2.9.7 6.4 6.4 0 0 0-2 2 6.3 6.3 0 0 0-.7 3 6.3 6.3 0 0 0 .7 3 6.4 6.4 0 0 0 2 2 5.9 5.9 0 0 0 2.9.7 7.5 7.5 0 0 0 2.6-.4 5.7 5.7 0 0 0 2.1-1.3v1.5a7.1 7.1 0 0 1-4.8 1.5 7.9 7.9 0 0 1-3.7-1zm13.3 0a6 6 0 0 1-2.5-2.5 7.4 7.4 0 0 1-.9-3.6 7.4 7.4 0 0 1 .9-3.6 7.5 7.5 0 0 1 2.5-2.5 7.6 7.6 0 0 1 7.2 0A7.5 7.5 0 0 1 79 6.4a7.4 7.4 0 0 1 .9 3.6 7.4 7.4 0 0 1-.9 3.6 6 6 0 0 1-2.5 2.5 7.5 7.5 0 0 1-7.1 0zm6.4-1.2a6.4 6.4 0 0 0 2-2 6.3 6.3 0 0 0 .7-3 6.3 6.3 0 0 0-.7-3 6.4 6.4 0 0 0-2-2 5.9 5.9 0 0 0-5.6 0 6.4 6.4 0 0 0-2 2 6.3 6.3 0 0 0-.7 3 6.3 6.3 0 0 0 .7 3 6.4 6.4 0 0 0 2 2 6.1 6.1 0 0 0 5.6 0zm4.8-11.6h1.6l4.5 11.3L91 3.3h1.6l-5.3 13.3h-1.4zm14.4 0h1.5v13.3h-1.5zm4.2 0h4.1a8 8 0 0 1 3.7.8 5.3 5.3 0 0 1 2.4 2.3 7.2 7.2 0 0 1 .8 3.5 6.6 6.6 0 0 1-1.9 5 8.1 8.1 0 0 1-5.4 1.7h-3.7zm3.7 12.1a6.7 6.7 0 0 0 4.5-1.4 5.6 5.6 0 0 0 1.4-4.1 5.2 5.2 0 0 0-1.4-3.9 5.6 5.6 0 0 0-4.1-1.4h-2.6v10.8zm9.3-5h5.9v1.2h-5.9zm10.8-5.5l-3 2.1V5.6l3.1-2.3h1.3v13.3h-1.5zm5.5 11.8v-1.3l1.6.2a4.1 4.1 0 0 0 3.4-1.4 6.7 6.7 0 0 0 1.3-4.1 3.5 3.5 0 0 1-1.5 1.2 5.4 5.4 0 0 1-2.2.4 4.6 4.6 0 0 1-2.3-.5 3.6 3.6 0 0 1-1.5-1.5 4.6 4.6 0 0 1-.5-2.3 4.6 4.6 0 0 1 .6-2.3 4.1 4.1 0 0 1 1.6-1.6 5.4 5.4 0 0 1 2.5-.6 4.6 4.6 0 0 1 3.5 1.4 5.9 5.9 0 0 1 1.3 4.2 10.3 10.3 0 0 1-1.6 6.2 5.5 5.5 0 0 1-4.6 2.1zm5.3-7.1a2.8 2.8 0 0 0 .9-2.3 2.9 2.9 0 0 0-1.6-2.6 3.3 3.3 0 0 0-1.7-.4 3.1 3.1 0 0 0-3.2 3.2 2.8 2.8 0 0 0 .9 2.3 3.6 3.6 0 0 0 4.7-.1zM52.6 36.8h177.9v1.5H52.6z"/>
                            <path d="M56.1 34.7a6.4 6.4 0 0 1-2.5-2.4 8.1 8.1 0 0 1 0-7.4 7.2 7.2 0 0 1 2.5-2.4 7.4 7.4 0 0 1 3.6-.9 7 7 0 0 1 4.6 1.4v1.5a6.1 6.1 0 0 0-4.5-1.6 5.9 5.9 0 0 0-2.9.7 6.4 6.4 0 0 0-2 2 5.8 5.8 0 0 0 2 8 5.9 5.9 0 0 0 2.9.7 7.5 7.5 0 0 0 2.6-.4 5.7 5.7 0 0 0 2.1-1.3V34a7.1 7.1 0 0 1-4.8 1.5 7.6 7.6 0 0 1-3.6-.8zm10.7-12.8h8.6v1.3h-7.1V28h5.3v1.3h-5.3V34h7.1v1.3h-8.6zm21.7 1.2h-4.3v-1.2h10.1v1.3H90v12.1h-1.5zm7.7-1.2h5.2a4.6 4.6 0 0 1 3.2 1 3.6 3.6 0 0 1 1.1 2.9 3.8 3.8 0 0 1-3.3 3.8l3.2 5.8H104l-3.1-5.7h-3.2v5.7h-1.5zm5 6.4a3.4 3.4 0 0 0 2.2-.7 2.4 2.4 0 0 0 .8-1.9 2.2 2.2 0 0 0-.8-2 3.3 3.3 0 0 0-2.2-.6h-3.5v5.2zm6.7-6.4h8.6v1.3h-7.1V28h5.3v1.3h-5.3V34h7.1v1.3h-8.6zm10.9 0h5.9a3.2 3.2 0 0 1 3.6 3.6 3.7 3.7 0 0 1-.5 1.8 2.8 2.8 0 0 1-1.3 1.1 2.9 2.9 0 0 1 2.2 3.2 4.6 4.6 0 0 1-.5 2 3.3 3.3 0 0 1-3.2 1.7h-6.3zm5.8 5.9a2.3 2.3 0 0 0 1.6-.6 2.7 2.7 0 0 0 .6-1.7 2.8 2.8 0 0 0-.6-1.8 2.4 2.4 0 0 0-1.8-.5h-4.2v4.6zm.1 6.2a3.1 3.1 0 0 0 1.9-.6 2.2 2.2 0 0 0 .6-1.9 2.3 2.3 0 0 0-.7-1.9 3.2 3.2 0 0 0-2.1-.6h-4.2v5zm7.6.2a5 5 0 0 1-1.3-3.7v-8.6h1.5v8.7a3.4 3.4 0 0 0 1 2.7 5 5 0 0 0 5.7 0 3.4 3.4 0 0 0 1-2.7v-8.7h1.5v8.6a5 5 0 0 1-1.3 3.7 6.6 6.6 0 0 1-8 0zm12-12.3h1.5v13.4h-1.5zm4.1 0h8.6v1.3h-7.1V28h5.3v1.3h-5.3V34h7.1v1.3h-8.6zM168 35.3l-1.8-.5v-1.4a10.5 10.5 0 0 0 3.9.8 5.4 5.4 0 0 0 2.5-.6 1.9 1.9 0 0 0 .8-1.7 2.7 2.7 0 0 0-.3-1.2 3.9 3.9 0 0 0-1-.8L170 29a9.5 9.5 0 0 1-2.7-1.7 3.2 3.2 0 0 1-.9-2.3 3.7 3.7 0 0 1 .5-1.8 4.4 4.4 0 0 1 1.5-1.2 5.9 5.9 0 0 1 2.3-.4l1.9.2 1.7.5v1.4a8 8 0 0 0-3.4-.7 4.6 4.6 0 0 0-2.3.6 1.8 1.8 0 0 0-.8 1.5 2 2 0 0 0 .3 1.1 2.8 2.8 0 0 0 1 .9l1.9.9 2.2 1a3.4 3.4 0 0 1 1.2 1.2 3.9 3.9 0 0 1 .4 1.8 3.2 3.2 0 0 1-1.2 2.6 5.7 5.7 0 0 1-3.6.9zm13.3-13.4h1.4l5.3 13.4h-1.5l-1.4-3.6h-6.2l-1.4 3.6H176zm-1.2-1.5a2.4 2.4 0 0 1-.7-1.8h1.1a1.5 1.5 0 0 0 .4 1.1 1.8 1.8 0 0 0 2.2 0 1.5 1.5 0 0 0 .4-1.1h1.1a2.4 2.4 0 0 1-.7 1.8 3.2 3.2 0 0 1-3.9 0zm4.6 10.1l-2.7-6.9-2.6 6.8zm12.9-8.6h8.6v1.3h-7.1V28h5.3v1.3h-5.3v6.1h-1.5zm13.5 0h1.4l5.3 13.4h-1.5l-1.4-3.6h-6.2l-1.4 3.6h-1.5zm3.3 8.5l-2.7-6.8-2.6 6.8zm7.7 4.3a6.4 6.4 0 0 1-2.5-2.4 8.1 8.1 0 0 1 0-7.4 7.2 7.2 0 0 1 2.5-2.4 7.4 7.4 0 0 1 3.6-.9 6.9 6.9 0 0 1 4.6 1.5v1.5a6.1 6.1 0 0 0-4.5-1.6 5.9 5.9 0 0 0-2.9.7 6.4 6.4 0 0 0-2 2 5.8 5.8 0 0 0 2 8 5.9 5.9 0 0 0 2.9.7 7.5 7.5 0 0 0 2.6-.4 5.7 5.7 0 0 0 2.1-1.3V34a7.1 7.1 0 0 1-4.8 1.5 7.6 7.6 0 0 1-3.6-.8z"/>
                            <circle cx="20" cy="20" r="20" fill="#f6dd63"/>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';

import api from "@/api";
import MadeBy from "@/components/MadeBy.vue";
import Spinner from "@/components/Spinner.vue";
import Nav from "@/components/Nav";

export default {
  name: "About",
  components: {
    Markdown,
    MadeBy,
    Spinner,
    Nav
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
      api.getPage(this.$route.meta.slug, (err, page) => {
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

<style>
.content-wrap p {
  margin-bottom: 32px;
}
.content-wrap a {
  text-decoration: underline;
}
</style>


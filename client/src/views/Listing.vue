<template>

  <div class="listing flex flex-1 bg-primary text-white px-5 py-7 md:py-9 md:px-10 lg:px-20 lg:py-0">
    <div class="flex flex-col flex-1 max-w-screen-2xl lg:mx-auto">
      <div class="flex-1 lg:flex ">
        <div class="lg:w-1/3">
          <div class="listing-aside lg:fixed flex flex-col h-full lg:py-9">
            <div class="mb-6 lg:mb-0 flex-1">
              <nav id="nav">
                <router-link to="/about" class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase">Despre Proiect</router-link>
              </nav>
              <router-link class="relative inline-block my-5 py-3 pl-14 text-7xl font-normal" to="/">
                <span class="absolute left-2 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"></span>
                32,465
              </router-link>
              <p class="mb-4 lg:mb-16 text-2xl font-thin text-white text-opacity-80">This is a content area describing the web purpose and what users will find on it. It is cool to keep it short but explanatory</p>
              <div class="mb-8 hidden lg:block">
                <button @click="list = false; gallery = true" class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest" :class="{'opacity-60 border-r-0': list}">Galerie</button>
                <button @click="list = true; gallery = false" class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest" :class="{'opacity-60 border-l-0': gallery}">ListĂ</button>
              </div>
              <router-link class="hidden lg:block inline-block mb-2 py-3 underline text-2xl font-normal lg:text-xl lg:mb-4" to="/add">Adaugă povestea cuiva drag</router-link>
            </div>
            <MadeBy class="hidden lg:block"/>
          </div>
        </div>
        <div class="lg:relative lg:pl-8 lg:w-2/3">
          <transition name="listing-transition">
            <ul v-show="list" class="lg:flex lg:flex-row lg:flex-wrap lg:py-8">
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Cheryl Timms</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Tom Chadwick</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Flynn Newman</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Vinay Olsen</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Zayden Lu</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Kabir Odom</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Umaiza Pennington</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Killian Duke</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Tracey Nicholls</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Isobelle Cannon</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Lilia Stokes</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Jimmy Hudson</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Amanah Chandler</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Dorian Roy</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Ella-Rose Acosta</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Christiana Solomon</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Jaden Barrera</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Mayur Neal</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Beatrix Burgess</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Payton Hamer</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Zayna Newton</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Miles Mellor</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Lynden Estrada</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Alissa Gallagher</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Millie-Mae Boyle</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Nathan Monaghan</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Pearce Fuentes</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">Alissa Gallagher</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">**** *** *********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** ***********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ********</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">********* ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">****** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ***** ****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">* ***** *******</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *****</li>
              <li class="lg:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">***** *** *****</li>
            </ul>
          </transition>
          <transition name="listing-transition">
            <div v-show="gallery">galerie</div>
          </transition>
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
      },
      data: () => {
        return {
          list: true,
          gallery: false
        }
      }
    }
</script>

<style scoped>

  .listing-aside {
    /* max-width: calc(1536px/3); */
  }

  @media screen and (min-width: 1024px) {

    .listing-aside {
      max-width: calc((100vw - 160px) / 3);
    }
  }

  @media screen and (min-width: 1696px) {

    .listing-aside {
      max-width: calc(1536px/3);
    }
  }
  
  .listing-transition-enter-active {
    transition: all 0.2s ease;
  }

  .listing-transition-leave-active {
    transition: all 0.1s ease;
  }

  .listing-transition-enter-from,
  .listing-transition-leave-to {
    opacity: 0;
  }

</style>

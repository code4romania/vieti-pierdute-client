<template>
    
    <div class="add flex-1 flex flex-col bg-primary text-white px-5 py-7 md:py-9 md:px-10 lg:px-20">
        <div class="flex-1 max-w-screen-2xl lg:mx-auto w-full">
            <nav id="nav">
            <router-link to="/about" class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase">Despre Proiect</router-link>
            </nav>
            <router-link class="relative inline-block my-5 py-3 pl-14 text-3xl font-normal" to="/">
                <span class="absolute left-2 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"></span>
                Adaugă povestea cuiva drag
            </router-link>
                
        </div>
    </div>

</template>
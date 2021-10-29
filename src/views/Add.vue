<template>
  <div class="flex flex-col flex-1 bg-black text-white px-5 py-7 md:py-9 md:px-10 lg:px-20">
    <div class="flex-1 max-w-screen-2xl lg:mx-auto w-full">
      <nav id="nav">
        <router-link
          to="/despre"
          class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase hover:text-opacity-100"
        >Despre Proiect</router-link>
      </nav>
      <Heading :level="1">
        <a @click="$router.go(-1)" class="cursor-pointer">
          <span
            class="absolute left-0 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"
          ></span>
        </a>
        <span class="pl-10">
          Adaugă povestea cuiva drag
        </span>
      </Heading>
      <p class="text-2xl font-light mb-10">
        This is a content area describing the web purpose and what users will
        find on it. It is cool to keep it short but explanatory
      </p>
      <form ref="form" @submit="checkForm" class=" max-w-4xl">
        <InputGroup>
          <Input
            label="Prenume:"
            placeholder="Andrei"
            name="victimFirstName"
            v-model="story.victimFirstName"
          />
          <Input
            label="Nume:"
            placeholder="Popescu"
            name="victimLastName"
            v-model="story.victimLastName"
          />
        </InputGroup>
        <InputGroup>
          <Input label="Vârsta:" name="age" placeholder="47" v-model="story.age" />
          <Input
            label="Ocupatie:"
            name="occupation"
            placeholder="sau ce ii placea sa faca?"
            v-model="story.occupation"
          />
        </InputGroup>
        <InputGroup>
          <Input
            label="Județ:"
            name="city"
            placeholder="Alege judetul"
            v-model="story.city"
          />
          <Input
            label="Localitate:"
            name="county"
            placeholder="Alege localitatea"
            v-model="story.county"
          />
        </InputGroup>
        <Input
          label="Scrie-ne povestea lui"
          name="content"
          type="textarea"
          v-model="story.content"
        />
        <Heading :level="3">Datele tale</Heading>
        <p class="text-2xl font-light mb-10">
          This is a content area describing the web purpose and what users will
          find on it. It is cool to keep it short but explanatory
        </p>
        <InputGroup>
          <Input
            label="Prenume:"
            placeholder="Vasile"
            name="firstName"
            v-model="story.authorFirstName"
          />
          <Input
            label="Nume:"
            placeholder="Popescu"
            name="lastName"
            v-model="story.authorLastName"
          />
        </InputGroup>
        <InputGroup>
          <Input
            label="Email"
            placeholder="andrei@gmail.com"
            name="email"
            v-model="story.authorEmail"
          />
        </InputGroup>
        <InputGroup fullWidth>
          <Checkbox name="terms" v-model="story.agreeTerms"
            >This is a content area describing the web purpose and what users
            will find on it. It is cool to keep it short but
            explanatory</Checkbox
          >
        </InputGroup>
        <InputGroup fullWidth>
          <Checkbox name="gdpr" v-model="story.agreeTerms2"
            >This is a content area describing the web purpose and what users
            will find on it. It is cool to keep it short but
            explanatory</Checkbox
          >
        </InputGroup>
        <input type="submit" value=" Trimite povestea" />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Heading from "../components/Heading";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import Checkbox from "../components/Checkbox";

export default {
  components: { InputGroup, Heading, Input, Checkbox },
  data: () => ({
    story: {
      victimFirstName: null,
      victimLastName: null,
      age: null,
      occupation: null,
      city: null,
      county: null,
      content: null,
      authorFirstName: null,
      authorLastName: null,
      authorEmail: null,
      agreeTerms: false,
      agreeTerms2: false
    }
  }),
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      if (this.story.agreeTerms && this.story.agreeTerms2) {
        axios
          .post(
            process.env.VUE_APP_API + "/stories",
            this.story
          )
          .catch(function(error) {
            if (error.response) {
              console.log(error.response.data);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          });
      }
    }
  }
};
</script>

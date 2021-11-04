<template>
  <div>
    <div class="max-w-screen-2xl mx-auto">
      <div class="p-4 lg:p-8">
        <div>
          <router-link
            to="/despre"
            class="inline-block py-3 px-2 font-semibold text-base tracking-wide text-white text-opacity-60 hover:text-opacity-100"
            >Despre proiect</router-link
          >
        </div>
        <Heading :level="1">
          <a @click="$router.go(-1)" class="cursor-pointer">
            <span
              class="absolute left-0 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"
            ></span>
          </a>
          <div class="pl-10">
            Adaugă povestea cuiva drag
          </div>
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
              :error="this.errors.victimFirstName"
              v-model="story.victimFirstName"
            />
            <Input
              label="Nume:"
              placeholder="Popescu"
              name="victimLastName"
              :error="this.errors.victimLastName"
              v-model="story.victimLastName"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Vârsta:"
              type="number"
              step="1"
              name="age"
              placeholder="47"
              :error="this.errors.age"
              v-model="story.age"
            />
            <Input
              label="Ocupația"
              name="occupation"
              placeholder="sau ce îi plăcea să facă?"
              :error="this.errors.occupation"
              v-model="story.occupation"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Județ:"
              name="city"
              placeholder="Alege judetul"
              v-model="story.county"
              :error="errors.county"
            />
            <Input
              label="Localitate:"
              name="county"
              placeholder="Alege localitatea"
              v-model="story.city"
              :error="errors.city"
            />
          </InputGroup>
          <Input
            label="Scrie-ne povestea lui"
            name="content"
            type="textarea"
            v-model="story.content"
            :error="errors.content"
          />
          <Heading :level="3">Datele tale</Heading>
          <p class="text-2xl font-light mb-10">
            This is a content area describing the web purpose and what users
            will find on it. It is cool to keep it short but explanatory
          </p>
          <InputGroup>
            <Input
              label="Prenume:"
              placeholder="Vasile"
              name="firstName"
              v-model="story.authorFirstName"
              :error="errors.authorFirstName"
            />
            <Input
              label="Nume:"
              placeholder="Popescu"
              name="lastName"
              v-model="story.authorLastName"
              :error="errors.authorLastName"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Email"
              placeholder="andrei@gmail.com"
              name="email"
              v-model="story.authorEmail"
              :error="errors.authorEmail"
            />
          </InputGroup>
          <InputGroup fullWidth>
            <Checkbox
              name="terms"
              v-model="story.agreeTerms"
              :error="errors.agreeTerms"
              >This is a content area describing the web purpose and what users
              will find on it. It is cool to keep it short but
              explanatory</Checkbox
            >
          </InputGroup>
          <InputGroup fullWidth>
            <Checkbox
              name="gdpr"
              v-model="story.agreeTerms2"
              :error="errors.agreeTerms2"
              >This is a content area describing the web purpose and what users
              will find on it. It is cool to keep it short but
              explanatory</Checkbox
            >
          </InputGroup>
          <button
            type="submit"
            class="inline-block py-3 text-2xl underline font-normal lg:text-xl xl:text-2xl"
          >
            Trimite povestea
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { validate } from "../lib/validate";
import { storySchema } from "../lib/schema";
import Heading from "../components/Heading";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import Checkbox from "../components/Checkbox";

export default {
  components: { InputGroup, Heading, Input, Checkbox },
  data: () => ({
    errors: {},
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
      const { errors, isValid } = validate(this.story, storySchema);
      this.errors = errors;

      if (isValid) {
        axios
          .post(process.env.VUE_APP_API + "/stories", this.story)
          .catch(error => {
            if (error.response) {
              this.errors = error.response.data.data.errors;
            }
          });
      }
    }
  }
};
</script>

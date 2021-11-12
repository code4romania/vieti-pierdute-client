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
        <form ref="form" @submit="checkForm" class="max-w-4xl mb-32">
          <InputGroup>
            <Input
              label="Prenumele"
              placeholder="Andrei"
              name="victimFirstName"
              :error="this.errors.victimFirstName"
              v-model="story.victimFirstName"
            />
            <Input
              label="Numele"
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
              min="1"
              max="110"
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
              label="Județul"
              name="county"
              placeholder="Alege judetul"
              v-model="story.county"
              :error="errors.county"
            />
            <Input
              label="Localitatea"
              name="city"
              placeholder="Alege localitatea"
              v-model="story.city"
              :error="errors.city"
            />
          </InputGroup>
          <Input
            label="Scrie-ne povestea în câte caractere crezi că este suficient"
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
              label="E-mail:"
              type="email"
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
          <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <reCaptcha
              v-if="showRecaptcha"
              :siteKey="recaptchSiteKey"
              size="normal" 
              theme="dark"
              locale="ro"
              ref="reCaptcha"
              v-model="story.reCaptcha"
              @verify="reCaptchaVerified"
              @expire="recaptchaExpired"
              @fail="recaptchaFailed"
            ></reCaptcha>
            <button type="submit" class="inline-block py-3 text-2xl underline font-normal lg:text-2xl xl:text-3xl">
              Trimite povestea
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api';
import reCaptcha from '@/api/reCaptcha';

import { validate } from "@/lib/validate";
import { storySchema } from "@/lib/schema";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import InputGroup from "@/components/InputGroup";
import Checkbox from "@/components/Checkbox";

export default {
  components: {
    InputGroup,
    Heading,
    Input,
    Checkbox,
    reCaptcha
  },
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
      agreeTerms2: false,
      recaptcha: null
    },
    showRecaptcha: true
  }),
  computed: {
    recaptchSiteKey() {
      return process.env.VUE_APP_SITE_KEY_RECAPTCHA
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      const { errors, isValid } = validate(this.story, storySchema);
      this.errors = errors;

      // TODO: scrolling behaviour or smth to let the user know he error above his screen view

      // console.log(this.errors)
      console.log(this.story)

      // debugger

      if (isValid) {
        api.postStory(this.story)
          .then(response => {
            // TODO: update screen with thank you, e-mail notification & maybe smth to click further on?
            console.log(response)
          })
          .catch(error => {
            if (error.response) {
              this.errors = error.response.data.data.errors;
            }
          });
      }
    },
    reCaptchaVerified(response) {
      console.log(response);
      this.story.recaptcha = response;
    },
    recaptchaExpired() {
      this.$refs.reCaptcha.reset();
    },
    recaptchaFailed(err) {
      console.log('captch failed', err)
    }
  }
};
</script>

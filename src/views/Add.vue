<template>
  <div>
    <div class="max-w-screen-2xl mx-auto">
      <div class="p-4 lg:p-8">
        <Nav />
        <Heading :level="1">
          <a
            @click="$router.go(-1)"
            class="cursor-pointer"
          >
            <span
              class="absolute left-0 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"
            ></span>
          </a>
          <div class="pl-10">
            <span v-if="!isStorySent">Adaugă povestea cuiva drag</span>
            <span v-else>Mulțumim</span>
          </div>
        </Heading>
        <p  v-if="!isStorySent" class="text-2xl font-light mb-10 max-w-4xl">
          Cineva drag nu-ți mai este azi alături din cauza Covid-19.<br />Povestea
          vieții însă va rămâne scrisă mereu.
        </p>
        <div v-if="isStorySent" class="mb-10 max-w-xl">
          <div class="text-6xl font-thin mb-8">Ai trimis povestea.</div>
          <div class="text-lg font-thin">
            <div class="mb-4">Povestea ta a fost trimisă către echipa noastră.</div>
            <div class="mb-4">
              Te vom contacta în scurt timp pentru a ne asigura că toate datele pe
              care le-am primit sunt corecte.
            </div>
            <div class="mb-4">
              Te anunțăm că este posibil ca povestea pe care ai scris-o să sufere
              mici modificări la editare, fără să îi fie alterat în vreun fel
              sensul. Din acest motiv, te rugăm să ne permiți câteva zile până la
              publicarea ei. Pentru orice clarificări, ne poți contacta la
              <a href="mailto:vietipierdute@code4.ro" class="underline">vietipierdute@code4.ro</a>
            </div>
          </div>
          <ul class="mt-12 mb-8">
            <li>
              <a @click="reset" class="cursor-pointer inline-block mb-2 py-3 text-2xl font-light lg:text-xl xl:text-2xl">
                <span class="underline">Adaugă altă poveste</span>
              </a>
            </li>
            <li>
              <router-link to="/povesti" class="inline-block mb-2 py-3 text-2xl font-light lg:text-xl xl:text-2xl">
                <span class="underline">Descoperă toate poveștile</span>
              </router-link>
            </li>
          </ul>
        </div>
        <form
          v-else
          ref="form"
          @submit="checkForm"
          class="max-w-4xl mb-32 pr-4 md:px-0"
        >
          <InputGroup>
            <Input
              label="Prenumele:"
              placeholder="Ion/Ioana"
              name="victimFirstName"
              :error="this.errors.victimFirstName"
              v-model="story.victimFirstName"
              class="col-span-2"
            />
            <div class="col-span-2">
              <Input
                label="Numele:"
                placeholder="Popescu"
                name="victimLastName"
                :error="this.errors.victimLastName"
                v-model="story.victimLastName"
                :disabled="story.hasLastNamePrivate"
                class="mb-4"
              />
              <Checkbox
                name="hasLastNamePrivate"
                v-model="story.hasLastNamePrivate"
                :error="errors.hasLastNamePrivate"
                >Doresc să rămână privat</Checkbox
              >
            </div>
          </InputGroup>
          <InputGroup>
            <Input
              label="Vârsta:"
              type="number"
              min="1"
              max="110"
              step="1"
              name="age"
              placeholder="ani împliniți"
              :error="this.errors.age"
              v-model="story.age"
              class="col-span-1"
            />
            <Input
              label="Ocupația:"
              name="occupation"
              placeholder="Inginer electronist, pasionat de fotbal și istoria religiilor"
              :error="this.errors.occupation"
              v-model="story.occupation"
              class="col-span-1 sm:col-span-3"
            />
          </InputGroup>
          <InputGroup>
            <Select
              label="Județul:"
              placeholder="Alege județul"
              name="county"
              v-model="story.county"
              :options="this.allCounties"
              :error="errors.county"
              class="col-span-2"
              @change="this.loadCities(story.county)"
            />
            <Select
              label="Localitatea:"
              placeholder="Alege localitatea"
              name="city"
              class="col-span-2"
              v-model="story.city"
              :options="this.currentCities"
              :error="errors.city"
              :disabled="this.currentCities.length === 0"
            />
          </InputGroup>
          <Textarea
            label="Povestea ei/lui:"
            placeholder="Povestește-i viața sau momente importante care să rămână scrise despre persoana pe care ai pierdut-o."
            name="content"
            type="textarea"
            v-model="story.content"
            :error="errors.content"
          />
          <Heading :level="3" class="mt-16">Datele tale</Heading>
          <p class="text-2xl font-light mb-10">
            Te vom contacta pentru a ne asigura că toate datele introduse sunt
            corecte.
          </p>
          <InputGroup>
            <Input
              label="Prenumele tău:"
              placeholder="Alin/Alina"
              name="firstName"
              v-model="story.authorFirstName"
              :error="errors.authorFirstName"
              class="col-span-2"
            />
            <Input
              label="Numele tău:"
              placeholder="Popescu"
              name="lastName"
              v-model="story.authorLastName"
              :error="errors.authorLastName"
              class="col-span-2"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Relația pe care ați avut-o:"
              placeholder="Fratele mai mic"
              name="relation"
              v-model="story.authorRelation"
              :error="errors.authorRelation"
              class="col-span-2"
            />
            <Input
              label="E-mail:"
              type="email"
              placeholder="andrei@gmail.com"
              name="email"
              v-model="story.authorEmail"
              :error="errors.authorEmail"
              class="col-span-2"
            />
          </InputGroup>
          <InputGroup fullWidth>
            <Checkbox
              name="terms"
              v-model="story.agreeTerms"
              :error="errors.agreeTerms"
              >Prin completarea acestui formular declar că sunt de acord cu
              prelucrarea datelor personale furnizate în conformitate cu
              prevederile specificate în
              <router-link to="/termeni-si-conditii" class="underline">termenii și condițiile</router-link>
              de utilizare ale acestui website.</Checkbox
            >
          </InputGroup>
          <InputGroup fullWidth>
            <Checkbox
              name="gdpr"
              v-model="story.agreeTerms2"
              :error="errors.agreeTerms2"
              >Declar că am citit și sunt de acord cu
              <router-link to="/politica-de-confidentialitate" class="underline">politica de confidențialitate</router-link>
              și
              <router-link to="/termeni-si-conditii" class="underline">termenii și condițiile</router-link>
              de utilizare ale acestui website.</Checkbox
            >
          </InputGroup>
          <div
            class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-12"
          >
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
              class="mb-8 md:mb-0"
            ></reCaptcha>
            <div class="flex flex-col">
              <div v-if="Object.keys(errors).length !== 0" class="text-red-400 text-center lg:text-right">Te rugăm corectează erorile și retrimite.</div>
              <button
                type="submit"
                class="inline-block py-3 text-2xl underline font-light lg:text-2xl xl:text-3xl"
              >
                <Spinner v-if="isLoading" />
                <div v-else>Trimite povestea</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import reCaptcha from "@/api/reCaptcha";

import { validate } from "@/lib/validate";
import { storySchema } from "@/lib/schema";

import allCounties from "@/data/counties.json";
import allCities from "@/data/cities.json";

import Nav from "@/components/Nav";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Select from "@/components/Select";
import InputGroup from "@/components/InputGroup";
import Checkbox from "@/components/Checkbox";
import Spinner from "@/components/Spinner";

export default {
  components: {
    Nav,
    InputGroup,
    Heading,
    Input,
    Textarea,
    Select,
    Checkbox,
    reCaptcha,
    Spinner
  },
  data: () => ({
    errors: {},
    story: {
      victimFirstName: null,
      victimLastName: null,
      age: null,
      occupation: null,
      city: 0,
      county: 0,
      content: null,
      authorFirstName: null,
      authorLastName: null,
      authorEmail: null,
      agreeTerms: false,
      agreeTerms2: false,
      recaptcha: null
    },
    allCounties,
    allCities,
    currentCities: [],
    showRecaptcha: true,
    isStorySent: false,
    isLoading: false
  }),
  computed: {
    recaptchSiteKey() {
      return process.env.VUE_APP_SITE_KEY_RECAPTCHA;
    }
  },
  mounted() {
    document.body.classList.remove("bg-white", "text-black");
    document.body.classList.add("bg-black", "text-white");
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();

      const validationSchema = this.story.hasLastNamePrivate
        ? storySchema.filter(schema => schema.key !== 'victimLastName')
        : storySchema;
      const { errors, isValid } = validate(this.story, validationSchema);

      this.errors = errors;

      // console.log(this.errors)
      // console.log(this.story);

      if (isValid) {
        this.isLoading = true;

        api
          .postStory(this.story)
          .then(response => {
            // debugger;

            this.isLoading = false;
            this.isStorySent = true;
          })
          .catch(error => {
            if (error.response) {
              this.isLoading = false;
              this.errors = error.response.data.data.errors;
            }
          });
      }
    },
    reset() {
      this.isStorySent = false;
      this.isLoading = false;
      this.story = {};
    },
    loadCities(county) {
      this.currentCities = [];
      this.story.city = 0;

      allCities.forEach(city => {
        if (city.county === county) {
          this.currentCities.push(city);
        }
      });
    },
    reCaptchaVerified(response) {
      this.story.recaptcha = response;
    },
    recaptchaExpired() {
      this.$refs.reCaptcha.reset();
    },
    recaptchaFailed(err) {
      console.log("captch failed", err);
    }
  }
};
</script>

const isEmpty = value => !value;
const isNotNumber = value => !Number.isInteger(value);

export const storySchema = [
  {
    key: "victimFirstName",
    condition: isEmpty,
    error: "Vă rugăm introduceți prenumele"
  },
  {
    key: "victimLastName",
    condition: isEmpty,
    error: "Vă rugăm introduceți numele"
  },
  {
    key: "age",
    condition: isEmpty,
    error: "Vă rugăm introduceți vârsta"
  },
  {
    key: "age",
    condition: isNotNumber,
    error: "Vă rugăm introduceți doar cifre"
  },
  {
    key: "occupation",
    condition: isEmpty,
    error: "Vă rugăm introduceți ocupația"
  },
  {
    key: "county",
    condition: isEmpty,
    error: "Vă rugăm alegeți județul"
  },
  {
    key: "city",
    condition: isEmpty,
    error: "Vă rugăm alegeți localitatea"
  },
  {
    key: "content",
    condition: isEmpty,
    error: "Vă rugăm introduceți povestea"
  },
  {
    key: "authorFirstName",
    condition: isEmpty,
    error: "Vă rugăm introduceți prenumele dumneavoastra"
  },
  {
    key: "authorLastName",
    condition: isEmpty,
    error: "Vă rugăm introduceți numele dumneavoastra"
  },
  {
    key: "authorEmail",
    condition: isEmpty,
    error: "Vă rugăm introduceți e-mail-ul dumneavoastra"
  },
  {
    key: "agreeTerms",
    condition: isEmpty,
    error: "Va rugam bifati asta"
  },
  {
    key: "agreeTerms2",
    condition: isEmpty,
    error: "Va rugam bifati si asta"
  }
];

const isEmpty = value => !value;
const isNotNumber = value => !Number.isInteger(parseInt(value, 10));

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
    error: "Vă rugăm introduceți prenumele dumneavoastră"
  },
  {
    key: "authorLastName",
    condition: isEmpty,
    error: "Vă rugăm introduceți numele dumneavoastră"
  },
  {
    key: "authorEmail",
    condition: isEmpty,
    error: "Vă rugăm introduceți e-mail-ul dumneavoastră"
  },
  {
    key: "agreeTerms",
    condition: isEmpty,
    error: "Va rugăm bifati asta"
  },
  {
    key: "agreeTerms2",
    condition: isEmpty,
    error: "Va rugam bifati si asta"
  }
];

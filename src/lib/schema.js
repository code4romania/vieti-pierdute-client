const isEmpty = value => !value;
const isNotNumber = value => !Number.isInteger(value);

export const storySchema = [
  {
    key: "victimFirstName",
    condition: isEmpty,
    error: "Va rugam introduceti prenumele victimei Covid-19"
  },
  {
    key: "victimLastName",
    condition: isEmpty,
    error: "Va rugam introduceti numele victimei Covid-19"
  },
  {
    key: "age",
    condition: isEmpty,
    error: "Va rugam introduceti varsta victimei Covid-19"
  },
  {
    key: "age",
    condition: isNotNumber,
    error: "Va rugam introduceti doar cifre"
  },
  {
    key: "occupation",
    condition: isEmpty,
    error: "Va rugam introduceti ocupația victimei Covid-19"
  },
  {
    key: "county",
    condition: isEmpty,
    error: "Va rugam introduceti județul victimei Covid-19"
  },
  {
    key: "city",
    condition: isEmpty,
    error: "Va rugam introduceti localitatea victimei Covid-19"
  },
  {
    key: "content",
    condition: isEmpty,
    error: "Va rugam introduceti povestea victimei Covid-19"
  },
  {
    key: "authorFirstName",
    condition: isEmpty,
    error: "Va rugam introduceti prenumele dumneavoastra"
  },
  {
    key: "authorLastName",
    condition: isEmpty,
    error: "Va rugam introduceti numele dumneavoastra"
  },
  {
    key: "authorEmail",
    condition: isEmpty,
    error: "Va rugam introduceti e-mail-ul dumneavoastra"
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

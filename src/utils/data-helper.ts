import { faker } from '@faker-js/faker';

// Generates a random user every time a test runs
export const generateUserData = () => ({
  username: faker.person.firstName().replace(/[^a-zA-Z0-9]/g, '') + faker.number.int({ max: 100 }),
  email: faker.internet.email(),
  password: faker.internet.password({ length: 12 })
});

// Generates random text for blog content
export const generateArticleData = () => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  body: faker.lorem.paragraphs(2),
  tagList: [faker.lorem.word(), faker.lorem.word()]
});

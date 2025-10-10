import { faker } from '@faker-js/faker';

const randomName = faker.person.firstName();
const randomDesc = faker.company.buzzPhrase();

 const randomText = faker.lorem.paragraphs(5); // Generate paragraphs of text
 const trimmedText = randomText.substring(0, 500); 

const randomSubject = faker.lorem.paragraph(5)
const trimSubject = randomSubject.substring(0,25)

module.exports = {trimmedText,randomName,randomDateSimple,randomText}
const extractUserInfo = (user) => {
    const {
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages
    } = user;
    const introString = `${firstName} ${lastName} lives in ${country}. \
        They are ${age} years old. They work as a(n) ${job}.\n`;
    let skillsString = `They teach `;
    skills.slice(0,-1).forEach( (s) => skillsString += `${s}, `);
    skillsString = skillsString.slice(0,-2) + ` and ${skills[skills.length-1]}.\n`;
    const endString = `They speak ${languages.join(', ')}`;
    return introString + skillsString + endString;
}

const AY = extractUserInfo({
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
})

console.log(AY);
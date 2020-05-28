# LAB - Class 04

## Project: Notesy

### Author: Ahmad K. Al-Mahasneh

### Links and Resources

- [submission PR](https://github.com/ahmadShakespeare/notesy/pull/1)
- [ci/cd](https://github.com/ahmadShakespeare/notesy/actions/runs/117954733)

### Setup

#### `.env` requirements (where applicable)

 no environment variables are used.

- `MONGODB_URI` - mongodb://localhost:27017/notes-ta

#### How to initialize/run your application (where applicable)

 `npm run start`
 
 ```
 Adding notes

 node index.js -a <your note> -c <category>
 node index.js --a <your note> --c <category>
 node index.js -add <your note> -category <category>
 node index.js --add <your note> -category <category>

 listing items

 node index.js -l <note wanted>
 node index.js --l <note wanted>
 node index.js -list <note wanted> 
 node index.js --list <note wanted>

 listing items by category

 node index.js -l <note wanted> <category>
 node index.js --l <note wanted> <category>
 node index.js -list <note wanted> <category>
 node index.js --list <note wanted> <category>

 Deleting items

 node index.js -d <id>
 node index.js --d <id>
 node index.js -delete <id> 
 node index.js --delete <id>

updating items

  node index.js -u <id> --text <new note>
 node index.js --u <id> --text <new note>
 node index.js -update <id> --text <new note>
 node index.js --update <id> --text <new note>
 

 ```

#### Tests

- How do you run tests?
 npm run test
- Any tests of note?
 jest --coverage --verbose supergoose
- Describe any tests that you did not complete, skipped, etc
 all tests passed

#### UML

i will provide it as soon as possible.
# employeemanagementsystem
```A proffesional employee management system

if the tailwind is not working type in terminal (ctrl+c) then (npm run dev)
then it will start working

e.preventDefault() -> jisse default behaviour prevent ho jayega.(event listener)
value{password}
onchange{}
onSubmit{}
what is mean by h-screen
context-API me data centralised kr dete hai 
set and get localstorage
create a json data of 5 employees,each employee contains id,email and password make sure to give them password 123, do one more thing create another json of 1 admin with same properties

this is my data 
do one thing, give each employee with task array with 3-10 task with properties like active(true or false),new task (true or false), completed true or false,failed (true or false),and task title,task description , task date,task category

useEffect side stack me ek function ko run krta hai 

child ke through parent me function pass kr diya hai 

data.tasks.map React me array ko loop karne ke liye hota hai 👇
Simple words me: har task par ek-ek karke kaam karega.

It's all about localstorage and context api 

Two way binding:-
Two-way binding connects data (state) and view (UI) so changes in one are instantly reflected in the other.
Like this:

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}</p>
    </>
  );
}

Learn Hoisting:

```
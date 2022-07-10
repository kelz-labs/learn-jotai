Dokumentasi belajar jotai saya. Kalo sekiranya ada yang salah, fell free to correct it. 

Jotai adalah sebuah state management yang minimal, atomic model, dan terinspirasi dari **recoil**. Btw, creatornya jotai sama juga dengan zustand. 

**Mengapa jotai?** 

- Minimal. 
- Namanya keren(preferensi pribadi hehe). 
- Avoid context provider hell. 

## A. Instalasi 

```
yarn add jotai
```

## B. Example

```typescript
// store.ts 
import { atom } from "jotai"; 

export const someAtom = atom(0); 
```

```typescript
// App.tsx 
import { useAtom } from "jotai"; 
import { someAtom } from "./store"; 

const App = () => {
  const [increment, setIncrement] = useAtom(someAtom); 
  return (
    <>
      <h1>Nilai: {increment}</h1>
      <button onClick={() => setIncrement(increment + 1)}>Pencet saya</button> 
    </>
  )
}

export default App; 
```

Yep, mirip banget kan dengan `useState`?

## C. Referensi

Beberapa referensi untuk belajar jotai: 

a. Dokumentasi: https://jotai.org/
b. Videonya pak Jack Herrington: 
   - https://www.youtube.com/watch?v=x9usS4l1VD0 
   - https://www.youtube.com/watch?v=eVfw4pRDUIY
c. Course jotai di Egghead langsung dari Daishi Kato: https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0 

Sedikit saran buat yang mau belajar dari Free Course Daishi Katou nya: di beberapa bagian video, **coba lambatkan temponya, karena agak kecepetan kalo menurutku.**

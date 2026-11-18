import { createSignal, createEffect } from 'solid-js'

const App = () => {
  const [getD, setD] = createSignal('Nothing');
  createEffect( () => {
    const r = async () => {
      try{
        const f = await fetch('/api');
        const d = await f.json();
        setD(d.message);
      } catch(e) {
        console.error(e);
      }
    }
    setTimeout(() => r(), 1500);
  } );

  return (<>
    <h1>Hello</h1>
    <h3>It will send request to server in 1.5s then show resutls below</h3>
    <p>{getD()}</p>
  </>)
}

export default App;
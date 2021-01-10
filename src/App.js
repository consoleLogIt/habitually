import {useState} from 'react';

//material ui components
import { Grid } from "@material-ui/core";
import {useStore} from 'react-redux';
 // prject components
import { Sidebar, HomeView } from "./Components";

function App() {
  const [update,setUpdate] = useState(false);
  const store = useStore();
  

  store.subscribe(()=>{
    setUpdate(!update)
  })

  return (
    <Grid container  >
      <Sidebar />
      <HomeView />
    </Grid>
  );
}

export default App;

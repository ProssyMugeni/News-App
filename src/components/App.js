import React from 'react'
import ChannelsField from './ChannelsField'
import Button from '../containers/Button'
import TopNews from '../containers/TopNews'

const App = () => (
  <div>
      <h1 style={{color:'gold', backgroundColor:'hotpink', textAlign:'center', padding:'20px'}}>Tunga World News </h1>
    < ChannelsField />
    <Button />
    <TopNews />
  </div>
)

export default App;

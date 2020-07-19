import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import Color from './Color';


function Routes() {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };

  const [colors, setColors] = useState(initialColors);

  const addColor = color => {
    setColors(colors => ({...colors, ...color}));
  };

  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <AddColorForm addColor={addColor} />
      </Route>
      <Route path="/colors/:color">
        <Color colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
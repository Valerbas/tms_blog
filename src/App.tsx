import React , { useState, useEffect } from 'react';
import './App.scss';
import { Button } from './components/MyButton/Button';
import { Input } from './components/Input/Input'
import { AuthPageWrapper } from './components/AuthPageWrapper/AuthPageWrapper';
import { IconMark } from './components/Icon/IconMark';
import { IconDown } from './components/Icon/IconDown';
import { IconUp } from './components/Icon/IconUp';


function App() {
  return (
    <div className="App">
      <Button className="button__primary" text="Primary" disabled={false} />
      <Button className="button__secondary" text="Secondary" disabled={false}/>
      <Button className="button__secondary-2" text="Secondary 2" disabled={false}/>
      <Button className="button__mark" text="Button with icon" icon={<IconMark className="icon__mark"/>} disabled={false}/>
      <Button className="button__icon" icon={<IconDown className="icon__down"/>}/>
      <Button className="button__icon" icon={<IconUp className="icon__up"/>}/>
    </div>
  );
}

export default App;


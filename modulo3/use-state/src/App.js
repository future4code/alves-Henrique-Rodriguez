import Post from './components/Post';
import React from 'react';

function App() {
  return (
    <>
      <h1>Post</h1>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/55'}
        fotoPost={'https://picsum.photos/200/156'}
      />
    </>
  );
};

export default App;
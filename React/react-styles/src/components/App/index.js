import React, { useState, createContext } from 'react';
import Post from '../Post/index';
import Header from '../Header/index';
import { Title } from './styles';

export const ThemeContext = createContext('dark');

function App() {
   const [theme, setTheme] = useState('dark');

   const [posts, setPosts] = useState([
      {
         id: Math.random(),
         title: 'Como aprender React',
         subtitle: 'Dicas práticas para iniciantes',
         likes: 124,
         read: false,
         removed: false,
      },
      {
         id: Math.random(),
         title: 'Node.js vs Deno',
         subtitle: 'Qual escolher em 2025?',
         likes: 89,
         read: true,
         removed: false,
      },
      {
         id: Math.random(),
         title: 'Os segredos do TypeScript',
         subtitle: 'Melhore seu código com tipagem',
         likes: 233,
         read: false,
         removed: false,
      },
      {
         id: Math.random(),
         title: 'Estilizando com Tailwind CSS',
         subtitle: 'Design moderno e responsivo',
         likes: 57,
         read: false,
         removed: false,
      },
      {
         id: Math.random(),
         title: 'Hooks avançados no React',
         subtitle: 'useCallback, useMemo e mais',
         likes: 176,
         read: false,
         removed: false,
      },
   ]);

   function handleToggleTheme() {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
   }

   function handleRefresh() {
      setPosts((prev) => [
         ...prev,
         {
            id: Math.random(),
            title: 'Como aprender JS',
            subtitle: 'Dicas práticas para iniciantes',
            likes: 11,
         },
      ]);
   }

   function handleRemovePost(postId) {
      // setPosts((prev) => prev.filter((post) => post.id !== postId));
      setPosts((prev) =>
         prev.map((post) =>
            post.id === postId ? { ...post, removed: true } : post
         )
      );
   }

   return (
      <ThemeContext.Provider value={theme}>
         <Header title="JStack's Blog" onToggleTheme={handleToggleTheme}>
            <Title as="h2">
               Posts da semana
               <button onClick={handleRefresh}>Atualizar</button>
            </Title>
         </Header>

         <hr />

         {posts.map((post) => (
            <Post
               key={post.id}
               likes={post.likes}
               onRemove={handleRemovePost}
               post={post}
            />
         ))}
      </ThemeContext.Provider>
   );
}

export default App;

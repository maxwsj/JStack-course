import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

export default function App() {
   return (
      <div className="min-h-screen grid place-items-center">
         <div>
            <Input />
            <Button>Hellow JStack</Button>
         </div>
      </div>
   );
}

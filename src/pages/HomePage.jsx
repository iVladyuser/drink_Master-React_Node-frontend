 import * as React from 'react';

 import AddDrink from 'components/HomePage/AddDrink/AddDrink';
 import { PreviewDrinks } from 'components/HomePage/PreviewDrinks/PreviewDrinks';
 
 export default function HomePage() {
   
   return (
     <>
       <AddDrink />
       <PreviewDrinks />
     </>
   );
 }
 

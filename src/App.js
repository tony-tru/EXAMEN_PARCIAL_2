
import FormHeroes from './heroes/form';
import TableHeroes from './heroes/table';

const App = () => {
  return (
    <div className="container">
     <div className='flex-row'>
       <div className='flex-large'>
         <h1>ALTA HEROES</h1>
<FormHeroes/>
       </div>
       <div className='flex-large'>
         <h1>TABLA HEROES</h1>
<TableHeroes/>
       </div>
     </div>
    </div>
  )
}

export default App;

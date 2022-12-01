
import FormHeroes from './heroes/form';
import TableHeroes from './heroes/table';

function App() {
  return (
    <div className="container">
     <div className='row'>
       <div className='col'>
         <h1>ALTA HEROES</h1>
<FormHeroes/>
       </div>
       <div className='col'>
         <h1>TABLA HEROES</h1>
<TableHeroes/>
       </div>
     </div>
    </div>
  );
}

export default App;

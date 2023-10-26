import Moon from '../assets/icons/Moon'
import Sun from '../assets/icons/Sun'
import Cross from '../assets/icons/Cross'
import Check from '../assets/icons/Check'
import { useState} from 'react'
import { ReactSortable } from "react-sortablejs";



function Todoo({darkMode, toggleDarkMode}) {

  const [newTask,setNewTask] = useState('');
  const [tasks,setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleClick = (i) => {
    const newArr = [...tasks];
    newArr.map((item, index)=> { 
      if (index === i) {
        item.isComplated = !item.isComplated
      }
    })
    setTasks(newArr)
  };

  function addTasks(event){
    if (event.key === 'Enter'){
      if (newTask === '') return
      setTasks(prvArray => [...prvArray, {
      title:newTask,
      isComplated: false
      }]);
      setNewTask("");
    }
    }

  function deleteTak(i){
    const tasksCopy =[...tasks]
    tasksCopy.splice(i,1);
    setTasks(tasksCopy);
  }

  const clearComplete = () => {
    const completedTasks = tasks.filter((task) => !task.isComplated);
    setTasks(completedTasks);
  };

  const filterTasks = (taskFilter) => {
    setFilter(taskFilter);
  };
  return (
    <>
      <section className='bg-imageLight dark:bg-imageDark bg-no-repeat bg-cover flex items-center justify-center py-32'>
        <div className='container mx-auto px-2 lg:w-2/4'>
              <div className='flex justify-between items-center pb-8'>
                  <h1 className='text-3xl font-bold text-white '>TODO</h1>
                  <button  onClick={toggleDarkMode} >
                  { darkMode ? <Moon /> : <Sun /> }
                  </button>
              </div>
              <div className='bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover p-4 flex items-center gap-8 rounded-lg'>
                  <div className='bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover border-2 border-light-LightGrayishBlue dark:border-dark-VeryDarkGrayishBlue w-6 h-6 rounded-full px-1'>
                  </div>
                  <input onKeyDown={addTasks} type="text" value={newTask} onChange={event => setNewTask(event.target.value)} className='bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover outline-none pt-5 w-full justify-center text-2xl -translate-y-2' placeholder='Creat a new Todo'/>              
              </div> 
        </div>    
      </section>
      <div className='bg-light-LightGrayishBlue dark:bg-dark-VeryDarkBlue bg-no-repeat bg-cover'>
        <div className='flex items-center justify-center'>
          <div className='container mx-auto px-2 lg:w-2/4'>
            <div className='relative -top-20'>
            <ReactSortable  list={tasks} setList={setTasks} className='max-h-[400px]  overflow-y-auto cursor-move'>
            {tasks.map((item,i) => (
              (filter === 'Completed' && !item.isComplated) || (filter === 'Active' && item.isComplated) ? <div key={i}></div> : (
                <div key={i} className='bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover p-4 flex items-center gap-8 border-b justify-between w-full first:rounded-t-lg lg:first:rounded-t-lg'>
                  <div className='flex items-center gap-6'>
                    <button onClick={() => handleClick(i)}  className={`${item.isComplated ? " bg-gradient-to-r from-primary-gradientFrom to-primary-gradientTo" : "bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover"} border-2 border-light-LightGrayishBlue dark:border-dark-VeryDarkGrayishBlue w-6 h-6 rounded-full px-1 transition-all`}>
                      {item.isComplated  ? <Check /> : ""}
                    </button>
                    <h2 onClick={() => handleClick(i)}  className={`${item.isComplated ? "line-through text-light-DarkGrayishBlue" : "" } bg-light-VeryLightGrsay dark:bg-dark-VeryDarkGrayishBlueHover text-2xl`}>{item.title}</h2>
                  </div>
                  <button  onClick={()=>deleteTak(i)} ><Cross /></button>
                </div> 
               )
            ))}
            </ReactSortable>
            <div className='bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover p-6 grid grid-cols-2 lg:grid-cols-3 gap-4 dark:text-light-DarkGrayishBlue rounded-b-lg'>
                    <div className=''>
                      <span>{tasks.length} items left</span>
                      </div>
                    <div className="hidden lg:flex items-center justify-between">

                      <button
                       className={`${filter === 'All' ? 'active text-primary-BrightBlue' : ''}`}
                       onClick={() => filterTasks('All')}
                      >All
                      </button>
                      <button 
                      className={`${ filter === 'Active' ? 'active text-primary-BrightBlue' : '' }`}

                      onClick={() => filterTasks('Active')}
                      >Active
                      </button>
                      <button className={`${ filter === 'Completed' ? 'active text-primary-BrightBlue' : ''}`}
                        onClick={() => filterTasks('Completed')}
                      >Completed
                      </button>
                    </div>
                    <div className='flex items-end justify-end'>
                    <button
                    onClick={() =>clearComplete()}
                    >
                      Clear Completed
                    </button>
                    </div>
            </div> 

            <div className='bg-light-VeryLightGray dark:bg-dark-VeryDarkGrayishBlueHover p-6 dark:text-light-DarkGrayishBlue rounded-lg lg:hidden mt-6'>
              <div className="flex items-center justify-center gap-4 ">
                  <button
                  className={`${filter === 'All' ? 'active text-primary-BrightBlue' : ''}`}
                  onClick={() => filterTasks('All')}
                  >All
                  </button>
                  <button 
                  className={`${ filter === 'Active' ? 'active text-primary-BrightBlue' : '' }`}

                  onClick={() => filterTasks('Active')}
                  >Active
                  </button>
                  <button className={`${ filter === 'Completed' ? 'active text-primary-BrightBlue' : ''}`}
                    onClick={() => filterTasks('Completed')}
                  >Completed
                  </button>
              </div>   
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todoo;

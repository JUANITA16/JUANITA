import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TaskContext';

const TaskFormPage = () => {


  const{register, handleSubmit} = useForm();
  const {createTask} = useTasks();

  const onSubmit = handleSubmit((data) => {
  createTask(data);
  })

  return (
<>
<div className=" bg-purple-100 max-w-md w-full p-10 rounded-md">
  <form onSubmit={onSubmit}>
    <input type="text" className="min-w-full bg-purple-200 text-black px-4 py2 my-4 rounded-md" placeholder="Title" {...register("title")} />
    <textarea rows="3" className="min-w-full bg-purple-200 text-black px-4 py2 my-4 rounded-md" {...register("description")}></textarea>
    <button>
      SAVE
    </button>
  </form>
</div>
</>
  )
}

export default TaskFormPage

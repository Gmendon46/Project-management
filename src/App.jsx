
import ProjectsSidebar from './Components/ProjectSidebar';
import NewPorject from './Components/NewPorject';
import NoProejctSelected from './Components/NoProejctSelected';
import { useState } from 'react';
import SelectedProject from './Components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  })
  
function handleAddTask(text){
  setProjectsState(prevState => {
    const taskId = Math.random();
    const newTask = {
      text: text,
      projectId : prevState.selectedProject,
      id: taskId
    }
    return{
      ...prevState,
      selectedProject: undefined,
      tasks: [...prevState.tasks, newTask]
    }
  })
}

function handleDeleteTask(id){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject : undefined,
      tasks: prevState.tasks.filter((task) => task.id !== id )
    }
  });
}

function handleSelectPorject(id){
  setProjectsState((prevState) => {
    return{
      ...prevState,
      selectedProject: id
    }
  })
}

function handleStartPorject() {
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject : null,
    }
  });
}

function handleAddProject(projectData){
  setProjectsState(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    return{
      ...prevState,
      selectedProject: undefined,
      projects: [...prevState.projects, newProject ]
    }
  })
}

const handelCancelAddProject = () =>{
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject : undefined,
    }
  });
}

function handleDeletePorject(){
  setProjectsState(prevState => {
    return{
      ...prevState,
      selectedProject : undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProject )
    }
  });
}

const selectedProjectid = projectsState.projects.find(project => project.id === projectsState.selectedProject)

let content = <SelectedProject project={selectedProjectid} onDelete={handleDeletePorject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />

if(projectsState.selectedProject === null) {
  content = <NewPorject onAdd={handleAddProject} onCancel={handelCancelAddProject}/>
} else if(projectsState.selectedProject === undefined) {
  content = <NoProejctSelected onStartAddProject={handleStartPorject} />
}

  return (
    <main className='h-screen my-8 flex gap-8'>
    <ProjectsSidebar onStartAddProject={handleStartPorject} projects = {projectsState.projects} onSelect={handleSelectPorject} selectedProjectId={projectsState.selectedProject} />
    {content}
    </main>
  );
}

export default App;

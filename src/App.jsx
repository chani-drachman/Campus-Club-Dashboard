// App - keeps all the state (useState) and builds the page from the components.
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import FilterBar from './components/FilterBar/FilterBar.jsx'
import Notice from './components/Notice/Notice.jsx'
import MembersList from './components/MembersList/MembersList.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx'
import Footer from './components/Footer/Footer.jsx'
export default function App() {
  // TODO: state (useState):
  //   members          - start with initialMembers
  //   tasks            - start with initialTasks
  //   selectedMemberId - start with null
  //   showOnlyActive   - start with false
  //   layout           - start with "list"

  // TODO: compute the members to show, the selected member and their tasks

  const [members, setMembers]=useState(initialMembers)
  const [tasks, setTasks]=useState(initialTasks)
  const [selectedMemberId, setSelectedMemberId]=useState(null)
  const [showOnlyActive, setShowOnlyActive]=useState(false)
  const [layout, setLayout]=useState("list")
const member=members.find(member=>selectedMemberId===member.id)|| null
const visibleMembers = showOnlyActive
  ? members.filter(member => member.isActive)
  : members


const tasksOfMember = member
  ? tasks.filter(task => task.assignedTo === member.id)
  : []
  const handleToggleTask = (taskId) => {
  setTasks(prevTasks =>
    prevTasks.map(task =>
      task.id === taskId
        ? { ...task, done: !task.done }
        : task
    )
  )
}

  // TODO: render: Header, FilterBar, Notice (only when needed), MembersList, TasksPanel, Footer
  return <div className={styles.app}>{/* TODO */}
  <Header/>
  <FilterBar  showOnlyActive={showOnlyActive}
  onToggleActive={setShowOnlyActive}
  layout={layout}
  onLayoutChange={setLayout}/>
{member && !member.isActive && (
  <Notice type="warning">
    {member.name} is inactive - their tasks are on hold
  </Notice>
)}
 <div className={styles.content}> 
  <MembersList members={visibleMembers} layout={layout} selectedMemberId={selectedMemberId} onSelect={setSelectedMemberId}/>
<TasksPanel member={member} tasks={tasksOfMember} onToggleTask={handleToggleTask}/>

  </div>
  
  <Footer/>
  </div>
}

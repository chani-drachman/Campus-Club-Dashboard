// MembersList - wraps all the MemberCards and switches between list and grid.
import styles from './MembersList.module.css'
import MemberCard from '../MemberCard/MemberCard.jsx'
/**
 * @param {object} props
 * @param {Array<{id: number, name: string, role: string, isActive: boolean}>} props.members - the members to show (already filtered)
 * @param {"list" | "grid"} props.layout - the wrapper gets styles.membersList + styles.list or styles.grid
 * @param {number | null} props.selectedMemberId
 * @param {(memberId: number) => void} props.onSelect - pass it to every MemberCard
 */
export default function MembersList({
  members,
  layout,
  selectedMemberId,
  onSelect,
}) {
  
  // TODO: a loop over members -> <MemberCard ... />
  // TODO: if there are no members -> the message "No members to show"
  if(members.length===0){
    return(
      <div className={styles.membersList}><p>No members to show</p></div>
    )
  }
  return (
    <div className={`${styles.membersList} ${styles[layout]}`}>
 {members.map((member) => {
  const isSelected = member.id === selectedMemberId;
  return (
    <MemberCard
      key={member.id}
      member={member}
      isSelected={isSelected}
      onSelect={onSelect}
        layout={layout}
    />
  );
})}


    </div>
  )
}

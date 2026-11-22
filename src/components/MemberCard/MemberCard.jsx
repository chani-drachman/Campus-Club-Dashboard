// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect, layout }) {
  // TODO: avatar with the initials ("Noa Levi" -> "NL")
  // TODO: name + role badge
  // TODO: button colored by role (Leader=blue, Member=green, Guest=purple), disabled if inactive
  // TODO: inactive member -> the card also gets styles.inactive (faded)
  const initials = member.name
  .split(' ')
  .map(name => name[0])
  .join('')

    const roleClass = styles[member.role.toLowerCase()]

  // Build the card classes
  const cardClasses = [
    styles.card,
    styles[layout],
    isSelected ? styles.selected : '',
    !member.isActive ? styles.inactive : ''
  ].filter(Boolean).join(' ')

  return (
    <div className={cardClasses}
     onClick={() => onSelect(member.id)}>
<div className={styles.avatar}>{initials}</div>
      <div className={styles.memberInfo}>
        <h2 className={styles.name}>
          {member.name}
        </h2>

        <span className={styles.badge}>
          {member.role}
        </span>
      </div>
<button    className={`${styles.roleButton} ${roleClass}`}
        disabled={!member.isActive}
        onClick={(e) => e.stopPropagation()}>Contact</button>
    </div>
  )
}

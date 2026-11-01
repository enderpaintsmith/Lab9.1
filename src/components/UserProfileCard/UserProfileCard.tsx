
import type { UserProfileCardProps } from "../../types";

export function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children
}: UserProfileCardProps) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "16px"
      }}
    >
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          width={80}
          height={80}
          style={{ borderRadius: "50%" }}
        />
      )}

      <h2>{user.name}</h2>

      {showEmail && <p>Email: {user.email}</p>}

      {showRole && <p>Role: {user.role}</p>}

      {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}

      {children}
    </div>
  );
}

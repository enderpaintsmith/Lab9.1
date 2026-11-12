
import type { UserProfileCardProps } from "../../types";

// Creates the UserProfileCard component using the props
// defined in the UserProfileCardProps interface.
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
      {/* Only displays the avatar if the user has an avatarUrl. */}
      {user.avatarUrl && (
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s avatar`}
          width={80}
          height={80}
          style={{ borderRadius: "50%" }}
        />
      )}

      {/* Displays the user's name. */}
      <h2>{user.name}</h2>

      {/* Displays the email and role if their props are true. */}
      {/* Both are set to true by default. */}
      {showEmail && <p>Email: {user.email}</p>}

      {showRole && <p>Role: {user.role}</p>}

      {/* Only displays the Edit Profile button if onEdit was provided. */}
      {/* When clicked, passes the user's ID to the onEdit function. */}
      {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}

      {/* Displays additional content passed from the parent component. */}
      {children}
    </div>
  );
}

package models

// User represents an employee or manager in the system.
type User struct {
	ID        int    `json:"id"`
	Username  string `json:"username"`
	Password  string `json:"password,omitempty"` // omitted in responses
	Role      string `json:"role"`               // "manager" or "employee"
	CreatedAt string `json:"created_at"`
}

// SignupRequest is the payload for user registration.
type SignupRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Role     string `json:"role"` // "manager" or "employee"
}

// LoginRequest is the payload for user login.
type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// LoginResponse is returned after successful authentication.
type LoginResponse struct {
	Token    string `json:"token"`
	UserID   int    `json:"user_id"`
	Username string `json:"username"`
	Role     string `json:"role"`
}


import { useState } from "react";
import {
  BrainCircuit,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Register({ onRegister, onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    // Frontend demonstration only.
    // Real account registration will use FastAPI later.
    onRegister();
  };

  return (
    <div className="auth-page">
      <div className="auth-background-shape shape-one"></div>
      <div className="auth-background-shape shape-two"></div>

      <div className="auth-container">
        <div className="auth-brand">
          <div className="auth-logo">
            <BrainCircuit size={30} />
          </div>

          <div>
            <h2>NeuroScan <span>AI</span></h2>
            <p>MEDICAL AI PLATFORM</p>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-card-heading">
            <div className="auth-icon">
              <User size={25} />
            </div>

            <h1>Create Account</h1>
            <p>Join NeuroScan AI and access your research workspace.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label htmlFor="register-name">Full Name</label>

              <div className="auth-input-wrapper">
                <User size={19} />

                <input
                  id="register-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="register-email">Email Address</label>

              <div className="auth-input-wrapper">
                <Mail size={19} />

                <input
                  id="register-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="register-password">Password</label>

              <div className="auth-input-wrapper">
                <Lock size={19} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <div className="auth-form-group">
              <label htmlFor="confirm-password">Confirm Password</label>

              <div className="auth-input-wrapper">
                <Lock size={19} />

                <input
                  id="confirm-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-submit-button">
              Create Account
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-register-text">
            Already have an account?{" "}
            <button
              type="button"
              className="auth-text-button"
              onClick={onLogin}
            >
              Sign In
            </button>
          </p>
        </div>

        <div className="auth-footer">
          <ShieldCheck size={16} />
          <span>AI-powered brain MRI research platform</span>
        </div>
      </div>
    </div>
  );
}
export default Register;

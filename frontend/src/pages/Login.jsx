
import { useState } from "react";
import {
  BrainCircuit,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Login({ onLogin, onRegister, onForgotPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");

    // Frontend demonstration only.
    // Real authentication will be added with FastAPI.
    onLogin();
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
              <ShieldCheck size={25} />
            </div>

            <h1>Welcome Back</h1>
            <p>Sign in to continue to your AI research workspace.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label htmlFor="login-email">Email Address</label>

              <div className="auth-input-wrapper">
                <Mail size={19} />

                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-form-group">
              <div className="auth-label-row">
                <label htmlFor="login-password">Password</label>

                <button
                  type="button"
                  className="auth-text-button"
                  onClick={onForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>

              <div className="auth-input-wrapper">
                <Lock size={19} />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="auth-submit-button">
              Sign In
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-register-text">
            Don't have an account?{" "}
            <button
              type="button"
              className="auth-text-button"
              onClick={onRegister}
            >
              Create Account
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

export default Login;

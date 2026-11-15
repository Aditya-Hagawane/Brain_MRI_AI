
import { useState } from "react";
import {
  BrainCircuit,
  Mail,
  ArrowLeft,
  Send,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

function ForgotPassword({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your registered email address.");
      return;
    }

    setError("");

    // Frontend demonstration only.
    // Actual password reset emails will be implemented with FastAPI.
    setMessage(
      "Password reset functionality will be available after backend integration."
    );
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
              <KeyRound size={25} />
            </div>

            <h1>Forgot Password?</h1>

            <p>
              Don't worry! Enter your registered email address to
              start the password recovery process.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label htmlFor="forgot-email">Email Address</label>

              <div className="auth-input-wrapper">
                <Mail size={19} />

                <input
                  id="forgot-email"
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                />
              </div>
            </div>

            {error && <p className="auth-error">{error}</p>}

            {message && (
              <p className="auth-success-message">{message}</p>
            )}

            <button type="submit" className="auth-submit-button">
              Send Reset Request
              <Send size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="auth-back-button"
            onClick={onBackToLogin}
          >
            <ArrowLeft size={17} />
            Back to Login
          </button>
        </div>

        <div className="auth-footer">
          <ShieldCheck size={16} />
          <span>AI-powered brain MRI research platform</span>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

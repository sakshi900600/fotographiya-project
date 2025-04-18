import { useState } from 'react';
import styles from './Login.module.css';
import headerLogo from '../../assets/images/headerlogo.png';
import sideImage from '../../assets/images/Wedding-Photography-Poses.webp';

const Login = () => {
  const [formData, setFormData] = useState({
    pin: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    // if (!username.trim()) {
    //   alert('Please enter your username.');
    //   return;
    // }

    if (!formData.pin.trim()) {
      alert('Please enter your PIN.');
      return;
    }

    if (!formData.acceptTerms) {
      alert('Please accept the Terms of Use.');
      return;
    }

    // Store username in localStorage
    // localStorage.setItem('username', username);

    // console.log('Username:', username);
    console.log('PIN entered:', pin);

    alert('Login successfully...');
    navigate('/HomePage');
  };



  return (
    <div className={styles.pageContainer}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <img src={headerLogo} alt="Company Logo" className={styles.logo} />
      </nav>

      <div className={styles.loginContainer}>
        {/* Left Side - Image */}
        <div className={styles.imageSection}>
          <img src={sideImage} alt="Login" className={styles.loginImage} />
        </div>

        {/* Right Side - Form */}
        <div className={styles.formSection}>
          <div className={styles.formContent}>
            <h2 className={styles.welcomeTitle}>Welcome!</h2>
            <p className={styles.loginPrompt}>Login to continue</p>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <input
                  type="password"
                  placeholder='Enter your PIN'
                  id="pin"
                  className={styles.formInput}
                  value={formData.pin}
                  onChange={(e) => setFormData({...formData, pin: e.target.value})}
                  required
                />
              </div>

              <div className={styles.termsGroup}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.acceptTerms}
                  onChange={(e) => setFormData({...formData, acceptTerms: e.target.value})}
                  className={styles.termsCheckbox}
                  required
                />
                <label htmlFor="terms" className={styles.termsLabel}>
                  I accept and agree to <a href="#">Terms and conditions</a>
                </label>
              </div>
              
              <button 
                type="submit" 
                className={styles.loginButton}
                disabled={!formData.acceptTerms}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
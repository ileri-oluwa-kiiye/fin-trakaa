import styles from "./form.module.css"

const Stepone = () => {

  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };
  return(
    <div className={styles.form}>
      <div>
        <h1>Welcome to Fin-traka</h1>
        <p>Open your account</p>
      </div>
      <form action="/confirmation" method="GET">
        <div>
            <label htmlFor="firstname">First Name</label> 
            <div><input type="text" name="firstname" /></div>
        </div>
        <div>
            <label htmlFor="lastname">Last Name</label> 
            <div><input type="text" name="lastname" /></div>
        </div>
        <div>
            <label htmlFor="business">Business Name(optional)</label> 
            <div><input type="text" name="business" /></div>
        </div>
        <div>
            <label htmlFor="email">E-mail address</label> 
            <div><input type="email" /></div>
          </div>
        <div>
            <label htmlFor="number">Phone number</label> 
            <div><input type="number" name="number" /></div>
        </div>
        <div>
            <label htmlFor="location">Location</label> 
            <div><input type="text" name="location" /></div>
        </div>
        <div>
            <label htmlFor="password">Password</label> 
            <div><input type="password" name="password" /></div>
        </div>
        <div>
            <label htmlFor="confirmpassword">Confirm Password</label> 
            <div><input type="password" name="confirmpassword" /></div>
        </div>
        <div>
            <input type="radio" name="agree" id="agree" />
            <label htmlFor="agree">I agree to all the <span>terms and privacy policy</span> of Fin-traka</label> 
        </div>
        
        <div>
            <input type="submit" value="Register" />
          </div>
      </form>

    </div>
  )

}

export default Stepone
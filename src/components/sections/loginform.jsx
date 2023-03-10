// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import styles from "./form.module.css"

const Loginform = () => {

  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };
  return(
    <div className={styles.form}>
      <div>
        <h1>Welcome back!</h1>
        <p>Please enter your details to continue easy financial tracking for your business</p>
      </div>
      <form action="/dashboard" method="GET">
        <div>
            <label htmlFor="email">E-mail address</label> 
            <div><input type="email" name="email" /></div>
          </div>
          <div>
            <label htmlFor="password">Password</label> 
            <div><input type="password" /></div>
          </div>
          <span className={styles.flex}>Forgot password?</span>
          <Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}><div>
            <input type="submit" value="Log In" />
            {/* <div><Link to="/signup">Or sign up instead?</Link></div> */}
          </div>
          </Link>
      </form>

    </div>
  )

}

export default Loginform;






// return (
//   <div className="controlwidth">
//       <h1 style={{textAlign:"center", fontSize:"30px"}}>Fin-traka</h1>
//       <p style={{textAlign:"center", fontSize:"16px"}}>Login to your account</p>
//       <Box m="20px" maxWidth="500px" width="80vw" margin="30px auto">

// <Formik
// onSubmit={handleFormSubmit}
// initialValues={initialValues}
// validationSchema={checkoutSchema}
// >
// {({
//   values,
//   errors,
//   touched,
//   handleBlur,
//   handleChange,
//   handleSubmit,
// }) => (
//   <form onSubmit={handleSubmit}>
//     <Box
//       display="grid"
//       gap="13px"
//       gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//       sx={{
//         "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//       }}
//     >


//     <TextField
//     fullWidth
//     variant="filled"
//     type="text"
//     label= "E-mail address"
//     onBlur={handleBlur}
//     onChange = {handleChange}
//     value= {values.email}
//     name = "email"
//     helperText = {touched.email && errors.email}
//     sx = {{ gridColumn : "span 4 "}}
//     />

//     <TextField
//     fullWidth
//     variant="filled"
//     type="password"
//     label= "Password"
//     onBlur={handleBlur}
//     onChange = {handleChange}
//     value= {values.password}
//     name = "password"
//     error = {!!touched.password && !!errors.password}
//     helperText = {touched.password && errors.password}
//     sx = {{ gridColumn : "span 4 "}}
//     />
//     </Box>
//     <Box display="flex" justifyContent="end" mt="20px">
//     <Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}>
//       <Button type="submit"  style={{backgroundColor:"#D9D9D9", color:"black", fontSize: "14px", fontWeight:"600"}}>
//         Log In
//       </Button>
//       </Link>
//     </Box>
//   </form>
// )}
// </Formik>
// </Box>
//   </div>
// );
// };

// const checkoutSchema = yup.object().shape({
// email: yup.string().email("invalid email").required("required"),
//   password: yup.string().required("required"),
// });


// const initialValues = {
// email: "",
// password: "",
// };
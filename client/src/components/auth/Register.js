// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { registerUser } from '../../actions/authActions';
// import TextFieldGroup from '../common/TextFieldGroup';
// import SelectListGroup from '../common/SelectListGroup';


// class Register extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       password2: '',
//       userType: '',
//       errors: {}
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   componentDidMount() {
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push('/dashboard');
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({ errors: nextProps.errors });
//     }
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2,
//       userType: this.state.userType,
//     };

//     this.props.registerUser(newUser, this.props.history);
//   }

//   render() {
//     const { errors } = this.state;


//     const options = [
     
//       { label: 'Dean', value: 'dean' },
//       { label: 'A R', value: 'a-r' },
//       { label: 'Academic', value: 'academic' },
//       { label: 'Non-Academic', value: 'non-academic' },
      
//     ];


//     return (
//       <div className="register">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Sign Up a Account</h1>
//               <p className="lead text-center">
//                 Create user account
//               </p>
//               <form noValidate onSubmit={this.onSubmit}>
//                 <TextFieldGroup
//                   placeholder="Name"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.onChange}
//                   error={errors.name}
//                 />
//                 <TextFieldGroup
//                   placeholder="Email"
//                   name="email"
//                   type="email"
//                   value={this.state.email}
//                   onChange={this.onChange}
//                   error={errors.email}
//                   info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
//                 />


//                 <SelectListGroup
//                   placeholder="Select User type"
//                   name="userType"
//                   value={this.state.userType}
//                   onChange={this.onChange}
//                   options={options}
//                   error={errors.userType}
//                   info=""
//                 />


//                 <TextFieldGroup
//                   placeholder="Password"
//                   name="password"
//                   type="password"
//                   value={this.state.password}
//                   onChange={this.onChange}
//                   error={errors.password}
//                 />
//                 <TextFieldGroup
//                   placeholder="Confirm Password"
//                   name="password2"
//                   type="password"
//                   value={this.state.password2}
//                   onChange={this.onChange}
//                   error={errors.password2}
//                 />
//                 <input type="submit" className="btn btn-info btn-block mt-4" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(mapStateToProps, { registerUser })(withRouter(Register));



import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    width: "150px",
    float: "right",
  },
  label: {
    margin: theme.spacing(2, 2, 2),
    width: "30%",
  },
  textField: {
    width: "95%",
    margin: theme.spacing(3, 1.5, 3),
  },
}));

const Register = (props) => {
  const [values, setValues] = useState({
    name: "",
    emil:"",
    password: "",
    password2: "",
    userType: "Vice Chancellor",

  });
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const { errors } = props;
  const classes = useStyles();

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/login");
    }
    // if (nextProps.errors) {
    //   this.setState({ errors: nextProps.errors });
    // }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    props.registerUser(values, props.history);
  };

  const options = [
     
          { label: 'Dean', value: 'dean' },
          { label: 'A R', value: 'a-r' },
          { label: 'Academic', value: 'academic' },
          { label: 'Non-Academic', value: 'non-academic' },
          
        ];
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} method="POST" noValidate onSubmit={onSubmit} >
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={6}>
              
              {/* <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                size="small"
                onChange={handleChange}
              /> */}
              

            {/* </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                size="small"
                onChange={handleChange}
              />
            </Grid> */} 
            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
            </Grid>

            <Select onChange={handleChange} name="userType" value={values.userType}>
              <MenuItem value="Vice Chancellor">Vice Chancellor</MenuItem>
              <MenuItem value="Assistant Registrat">
                Assistant Registrat
              </MenuItem>
              <MenuItem value="Dean">Dean</MenuItem>
              <MenuItem value="Bursar">Bursar</MenuItem>
              <MenuItem value="Academic Staff">Academic Staff</MenuItem>
              <MenuItem value="Non-Academic Staff">Non-Academic Staff</MenuItem>
              <MenuItem value="Academic Support">Academic Support</MenuItem>
              <MenuItem value="On-Contract Staff">On-Contract Staff</MenuItem>
            </Select>
{/* 
            <SelectListGroup
                  placeholder="Select User type"
                  name="userType"
                  value={values.userType}
                  onChange={handleChange}
                  error={errors.userType}
                  info=""
                /> */}

            {/* <InputLabel id="label" className={classes.label}>
              Faculty :
            </InputLabel>
            <Select
              onChange={handleChange}
              name="faculty"
              value={values.faculty}
            >
              <MenuItem value="Faculty Of Science">Faculty Of Science</MenuItem>
              <MenuItem value="Faculty Of Management">
                Faculty Of Management
              </MenuItem>
              <MenuItem value="Faculty Of Medicine">
                Faculty Of Medicine
              </MenuItem>
              <MenuItem value="Faculty Of Allied Health Science">
                Faculty Of Allied Health Science
              </MenuItem>
            </Select>

            <InputLabel id="label" className={classes.label}>
              Employee Type :
            </InputLabel>
            <Select onChange={handleChange} name="user_type" value={values.user_type}>
              <MenuItem value="Vice Chancellor">Vice Chancellor</MenuItem>
              <MenuItem value="Assistant Registrat">
                Assistant Registrat
              </MenuItem>
              <MenuItem value="Dean">Dean</MenuItem>
              <MenuItem value="Bursar">Bursar</MenuItem>
              <MenuItem value="Academic Staff">Academic Staff</MenuItem>
              <MenuItem value="Non-Academic Staff">Non-Academic Staff</MenuItem>
              <MenuItem value="Academic Support">Academic Support</MenuItem>
              <MenuItem value="On-Contract Staff">On-Contract Staff</MenuItem>
            </Select>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
                onChange={handleChange}
                value={values.email}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={values.dateOfBirth}
                className={classes.textField}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Residential Address"
                name="address"
                autoComplete="address"
                size="small"
                value={values.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNo"
                label="Phone Number"
                name="phoneNo"
                autoComplete="phoneNo"
                size="small"
                value={values.phoneNo}
                onChange={handleChange}
              />
            </Grid>
            <InputLabel id="label" className={classes.label}>
              Gender :
            </InputLabel>
            <Select onChange={handleChange} name="gender" value={values.gender}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select> */}

            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
            </Grid>
            <Grid item xs={12}>
            <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={values.password2}
                  onChange={handleChange}
                  error={errors.password2}
                />
            </Grid>
          </Grid>
          

          
              <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    size="small">
                      Sign Up
              </Button>
          
          <Grid container justify="flex-end">
            <Grid item>
                Already have an account? Log in
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';
import DatePicker from 'react-date-picker';


class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,

      firstName: '',
      lastName: '',
      fullName: '',
      faculty: '',
      gender: '',
      address: '',
      phoneNo:'',
      empId:'',
      dob:  new Date(),
      // handle: '',
      // company: '',
      // website: '',
      // location: '',
      // status: '',
      // skills: '',
      // githubusername: '',
      // bio: '',
      // twitter: '',
      // facebook: '',
      // linkedin: '',
      // youtube: '',
      // instagram: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }



  handleChange(date) {
    console.log(date)
    this.setState({
      startDate: date
    })
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      //const skillsCSV = profile.skills.join(',');
      console.log( !isEmpty(profile.firstName));
      // If profile field doesnt exist, make empty string
      profile.firstName = !isEmpty(profile.firstName) ? profile.firstName : '';
      profile.lastName = !isEmpty(profile.lastName) ? profile.lastName : '';
      profile.fullName = !isEmpty(profile.fullName) ? profile.fullName : '';
      profile.faculty = !isEmpty(profile.faculty)? profile.faculty: '';
      profile.phoneNo = !isEmpty(profile.phoneNo) ? profile.phoneNo : '';
      profile.gender = !isEmpty(profile.gender) ? profile.gender :'';
      profile.address = !isEmpty(profile.address) ? profile.address: '';
      profile.dob = !isEmpty(profile.dob) ? profile.dob :'';  
      profile.empId = !isEmpty(profile.empId) ? profile.empId :'';  


      // profile.facebook = !isEmpty(profile.social.facebook)
      //   ? profile.social.facebook
      //   : '';
      // profile.linkedin = !isEmpty(profile.social.linkedin)
      //   ? profile.social.linkedin
      //   : '';
      // profile.youtube = !isEmpty(profile.social.youtube)
      //   ? profile.social.youtube
      //   : '';
      // profile.instagram = !isEmpty(profile.social.instagram)
      //   ? profile.social.instagram
      //   : '';

      // Set component fields state
      this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        fullName: profile.fullName,
        faculty: profile.faculty,
        phoneNo: profile.phoneNo,
        gender: profile.gender,
        address: profile.address,
        dob: profile.dob,
        empId:profile.empId,


        // handle: profile.handle,
        // company: profile.company,
        // website: profile.website,
        // location: profile.location,
        // status: profile.status,
        // //skills: skillsCSV,
        // githubusername: profile.githubusername,
        // bio: profile.bio,
        // twitter: profile.twitter,
        // facebook: profile.facebook,
        // linkedin: profile.linkedin,
        // youtube: profile.youtube,
        // instagram: profile.instagram
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fullName: this.state.fullName,
      faculty: this.state.faculty,
      phoneNo: this.state.phoneNo,
      gender: this.state.gender,
      address: this.state.address,
      dob: this.state.dob,
      empId:this.state.empId,


      // handle: this.state.handle,
      // company: this.state.company,
      // website: this.state.website,
      // location: this.state.location,
      // status: this.state.status,
      // skills: this.state.skills,
      // githubusername: this.state.githubusername,
      // bio: this.state.bio,
      // twitter: this.state.twitter,
      // facebook: this.state.facebook,
      // linkedin: this.state.linkedin,
      // youtube: this.state.youtube,
      // instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      // socialInputs = (
      //   <div>
      //     <InputGroup
      //       placeholder="Twitter Profile URL"
      //       name="twitter"
      //       icon="fab fa-twitter"
      //       value={this.state.twitter}
      //       onChange={this.onChange}
      //       error={errors.twitter}
      //     />

      //     <InputGroup
      //       placeholder="Facebook Page URL"
      //       name="facebook"
      //       icon="fab fa-facebook"
      //       value={this.state.facebook}
      //       onChange={this.onChange}
      //       error={errors.facebook}
      //     />

      //     <InputGroup
      //       placeholder="Linkedin Profile URL"
      //       name="linkedin"
      //       icon="fab fa-linkedin"
      //       value={this.state.linkedin}
      //       onChange={this.onChange}
      //       error={errors.linkedin}
      //     />

      //     <InputGroup
      //       placeholder="YouTube Channel URL"
      //       name="youtube"
      //       icon="fab fa-youtube"
      //       value={this.state.youtube}
      //       onChange={this.onChange}
      //       error={errors.youtube}
      //     />

      //     <InputGroup
      //       placeholder="Instagram Page URL"
      //       name="instagram"
      //       icon="fab fa-instagram"
      //       value={this.state.instagram}
      //       onChange={this.onChange}
      //       error={errors.instagram}
      //     />
      //   </div>
      // );
    }

    // Select options for status
    // const options = [
    //   { label: '* Select Professional Status', value: 0 },
    //   { label: 'Developer', value: 'Developer' },
    //   { label: 'Junior Developer', value: 'Junior Developer' },
    //   { label: 'Senior Developer', value: 'Senior Developer' },
    //   { label: 'Manager', value: 'Manager' },
    //   { label: 'Student or Learning', value: 'Student or Learning' },
    //   { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
    //   { label: 'Intern', value: 'Intern' },
    //   { label: 'Other', value: 'Other' }
    // ];

    const facultyOptions = [
      { label: 'Science', value: 'science' },
      { label: 'Management', value: 'management' },
     
    ];

    const genderOptions = [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
     
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                  placeholder="* firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                  info="First Name"
                />

                <TextFieldGroup
                  placeholder="* lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                  info="Last Name"
                />

                <TextFieldGroup
                  placeholder="* fullName"
                  name="fullName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                  info="Full Name"
                />


                <TextFieldGroup
                  placeholder="* Employee ID"
                  name="empId"
                  value={this.state.empId}
                  onChange={this.onChange}
                  error={errors.empId}
                  info="empId"
                />

                {/* <TextFieldGroup
                  placeholder="* faculty"
                  name="faculty"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.faculty}
                  info="Choose your faculty"
                /> */}

                <SelectListGroup
                  placeholder="Select Faculty"
                  name="faculty"
                  value={this.state.faculty}
                  onChange={this.onChange}
                  options={facultyOptions}
                  error={errors.faculty}
                  info="Choose your faculty"
                />


                

                <TextFieldGroup
                  placeholder="* phoneNo"
                  name="phoneNo"
                  value={this.state.phoneNo}
                  onChange={this.onChange}
                  error={errors.phoneNo}
                  info="Phone Number"
                />

                {/* <TextFieldGroup
                  placeholder="* gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  error={errors.gender}
                  info="gender"
                /> */}


                <SelectListGroup
                  placeholder="Select Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={genderOptions}
                  error={errors.gender}
                  info="Choose your Gender"
                />

                <TextFieldGroup
                  placeholder="* address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                  info="Address"
                />

                {/* <TextFieldGroup
                  placeholder="* dob"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.onChange}
                  error={errors.dob}
                  info="Date of Birth"
                /> */}


                 <div> 
                     <div 
                        className="form-text text-muted">Date of Birth
                     </div>
                      <DatePicker className="form-text text-muted"
                        onChange={this.handleChange}
                        value={this.state.dob}  />
                  </div>




                {/* <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, company name, nickname"
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  options={options}
                  error={errors.status}
                  info="Give us an idea of where you are at in your career"
                />
                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info="Could be your own company or one you work for"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own website or a company one"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info="If you want your latest repos and a Github link, include your username"
                />
                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs} */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);

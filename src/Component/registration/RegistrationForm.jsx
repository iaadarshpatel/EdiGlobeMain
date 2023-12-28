import React, { useState } from 'react'
import Swal from 'sweetalert2';

const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        fullName: "",
        phone: "",
        email: "",
        course: "",
    });

    // Create state variables to track errors
    const [errors, setErrors] = useState({
        fullName: "",
        phone: "",
        email: "",
    });

    const postUserData = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Update the user data
        setUserData({ ...userData, [name]: value });

        // Validate the field
        validateField(name, value);
    };

    // Validation function for fullName
    const validateFullName = (name) => {
        const alphabetPattern = /^[A-Za-z ]*$/; // Correct the regular expression pattern
        if (!name.match(alphabetPattern)) {
            return 'Name can only contain alphabets and spaces.';
        }
        return '';
    };

    // Validation function for phone
    const validatePhone = (phone) => {
        const phonePattern = /^\d{10}$/; // Assuming phone number should be 10 digits
        if (!phone.match(phonePattern)) {
            return 'Invalid phone number. Please enter 10 digits.';
        }
        return '';
    };

    // Validation function for email
    const validateEmail = (email) => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
        if (!email.match(emailPattern)) {
            return 'Invalid email address.';
        }
        return '';
    };

    // Validate a field and update errors state
    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
                setErrors({ ...errors, fullName: validateFullName(value) });
                break;
            case 'phone':
                setErrors({ ...errors, phone: validatePhone(value) });
                break;
            case 'email':
                setErrors({ ...errors, email: validateEmail(value) });
                break;
            default:
                break;
        }
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { fullName, phone, email, course } = userData;
    
        // Check if there are any errors before submitting
        if (!errors.fullName && !errors.phone && !errors.email && fullName && phone && email && course) 
        try {
            // Your existing code for submitting data
            const res = await fetch("https://ediglobedummy-default-rtdb.firebaseio.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    phone,
                    email,
                    course,
                }),
            });
    
            if (res.ok) {
                Swal.fire({
                    text: 'Thank you for showing interest! We will reach out to you within 24 hours!',
                    icon: 'success',
                }).then(() => {
                    setUserData({
                        fullName: "",
                        phone: "",
                        email: "",
                        course: "",
                    });
                });
            } else {
                console.log("Not Stored");
                Swal.fire({
                    title: 'Error',
                    text: 'Please fill in the data',
                    icon: 'error',
                });
            }
            
        } catch (error) {
            console.error("Error during fetch:", error);
        }
    };
    


    return (
        <>
            <div className="col-lg-4 offset-lg-1">
                <div className="register_form">
                    <h3>Enroll Now</h3>
                    <p>It is high time for learning</p>
                    <form className="form_area" id="myForm" method="POST">
                        <div className="row">
                            <div className="col-lg-12 form_group">
                                <input name="fullName" placeholder="Your Name" value={userData.fullName} onChange={postUserData} required="" type="text" pattern="[A-Za-z ]*" />
                                {errors.fullName && <div className="error">{errors.fullName}</div>}

                                <input name="phone" placeholder="Your Phone Number" value={userData.phone} onChange={postUserData} required="" />
                                {errors.phone && <div className="error">{errors.phone}</div>}

                                <input name="email" placeholder="Your Email Address" value={userData.email} onChange={postUserData} pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required="" type="email" />
                                {errors.email && <div className="error">{errors.email}</div>}

                                <select
                                    name="course"
                                    id="course-details"
                                    required=""
                                    value={userData.course}
                                    onChange={postUserData}>
                                    <option value="" disabled >Select a course</option>
                                    <option value="Web Development" >Web Development</option>
                                    <option value="Digital Marketing" >Digital Marketing</option>
                                    <option value="Machine Learning" >Machine Learning</option>
                                    <option value="Artificial Intelligence" >Artificial Intelligence</option>
                                </select>
                            </div>
                            <div className="text-center">
                                <button className="primary-btn" type='submit' onClick={submitData}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default RegistrationForm
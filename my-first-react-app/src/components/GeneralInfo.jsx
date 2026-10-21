
import { useState } from "react";

function GeneralInfo() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        console.log("Submitted CV general info:", formData);
    };

    return (
        <div className="cv-section">
            <h2>General Information</h2>

            {isSubmitted ? (
                <div>
                    <h2>
                        {formData.firstName} {formData.lastName}
                    </h2>
                    <p>{formData.email}</p>
                    <p>{formData.phoneNumber}</p>

                    <button onClick={() => setIsSubmitted(false)}>
                        Edit
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input
                            id="firstname"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            id="lastname"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="phoneNumber">
                            Phone Number:
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default GeneralInfo;

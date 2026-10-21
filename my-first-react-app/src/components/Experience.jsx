import { useState } from "react";

function Experience() {
    const [experienceData, setExperienceData] = useState({
        companyName: "",
        positionTitle: "",
        mainRespinsilities: "",   
        startDate: "",
        endDate: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setExperienceData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="experience">
                <h1>Work Experience</h1>
            </div>

            {isSubmitted ? (
                <div className="preview">
                    <h2>Submitted Details:</h2>
                    <p><strong>Company:</strong> {experienceData.companyName}</p>
                    <p><strong>Position:</strong> {experienceData.positionTitle}</p>
                    <p><strong>Responsibilities:</strong> {experienceData.mainRespinsilities}</p>
                    <p><strong>Duration:</strong> {experienceData.startDate} to {experienceData.endDate}</p>
                    <button onClick={() => setIsSubmitted(false)}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={experienceData.companyName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="positionTitle"
                        placeholder="Position Title"
                        value={experienceData.positionTitle}
                        onChange={handleChange}
                    />
                    <textarea
                        name="mainRespinsilities"
                        placeholder="Main Responsibilities"
                        value={experienceData.mainRespinsilities}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={experienceData.startDate}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={experienceData.endDate}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
        </>
    );
}

export default Experience;

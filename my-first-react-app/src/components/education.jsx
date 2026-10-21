import { useState } from "react";

function Education() {
    const [eduData, setEduData] = useState({
        school: "",
        title: "",
        year: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEduData((prev) => ({
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
            <div className="EducationalQualifications">
                <h2>Educational Qualifications</h2>
                {isSubmitted ? (
                    <>
                        <span>{eduData.school}</span>
                        <span>{eduData.title}</span>
                        <span>{eduData.year}</span>
                        {/* 1. Passed an inline arrow function to safely update state */}
                        <button type="button" onClick={() => setIsSubmitted(false)}>Edit</button>
                    </>
                ) : (
                    /* 2. Added the onSubmit handler to the form */
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="school">School Name</label>
                        {/* 3. Linked value and onChange to state */}
                        <input
                            id="school"
                            type="text"
                            name="school"
                            value={eduData.school}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={eduData.title}
                            onChange={handleChange}
                        />

                        <label htmlFor="year">Year</label>
                        <input
                            id="year"
                            type="number"
                            name="year"
                            value={eduData.year}
                            onChange={handleChange}
                        />

                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </>
    );
}

export default Education;

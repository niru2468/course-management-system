import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
const AddCourse = () => {
	const [course, setCourse] = useState("");
	const navigate = useNavigate();
	const handleClick = async (e) => {
		e.preventDefault();
		await api.post("/create-course", {
			name: course
		});
		navigate("/");
	};
	return (
		<div className="form">
			<form encType="multipart/form-data">
				<div className="mb-3">
					<label htmlFor="course" className="form-label">
						Course
					</label>
					<input
						type="text"
						className="form-control"
						name="course"
						placeholder="Enter Course"
						onChange={(e) => setCourse(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleClick}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddCourse;

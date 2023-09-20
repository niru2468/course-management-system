import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
const EditCourse = () => {
	const [course, setCourse] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const handleClick = async (e) => {
		e.preventDefault();
		await api.put(`/update-course/${path}`, {
			name: course
		});
		navigate("/");
	};
	return (
		<div className="form">
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
				Update
			</button>
		</div>
	);
};

export default EditCourse;

import React, { useEffect, useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import api from "../api/axiosConfig";
import { Link } from "react-router-dom";
const Dashboard = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		getAllCourses();
	}, []);
	const getAllCourses = async () => {
		const res = await api.get("/courses");
		setCourses(res.data);
	};
	const deleteCourse = async (id) => {
		await api.delete(`/delete-course/${id}`);
		window.location.reload();
	};
	return (
		<div className="container">
			<h2 className="heading">List Of All Courses</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Sr.No.</th>
						<th scope="col">Name</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{courses.map((course) => {
						return (
							<tr key={course.id}>
								<td>{course.id}</td>
								<td>{course.name}</td>
								<td>
									<Link to={`/edit-course/${course.id}`}>
										<EditOutlinedIcon />
									</Link>
								</td>
								<td>
									<DeleteOutlinedIcon
										style={{ cursor: "pointer", color: "red" }}
										onClick={() => deleteCourse(course.id)}
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Link to="/add-course" className="btn btn-primary">
				Add Course
			</Link>
		</div>
	);
};

export default Dashboard;

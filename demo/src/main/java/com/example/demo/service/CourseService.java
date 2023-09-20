package com.example.demo.service;

import java.util.List;
import com.example.demo.Entity.Course;

public interface CourseService {
	
	List<Course> getAllCourses();//to get all the courses from the database
	Course createCourse(Course course);//to create a user
	Course getCourseById(Integer id);//to get a single course
	Course updateCourse(Course course);//to update a course
	void deleteCourse(Integer id);//to delete a course 
}

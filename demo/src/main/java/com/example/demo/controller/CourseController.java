package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Course;
import com.example.demo.service.CourseService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class CourseController {
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/courses")
	public List<Course> getAllCourses(){
		return courseService.getAllCourses();
	}
	
	@GetMapping("/courses/{id}")
	public Course getSingleCourse(@PathVariable Integer id) {
		return courseService.getCourseById(id);
	}
	
	@PostMapping("/create-course")
	public Course createCourse(@RequestBody Course course) {
		return courseService.createCourse(course);
	}
	
	@PutMapping("/update-course/{id}")
	public Course updateCourse(@PathVariable Integer id, @RequestBody Course course ) {
		course.setId(id);
		Course updateCourse = courseService.updateCourse(course);
		return updateCourse;
	}
	
	@DeleteMapping("/delete-course/{id}")
	public void deleteCourse(@PathVariable Integer id) {
		courseService.deleteCourse(id);
	}
	
}

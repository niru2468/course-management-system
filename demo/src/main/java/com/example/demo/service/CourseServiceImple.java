package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Course;
import com.example.demo.repository.CourseRepository;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Service
public class CourseServiceImple implements CourseService {

	@Autowired
	private CourseRepository courseRepository;
	
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}

	public Course createCourse(Course course) {
		return courseRepository.save(course);
	}

	public Course getCourseById(Integer id) {
		Optional<Course> optionalCourse = courseRepository.findById(id);
		return optionalCourse.get();
	}

	public Course updateCourse(Course course) {
		Course c1 = courseRepository.findById(course.getId()).get();
		c1.setName(course.getName());
		Course updatedCourse = courseRepository.save(c1);
		return updatedCourse;
	}

	public void deleteCourse(Integer id) {
		courseRepository.deleteById(id);
	}
	

}

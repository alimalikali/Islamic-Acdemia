"use client";


import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCarousel } from '@/hooks/useCarousel';
import CourseCardSearch from '@/components/CourseCardSearch';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className="landing-skeleton__hero">
        <div className="landing-skeleton__hero-content">
          <Skeleton className="landing-skeleton__title" />
          <Skeleton className="landing-skeleton__subtitle" />
          <Skeleton className="landing-skeleton__subtitle-secondary" />
          <Skeleton className="landing-skeleton__button" />
        </div>
        <Skeleton className="landing-skeleton__hero-image" />
      </div>

      <div className="landing-skeleton__featured">
        <Skeleton className="landing-skeleton__featured-title" />
        <Skeleton className="landing-skeleton__featured-description" />

        <div className="landing-skeleton__tags">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__tag" />
          ))}
        </div>

        <div className="landing-skeleton__courses">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton__course-card" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const router = useRouter();
  const currentImage = useCarousel({ totalImages: 3 });
  const courses: Course[] = [
    {
      courseId: "course-1",
      teacherId: "teacher-1",
      teacherName: "John Doe",
      title: "Introduction to JavaScript",
      description: "Learn the fundamentals of JavaScript and start building web applications.",
      category: "Programming",
      image: "/c1.jpeg", // Image URL for the course
      price: 4999, // Price in cents ($49.99)
      level: "Beginner", // Level of the course
      status: "Published", // Course status
      sections: [
        {
          sectionId: "section-1",
          sectionTitle: "JavaScript Basics",
          sectionDescription: "Learn the basics of JavaScript programming language.",
          chapters: [
            {
              chapterId: "chapter-1",
              title: "Introduction to JavaScript",
              content: "This chapter covers the basics of JavaScript, including variables and syntax.",
              type: "Text"
            },
            {
              chapterId: "chapter-2",
              title: "Data Types in JavaScript",
              content: "This chapter covers different data types in JavaScript such as strings, numbers, and objects.",
              type: "Text"
            },
            {
              chapterId: "chapter-3",
              title: "JavaScript Functions",
              content: "Learn how to write functions and use them in your JavaScript code.",
              type: "Video",
              video: "/path/to/js-functions.mp4", // Path to the video
              freePreview: true
            }
          ]
        },
        {
          sectionId: "section-2",
          sectionTitle: "Advanced JavaScript",
          sectionDescription: "Dive deeper into more advanced JavaScript concepts.",
          chapters: [
            {
              chapterId: "chapter-4",
              title: "Asynchronous JavaScript",
              content: "Learn about callbacks, promises, and async/await.",
              type: "Text"
            },
            {
              chapterId: "chapter-5",
              title: "JavaScript Closures",
              content: "Understand closures and how they work in JavaScript.",
              type: "Quiz"
            }
          ]
        }
      ],
      enrollments: [
        { userId: "user-1" },
        { userId: "user-2" },
        { userId: "user-3" }
      ]
    },
    {
      courseId: "course-2",
      teacherId: "teacher-2",
      teacherName: "Jane Smith",
      title: "Mastering React",
      description: "Master React by building advanced projects and applications.",
      category: "Web Development",
      image: "/c2.jpeg", // Image URL for the course
      price: 7999, // Price in cents ($79.99)
      level: "Intermediate", // Level of the course
      status: "Published", // Course status
      sections: [
        {
          sectionId: "section-1",
          sectionTitle: "React Basics",
          sectionDescription: "Learn the fundamentals of React, including components and hooks.",
          chapters: [
            {
              chapterId: "chapter-1",
              title: "Introduction to React",
              content: "This chapter covers the core concepts of React, including components, JSX, and props.",
              type: "Text"
            },
            {
              chapterId: "chapter-2",
              title: "React State and Props",
              content: "Learn how to manage state and pass props in your React components.",
              type: "Text"
            },
            {
              chapterId: "chapter-3",
              title: "React Hooks",
              content: "Understand how to use hooks like useState and useEffect to manage state and side effects.",
              type: "Video",
              video: "/path/to/react-hooks.mp4", // Path to the video
              freePreview: true
            }
          ]
        },
        {
          sectionId: "section-2",
          sectionTitle: "Advanced React",
          sectionDescription: "Learn advanced React concepts such as Redux, Context API, and React Router.",
          chapters: [
            {
              chapterId: "chapter-4",
              title: "Redux and State Management",
              content: "Learn how to manage complex state in your React application using Redux.",
              type: "Text"
            },
            {
              chapterId: "chapter-5",
              title: "React Router",
              content: "Learn how to implement routing in your React applications using React Router.",
              type: "Quiz"
            }
          ]
        }
      ],
      enrollments: [
        { userId: "user-4" },
        { userId: "user-5" },
        { userId: "user-6" }
      ]
    },
    {
      courseId: "course-3",
      teacherId: "teacher-3",
      teacherName: "Alice Johnson",
      title: "Python for Data Science",
      description: "Learn Python and use it for data analysis and machine learning.",
      category: "Data Science",
      image: "/c3.jpeg", // Image URL for the course
      price: 6999, // Price in cents ($69.99)
      level: "Advanced", // Level of the course
      status: "Published", // Course status
      sections: [
        {
          sectionId: "section-1",
          sectionTitle: "Python Basics",
          sectionDescription: "Get started with Python programming and understand the core concepts.",
          chapters: [
            {
              chapterId: "chapter-1",
              title: "Introduction to Python",
              content: "This chapter introduces Python and its syntax.",
              type: "Text"
            },
            {
              chapterId: "chapter-2",
              title: "Working with Data in Python",
              content: "Learn how to work with data structures like lists, tuples, and dictionaries in Python.",
              type: "Text"
            },
            {
              chapterId: "chapter-3",
              title: "Functions and Modules in Python",
              content: "Learn how to create and use functions and modules in Python.",
              type: "Video",
              video: "/path/to/python-functions.mp4", // Path to the video
              freePreview: false
            }
          ]
        },
        {
          sectionId: "section-2",
          sectionTitle: "Data Science with Python",
          sectionDescription: "Learn how to use Python for data analysis, visualization, and machine learning.",
          chapters: [
            {
              chapterId: "chapter-4",
              title: "Data Analysis with Pandas",
              content: "Learn how to manipulate and analyze data using Pandas in Python.",
              type: "Text"
            },
            {
              chapterId: "chapter-5",
              title: "Machine Learning with Scikit-Learn",
              content: "Learn how to implement machine learning algorithms with Scikit-Learn.",
              type: "Quiz"
            }
          ]
        }
      ],
      enrollments: [
        { userId: "user-7" },
        { userId: "user-8" },
        { userId: "user-9" }
      ]
    },
    {
      courseId: "course-4",
      teacherId: "teacher-1",
      teacherName: "John Doe",
      title: "Introduction to JavaScript",
      description: "Learn the fundamentals of JavaScript and start building web applications.",
      category: "Programming",
      image: "/c4.jpeg", // Image URL for the course
      price: 4999, // Price in cents ($49.99)
      level: "Beginner", // Level of the course
      status: "Published", // Course status
      sections: [
        {
          sectionId: "section-1",
          sectionTitle: "JavaScript Basics",
          sectionDescription: "Learn the basics of JavaScript programming language.",
          chapters: [
            {
              chapterId: "chapter-1",
              title: "Introduction to JavaScript",
              content: "This chapter covers the basics of JavaScript, including variables and syntax.",
              type: "Text"
            },
            {
              chapterId: "chapter-2",
              title: "Data Types in JavaScript",
              content: "This chapter covers different data types in JavaScript such as strings, numbers, and objects.",
              type: "Text"
            },
            {
              chapterId: "chapter-3",
              title: "JavaScript Functions",
              content: "Learn how to write functions and use them in your JavaScript code.",
              type: "Video",
              video: "/path/to/js-functions.mp4", // Path to the video
              freePreview: true
            }
          ]
        },
        {
          sectionId: "section-2",
          sectionTitle: "Advanced JavaScript",
          sectionDescription: "Dive deeper into more advanced JavaScript concepts.",
          chapters: [
            {
              chapterId: "chapter-4",
              title: "Asynchronous JavaScript",
              content: "Learn about callbacks, promises, and async/await.",
              type: "Text"
            },
            {
              chapterId: "chapter-5",
              title: "JavaScript Closures",
              content: "Understand closures and how they work in JavaScript.",
              type: "Quiz"
            }
          ]
        }
      ],
      enrollments: [
        { userId: "user-1" },
        { userId: "user-2" },
        { userId: "user-3" }
      ]
    },
  ];
  const handleCourseClick = (courseId: string) => {
    router.push(`/search?id=${courseId}`, {
      scroll: false,
    });
  };
  // if (isLoading) return <LoadingSkeleton />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="landing">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="landing__hero" >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            This is the list of the courses you can enroll in.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="landing__cta">
            <Link href="/search" scroll={false}>
              <div className="landing__cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>

        <div className="landing__hero-images">
          {["/hero1.jpeg", "/hero2.jpeg", "/hero3.jpeg"].map((src, index) => (
            <Image key={src} src={src} alt={`Hero Banner ${index + 1}`} fill priority={index === currentImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={`landing__hero-image ${index === currentImage ? "landing__hero-image--active" : ""   }`}/>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ amount: 0.3, once: true }} className="landing__featured">
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          From beginner to advanced, in all industries, we have the right
          courses just for you and preparing your entire journey for learning
          and making the most.
        </p>

        <div className="landing__tags">
          {[ "web development", "enterprise IT", "react nextjs", "javascript", "backend development"].map((tag, index) => (
            <span key={index} className="landing__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="landing__courses">
          {courses &&
            courses.slice(0, 4).map((course, index) => (
              <motion.div key={course.courseId} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ amount: 0.4 }}>
                <CourseCardSearch
                  course={course}
                  onClick={() => handleCourseClick(course.courseId)}
                />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;

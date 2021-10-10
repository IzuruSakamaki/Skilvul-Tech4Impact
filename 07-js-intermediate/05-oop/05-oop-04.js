class Student {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.courseOfferings = [];
    }

    getIndexFromCourse(course) {
        const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
            return courseOffering.course.getSubject() === course.getSubject();
        });
        return indexOfCourse;
    }

    takeNewCourse(course) {
        // check if course already in array
        const isCourseExist = this.courseOfferings.find((courseOffering) => {
            return courseOffering.course.getSubject() === course.getSubject();
        });

        // push the course into array if the course not exist yet
        if (this.courseOfferings.length === 0 || !isCourseExist) {
            this.courseOfferings.push(new CourseOffering(course));
            course.decreaseQuota();
        }
    }

    courseAttendance(course) {
        const indexOfCourse = this.getIndexFromCourse(course);
        if (indexOfCourse >= 0) {
            this.courseOfferings[indexOfCourse].attendance++;
        }
    }

    takeATest(course) {
        const indexOfCourse = this.getIndexFromCourse(course);
        if (indexOfCourse >= 0) {
            if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
                this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
            } else {
                console.log("please fill your absent");
            }
        }
    }
}

class CourseOffering {
    constructor(course) {
        this.course = course;
        this.attendance = 0;
        this.grade = 0;
    }
}

class Course {
    constructor(subject, quota, attendance) {
        this.subject = subject;
        this.quota = quota;
        this.attendance = attendance;
    }
    getSubject() {
        return this.subject;
    }
    getAttendance() {
        return this.attendance;
    }
    decreaseQuota() {
        this.quota--;
    }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
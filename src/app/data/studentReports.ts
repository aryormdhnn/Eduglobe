export interface SubjectGrade {
    className: string;
    teacher: string;
    grade: string;
    attendance: string;
}

export interface StudentReport {
    enrollmentId: string;
    name: string;
    studentId: string;
    nationality: string;
    programme: string;
    session: string;
    dates: string;
    level: string;
    centre: string;
    overallResult: string;
    overallAttendance: string;
    subjects: SubjectGrade[];
}

export const studentReports: StudentReport[] = [
    {
        enrollmentId: "ENR001",
        name: "Emma Thompson",
        studentId: "2024PM00101",
        nationality: "United Kingdom",
        programme: "Business English Course",
        session: "BIEP202501",
        dates: "10/01/2025 - 10/04/2025",
        level: "Module 1-2",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "100%",
        subjects: [
            { className: "Introduction to Business Communication", teacher: "Ms. Aisha", grade: "A", attendance: "100%" },
            { className: "Professional Writing & Email Etiquette", teacher: "Mr. David", grade: "B", attendance: "100%" },
            { className: "Effective Meetings & Negotiation Skills", teacher: "Ms. Aisha", grade: "B", attendance: "100%" },
            { className: "English Proficiency Assessment", teacher: "Mr. David", grade: "A", attendance: "100%" },
        ],
    },
    {
        enrollmentId: "ENR002",
        name: "James Wilson",
        studentId: "2024PM00102",
        nationality: "Australia",
        programme: "Business English Course",
        session: "BIEP202502",
        dates: "14/02/2025 - 14/05/2025",
        level: "Module 1-2",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "95%",
        subjects: [
            { className: "Introduction to Business Communication", teacher: "Mr. David", grade: "B", attendance: "95%" },
            { className: "Professional Writing & Email Etiquette", teacher: "Ms. Aisha", grade: "C", attendance: "95%" },
            { className: "Business Presentations & Public Speaking", teacher: "Mr. Tom", grade: "C", attendance: "95%" },
            { className: "English Proficiency Assessment", teacher: "Mr. David", grade: "B", attendance: "100%" },
        ],
    },
    {
        enrollmentId: "ENR003",
        name: "Sophia Martinez",
        studentId: "2024PM00103",
        nationality: "Spain",
        programme: "Business English Course",
        session: "BIEP202503",
        dates: "01/03/2025 - 01/06/2025",
        level: "Module 3",
        centre: "EduGlobe KL",
        overallResult: "IN PROGRESS",
        overallAttendance: "90%",
        subjects: [
            { className: "Effective Meetings & Negotiation Skills", teacher: "Ms. Aisha", grade: "-", attendance: "90%" },
            { className: "Structure Speaking Practice", teacher: "Mr. Tom", grade: "C", attendance: "90%" },
            { className: "Listening Comprehension", teacher: "Ms. Fatin", grade: "B", attendance: "90%" },
        ],
    },
    {
        enrollmentId: "ENR004",
        name: "Liam Johnson",
        studentId: "2024PM00104",
        nationality: "United States",
        programme: "Business English Course",
        session: "BIEP202504",
        dates: "10/03/2025 - 10/06/2025",
        level: "Module 4",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "98%",
        subjects: [
            { className: "Business Presentations & Public Speaking", teacher: "Mr. Tom", grade: "A", attendance: "100%" },
            { className: "Sales, Marketing & Customer Communication", teacher: "Ms. Aisha", grade: "A", attendance: "95%" },
            { className: "Elective Presentation", teacher: "Mr. David", grade: "A", attendance: "100%" },
            { className: "English Proficiency Assessment", teacher: "Ms. Fatin", grade: "A", attendance: "100%" },
        ],
    },
    {
        enrollmentId: "ENR005",
        name: "Olivia Brown",
        studentId: "2024PM00105",
        nationality: "Canada",
        programme: "Business English Course",
        session: "BIEP202505",
        dates: "01/04/2025 - 01/07/2025",
        level: "Module 5",
        centre: "EduGlobe KL",
        overallResult: "IN PROGRESS",
        overallAttendance: "85%",
        subjects: [
            { className: "Sales, Marketing & Customer Communication", teacher: "Mr. David", grade: "-", attendance: "85%" },
            { className: "Customer Service Excellence", teacher: "Ms. Aisha", grade: "C", attendance: "85%" },
        ],
    },
    {
        enrollmentId: "ENR007",
        name: "Ava Garcia",
        studentId: "2024PM00107",
        nationality: "Mexico",
        programme: "Business English Course",
        session: "BIEP202507",
        dates: "01/04/2025 - 01/07/2025",
        level: "Module 1",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "100%",
        subjects: [
            { className: "Introduction to Business Communication", teacher: "Ms. Aisha", grade: "A", attendance: "100%" },
            { className: "English Proficiency Assessment", teacher: "Mr. David", grade: "A", attendance: "100%" },
        ],
    },
    {
        enrollmentId: "ENR009",
        name: "Isabella White",
        studentId: "2024PM00109",
        nationality: "New Zealand",
        programme: "Business English Course",
        session: "BIEP202509",
        dates: "12/05/2025 - 12/08/2025",
        level: "Module 3",
        centre: "EduGlobe KL",
        overallResult: "PASS",
        overallAttendance: "100%",
        subjects: [
            { className: "Effective Meetings & Negotiation Skills", teacher: "Ms. Aisha", grade: "B", attendance: "100%" },
            { className: "Structure Speaking Practice", teacher: "Ms. Fatin", grade: "A", attendance: "100%" },
            { className: "English Proficiency Assessment", teacher: "Mr. David", grade: "B", attendance: "100%" },
        ],
    },
];

export const gradesKey = [
    { range: "90% - 100%", letter: "A", label: "Distinction" },
    { range: "80% - 89%", letter: "B", label: "Credit" },
    { range: "70% - 79%", letter: "C", label: "Pass" },
    { range: "0% - 69%", letter: "F", label: "Fail" },
    { range: "x", letter: "I", label: "Incomplete" },
];

export function getReportByEnrollmentId(enrollmentId: string): StudentReport | undefined {
    return studentReports.find((r) => r.enrollmentId === enrollmentId);
}

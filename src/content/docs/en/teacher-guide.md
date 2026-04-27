--- 
title: Teacher Manual
description: Manual for using the Edurun platform for Teachers.
---

# Teacher Manual: Management and Evaluation in Edurun

## 1. Overview

**Edurun** is an online evaluation platform for Python programming, designed to integrate natively with LMS like Canvas. It allows creating exercises with automatic grading through unit tests and monitoring students' academic integrity through detailed traceability reports.

----------

## 2. Access and Roles

Access to the platform is done directly from Canvas, eliminating the need to create additional accounts.

-   **Authentication:** When logging in from the Canvas course, Edurun automatically detects your **Teacher** role.
    
-   **Management View:** Unlike students, teachers access a control panel to create, edit, and review activities such as "Assignments" or "Assessments".
    

----------

## 3. Types of Activities

Edurun allows managing two differentiated types of activities:

| **Type** | **Description** | **Recommended Use** |
|:------------:|:------------:|:------------:|
| **Assignment**    | Available activity with unit tests. Not graded in the gradebook.    | Formative practice and class exercises    |
| **Assessment**    | Graded activity. Includes **anti-plagiarism measures** (copy blocking, fullscreen mode) and traceability report.    | Final exams, quizzes, and evaluations. |

----------

## 4. Creating Assessments

To create a new activity, go to the "Activities Panel" in Edurun and select "Create Activity". You will need to configure the following parameters:

1.  ### General Information:
    
    -   **Activity Type:** Select "Assignment" or "Assessment".
        
    -   **Title:** Exercise name.
        
    -   **Description/Statement:** Detailed instructions for the student.
        
        
2.  ### Unit Tests Configuration (Python):
    
    You must define the test cases that will automatically validate the student's code. Edurun executes these tests each time the student submits their solution.
    
    _Example test structure in the editor:_
    
    ```python
    def test_basic_sum():
        """Basic test of the sum function"""
        assert sum(2, 3) == 5
        assert sum(-1, 1) == 0
    ```
    
    > **Note:**
    > - The system will calculate the grade based on the percentage of passed tests.
    > - A more detailed guide can be found within the application, in the Activities > Create Activity > Unit Tests section.
 
----------

## 5. Publishing in Canvas (Linking)

Once the assessment is created in Edurun, you must link it to a Canvas assignment so students can access it and the grade syncs.

1.  Create a new "Assignment" in Canvas.
    
2.  In the **"Submission Type"** field, select **"External Tool"**.

3. Ensure the grading is by **Points**, with a maximum of **100**   
    
4.  Search and select **Edurun**.
    
5.  A pop-up window will appear with the list of your assessments created in Edurun. Click **"Select"** on the corresponding assessment.
    
6.  Save and publish the assignment in Canvas.
    

> **Important:** Only students enrolled in the specific Canvas course will be able to access the linked assessment.

----------

## 6. Academic Integrity and Traceability

Edurun includes an advanced module to detect dishonest behaviors and verify code authorship.

### Automatic Security Measures

-   **Clipboard Blocking:** Students cannot copy, cut, or paste code within the editor.
    
-   **Fullscreen Control:** The assessment requires being in fullscreen mode. If the student exits this mode (e.g., `Alt+Tab`, `Esc`), the test is **automatically invalidated with a grade of 0** and the incident is recorded.
    

### Traceability Report (SpeedGrader)

When reviewing a submission through SpeedGrader in Canvas, you will visualize the **Traceability Report**, which includes:

-	**Results:** The percentage of completed unit tests

-   **Submitted Code:** The final script submitted by the student.
    
-   **Effort Metrics:**
    
    -   _Code Executions:_ How many times they manually tested their code.
        
    -   _Test Executions:_ How many times they attempted to submit the solution.
        
    -   _Total Time:_ Effective development duration.
        
-   **Suspicious Activities:**
    
    -   Attempts to copy, cut, or paste content, which were blocked.
        
    -   Loss of focus (times they switched windows or tabs).
        
    -   Time outside the assessment (accumulated seconds in other windows).
        
    -   Fullscreen exit alerts (INVALIDATED ASSESSMENT).

>**Note:** It is possible for a student to have 100% in the "Results" section, even if they cheated, but they will still be graded with 0. This is designed to provide sufficient information for the teacher to change the student's grade if they consider it appropriate.

----------

## 7. Grades

-   **Automatic Synchronization:** When the student finishes their attempt, the grade (0 to 100) is automatically sent to the Canvas gradebook.
    
-   **Feedback:** You can use native SpeedGrader tools to leave additional qualitative comments on the submission.

from django.shortcuts import render
from .models import *


grade_marks_dict = {
    'A+': 10,
    'A': 9,
    'B+': 8,
    'B': 7,
    'C': 6,
    'D': 5,
    'E': 4,
    'F': 0,
    'Ab': 0,
}


def index(request):
    context = {
            'found': True,
            'hidden': True,
            'sgpa': 0,
            'cgpa': 0,
            'subs': [],
            'grades': [],
            'sub_marks': {}
        }
    if request.method == 'POST':
        roll_no = request.POST['rollno']
        try:
            student = Student.objects.get(roll_no=roll_no)
        except:
            context['found'] = False
            return render(request, 'results.html', context)
        overall_result = OverallResult.objects.get(student=student)
        marks_list = MarksDetail.objects.filter(student=student)
        sgpa = overall_result.sem_gpa.split(': ')[-1]
        cgpa = overall_result.cum_gpa.split(': ')[-1]
        subs = [marks.subject for marks in marks_list]
        grades = [grade_marks_dict[marks.grade] for marks in marks_list]
        sub_grades = dict(zip(subs, grades))
        marks_list = enumerate(marks_list, 1)
        overall_result = overall_result.comment
        context = {
            'found': True,
            'student': student,
            'marks_list': marks_list,
            'overall_result': overall_result,
            'sgpa': sgpa,
            'cgpa': cgpa,
            'sub_marks': sub_grades,
            'subs': subs,
            'grades': grades
        }
    return render(request, 'results.html', context)

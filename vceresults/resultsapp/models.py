from django.db import models


class Student(models.Model):
    course = models.CharField(max_length=256)
    roll_no = models.CharField(max_length=15)
    name = models.CharField(max_length=128)
    father_name = models.CharField(max_length=128)

    def __str__(self):
        return ' '.join((self.roll_no, self.name))


class MarksDetail(models.Model):
    sub_code = models.CharField(max_length=6)
    subject = models.CharField(max_length=128)
    year = models.IntegerField()
    sem = models.IntegerField()
    credits = models.IntegerField()
    grade = models.CharField(max_length=2)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)


class OverallResult(models.Model):
    comment = models.CharField(max_length=128)
    sem_gpa = models.CharField(max_length=128)
    cum_gpa = models.CharField(max_length=128)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
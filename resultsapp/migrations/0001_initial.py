# Generated by Django 2.0.5 on 2018-06-08 12:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MarksDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_code', models.CharField(max_length=6)),
                ('subject', models.CharField(max_length=128)),
                ('year', models.IntegerField()),
                ('sem', models.IntegerField()),
                ('credits', models.IntegerField()),
                ('grade', models.CharField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='OverallResult',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=128)),
                ('sem_gpa', models.CharField(max_length=128)),
                ('cum_gpa', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.CharField(max_length=256)),
                ('roll_no', models.CharField(max_length=15)),
                ('name', models.CharField(max_length=128)),
                ('father_name', models.CharField(max_length=128)),
            ],
        ),
        migrations.AddField(
            model_name='overallresult',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resultsapp.Student'),
        ),
        migrations.AddField(
            model_name='marksdetail',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resultsapp.Student'),
        ),
    ]

from bs4 import BeautifulSoup
import os
from os import listdir
from resultsapp.models import *
import django


def parse_and_save_details(details):
    """
    personal_details:
        tr[0] is equivalent to caption, can be ignored
        tr[1]:
            td[1]->span: course name
        tr[2]:
            td[1]->span: roll no
            td[3]->span: name
        tr[3]:
            td[3]->span: father's name

    :parameter details:
    :return stduent-id:
    """
    try:
        rows = details.find_all('tr')
        row1, row2, row3 = rows[1], rows[2], rows[3]
        r1_tds, r2_tds, r3_tds = row1.find_all('td'), row2.find_all('td'), row3.find_all('td')
        r1_td1, r1_td3 = r1_tds[1], r1_tds[3]
        r2_td1, r2_td3 = r2_tds[1], r2_tds[3]
        r3_td3 = r3_tds[3]
        s = Student(
            course=r1_td1.span.text,
            roll_no=r2_td1.span.text,
            name=r2_td3.span.text,
            father_name=r3_td3.span.text
        )
        s.save()
        print(s)
        return s.id
    except:
        return None


def parse_and_save_marks(marks, student_id):
    """
    marks:
        tr[0] is just a caption, can be ignored
        tr[1] is row containing th tags
            [sno, sub code, sub, year, sem, credits, grade]
        tr[2:]
            all the values for above mentioned columns

    :param marks:
    :param student_id:
    :return None:
    """
    rows = marks.find_all('tr')[2:]
    for row in rows:
        tds = row.find_all('td')
        m = MarksDetail(
            sub_code=tds[1].text,
            subject=tds[2].text,
            year=tds[3].text,
            sem=tds[4].text,
            credits=tds[5].text,
            grade=tds[6].text,
            student_id=student_id
        )
        m.save()


def parse_and_save_result(result, student_id):
    """
    overall_result:
        tr[0] is equivalent to caption, can be ignored
        tr[1]:
            td[0]->span: comment
            td[2]->span: SGPA
        tr[2]:
            td[0]->span: CGPA

    :param result:
    :param student_id:
    :return None:
    """
    rows = result.find_all('tr')
    row1, row2 = rows[1], rows[2]
    r1_tds, r2_tds = row1.find_all('td'), row2.find_all('td')
    r1_td0, r1_td2 = r1_tds[0], r1_tds[2]
    r2_td0 = r2_tds[0]
    r = OverallResult(
        comment=r1_td0.span.text,
        sem_gpa=r1_td2.span.text,
        cum_gpa=r2_td0.span.text,
        student_id=student_id
    )
    r.save()


def parse_html(soup):
    """
    Pareses the HTML of the following structure and grabs the values
    to save into the database.
        Panel1
        --table - personal details
        --divResults
        ----table - marks
        --table - overall summary of result
    """
    try:
        panel1_div = soup.find("div", {"id": "Panel1"})
        stud_id = None
        try:
            personal_details, marks, overall_result = panel1_div.find_all('table')
            stud_id = parse_and_save_details(personal_details)
            if stud_id:
                parse_and_save_marks(marks, stud_id)
                parse_and_save_result(overall_result, stud_id)
                return True
        except:
            return None
    except:
        return None


def parse_and_save(file):
    html = file.read()
    soup = BeautifulSoup(html, "lxml")
    return parse_html(soup)


def process_files(directory_path, file_names):
    for filename in file_names:
        with open(directory_path + filename) as file:
            if not parse_and_save(file):
                print('problem with ', filename)


if __name__ == '__main__':
    # os.environ['DJANGO_SETTINGS_MODULE'] = 'vceresults.settings'
    # django.setup()
    path_to_folder = 'resultsapp/results/'
    file_names = listdir(path_to_folder)
    process_files(path_to_folder, file_names)

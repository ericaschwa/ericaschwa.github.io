var app = angular.module('resume', []);
    
app.controller('resumeCtrl', function($scope) {
    $scope.education = [
        {'school': 'Tufts University, Medford, MA, BS in Computer Science',
         'year': '09/2013 - 05/2017'},

        {'school': 'CIEE Summer Language and Culture Program, Seville, Spain',
        'year': '05/2014 - 06/2014'},

        {'school': 'Hanover High School, Hanover, NH', 'year': '09/2009 - 05/2013'}
    ];
    $scope.courses = [
        'Intro Computer Science',
        'Discrete Mathematics',
        'Data Structures',
        'Machine Structure and Programming',
        'Linear Algebra',
        'Multivariable Calculus',
        'Programming Languages',
        'Web Programming',
        'Wearable Devices',
        'Web Engineering',
        'Theory of Computation'
    ];
    $scope.experience = [
        {'title': 'Software Engineering Intern at SurveyMonkey, Summer 2016 (Present)',
         'tasks': [
            'Create an event log to display the activity of a given account on the site',
            'Utilize tools such as RabbitMQ, Pyramid, and Jinja2 to create a complete, full-stack product'
        ]},
        {'title': 'Software Engineering Intern at MITRE, Summer 2015',
         'tasks': [
            'Prototyped a modern, thin client user interface for an existing system of record',
            'Presented project to the upper level management at the Intern Innovation Brown Bag',
            'Practiced agile scrum methods for collaboration with a software development team'
        ]},
        {'title': 'Intern at the Social Perception Lab at Dartmouth College, Summer 2012 and Summer 2014',
         'tasks': [
            'Adapted object and face recognition tests to be accessible online',
            'Developed a website on the topic of prosopagnosia in kids for parents and researchers'
        ]},
        {'title': 'Intern at the Cancer Risk Behaviors Group at Dartmouth College, Summer 2013',
         'tasks': [
            'Conducted a literature review resulting in a 72-article Endnote library',
            "Analyzed content of fast food restaurants’ and alcohol brands’ websites"
        ]}
    ];
    $scope.software= 'Photoshop, SPSS, Git, Linux';
    $scope.languages = 'C, C++, Python, HTML/CSS, Javascript/AngularJS';
    $scope.activities=[
        'Senior Teaching Assistant and Lab Leader for Computer Science 0015 (a.k.a. "Data Structures")',
        'Project Leader and Programmer for JumboCode',
        'Leadership Council member for Peer Health Exchange'
    ];
});

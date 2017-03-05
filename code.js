var app = angular.module('resume', []);
    
app.controller('resumeCtrl', function($scope) {
    $scope.education = [
        {'school': 'Tufts University, Medford, MA, BS in CS',
         'year': '09/2013 - 05/2017'},

        {'school': 'CIEE Language & Culture Program, Sevilla, ES',
        'year': '05/2014 - 06/2014'},

        {'school': 'Hanover High School, Hanover, NH', 'year': '09/2009 - 05/2013'}
    ];
    $scope.courses = [
        'Intro Computer Science',
        'Discrete Mathematics',
        'Data Structures',
        'Machine Structure & Programming',
        'Linear Algebra',
        'Multivariable Calculus',
        'Programming Languages',
        'Web Programming',
        'Wearable Devices',
        'Web Engineering',
        'Theory of Computation',
	'Abstract Algebra',
	'Computer Security',
	'Algorithms',
	'Computational Biology',
	'Machine Learning',
	'Senior Thesis'
    ];
    $scope.experience = [
        {'title': 'Teaching Fellow & Senior Lab Leader for Data Structures, 2015 - Present',
         'tasks': [
            'Directed discussion of topic matter & lab assignments',
            'Developed & wrote specification for standard final project & independent final project'
        ]},
        {'title': 'Software Engineering Intern at SurveyMonkey, Summer 2016',
         'tasks': [
            'Created an event log to save & display the activity of a given account on the site',
            'Utilized tools such as MySQL, Python, & Jinja2 to create a complete, full-stack product'
        ]},
        {'title': 'Software Engineering Intern at MITRE, Summer 2015',
         'tasks': [
            'Prototyped a user interface for an existing system of record',
            'Presented at the Intern Innovation Brown Bag: an opportunity given to only 4 intern groups'
        ]},
        {'title': 'Research Assistant at the Tufts University Avian Cognition Lab, 2013 - 2014',
         'tasks': [
            'Worked on the Visual Basic code for experiments',
            'Coded a perceptron, a computer program that models a neuron, using C++'
        ]},
        {'title': 'Intern at the Social Perception Lab at Dartmouth College, Summer 2012 & Summer 2014',
         'tasks': [
            'Adapted object & face recognition tests to be accessible online',
            'Developed a website on the topic of prosopagnosia in kids for parents & researchers'
        ]}
    ];
    $scope.software= 'Git, Linux, Jira, Photoshop, SPSS';
    $scope.languages = 'C, C++, Python, HTML/CSS, JavaScript/AngularJS, SQL';
    $scope.activities=[
        'Project Leader & Programmer for JumboCode',
	'Career Development Officer for Women in Computer Science',
        'Leadership Council member for Peer Health Exchange',
        'Orientation Leader'
    ];
});

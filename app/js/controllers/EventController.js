'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = false;
        $scope.myStyle = {color: 'red'};
        $scope.myClass = "blue";
        $scope.buttonDisabled = false;
        $scope.sortOrder = "name";
        $scope.queryDifficulty = "";
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '07/22/2013',
            time: '20:22 pm',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/angularjs.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes. Learn what they do and why they are needed',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'John Doe',
                    duration: '2 hr',
                    level: 'Intermediate',
                    abstract: 'Looking inside the controllers',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.buttonToggle = function() {
            this.buttonDisabled = true;
        }

    }
);
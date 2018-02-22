/// <reference path="../views/error.html" />
angular
    .module('altairApp')
    .controller('adminDashBoardCtrl', [
       '$rootScope',
        '$scope',
        '$compile',
        '$interval',
        '$timeout',
        '$resource',
        'DTOptionsBuilder',
        'DTColumnDefBuilder',
        function ($rootScope, $scope, $compile, $interval, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            $scope.installed_service_data = [
                { serviceName: 'Spark', scale: '8', installedTime: 'Wed Aug 16: 22:20', state: 'running', description: 'streaming engine' },
                { serviceName: 'Kafka', scale: '5', installedTime: 'Tues Aug 15: 19:30', state: 'running', description: 'messaginging' },
                { serviceName: 'Yahoo! Kafka Manager', scale: '2', installedTime: 'Tues Aug 15: 14:21', state: 'running', description: 'messaginging mgr' }
            ];
            $scope.available_for_installing_service_data = [
                { serviceName: 'Spark Shuttle Service', scale: '-na-', installedTime: 'INSTALL NOW', state: '', description: 'stream service' },
                { serviceName: 'Spark History Server', scale: '-na-', installedTime: 'INSTALL NOW', state: '', description: 'stream history' },
                { serviceName: 'Elasticsearch', scale: '-na-', installedTime: 'INSTALL NOW', state: '', description: 'persistence' },
            ];
            $scope.dtOptions = DTOptionsBuilder
                .newOptions()
                .withDisplayLength(10)
                .withOption('paging', false)
                .withOption('searching', false)
                .withOption('bInfo', false)
                //.withOption('scrollY', '200px')
                //.withOption('scrollCollapse', false)
                .withOption('initComplete', function () {
                    $timeout(function () {
                        $compile($('.dt-uikit .md-input'))($scope);
                    });
                });
            $scope.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3),
                DTColumnDefBuilder.newColumnDef(4)
            ];
        }
    ]);
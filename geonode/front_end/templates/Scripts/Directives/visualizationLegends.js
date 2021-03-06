﻿appHelperModule.directive('visualizationLegend', ['mapTools', 'utilityService',
function (mapTools, utilityService) {
    return {
        restrict: 'EAC',

        templateUrl: '/static/Templates/visualizationLegend.html',
        controller: ['$scope', function ($scope) {
                $scope.activeLayerTool = mapTools.activeLayer;
                // console.log($scope.enable);
                
                $scope.getSelectedAttributeName = function () {
                    var visualizationSettings = $scope.activeLayerTool.getActiveLayer().style.visualizationSettings;
                    if (!visualizationSettings) return "";

                    var attribute = _.findWhere($scope.activeLayerTool.getActiveLayer().getAttributeDefinition(), { Id: visualizationSettings.attributeId });
                    if (!attribute) return "";

                    return attribute.Name;
                };
                
                $scope.canRenderLegend = function () {
                    var canRender = false;
                    if ($scope.activeLayerTool) {
                        var activeLayer = $scope.activeLayerTool.getActiveLayer();
                        canRender = activeLayer.Style && activeLayer.Style.visualizationSettings && activeLayer.getFeatureType() != 'raster'
                            && isLegendAllowed(activeLayer.Style.visualizationSettings) && activeLayer.IsVisible;
                    }
                    if(canRender){
                        setupLegendItems();
                    }
                    return canRender;
                };

                function setupLegendItems(){
                    if($scope.model.visName == 'Chart'){
                        chartSelectedAttributes();
                    }
                }

                $scope.model = {
                    visName: '',
                    legendItems: []
                };

                function isLegendAllowed(config){
                    $scope.model.visName = config.name;
                    $scope.visConfig = config;
                    return config.name === 'Chart';
                }

                function chartSelectedAttributes(){
                    $scope.selectedAttributes = utilityService.getChartSelectedAttributes($scope.visConfig);
                }
            }
        ]
    };
}
]);
﻿mapModule.factory('ActiveLayerTool', [
    'jantrik.Event',
    function (Event) {
        return function ActiveLayerTool(surfMap, interactionHandler) {
            var _thisTool = this;
            var _activeLayerId;
            var isFeatureSelectEnabled=false;

            this.events = new Event();

            function assignActiveLayer() {
                var id = undefined;

                for (id in surfMap.getLayers());

                if (angular.isDefined(id)) {
                    _thisTool.setActiveLayer(id);
                } else {
                    _thisTool.setActiveLayer(null);
                }
            }

            function getLayer(layerId) {
                return surfMap.getLayer(layerId);
            }

            function deactivateAllTools(surfLayer) {
                if (surfLayer.tools) {
                    for (var toolName in surfLayer.tools) {
                        var tool = surfLayer.tools[toolName];
                        tool.deactivate && tool.deactivate();
                    }
                }
            }
            function activateFeatureSelectTool(surfLayer) {
                if (surfLayer.tools) {
                    surfLayer.tools.selectFeature.activate && surfLayer.tools.selectFeature.activate();
                    surfLayer.tools.displayAttribute.activate && surfLayer.tools.displayAttribute.activate();
                }
            }

            this.setActiveLayer = function (newActiveLayerId) {
                var oldActiveLayerId = _activeLayerId;
                _activeLayerId = newActiveLayerId;

                var oldActiveLayer = getLayer(oldActiveLayerId);
                var newActiveLayer = getLayer(newActiveLayerId);

                if (oldActiveLayerId != newActiveLayerId) {
                    deactivateAllTools(oldActiveLayer);
                    if(isFeatureSelectEnabled) activateFeatureSelectTool(newActiveLayer);
                    _thisTool.events.broadcast('changed', newActiveLayer, oldActiveLayer);
                }

                oldActiveLayer.setActive(false);
                newActiveLayer.setActive(true);

                return newActiveLayer;
            };
            this.setActiveLayerSelectInteractions=function () {
                var layer=getLayer(_activeLayerId);
                activateFeatureSelectTool(layer);
                isFeatureSelectEnabled=!isFeatureSelectEnabled;
                return isFeatureSelectEnabled;
            };
            this.disableActiveLayerSelectInteractions=function () {
                var layer=getLayer(_activeLayerId);
                deactivateAllTools(layer);
                isFeatureSelectEnabled=!isFeatureSelectEnabled;
                return isFeatureSelectEnabled;
            };

            this.getActiveLayer = function () {
                if (!_activeLayerId && surfMap.isEmpty()) {
                    assignActiveLayer();
                }

                return getLayer(_activeLayerId);
            };
            
            this.hasActiveLayer = function() {
                return !(getLayer(_activeLayerId).isNull);
            };

            surfMap.events.register('layerAdded', function (surfLayer) {
                _thisTool.setActiveLayer(surfLayer.getId());
            }).register('layerRemoved', function (surfLayer, closing) {
                if (!closing && surfLayer.getId() == _activeLayerId) {
                    assignActiveLayer();
                }
            }).register('closed', function() {
                _thisTool.setActiveLayer(null);
            });
        };
    }
]);
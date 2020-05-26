var map;
$(document).ready(function () {
    map = L.map('map-container', {
        center: [39.3651, 116.6638],
        zoom: 9
    })
    //.setView([39.3651, 116.6638], 9);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    addOverlayImage()
    getCountyShape();
    addCountyPoint();

    /**
     *  添加栅格图层
     */
    function addOverlayImage() {
        let minX = 116.23325, minY = 38.60125, maxX = 117.38225, maxY = 40.212250000000004

        var imageBounds =
            [[minY, minX], [maxY, maxX]]
        L.imageOverlay('./data/export.png', imageBounds, {
            opacity: 1
        }).addTo(map)
    }

    /**
     * 获取的县级行政区划边界
     */
    function getCountyShape() {
        /**
         *  县行政区划面样式
         * @param feature
         * @return {{fillColor: string, color: string, fillOpacity: number, weight: number, opacity: number, dashArray: string}}
         */
        var style = function (feature) {
            return {
                weight: 2,
                opacity: 1,
                color: '#26aeff',
                dashArray: '3',
                fillOpacity: 0,
                fillColor: '#fff'
            };
        }
        fetch('./data/langfang.geojson')
            .then(response => response.json())
            .then(result => {

                var geojson = L.geoJson(result, {
                    style: style,
                }).addTo(map);
            })

    }

    /**
     * 显示县驻地标注点
     */
    function addCountyPoint() {
        fetch('./data/points.geojson')
            .then(response => response.json())
            .then(result => {
                if (result) {
                    var myIcon
                    result.forEach(function (point) {
                        console.log(point.geometry.coordinates)
                        myIcon = L.divIcon({className: 'my-div-icon', html:`<span>${ point.properties.NAME}</span>`});
                        L.marker([point.geometry.coordinates[1], point.geometry.coordinates[0]], {icon: myIcon}).addTo(map);
                    })
                }

            })

    }



})
;


## 目录

### 🌐 坐标系

#### 一. 投影坐标系
   [天地图](http://lbs.tianditu.gov.cn/server/MapService.html)提供的底图投影主要包括两种经纬度投影、球面墨卡托投影。
   分别对应EPSG Code为EPSG:4326、EPSG:3857
   
   * 经纬度投影(4326):
   ![经纬度投影](img/epsg4326.jpg "经纬度投影")
   
   * 球面墨卡托投影(3857):  
   ![球面墨卡托投影](img/epsg3857.jpg "球面墨卡托投影")
   
   Leaflet.js默认投影为球面墨卡托投影，修改默认投影:  
   ```javascript
    new L.Map('map', {center: new L.LatLng(30.5, 110.51),
                                    zoom: 4,
                                    crs: L.CRS.EPSG4326
        });
   ```
   
#### 2.大量点数据解决方案
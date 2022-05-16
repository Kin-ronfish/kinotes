# babylon

> [babylon](https://www.babylonjs.com/) 前端3D显示插件

model.vue

```html
<template>
    <canvas id="renderCanvas"></canvas>
</template>

<script>
    import * as BABYLON from "babylonjs";
    export default {
        data() {
            return {
                canvas: "",
                engine: ""
            }
        },
        mounted() {
            this.render();
        },
        methods: {
            createScene() {
                let scene = new BABYLON.Scene(this.engine);
                this.createCamera(scene);
                // ...内容主要在这里加入场景
                return scene;
            },
            render() {
                // 获取到renderCanvas这个要素
                this.canvas = document.getElementById("renderCanvas"); 
                this.engine = new BABYLON.Engine(this.canvas, true);
                let scene = this.createScene(); // 首先调用它并赋值给一个变量
                this.engine.runRenderLoop(function () {
                    scene.render();
                });
                window.addEventListener("resize", function () {
                    this.engine.resize();
                });
            }
        }
    }
</script>

<style scoped>
#renderCanvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>
```

## 相机模块

```javascript
export function createCamera(scene) {
    // 参数：名称、alpha、beta、半径、目标位置、场景
    // ArcRotateCamera(弧形旋转相机)
    const camera = new BABYLON.ArcRotateCamera("Camera",0,0,50,
    	new BABYLON.Vector3(0, 0.5, 0),scene);
    camera.attachControl(this.canvas, true);
    // beta最大最小值限制
    camera.lowerBetaLimit = 0;
    camera.upperBetaLimit = 1;
    // 相机缩放大小限制
    camera.lowerRadiusLimit = 8;
    camera.upperRadiusLimit = 15;
    // 相机位置
    camera.setPosition(new BABYLON.Vector3(90, 80, 100));
    // 相机自动旋转
    camera.useFramingBehavior = true;
}
```

## 场景材质

```javascript
// 设置场景HDR材质
export function createHDR(scene) {
    let hdrTexture = new BABYLON.HDRCubeTexture("scene.hdr", scene, 512);
    let hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
    let hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
    hdrSkyboxMaterial.backFaceCulling = false;
    hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
    hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    hdrSkybox.material = hdrSkyboxMaterial;
    scene.environmentTexture = hdrTexture;
}

// 设置场景DDS材质
export function createDDS(scene) {
    let hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData(
        "environment.dds",scene);
    hdrTexture.gammaSpace = false;
    scene.environmentTexture = hdrTexture;
}

```

## 灯光模块

```javascript
export function createDirectionalLight(scene) {
    // 参数：名称、目标位置、场景
    const light = new BABYLON.DirectionalLight("direct",
    	new BABYLON.Vector3(0, 10, 1),scene);
}
// 创建点光灯
// 参数：名称、目标位置、场景
export function createPointLight(scene) {
  	const light = new BABYLON.PointLight("dir01",new BABYLON.Vector3(0, 0, -5),scene);
  	light.position = new BABYLON.Vector3(0, 15, 0);
    light.intensity = 6;// 灯光亮度
  	light.setEnabled(false);// 灯光开关
    light.range = 100;// 灯光范围
}

// 创建半球灯光
export function createHemisphericLight(scene) {
    const light = new BABYLON.HemisphericLight("hemiLight",new BABYLON.Vector3(0, 0, -5),scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);
	light.specular = new BABYLON.Color3(0, 1, 0);
	light.groundColor = new BABYLON.Color3(0, 1, 0);
}

// 创建聚光灯
// 参数：名称、位置、方向、角度、指数
export function createSpotLight(scene) {
    const light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-1, 1, -1), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 10, scene);
	light.diffuse = new BABYLON.Color3(1, 0, 0);
	light.specular = new BABYLON.Color3(0, 1, 0);
}

// diffuse 高光颜色
// specular 正光面颜色
// groundColor 背光面颜色
```

## 加载模块

```javascript
// 加载模型
export function loadGltf(scene, path) {
  BABYLON.SceneLoader.ImportMesh("", path, "", scene, function (meshes) {
    meshes.forEach((mesh) => {
      console.log(mesh)
    })
    // console.table(scene.meshes.map((item) => item.name));
  })
}
```

载入obj文件和mtl文件，mtl文件里的贴图路径要对应图片的相对路径，才能正常显示贴图信息。

```txt
newmtl blinn1SG
illum 4
Kd 0.50 0.50 0.50
Ka 0.00 0.00 0.00
Tf 1.00 1.00 1.00
Ni 1.00
Ks 0.50 0.50 0.50
map_Kd ./img/img1.png //贴图路径
newmtl blinn2SG
illum 4
Kd 0.50 0.50 0.50
Ka 0.00 0.00 0.00
Tf 1.00 1.00 1.00
Ni 1.00
Ks 0.50 0.50 0.50
map_Kd ./img/img2.png //贴图路径
```

## GUI模块

```javascript
// 创建UI弹窗
export function createGUI() {
  let advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  advancedTexture.idealWidth = 200;
  let rect = new GUI.Rectangle();
  advancedTexture.addControl(rect);
  let label = new GUI.TextBlock();
  rect.width = "15px";
  rect.height = "5px";
  rect.linkOffsetY = -5;
  rect.addControl(label);
}
```

App.vue

```html
<style>
html,
body,
#app {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
```

> 在vue项目中要导入三维模型，需要确认模型的具体路径
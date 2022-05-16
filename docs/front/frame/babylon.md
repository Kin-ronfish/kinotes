# babylon

框架熟练程度：⭐⭐

> [babylon官方文档](https://www.babylonjs.com/) 前端3D渲染框架
>
> [babylon模型演示网站](https://sandbox.babylonjs.com/)
>
> 在vue项目中要导入三维模型，需要确认模型的**具体路径**

以下笔记为独一的功能模块，在初始开发时可以直接使用

- 主程序入口

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

- 相机模块

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

- 场景材质

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

// 设置全景图像
export function photo(scene) {
    let dome = new BABYLON.PhotoDome("testdome","./img/sidexside.jpg",
        {resolution: 32,size: 2000},scene);
    dome.imageMode = BABYLON.PhotoDome.MODE_SIDEBYSIDE;
}

// 设置全景视频
function video(scene) {
    new BABYLON.VideoDome(
        "videoDome",["./video/2.mp4"],
        {resolution: 32, clickToPlay: true},scene
    );
}
```

- 灯光模块

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

- 加载模块

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

载入obj文件和mtl文件，mtl文件里的贴图路径要对应图片的相对路径，才能正常显示贴图信息

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

- GUI模块

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

- 物体编辑器

```javascript
// 物体编辑工具
// mesh 为物体对象，type为功能数组：1为移动，2为旋转，3为缩放
export function createEditTool(scene,mesh,type) {
    let utilLayer = new BABYLON.UtilityLayerRenderer(scene)
    utilLayer.utilityLayerScene.autoClearDepthAndStencil = false;
    if(type.includes(1)) {
        let gizmo_2 = new BABYLON.PositionGizmo(utilLayer);
        gizmo_2.attachedMesh = mesh;
    }
    if(type.includes(2)) {
        let gizmo_3 = new BABYLON.RotationGizmo(utilLayer);
        gizmo_3.attachedMesh = mesh;
    }
    if(type.includes(3)) {
        let gizmo = new BABYLON.ScaleGizmo(utilLayer);
        gizmo.attachedMesh = mesh;
    }
    if(type.includes(4)) {
        let gizmo_1 = new BABYLON.BoundingBoxGizmo(BABYLON.Color3.FromHexString("#0984e3"), utilLayer)
        gizmo_1.attachedMesh = mesh;
    }
}
```

- 相机第一人称移动UI

```javascript
export function operation(camera,scene) {
    let adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    let xAddPos = 0;
    let yAddPos = 0;
    let xAddRot = 0;
    let yAddRot = 0;
    let sideJoystickOffset = 50;
    let bottomJoystickOffset = -50;
    let translateTransform;

    let leftThumbContainer = makeThumbArea("leftThumb", 2, "blue", null);
        leftThumbContainer.height = "100px";
        leftThumbContainer.width = "100px";
        leftThumbContainer.isPointerBlocker = true;
        leftThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        leftThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        leftThumbContainer.alpha = 0.4;
        leftThumbContainer.left = sideJoystickOffset;
        leftThumbContainer.top = bottomJoystickOffset;

    let leftInnerThumbContainer = makeThumbArea("leftInnterThumb", 4, "blue", null);
        leftInnerThumbContainer.height = "40px";
        leftInnerThumbContainer.width = "40px";
        leftInnerThumbContainer.isPointerBlocker = true;
        leftInnerThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        leftInnerThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;


    let leftPuck = makeThumbArea("leftPuck",0, "blue", "blue");
        leftPuck.height = "30px";
        leftPuck.width = "30px";
        leftPuck.isPointerBlocker = true;
        leftPuck.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        leftPuck.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

        leftThumbContainer.onPointerDownObservable.add(function(coordinates) {
            leftPuck.isVisible = true;
            leftPuck.floatLeft = coordinates.x-(leftThumbContainer._currentMeasure.width*.5)-sideJoystickOffset;
            leftPuck.left = leftPuck.floatLeft;
            leftPuck.floatTop = adt._canvas.height - coordinates.y-(leftThumbContainer._currentMeasure.height*.5)+bottomJoystickOffset;
            leftPuck.top = leftPuck.floatTop*-1;
            leftPuck.isDown = true;
            leftThumbContainer.alpha = 0.9;
        });

        leftThumbContainer.onPointerUpObservable.add(function() {
            xAddPos = 0;
            yAddPos = 0;
            leftPuck.isDown = false;
            leftPuck.isVisible = false;
            leftThumbContainer.alpha = 0.4;
        });

        leftThumbContainer.onPointerMoveObservable.add(function(coordinates) {
            if (leftPuck.isDown) {
                xAddPos = coordinates.x-(leftThumbContainer._currentMeasure.width*.5)-sideJoystickOffset;
                yAddPos = adt._canvas.height - coordinates.y-(leftThumbContainer._currentMeasure.height*.5)+bottomJoystickOffset;
                leftPuck.floatLeft = xAddPos;
                leftPuck.floatTop = yAddPos*-1;
                leftPuck.left = leftPuck.floatLeft;
                leftPuck.top = leftPuck.floatTop;
            }
        });

    adt.addControl(leftThumbContainer);
    leftThumbContainer.addControl(leftInnerThumbContainer);
    leftThumbContainer.addControl(leftPuck);
    leftPuck.isVisible = false;

    let rightThumbContainer = makeThumbArea("rightThumb", 2, "red", null);
        rightThumbContainer.height = "100px";
        rightThumbContainer.width = "100px";
        rightThumbContainer.isPointerBlocker = true;
        rightThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        rightThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        rightThumbContainer.alpha = 0.4;
        rightThumbContainer.left = -sideJoystickOffset;
        rightThumbContainer.top = bottomJoystickOffset;

    let rightInnerThumbContainer = makeThumbArea("rightInnterThumb", 4, "red", null);
        rightInnerThumbContainer.height = "40px";
        rightInnerThumbContainer.width = "40px";
        rightInnerThumbContainer.isPointerBlocker = true;
        rightInnerThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        rightInnerThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

    let rightPuck = makeThumbArea("rightPuck",0, "red", "red");
        rightPuck.height = "30px";
        rightPuck.width = "30px";
        rightPuck.isPointerBlocker = true;
        rightPuck.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        rightPuck.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;

        rightThumbContainer.onPointerDownObservable.add(function(coordinates) {
            rightPuck.isVisible = true;
            rightPuck.floatLeft = adt._canvas.width - coordinates.x-(rightThumbContainer._currentMeasure.width*.5)-sideJoystickOffset;
            rightPuck.left = rightPuck.floatLeft*-1;
            rightPuck.floatTop = adt._canvas.height - coordinates.y-(rightThumbContainer._currentMeasure.height*.5)+bottomJoystickOffset;
            rightPuck.top = rightPuck.floatTop*-1;
            rightPuck.isDown = true;
            rightThumbContainer.alpha = 0.9;
        });

        rightThumbContainer.onPointerUpObservable.add(function() {
            xAddRot = 0;
            yAddRot = 0;
            rightPuck.isDown = false;
            rightPuck.isVisible = false;
            rightThumbContainer.alpha = 0.4;
        });
        rightThumbContainer.onPointerMoveObservable.add(function(coordinates) {
            if (rightPuck.isDown) {
                xAddRot = adt._canvas.width - coordinates.x-(rightThumbContainer._currentMeasure.width*.5)-sideJoystickOffset;
                yAddRot = adt._canvas.height - coordinates.y-(rightThumbContainer._currentMeasure.height*.5)+bottomJoystickOffset;
                rightPuck.floatLeft = xAddRot*-1;
                rightPuck.floatTop = yAddRot*-1;
                rightPuck.left = rightPuck.floatLeft;
                rightPuck.top = rightPuck.floatTop;
            }
        });

    adt.addControl(rightThumbContainer);
    rightThumbContainer.addControl(rightInnerThumbContainer);
    rightThumbContainer.addControl(rightPuck);
    rightPuck.isVisible = false;

    scene.registerBeforeRender(function(){
        translateTransform = BABYLON.Vector3.TransformCoordinates(
            new BABYLON.Vector3(xAddPos/1000, 0, yAddPos/1000), 
            BABYLON.Matrix.RotationY(camera.rotation.y));
        camera.cameraDirection.addInPlace(translateTransform);
        camera.position._y -= yAddRot/50*-1;
        camera.cameraRotation.y += xAddRot/25000*-1;
    });
}

export function makeThumbArea(name, thickness, color, background){
    let rect = new BABYLON.GUI.Ellipse();
    rect.name = name;
    rect.thickness = thickness;
    rect.color = color;
    rect.background = background;
    return rect;
}
```

- 物理引擎

> 添加物理引擎需要引入cannon.js

```javascript
export function createScene() { // 场景
    let scene = new BABYLON.Scene(engine);
    scene.enablePhysics(); // 开启物理动效
    return scene;
}
export function createBackground(scene) { // 创建平面
    let ground = new BABYLON.Mesh.CreateGround("ground", 30, 30, 2, scene);
    ground.position = new BABYLON.Vector3(0,-20,0);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    return ground;
}

export function createBox(scene) { // 创建方块
    let box = new BABYLON.MeshBuilder.CreateBox("box", {height: 2, width:2, depth: 2});
    box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 10, restitution: 0.9 }, scene);
    return box;
}
```


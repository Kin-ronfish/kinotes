import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'
import  'babylonjs-gui'

/**
 * 传入一个canvas
 */
 export default class Babylon {
    constructor(canvas) {
        this.canvas = canvas
        this.scene = ""
        this.engine = ""
        this.render(canvas)
    }
    /**
     * 渲染函数
     * @param {*} canvas 
     */
    render(canvas) {
        this.engine = new BABYLON.Engine(canvas, true)
        this.createScene()
        this.ArcRotateCamera()
        this.createHemisphericLight()
    }
    /**
     * 创建场景
     */
    createScene() {
        this.scene = new BABYLON.Scene(this.engine);
    }
    // ---------------------------------------------------------------------相机
    /**
     * 创建弧度相机
     * @param {*} config 
     */
    ArcRotateCamera(config={}) {
        const camera = new BABYLON.ArcRotateCamera("Camera",0,0,20, new BABYLON.Vector3(0, 0, 0),this.scene);
        camera.attachControl(this.canvas, true);
        // beta最大最小值限制
        config.lowerBetaLimit ? camera.lowerBetaLimit = 0 : ''
        config.upperBetaLimit ? camera.upperBetaLimit = 1 : ''
        // 相机缩放大小限制
        config.lowerRadiusLimit ? camera.lowerRadiusLimit = 10 : ''
        config.upperRadiusLimit ? camera.upperRadiusLimit = 40 : ''
        // 相机位置
        camera.setPosition(new BABYLON.Vector3(0, 10, 30));
        // 相机自动旋转
        // camera.useAutoRotationBehavior = true;
        //变焦速度
        // camera.wheelPrecision = 20; //电脑滚轮速度，越小灵敏度越高
        // camera.pinchPrecision = 20; //手机放大缩小速度，越小灵敏度越高
        return camera
    }
    /**
     * 相机视角切换
     * @param {*} camera 
     * @param {*} newPos 新位置
     */
    cameraAction(camera, newPos) {
        var ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        BABYLON.Animation.CreateAndStartAnimation('at1', camera, 'position', 55, 200, camera.position, newPos, 0, ease)
    }
    // ---------------------------------------------------------------------灯光
    /**
     * 创建平行光
     * 参数：名称、目标位置、场景
     * @returns 
     */
    createDirectionalLight() {
        // 参数：名称、目标位置、场景
        const light = new BABYLON.DirectionalLight("direct",
            new BABYLON.Vector3(0, -10, -1), this.scene);
        return light
    }
    /**
     * 创建点光灯
     * 参数：名称、目标位置、场景
     * @returns 
     */
    createPointLight() {
        const light = new BABYLON.PointLight("dir01",new BABYLON.Vector3(0, 0, -5),this.scene);
        light.position = new BABYLON.Vector3(0, 15, 0);
        light.intensity = 6;// 灯光亮度
        light.setEnabled(false);// 灯光开关
        light.range = 100;// 灯光范围
        return light
    }
    /**
     * 创建半球灯光
     * @returns 
     */
    createHemisphericLight() {
        const light = new BABYLON.HemisphericLight("hemiLight",new BABYLON.Vector3(0, 1, 0),this.scene);
        light.diffuse = new BABYLON.Color3(1, 0, 0);
        light.specular = new BABYLON.Color3(0, 1, 0);
        light.groundColor = new BABYLON.Color3(0, 1, 0);
        light.intensity = 1
        return light
    }
    /**
     * 创建聚光灯
     * 参数：名称、位置、方向、角度、指数
     * @returns 
     */
    createSpotLight() {
        const light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(-1, 1, -1), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 10, this.scene);
        light.diffuse = new BABYLON.Color3(1, 0, 0);
        light.specular = new BABYLON.Color3(0, 1, 0);
        return light
    }
    // ---------------------------------------------------------------------材质
    /**
     * 创建基础材质
     * @param {*} color 
     * @returns 
     */
    createStandardMaterial(color=BABYLON.Color3.White()) {
        const material = new BABYLON.StandardMaterial("mat", this.scene)
        material.diffuseColor = color
        material.backFaceCulling = false // 是否单面显示
        return material
    }
    /**
     * 创建PBR材质
     * @param {*} hdr 环境贴图
     * @returns 
     */
    createPBRMaterial(hdr) {
        const pbr = new BABYLON.PBRMaterial("PBRMat", this.scene)
        pbr.reflectanceTexture = hdr // 环境映射
        pbr.backFaceCulling = false // 是否单面显示
        pbr.alpha = 0.5 // 透明度
        pbr.environmentIntensity = 1 // 亮度
        pbr.microSurface = 0.8 // 模糊度
        return pbr
    }
    /**
     * 设置场景HDR材质
     * @param {*} path hdr文件路径
     * @returns 
     */
    createHDR(path) {
        const hdrTexture = new BABYLON.HDRCubeTexture(path, this.scene, 512);
        const hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, this.scene);
        const hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", this.scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
        hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        hdrSkybox.material = hdrSkyboxMaterial;
        scene.environmentTexture = hdrTexture;
        return hdrTexture
    }
    /**
     * 设置场景DDS材质
     * @param {*} path dds文件路径
     * @returns 
     */
    createDDS(path) {
        const ddsTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData(path,this.scene);
        ddsTexture.gammaSpace = false;
        this.scene.environmentTexture = ddsTexture;
        this.scene.createDefaultSkybox(this.scene.environmentTexture);
        return ddsTexture
    }/**
     * 设置全景图像
     * @param {*} path 360图片路径
     * @returns 
     */
    photo(path) {
        const PhotoDome = new BABYLON.PhotoDome("testdome",path,
            {resolution: 32,size: 2000},this.scene);
        PhotoDome.imageMode = BABYLON.PhotoDome.MODE_SIDEBYSIDE;
        return PhotoDome
    }
    /**
     * 设置全景视频
     * @param {*} path 全景视频路径
     * @returns 
     */
    video(path) {
        const VideoDome = new BABYLON.VideoDome( "videoDome",[...path],{resolution: 32, clickToPlay: true},this.scene);
        return VideoDome
    }
    // ---------------------------------------------------------------------模型
    /**
     * 模型加载
     * @param {} path 模型路径
     * @returns 
     */
    loadGltf(path) {
        return new Promise((resolve) => {
            let meshList = []
            BABYLON.SceneLoader.ImportMesh("", path, "", this.scene, function (meshes) {
                meshList = meshes
                resolve(meshList)
            })
        })
    }
    /**
     * 模型绑定事件
     * @param {*} meshList 
     */
    actionManger(meshList) {
        meshList.forEach(mesh => {
            mesh['actionManager'] = new BABYLON.ActionManager(this.scene);
            mesh.actionManager.registerAction(
                new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnDoublePickTrigger, 
                mesh, "scaling", new BABYLON.Vector3(1, 1, 1), 150));
            mesh.actionManager.registerAction(
                new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnLeftPickTrigger,
                mesh, "scaling", new BABYLON.Vector3(1.05, 1.05, 1.05), 150));
        })
    }
    createGUI() {
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

}
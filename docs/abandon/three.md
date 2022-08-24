# three

>  [three 3D](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)渲染框架

## 创建场景

```javascript
const scene = new THREE.Scene()
```

## 透视相机

```javascript
const camera = new THREE.PerspectiveCamera(
  15, window.innerWidth / window.innerHeight,0.1,1000
)
camera.position.set(10,5,10);
```

## 控制器

```javascript
controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = false;
controls.minDistance = 1;
```

渲染函数

```javascript
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const renderer = new THREE.WebGL1Renderer({antialias: true}) // 抗锯齿
renderer.shadowMap.enabled = true; // 开启光影
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
this.$refs.canvasDom.appendChild(renderer.domElement);
const render = () => {
  renderer.render(scene, camera);
  controls && controls.update();
  requestAnimationFrame(render);
}
```

## 平行光

```javascript
const light = new THREE.DirectionalLight( 0xffffff, 1, 90, 2 );
bulbLight.position.set(10,5,10);
bulbLight.castShadow = true; // 开启光影效果
bulbLight.intensity = 0.3； // 亮度
scene.add(light)
```

## 材质

```javascript
let material = new THREE.MeshStandardMaterial({
  roughness: 0.8, // 粗糙度
  color: 0xffffff, // 颜色
  metalness: 0.2, // 金属度
  bumpScale: 0.0005 // 缩放大小
})
```

## 贴图

```javascript
const textureLoader = new THREE.TextureLoader()
textureLoader.load("textures/diffuse.jpg", function(map) {})
```

## 加载模型

```javascript
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const loader = new GLTFLoader();
loader.load('./model.gltf', (mesh) => {
  const m = mesh.scene
  scene.add(m)
})
```

## 点击选择

```javascript
onMouseClick(event) {
  if (event.button != 0) return;
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, this.camera);
  const intersected = raycaster.intersectObjects(this.scene.children, false);
  if (intersected.length) {
    const found = intersected[0];
    console.log(found.object)
  }
}
```


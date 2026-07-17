// assets/js/three-sphere.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Geometry & Material
    const geometry = new THREE.IcosahedronGeometry(1, 4); // High detail for wireframe
    
    // Create a custom material that looks like the React Three Fiber DistortMaterial
    const material = new THREE.MeshStandardMaterial({
        color: 0x0A0F1A,
        emissive: 0x00F0FF,
        emissiveIntensity: 0.3,
        wireframe: true,
        roughness: 0.2,
        metalness: 0.8,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        // Rotate sphere
        sphere.rotation.x = elapsedTime * 0.2;
        sphere.rotation.y = elapsedTime * 0.3;
        
        // Slight pulsing effect by scaling
        const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
        sphere.scale.set(scale, scale, scale);

        renderer.render(scene, camera);
    }
    
    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});

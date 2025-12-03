// Basic Three.js 3D wine bottle setup with scroll tilt & pour animation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('wine-canvas-container');
    if (!container || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.6, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 0.8);
    scene.add(hemi);

    const spot = new THREE.SpotLight(0xffffff, 1.1, 15, Math.PI / 6, 0.25, 1.5);
    spot.position.set(2, 4, 3);
    scene.add(spot);

    // Simple bottle geometry (replace with GLB model later)
    const bottleGroup = new THREE.Group();

    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x330b0b,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.7,
        transparent: true,
        opacity: 0.98,
        thickness: 0.4
    });

    const bodyGeo = new THREE.CylinderGeometry(0.35, 0.4, 2.2, 48);
    const neckGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.7, 32);
    const topGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.25, 32);

    const body = new THREE.Mesh(bodyGeo, glassMat);
    const neck = new THREE.Mesh(neckGeo, glassMat);
    const top = new THREE.Mesh(topGeo, new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.3 }));

    body.position.y = 0;
    neck.position.y = 1.5;
    top.position.y = 1.95;

    bottleGroup.add(body, neck, top);
    scene.add(bottleGroup);

    // Glass placeholder (for pour effect later)
    const glassGeo = new THREE.CylinderGeometry(0.4, 0.45, 0.1, 32);
    const glassMatBase = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.2 });
    const glassBase = new THREE.Mesh(glassGeo, glassMatBase);
    glassBase.position.set(0.9, -1.1, 0);
    scene.add(glassBase);

    // Animation
    let targetTilt = 0;
    let currentTilt = 0;

    function onScroll() {
        const maxScroll = window.innerHeight * 1.5;
        const progress = Math.min(window.scrollY / maxScroll, 1);
        targetTilt = -Math.PI * 0.5 * progress; // tilt up to ~ -90deg
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    function onResize() {
        const { clientWidth, clientHeight } = container;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
    }

    window.addEventListener('resize', onResize);

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        const t = performance.now() * 0.00015;
        // subtle idle rotation
        bottleGroup.rotation.y = Math.sin(t) * 0.3;

        // interpolate tilt
        currentTilt += (targetTilt - currentTilt) * 0.08;
        bottleGroup.rotation.z = currentTilt;

        renderer.render(scene, camera);
    }

    animate();
});

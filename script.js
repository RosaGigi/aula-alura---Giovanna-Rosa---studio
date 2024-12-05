// Efeito de corações flutuando ao passar o mouse sobre o GIF
const gifElement = document.querySelector('.header-gif');

gifElement.addEventListener('mouseover', () => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = `${Math.random() * 50 + 25}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
    gifElement.appendChild(heart);

    // Remove o coração após a animação
    setTimeout(() => heart.remove(), 3000);
});

// Adiciona estilos para o coração flutuante no JS
const style = document.createElement('style');
style.innerHTML = `
    .floating-heart {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background: url('https://i.imgur.com/ylP4RoZ.png') no-repeat center center;
        background-size: contain;
        opacity: 1;
        animation: floatHearts 2s ease-in-out forwards;
    }
`;
document.head.appendChild(style);

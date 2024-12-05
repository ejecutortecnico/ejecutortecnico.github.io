let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

function irpagina(pagina){
    window.location.href = pagina;
}

function cambiarTexto() {
    const titulo = document.getElementById('miTitulo');
    titulo.textContent = 'Título Cambiado con JavaScript';
}

function openModal(library) {
    const modal = document.getElementById("myModal");
    const modalCode = document.getElementById("modalCode");
    const codeExamples = {
        numpy: `import numpy as np\n\n# Crear una matriz de 2x3\nmatriz = np.array([[1, 2, 3], [4, 5, 6]])\nprint(matriz)`,
        pandas: `import pandas as pd\n\n# Crear un DataFrame\ndata = {'Nombre': ['Juan', 'Ana', 'Pedro'],\n        'Edad': [28, 24, 35]}\ndf = pd.DataFrame(data)\nprint(df)`,
        matplotlib: `import matplotlib.pyplot as plt\n\n# Crear un gráfico simple\nx = [1, 2, 3, 4, 5]\ny = [2, 3, 5, 7, 11]\nplt.plot(x, y)\nplt.title('Gráfico de Ejemplo')\nplt.xlabel('Eje X')\nplt.ylabel('Eje Y')\nplt.show()`,
        seaborn: `import seaborn as sns\nimport matplotlib.pyplot as plt\n\n# Crear un gráfico de dispersión\ntips = sns.load_dataset('tips')\nsns.scatterplot(data=tips, x='total_bill', y='tip', hue='day')\nplt.title('Propinas por Cuenta Total')\nplt.show()`,
        flask: `from flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return "¡Hola, Flask!"\n\nif __name__ == '__main__':\n    app.run(debug=True)`,
        django: `# Ejemplo de configuración de un proyecto Django\ndjango-admin startproject mi_proyecto`,
        sklearn: `from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Datos de ejemplo\nX = np.array([[1], [2], [3], [4]])\ny = np.array([2, 3, 5, 7])\n\n# Crear y entrenar el modelo\nmodelo = LinearRegression()\nmodelo.fit(X, y)\nprint(modelo.predict([[5]]))  # Predecir el valor para X=5`,
        tensorflow: `import tensorflow as tf\n\n# Crear un modelo simple\nmodelo = tf.keras.Sequential([\n    tf.keras.layers.Dense(10, activation='relu', input_shape=(32,)),\n    tf.keras.layers.Dense(1)\n])\nmodelo.compile(optimizer='adam', loss='mean_squared_error')`,
        pytorch: `import torch\nimport torch.nn as nn\n\n# Definir una red neuronal simple\nclass RedNeuronal(nn.Module):\n    def __init__(self):\n        super(RedNeuronal, self).__init__()\n        self.capa1 = nn.Linear(2, 2)\n\n    def forward(self, x):\n        return self.capa1(x)\n\n# Crear una instancia de la red y pasar un tensor\nmodelo = RedNeuronal()\nentrada = torch.tensor([[1.0, 2.0]])\nsalida = modelo(entrada)\nprint(salida)`,
        pygame: `import pygame\n# Inicializar Pygame\npygame.init()\n# Configuración de la ventana\nscreen = pygame.display.set_mode((800, 600))\npygame.display.set_caption("Mi primer ventana en Pygame")\n# Loop principal\nrunning = True\nwhile running:\nfor event in pygame.event.get():\n    if event.type == pygame.QUIT:\n        running = False\n# Rellenar la pantalla con color azul\nscreen.fill((0, 0, 255))\npygame.display.flip()\npygame.quit()`
    };
    modalCode.textContent = codeExamples[library];
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
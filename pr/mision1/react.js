<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../css/estilos.css">
</head>
    <body>
        <div class="container">
    <div class="slide">
  <h2>¿Qué es React?</h2>
  <p>React es una biblioteca de JavaScript para crear interfaces de usuario usando componentes reutilizables.</p>
</div>

<div class="slide">
  <h2>¿Cómo se ve un componente en React?</h2>
  <p>Un componente se parece a una función que devuelve HTML:</p>
  <pre><code>function Saludo() {
  return &lt;h1&gt;Hola, mundo&lt;/h1&gt;;
}</code></pre>
</div>

<div class="slide">
  <h2>¿Qué es JSX?</h2>
  <p>JSX es una sintaxis parecida a HTML que se escribe dentro de JavaScript:</p>
  <pre><code>const elemento = &lt;h2&gt;Esto es JSX&lt;/h2&gt;;</code></pre>
</div>

<div class="slide">
  <h2>¿Cómo se ve una app básica en React?</h2>
  <pre><code>&lt;div id="root"&gt;&lt;/div&gt;

&lt;script type="text/babel"&gt;
  function App() {
    return &lt;h1&gt;Hola desde React&lt;/h1&gt;;
  }

  ReactDOM.createRoot(document.getElementById('root')).render(&lt;App /&gt;);
&lt;/script&gt;</code></pre>
</div>

<div class="slide">
  <h2>Uso de props (propiedades)</h2>
  <p>Los props permiten pasar información a los componentes:</p>
  <pre><code>function Saludo(props) {
  return &lt;p&gt;Hola, {props.nombre}&lt;/p&gt;;
}

&lt;Saludo nombre="Ana" /&gt;</code></pre>
</div>

<div class="slide">
  <h2>Componentes como etiquetas</h2>
  <p>Los componentes pueden usarse como si fueran etiquetas HTML:</p>
  <pre><code>&lt;Header /&gt;
&lt;Contenido /&gt;
&lt;Footer /&gt;</code></pre>
</div>

<div class="slide">
  <h2>Composición de componentes</h2>
  <p>Una aplicación puede estar formada por muchos componentes:</p>
  <pre><code>function App() {
  return (
    &lt;div&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  );
}</code></pre>
</div>

<div class="slide">
  <h2>HTML vs JSX</h2>
  <p>JSX se parece al HTML, pero tiene algunas diferencias:</p>
  <ul>
    <li>Usa <code>className</code> en lugar de <code>class</code></li>
    <li>Los atributos deben estar en camelCase</li>
    <li>Debe haber solo un elemento padre</li>
  </ul>
  <pre><code>&lt;div className="contenedor"&gt;
  &lt;h1&gt;Hola&lt;/h1&gt;
&lt;/div&gt;</code></pre>
</div>

<div class="slide">
  <h2>¿Cómo se estructura un proyecto?</h2>
  <p>La estructura básica de carpetas es:</p>
  <pre><code>mi-proyecto/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── componentes/
└── package.json</code></pre>
</div>

<div class="slide">
  <h2>¿Qué es el Virtual DOM?</h2>
  <p>React crea una copia virtual del DOM para hacer actualizaciones rápidas y eficientes.</p>
  <img src="https://reactjs.org/logo-og.png" alt="React logo" width="200">
</div>


        <div class="nav">
            <button onclick="prevSlide()">Anterior</button>
            <button onclick="nextSlide()">Siguiente</button>
        </div>
    </div>
    <script src="../../js/slide.js"></script>
    </body>
</html>

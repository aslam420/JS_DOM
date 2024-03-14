1) What will be the output ?

<button onclick="console.log('One')" onclick="console.log('Two')">
  Click Me
</button>

A: One  [Answer]
B: Two
C: One Two
D: Two One

2) What will be the output ?

<button id="button" onclick="console.log('One')">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.onclick = function() {
    console.log('Two');
  }
</script>

A: One
B: Two  [Answer]
C: One Two
D: Two One

3) What will be the output ?

<button id="button" onclick="console.log('One')">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    console.log('Two');
  });
</script>

A: One
B: Two
C: One Two  [Answer]
D: Two One

4) What will be the output ?

<button id="button" onclick="console.log('One')">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    console.log('Two');
  });

  button.onclick = function() {
    console.log('Three');
  }
</script>

A: One Two
B: Two Three
C: Three Two    [Answer]
D: One Two Three

5) What will be the output ?

<button id="button">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    console.log('One');
  });

  button.onclick = function() {
    console.log('Two');
  }
</script>

A: One
B: Two
C: One Two  [Answer]
D: Two One

6) What will be the output ?

<button id="button">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    console.log('One');
  });

  button.onclick = function() {
    console.log('Two');
  }

  button.setAttribute('onclick', "console.log('Three')");
</script>

A: One Two Three
B: One Two
C: One Three    [Answer]
D: Three Two One

7) What will be the output ?

<button id="button" onclick="console.log('One')">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.addEventListener('click', function() {
    console.log('Two');
  });

  button.addEventListener('click', function() {
    console.log('Three');
  }, false);
</script>

A: One Two
B: One Three
C: One Two Three    [Answer]
D: Three One Two

8) What will be the output ?

<button id="button" onclick="console.log('One')">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  function clickHandler() {
  	console.log('Two');
  }

  button.addEventListener('click', clickHandler);

  button.addEventListener('click', clickHandler, false);
</script>

A: One Two  [Answer]
B: One Three
C: One Two Three
D: Three One Two

9) What will be the output ?

<button id="button" style="display: none;">
  Click Me
</button>

<script>
  const button = document.getElementById('button');

  button.onclick = function() {
    console.log('One');
  }

  button.addEventListener('click', function() {
    console.log('Two');
  });

  setTimeout(function(){
    button.click();
  }, 1000);
</script>

A: One Two  [Answer]
B: One Three
C: One Two Three
D: Three One Two

10) What will be the output ?

<p onclick="console.log('One')">
  <div onclick="console.log('Two')">
    <h1 onclick="console.log('Three')">
      Click Me
    </h1>
  </div>
</p>

A: One
B: Three
C: One Two Three
D: Three Two    [Answer]
E: Three Two one

11) What will be the output ?

<div onclick="console.log('One')">
  <div onclick="event.stopPropagation();console.log('Two');">
    <div onclick="console.log('Three')">
      Click Me
    </div>
  </div>
</div>

A: One
B: Three
C: One Two Three
D: Three Two    [Answer]
E: Three Two one

12) What will be the output ?

<div onclick="console.log('One')">
  <div onclick="return false;console.log('Two');">
    <div onclick="console.log('Three')">
      Click Me
    </div>
  </div>
</div>

A: One
B: Three
C: One Two Three
D: Three Two
E: Three Two one
[None of these]


13) What will be the output ?

<div>
  <div class="number-box">1</div>
  <div class="number-box">2</div>
  <div class="number-box">3</div>
  <div class="number-box">4</div>
</div>
  <script>
  const arr = document.querySelectorAll('.number-box');
  console.log(arr);
</script>

A: array of length 4
B: undefined
C: NodeList of length 4
D: empty array          [Answer]
E: empty NodeList